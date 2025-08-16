import { Navbar } from "@/components/client/Navbar";
import { Footer } from "@/components/common/Footer";
import { Outlet } from "react-router-dom";

function ClientHome() {
    return (
        <>
            <Navbar/>
            <main>
                <Outlet />
            </main>

            <Footer/>


        </>
    );
}

export default ClientHome;
