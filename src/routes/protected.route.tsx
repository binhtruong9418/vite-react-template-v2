import HomePage from "../pages/home/HomePage.tsx";
import type {RouteObject} from "react-router-dom";

export const protectedRoutes: RouteObject[] = [
    {
        path: "/",
        element: <HomePage />,
    }
]