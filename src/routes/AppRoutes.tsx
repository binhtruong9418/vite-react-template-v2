import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { publicRoutes } from "@/routes/public.routes";
import {protectedRoutes} from "@/routes/protected.route.tsx";
import {AuthGuard} from "@/routes/middleware/AuthGuard.tsx";
import {NoAuthGuard} from "@/routes/middleware/NoAuthGuard.tsx";
import PublicLayout from "@/components/layout/PublicLayout.tsx";
import {Suspense} from "react";
import DefaultLayout from "@/components/layout/DefaultLayout.tsx";
import NotFoundPage from "@/pages/not-found";

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