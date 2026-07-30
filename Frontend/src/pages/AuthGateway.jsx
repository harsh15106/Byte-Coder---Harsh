import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProjectSelectionModal from "../components/auth/ProjectSelectionModal";
import NewProjectModal from "../components/project/NewProjectModal";
import ContinueProjectModal from "../components/project/ContinueProjectModal";

export default function AuthGateway() {
    const navigate = useNavigate();

    const [showSelection, setShowSelection] = useState(true);
    const [showNewProject, setShowNewProject] = useState(false);
    const [showContinue, setShowContinue] = useState(false);

    const handleNewProject = () => {
        setShowSelection(false);
        setShowNewProject(true);
    };

    const handleContinueProject = () => {
        setShowSelection(false);
        setShowContinue(true);
    };

    const createProject = (project) => {
        console.log(project);

        // TODO:
        // Save to Firebase / Supabase

        navigate("/dashboard");
    };

    const openProject = (project) => {
        console.log(project);

        // TODO:
        // Load project

        navigate("/dashboard");
    };

    return (
        <>
            <ProjectSelectionModal
                isOpen={showSelection}
                onNewProject={handleNewProject}
                onContinueProject={handleContinueProject}
            />

            <NewProjectModal
                isOpen={showNewProject}
                onClose={() => {
                    setShowNewProject(false);
                    setShowSelection(true);
                }}
                onCreate={createProject}
            />

            <ContinueProjectModal
                isOpen={showContinue}
                onClose={() => {
                    setShowContinue(false);
                    setShowSelection(true);
                }}
                onSelect={openProject}
            />
        </>
    );
}