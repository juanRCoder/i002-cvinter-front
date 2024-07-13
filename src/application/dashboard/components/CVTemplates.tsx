import ProgressNav from "./ProgressNav"
import { Outlet, useLocation } from "react-router-dom"
// import { useCvStore } from "../../zustand/store/CvStore";
// import Template4 from "./templates/Template4";
// import { useRef } from 'react';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
import Navbar from "../../pages/NavBar";
import CVPreview from "./views/CVPreview";

const CVTemplates = () => {
    // const cvRef = useRef<HTMLDivElement>(null);

    // const handleDownloadPdf = async () => {
    //     const cvElement = cvRef.current!;
    //     const canvas = await html2canvas(cvElement, { scale: 5 });
    //     const data = canvas.toDataURL('image/png');
    //     const pdf = new jsPDF('p', 'mm', 'a4');
    //     const pdfWidth = pdf.internal.pageSize.getWidth();
    //     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    //     pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    //     pdf.save('CVinter-curriculum.pdf');
    // };
    // const { name, lastName, bio, titulo, experiencia, education, techSkills, softSkills, idiomas, certificados, personaInfo } = useCvStore();
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
                            {/* <div className="mb-4">
                            </div> */}
                            {/* <div ref={cvRef} className="outline outline-1 outline-slate-600/30"> */}
                            {/* <Template4
                                    name={name}
                                    lastName={lastName}
                                    titulo={titulo}
                                    bio={bio}
                                    education={education}
                                    personaInfo={personaInfo}
                                    experiencia={experiencia}
                                    techSkills={techSkills}
                                    idiomas={idiomas}
                                    certificados={certificados}
                                    softSkills={softSkills}
                                /> */}
                            <CVPreview />
                            {/* </div> */}
                            {/* <button onClick={handleDownloadPdf} className="fixed z-50 right-4 top-1 text-xs rounded-full border border-solid border-zinc-800 bg-stone-200 px-4 py-2 text-slate-900 hover:bg-slate-900 hover:text-stone-200">
                                DESCARGAR CV
                            </button> */}
                        </div>
                    </section>
                </div>
            </>
        )
    }


};

export default CVTemplates