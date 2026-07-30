import AppRoutes from "./routes/AppRoutes";
import { ProjectProvider } from "./state/ProjectContext";

export default function App() {
  return (
    <ProjectProvider>
      <AppRoutes />
    </ProjectProvider>
  );
}