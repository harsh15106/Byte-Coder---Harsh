import { createContext, useContext, useMemo, useReducer } from "react";
import { seedProject } from "./seedProject";

const ProjectContext = createContext(null);

const cloneSeedProject = () => {
  const project = JSON.parse(JSON.stringify(seedProject));
  project.meta.startedAt = new Date().toISOString();
  return project;
};

const initialState = {
  activeView: "dashboard",
  project: cloneSeedProject(),
  ui: {
    isAnalyzing: false,
  },
};

const projectReducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_VIEW":
      return {
        ...state,
        activeView: action.payload,
      };
    case "CREATE_PROJECT":
      return {
        ...state,
        activeView: "dashboard",
        project: {
          ...cloneSeedProject(),
          meta: {
            ...cloneSeedProject().meta,
            ...action.payload,
            startedAt: new Date().toISOString(),
          },
          ideaAnalysis: {
            ...state.project.ideaAnalysis,
            status: "loading",
          },
        },
        ui: {
          ...state.ui,
          isAnalyzing: true,
        },
      };
    case "SET_ANALYSIS_LOADING":
      return {
        ...state,
        ui: {
          ...state.ui,
          isAnalyzing: action.payload,
        },
        project: {
          ...state.project,
          ideaAnalysis: {
            ...state.project.ideaAnalysis,
            status: action.payload ? "loading" : "ready",
          },
        },
      };
    case "UPDATE_IDEA_ANALYSIS":
      return {
        ...state,
        project: {
          ...state.project,
          ideaAnalysis: {
            ...state.project.ideaAnalysis,
            ...action.payload,
            status: "ready",
          },
        },
        ui: {
          ...state.ui,
          isAnalyzing: false,
        },
      };
    case "UPDATE_ROADMAP_VIEW":
      return {
        ...state,
        project: {
          ...state.project,
          roadmap: {
            ...state.project.roadmap,
            viewMode: action.payload,
          },
        },
      };
    case "UPDATE_ROADMAP_PHASES":
      return {
        ...state,
        project: {
          ...state.project,
          roadmap: {
            ...state.project.roadmap,
            phases: action.payload,
          },
        },
      };
    case "ADD_ROADMAP_PHASE":
      return {
        ...state,
        project: {
          ...state.project,
          roadmap: {
            ...state.project.roadmap,
            phases: [...state.project.roadmap.phases, action.payload],
          },
        },
      };
    case "DELETE_ROADMAP_PHASE":
      return {
        ...state,
        project: {
          ...state.project,
          roadmap: {
            ...state.project.roadmap,
            phases: state.project.roadmap.phases.filter(
              (p) => p.id !== action.payload,
            ),
          },
        },
      };
    case "ADD_ROADMAP_TASK":
      return {
        ...state,
        project: {
          ...state.project,
          roadmap: {
            ...state.project.roadmap,
            phases: state.project.roadmap.phases.map((phase) =>
              phase.id === action.payload.phaseId
                ? {
                    ...phase,
                    tasks: [...(phase.tasks || []), action.payload.taskTitle],
                  }
                : phase,
            ),
          },
        },
      };
    case "SYNC_ROADMAP_TO_TASKS": {
      const newItems = { ...state.project.tasks.items };
      const newTodo = [...state.project.tasks.columns.todo];

      let index = Object.keys(newItems).length + 1;
      state.project.roadmap.phases.forEach((phase) => {
        (phase.tasks || []).forEach((taskTitle) => {
          const exists = Object.values(newItems).some(
            (item) => item.title === taskTitle,
          );
          if (!exists) {
            const taskId = `task-rm-${index++}`;
            newItems[taskId] = {
              id: taskId,
              title: taskTitle,
              assignee: "AI Team",
              priority: phase.priority || "Medium",
              estimateHours: Math.max(
                1,
                Math.round(phase.estimateHours / (phase.tasks.length || 1)),
              ),
              blocked: false,
            };
            newTodo.push(taskId);
          }
        });
      });

      return {
        ...state,
        project: {
          ...state.project,
          tasks: {
            ...state.project.tasks,
            columns: {
              ...state.project.tasks.columns,
              todo: newTodo,
            },
            items: newItems,
          },
        },
      };
    }
    case "ADD_RISK":
      return {
        ...state,
        project: {
          ...state.project,
          risks: [action.payload, ...state.project.risks],
        },
      };
    case "TOGGLE_RISK":
      return {
        ...state,
        project: {
          ...state.project,
          risks: state.project.risks.map((risk) =>
            risk.id === action.payload
              ? { ...risk, resolved: !risk.resolved }
              : risk,
          ),
        },
      };
    default:
      return state;
  }
};

export const deriveProjectStats = (project) => {
  const taskItems = Object.values(project.tasks.items);
  const totalTasks = taskItems.length;
  const completedTasks = project.tasks.columns.completed.length;
  const completionPercent = totalTasks
    ? Math.round((completedTasks / totalTasks) * 100)
    : 0;

  const startedAt = new Date(project.meta.startedAt).getTime();
  const elapsedHours = Math.max(0, (Date.now() - startedAt) / 36e5);
  const hoursRemaining = Math.max(
    0,
    Math.ceil(project.meta.durationHours - elapsedHours),
  );
  const remainingEstimateHours = [
    ...project.tasks.columns.todo,
    ...project.tasks.columns.inProgress,
  ]
    .map((taskId) => project.tasks.items[taskId]?.estimateHours ?? 0)
    .reduce((sum, hours) => sum + hours, 0);

  return {
    totalTasks,
    completedTasks,
    completionPercent,
    hoursRemaining,
    remainingEstimateHours,
    behindSchedule:
      remainingEstimateHours > hoursRemaining || completionPercent < 35,
  };
};

export const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectReducer, initialState);

  const value = useMemo(
    () => ({
      ...state,
      stats: deriveProjectStats(state.project),
      dispatch,
    }),
    [state],
  );

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};

export const useProject = () => {
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error("useProject must be used inside a ProjectProvider");
  }

  return context;
};
