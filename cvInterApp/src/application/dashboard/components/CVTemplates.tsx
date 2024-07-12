import ProgressNav from "./ProgressNav"
import { Outlet, useLocation } from "react-router-dom"
import { useCvStore } from "../../zustand/store/CvStore";
import './CVTemplates.css';
import Template4 from "./templates/Template4";
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const CVTemplates = () => {
    const cvRef = useRef<HTMLDivElement>(null);

    const handleDownloadPdf = async () => {
        const cvElement = cvRef.current!;
        const canvas = await html2canvas(cvElement, { scale: 5 });
        const data = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('CVinter-curriculum.pdf');
    };
    const { name, lastName, bio, titulo, experiencia, education, techSkills, softSkills, idiomas, certificados, personaInfo } = useCvStore();
    const cvArrayData = {
        educationUser: [
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
        ],
        experienciaUser: [
            {
                profesion: 'Asistencia de Gerencia',
                empresa: 'Empresa Increible',
                dateStart: 'Agosto 2019',
                dateEnd: 'Presente',
                descripcion: 'Asistencia administrativa integral a Gerencia.Seguimiento de Agenda.Revision de idoneidad de documentos y control de archivos. Creacion de Presentaciones mensuales.'
            },
            {
                profesion: 'Asistencia de Administrativo',
                empresa: 'Empresa Fauget',
                dateStart: 'Enero 2016',
                dateEnd: 'Julio 2017',
                descripcion: 'Recepcion de Clientes, Manejo de Conmutador.Asistencia a mesa de entradas. Organizacion de libros de entrada y salidas.Mantenimiento de archivos.'
            },
            {
                profesion: 'Pasante Administrativo',
                empresa: 'Empresa Fauget',
                dateStart: 'Enero 2016',
                dateEnd: 'Julio 2017',
                descripcion: 'Recepcion de Clientes, Manejo de Conmutador.Asistencia a mesa de entradas. Organizacion de libros de entrada y salidas.'
            }
        ],
        techSkillsUser: [
            { skill: 'javascript', nivel: 'intermedio' },
            { skill: 'python', nivel: 'basico' },
            { skill: 'react', nivel: 'avanzado' },
        ],
        idiomasUser: [
            { languaje: 'espanol', nivel: 'nativo' },
            { languaje: 'ingles', nivel: 'basico' }
        ],
        certificadosUser: [
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
        ],
        infoUser: [
            { icon: 'github', dato: 'OliviaWilson' },
            { icon: 'linkedin', dato: 'OliviaWilson123' },
            { icon: 'portfolio', dato: 'PortfolioOlivia' },
            { icon: 'behance', dato: 'BehanceOlivia123' },
            { icon: 'email', dato: 'OliviaWilson@gmail.com' },
            { icon: 'telephone', dato: '1257326' },
            { icon: 'address', dato: 'Calle Cualquiera 123, Cualquier Lugar' }
        ],
        softSkillsUser: ['liderazgo', 'Iniciativa', 'Inteligencia Emocional', 'Comunicacion'],
        bioUser: "Soy una persona proactiva, organizada y responsable. Disfruto trabajar en equipo y aportar ideas nuevas. Busco un puesto desafiante y dinámico donde pueda continuar aprendiendo y sumando experiencia."
    }
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
                <div className="flex items-center justify-center">
                    <section className="flex max-w-7xl mt-10 gap-10">
                        <div className="w-1/2">
                            <div className="">
                                <Outlet />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="mb-4">
                            </div>
                            <div ref={cvRef} className="outline outline-1 outline-slate-600/30">
                                <Template4
                                    name={name || `Olivia`}
                                    lastName={lastName || `Wilson`}
                                    titulo={titulo || `Lic en Administracion`}
                                    bio={bio || cvArrayData.bioUser}
                                    education={education || cvArrayData.educationUser}
                                    personaInfo={personaInfo || cvArrayData.infoUser}
                                    experiencia={experiencia || cvArrayData.experienciaUser}
                                    techSkills={techSkills || cvArrayData.techSkillsUser}
                                    idiomas={idiomas || cvArrayData.idiomasUser}
                                    certificados={certificados || cvArrayData.certificadosUser}
                                    softSkills={softSkills || cvArrayData.softSkillsUser}
                                />
                            </div>
                            <button onClick={handleDownloadPdf} className="fixed z-50 right-4 top-1 text-xs rounded-full border border-solid border-zinc-800 bg-stone-200 px-4 py-2 text-slate-900 hover:bg-slate-900 hover:text-stone-200">
                                DESCARGAR CV
                            </button>
                        </div>
                    </section>
                </div>
            </>


        )
    }


};

export default CVTemplates