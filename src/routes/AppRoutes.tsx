import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { publicRoutes } from "./public.routes";
import DefaultLayout from "../components/layout/DefaultLayout.tsx";
import {protectedRoutes} from "./protected.route.tsx";
import {AuthGuard} from "./middleware/AuthGuard.tsx";
import {NoAuthGuard} from "./middleware/NoAuthGuard.tsx";
import PublicLayout from "../components/layout/PublicLayout.tsx";
import NotFoundPage from "../pages/errors/NotFoundPage.tsx";
import {Suspense} from "react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: protectedRoutes.map((route) => ({
            ...route,
            element: (
                <AuthGuard>
                    {route.element}
                </AuthGuard>
            )
        }))
    },
    {
        path: "/",
        element: <PublicLayout />,
        children: publicRoutes.map((route) => ({
            ...route,
            element: (
                <NoAuthGuard>
                    {route.element}
                </NoAuthGuard>
            )
        }))
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
]);

export const AppRoutes = () => {
    return (
        <Suspense fallback={'Loading...'}>
            <RouterProvider router={router} />
        </Suspense>
    )
}