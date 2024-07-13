import { useRef } from "react";
import { useCvStore } from "../../../zustand/store/CvStore";
import Template1 from "../templates/Template1";
import Template2 from "../templates/Template2";
import Template3 from "../templates/Template3";
import Template4 from "../templates/Template4";
import Template5 from "../templates/Template5";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


const CVPreview: React.FC = () => {

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
    const { templateSelected, name, lastName, bio, titulo, experiencia, education, techSkills, softSkills, idiomas, certificados, personaInfo } = useCvStore();

    const renderSelectedTemplate = () => {
        switch (templateSelected) {
            case 1:
                return <Template1 templateSelected={templateSelected} name={name} lastName={lastName} bio={bio} titulo={titulo} experiencia={experiencia} education={education} techSkills={techSkills} softSkills={softSkills} idiomas={idiomas} certificados={certificados} personaInfo={personaInfo} />;
            case 2:
                return <Template2 templateSelected={templateSelected} name={name} lastName={lastName} bio={bio} titulo={titulo} experiencia={experiencia} education={education} techSkills={techSkills} softSkills={softSkills} idiomas={idiomas} certificados={certificados} personaInfo={personaInfo} />;
            case 3:
                return <Template3 templateSelected={templateSelected} name={name} lastName={lastName} bio={bio} titulo={titulo} experiencia={experiencia} education={education} techSkills={techSkills} softSkills={softSkills} idiomas={idiomas} certificados={certificados} personaInfo={personaInfo} />;
            case 4:
                return <Template4 templateSelected={templateSelected} name={name} lastName={lastName} bio={bio} titulo={titulo} experiencia={experiencia} education={education} techSkills={techSkills} softSkills={softSkills} idiomas={idiomas} certificados={certificados} personaInfo={personaInfo} />;
            case 5:
                return <Template5 templateSelected={templateSelected} name={name} lastName={lastName} bio={bio} titulo={titulo} experiencia={experiencia} education={education} techSkills={techSkills} softSkills={softSkills} idiomas={idiomas} certificados={certificados} personaInfo={personaInfo} />;
            default:
                return <p>No template selected or template not supported.</p>;
        }
    };

    return (
        <>
            <div ref={cvRef} className="outline outline-1 outline-slate-600/30" >
                {renderSelectedTemplate()}
            </div>
            <button onClick={handleDownloadPdf} className="fixed z-50 right-4 top-1 text-xs rounded-full border border-solid border-zinc-800 bg-stone-200 px-4 py-2 text-slate-900 hover:bg-slate-900 hover:text-stone-200">
                DESCARGAR CV
            </button>
        </>

    );
};

export default CVPreview;