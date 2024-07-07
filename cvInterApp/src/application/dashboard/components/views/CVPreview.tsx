import { useCvStore } from "../../../zustand/store/CvStore";
import Template4 from "../templates/Template4";
import Template5 from "../templates/Template5";


const CVPreview: React.FC = () => {
    const { template, ...cvData } = useCvStore((state) => ({
        templateDesign: state.template,
        ...state
    }));


    const renderSelectedTemplate = () => {
        switch (template) {
            case 4:
                return <Template4 {...cvData} template={template} />;
            case 5:
                return <Template5 {...cvData} template={template} />;
            default:
                return <p>No template selected or template not supported.</p>;
        }
    };

    return (
        <div >
            <div >
                <div >
                    {renderSelectedTemplate()}
                </div>
            </div>
        </div>
    );
};

export default CVPreview;