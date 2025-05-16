import type {RouteObject} from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage.tsx";

export const publicRoutes: RouteObject[] = [
    {
        path: '/login',
        element: <LoginPage />
    }
]