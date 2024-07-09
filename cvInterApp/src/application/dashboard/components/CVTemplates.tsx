import ProgressNav from "./ProgressNav"
import { Outlet, useLocation } from "react-router-dom"
// import CVPreview from "./views/CVPreview";
import Template4 from "./templates/Template4";
import { useCvStore } from "../../zustand/store/CvStore";


const CVTemplates = () => {
    const { name, lastName, bio, titulo, redes, experiencia, education, techSkills, softSkills, idiomas, certificados, location } = useCvStore();
    const educationUser = [
        {
            instituto: 'Universidad Increible',
            carrera: 'Lic. en Administracion',
            nivel: 'Terciario',
            anoStart: 2015,
            anoEnd: 2018
        },
        {
            instituto: 'Colegio Secundario Fauget',
            carrera: 'Bachillier en Economia',
            nivel: 'Tecnico',
            anoStart: 2018,
            anoEnd: 2022
        }
    ]
    const experienciaUser = [
        {
            profesion: 'Asistencia de Gerencia',
            empresa: 'Empresa Increible',
            dateStart: 'Agosto 2019',
            dateEnd: 'Presente',
            rol: 'Asistencia administrativa integral a Gerencia.Seguimiento de Agenda.Revision de idoneidad de documentos y control de archivos. Creacion de Presentaciones mensuales.'
        },
        {
            profesion: 'Asistencia de Administrativo',
            empresa: 'Empresa Fauget',
            dateStart: 'Enero 2016',
            dateEnd: 'Julio 2017',
            rol: 'Recepcion de Clientes, Manejo de Conmutador.Asistencia a mesa de entradas. Organizacion de libros de entrada y salidas.Mantenimiento de archivos.'
        },
        {
            profesion: 'Pasante Administrativo',
            empresa: 'Empresa Fauget',
            dateStart: 'Enero 2016',
            dateEnd: 'Julio 2017',
            rol: 'Recepcion de Clientes, Manejo de Conmutador.Asistencia a mesa de entradas. Organizacion de libros de entrada y salidas.'
        }
    ]
    const redesUser = [
        { red: 'github', user: 'OliviaWilson' },
        { red: 'linkedin', user: 'OliviaWilson123' },
        { red: 'portfolio', user: 'PortfolioOlivia' },
        { red: 'behance', user: 'BehanceOlivia123' }
    ]
    const techSkillsUser = [
        { skill: 'javascript', nivel: 'intermedio' },
        { skill: 'python', nivel: 'basico' },
        { skill: 'react', nivel: 'avanzado' },
    ]
    const idiomasUser = [
        { languaje: 'espanol', nivel: 'nativo' },
        { languaje: 'ingles', nivel: 'basico' }
    ]
    const certificadosUser = [
        {
            skill: 'JavaScript Developer',
            entidadEmisora: 'Udemy',
            ano: 2020
        },
        {
            skill: 'Python Developer',
            entidadEmisora: 'Platzi',
            ano: 2022
        },
    ]
    const locationUser = [
        { red: 'telephone', user: '1257326' },
        { red: 'email', user: 'OliviaWilson@gmail.com' },
        { red: 'address', user: 'Calle Cualquiera 123, Cualquier Lugar' }
    ]
    const softSkillsUser = ['liderazgo', 'Iniciativa', 'Inteligencia Emocional', 'Comunicacion'];
    const bioUser = "Soy una persona proactiva, organizada y responsable. Disfruto trabajar en equipo y aportar ideas nuevas. Busco un puesto desafiante y dinámico donde pueda continuar aprendiendo y sumando experiencia."

    const locationns = useLocation()
    if (locationns.pathname === "/CVTemplates") {
        return (
            <div className="flex flex-col h-screen overflow-hidden">
                <ProgressNav />
                <Outlet />
            </div>
        );
    }
    else {
        return (
            <>
                <ProgressNav />
                <div className="flex">
                    <div className="w-1/2 p-4">
                        <div className="mb-4">
                            <Outlet />
                        </div>
                    </div>
                    <div className="w-1/2 p-4">
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold">CVPREVIEW HERE</h2>
                        </div>
                        <div className="overflow-hidden overflow-y-auto" style={{ maxHeight: '38rem' }}>
                            <Template4
                                name={name || `Olivia`}
                                lastName={lastName || `Wilson`}
                                titulo={titulo || `Lic en Administracion`}
                                bio={bio || bioUser}
                                redes={redes || redesUser}
                                education={education || educationUser}
                                location={location || locationUser}
                                experiencia={experiencia || experienciaUser}
                                techSkills={techSkills || techSkillsUser}
                                idiomas={idiomas ||idiomasUser}
                                certificados={certificados || certificadosUser}
                                softSkills={softSkills || softSkillsUser}
                            />
                        </div>
                    </div>
                </div>
            </>


        )
    }


};

export default CVTemplates