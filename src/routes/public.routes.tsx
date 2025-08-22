import LoginPage from "@/pages/login";
import type {RouteObject} from "react-router-dom";
import GithubCallback from "@/pages/github-callback.tsx";

export const publicRoutes: RouteObject[] = [
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: "/auth/github/callback",
        element: <GithubCallback />
    }
]