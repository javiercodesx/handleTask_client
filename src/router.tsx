import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import DashboardPage from "@/pages/DashboardPage";

export const Router = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={ <AppLayout/> }
                >
                    <Route path="/" element={ <DashboardPage/> } index/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}