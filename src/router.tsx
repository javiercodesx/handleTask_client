import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import DashboardPage from "@/pages/DashboardPage";
import CreateProjectPage from "./pages/projects/CreateProjectPage";
import EditProjectPage from "./pages/projects/EditProjectPage";
import ProjectDetailsPage from "./pages/projects/ProjectDetailsPage";
import AuthLayout from "./layouts/AuthLayout";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ConfirmAccountPage from "./pages/auth/ConfirmAccountPage";
import RequestNewCodePage from "./pages/auth/RequestNewCodePage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import NewPassowordPage from "./pages/auth/NewPasswordPage";
import ProjectTeamPage from "./pages/projects/ProjectTeamPage";

export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={<AppLayout />}
                >
                    <Route path="/" element={<DashboardPage />} index />
                    <Route path="/projects/create" element={<CreateProjectPage />} />
                    <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
                    <Route path="/projects/:projectId/edit" element={<EditProjectPage />} />
                    <Route path="/projects/:projectId/team" element={<ProjectTeamPage />} />
                </Route>

                <Route
                    element={<AuthLayout />}
                >
                    <Route path="/auth/login" element={<LoginPage />} />
                    <Route path="/auth/register" element={<RegisterPage />} />
                    <Route path="/auth/confirm-account" element={<ConfirmAccountPage />} />
                    <Route path="/auth/request-code" element={<RequestNewCodePage />} />
                    <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
                    <Route path="/auth/new-password" element={<NewPassowordPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}