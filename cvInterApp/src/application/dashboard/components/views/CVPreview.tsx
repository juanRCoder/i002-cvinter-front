import { useCvStore } from "../../../zustand/store/CvStore";
import Template1 from "../templates/Template1";
import Template2 from "../templates/Template2";
import Template4 from "../templates/Template4";
import Template5 from "../templates/Template5";


const CVPreview: React.FC = () => {
    // const { templateSelected, ...cvData } = useCvStore((state) => ({
    //     ...state
    // }));
    const { templateSelected, name, lastName, bio, titulo, experiencia, education, techSkills, softSkills, idiomas, certificados, personaInfo } = useCvStore();

    const renderSelectedTemplate = () => {
        switch (templateSelected) {
            case 1:
                return <Template1 templateSelected={templateSelected} name={name} lastName={lastName} bio={bio} titulo={titulo} experiencia={experiencia} education={education} techSkills={techSkills} softSkills={softSkills} idiomas={idiomas} certificados={certificados} personaInfo={personaInfo} />;
            case 2:
                return <Template2 templateSelected={templateSelected} name={name} lastName={lastName} bio={bio} titulo={titulo} experiencia={experiencia} education={education} techSkills={techSkills} softSkills={softSkills} idiomas={idiomas} certificados={certificados} personaInfo={personaInfo} />
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
            {renderSelectedTemplate()}
        </>

    );
};

export default CVPreview;