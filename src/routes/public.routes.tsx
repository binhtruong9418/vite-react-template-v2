import LoginPage from "@/pages/login";
import type {RouteObject} from "react-router-dom";

export const publicRoutes: RouteObject[] = [
    {
        path: '/login',
        element: <LoginPage />
    }
]