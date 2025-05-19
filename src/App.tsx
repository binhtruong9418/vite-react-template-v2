import QueryProvider from "@/providers/QueryProvider.tsx";
import UpdateProvider from "@/providers/UpdateProvider.tsx";
import {AppRoutes} from "@/routes/AppRoutes.tsx";

function App() {

    return (
        <QueryProvider>
            <UpdateProvider>
                <AppRoutes/>
            </UpdateProvider>
        </QueryProvider>
    )
}

export default App
