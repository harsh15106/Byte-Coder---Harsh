import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Workspace from "../pages/Workspace";
import NotFound from "../pages/NotFound";
import AuthGateway from "../pages/AuthGateway";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export default function AppRoutes() {
    return (
        <Routes>

            {/* Landing */}
            <Route path="/" element={<LandingPage />} />

            {/* Authentication */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/auth" element={<AuthGateway />} />

            {/* Workspace */}
            <Route path="/workspace" element={<Workspace />} />

            {/* Optional: Redirect old dashboard route */}
            <Route path="/dashboard" element={<Workspace />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />

        </Routes>
    );
}