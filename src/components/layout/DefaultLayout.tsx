import {Outlet} from "react-router-dom";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";

export default function DefaultLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow p-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}