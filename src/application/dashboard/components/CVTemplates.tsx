import ProgressNav from "./ProgressNav"
import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../../pages/NavBar";
import CVPreview from "./views/CVPreview";
import NoDisponible from '../../../assets/no-disponible.webp';

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
                <section className="hidden md:flex md:flex-col lg:flex-row lg:m-auto lg:max-w-7xl gap-10 my-10 md:mx-5 lg:mt-5">
                    <article className="md:w-full lg:w-1/2">
                        <div>
                            <h2 className="text-lg text-zinc-800">{locationns.pathname === "/CVTemplates/upload" ? 'Descagar tu CV' : 'Carga tu Informacion'}</h2>
                            <Outlet />
                        </div>
                    </article>
                    <div className="md:w-full lg:w-1/2 outline-slate-600 ">
                        <CVPreview />
                    </div>
                </section>
                <section className='md:hidden flex flex-col items-center justify-center font-lato'>
                    <img className='h-24 w-24' src={NoDisponible} alt='noDisponible' />
                    <h1 className='font-bold text-xl text-gray-700 text-center'>No disponible</h1>
                    <p className='text-gray-700 text-center'>Esta pagina no esta disponible para resoluciones de pantalla tablet y mobile</p>
                </section>
            </>
        )
    }


};

export default CVTemplates