import { useNavigate } from "react-router-dom";
import NextButton from "../NextButton";
import clasico from "../../../../assets/cvTemplates/CV-Clasico.png"
import ejecutivo from "../../../../assets/cvTemplates/CV-Ejecutivo.png"
import elegante from "../../../../assets/cvTemplates/CV-Elegante.png"
import newCv from "../../../../assets/cvTemplates/CV-New.png"
import soft from "../../../../assets/cvTemplates/CV-Soft.png"
import { useCvStore } from "../../../zustand/store/CvStore";


const SelectTemplate = () => {
    const navigate = useNavigate();
    const { template, setTemplate } = useCvStore((state) => ({
        template: state.template,
        setTemplate: state.setTemplate,
    }));

    const handleSelect = (templateId: number) => {
        setTemplate(templateId);
    };

    const handleClick = () => {
        navigate("bio");
    };

    return (
        <div className="flex flex-col items-center p-4 bg-gray-200">
            <h2 className="text-2xl mb-4">Elegir plantilla</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {[{ id: 1, src: elegante, alt: "Plantilla 1" },
                { id: 2, src: ejecutivo, alt: "Plantilla 2" },
                { id: 3, src: soft, alt: "Plantilla 3" },
                { id: 4, src: newCv, alt: "Plantilla 4" },
                { id: 5, src: clasico, alt: "Plantilla 5" }]
                    .map((templateItem) => (
                        <img
                            key={templateItem.id}
                            className={`w-36 h-auto cursor-pointer border-4 transition-transform duration-300 ${templateItem.id === template
                                ? "border-cyan-300 shadow-lg scale-105"
                                : "border-transparent"
                                }`}
                            src={templateItem.src}
                            alt={templateItem.alt}
                            onClick={() => handleSelect(templateItem.id)}
                        />
                    ))}
            </div>
            <NextButton
                onClick={handleClick}
                label="Seleccionar plantilla"
                disabled={!template}

            />
        </div>
    );
};

export default SelectTemplate;