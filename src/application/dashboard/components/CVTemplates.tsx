import ProgressNav from "./ProgressNav"
import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../../pages/NavBar";
import CVPreview from "./views/CVPreview";

const CVTemplates = () => {
    const locationns = useLocation()
    if (locationns.pathname === "/CVTemplates") {
        return (
            <div className="">
                <Navbar />
                <ProgressNav />
                <Outlet />
            </div>
        );
    }
    else {
        return (
            <>
                <Navbar />
                <ProgressNav />
                <section className="flex m-auto max-w-7xl gap-10 my-10">
                    <article className="w-1/2">
                        <div>
                            <h2 className="text-lg text-zinc-800">{locationns.pathname === "/CVTemplates/upload" ? 'Descagar tu CV' : 'Carga tu Informacion'}</h2>
                            <Outlet />
                        </div>
                    </article>
                    <div className="w-1/2">
                        <CVPreview />
                    </div>
                </section>
            </>
        )
    }


};

export default CVTemplates