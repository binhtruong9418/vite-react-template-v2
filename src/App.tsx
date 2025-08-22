import QueryProvider from "@/providers/QueryProvider.tsx";
import UpdateProvider from "@/providers/UpdateProvider.tsx";
import {AppRoutes} from "@/routes/AppRoutes.tsx";
import {Suspense} from "react";
import {GoogleOAuthProvider} from "@react-oauth/google";

function App() {

    return (
        <QueryProvider>
            <Suspense fallback={'Loading...'}>
                <UpdateProvider>
                    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
                        <AppRoutes/>
                    </GoogleOAuthProvider>
                </UpdateProvider>
            </Suspense>
        </QueryProvider>
    )
}

export default App
