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
            // case 1:
            //     return <Template1 {...cvData} />;
            // case 2:
            //     return <Template2 {...cvData} />;
            // case 3:
            //     return <Template3 {...cvData} />;
            case 4:
                return <Template4 {...cvData} template={template} />;
            case 5:
                return <Template5 {...cvData} template={template} />;
            default:
                return <p>No template selected or template not supported.</p>;
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl mb-4">CV Preview</h2>
            <div className="w-full max-w-4xl p-4 border rounded shadow-md bg-white">
                {renderSelectedTemplate()}
            </div>
        </div>
    );
};

export default CVPreview;