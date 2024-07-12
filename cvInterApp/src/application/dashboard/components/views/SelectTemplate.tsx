import NextButton from "../NextButton";
import clasico from "../../../../assets/cvTemplates/CV-Clasico.png";
import ejecutivo from "../../../../assets/cvTemplates/CV-Ejecutivo.png";
import elegante from "../../../../assets/cvTemplates/CV-Elegante.png";
import newCv from "../../../../assets/cvTemplates/CV-New.png";
import soft from "../../../../assets/cvTemplates/CV-Soft.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCvStore } from "../../../zustand/store/CvStore";


const SelectTemplate = () => {

    const navigate = useNavigate();
    const setTemplateSelected = useCvStore((state) => state.setTemplateSelected);
    const [template, setTemplate] = useState<number>(0)

    const handleClick = () => {
        setTemplateSelected(template);
        navigate("bio");
    };

    const templatesArray = [
        { id: 1, src: elegante, alt: "Plantilla 1", name: "Elegante" },
        { id: 2, src: ejecutivo, alt: "Plantilla 2", name: "Ejecutivo" },
        { id: 3, src: soft, alt: "Plantilla 3", name: "Soft" },
        { id: 4, src: newCv, alt: "Plantilla 4", name: "New CV" },
        { id: 5, src: clasico, alt: "Plantilla 5", name: "Clasico" }
    ];

    const handleSelect = (templateId: number) => {
        setTemplate(templateId);
    };

    return (
        <div className="flex flex-col justify-between h-screen">
            <div className="p-4 mx-auto max-w-screen-md">
                <p className="text-left text-gray-700 text-lg pt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nostrum accusantium facere architecto dolor perferendis dolore ratione deserunt.
                </p>
            </div>
            <div className="bg-gray-200 p-4 flex flex-col items-center mt-0">
                <div className="flex justify-center gap-9 flex-wrap">
                    {templatesArray.map((templateItem) => (
                        <div
                            key={templateItem.id}
                            className="flex flex-col items-center mb-2"
                        >
                            <img
                                src={templateItem.src}
                                alt={templateItem.alt}
                                className="max-w-350px] max-h-[250px] cursor-pointer border-2 box-border"
                                style={{
                                    borderColor: template === templateItem.id ? '#3182CE' : 'transparent',
                                }}
                                onClick={() => handleSelect(templateItem.id)}
                            />
                            <p className="mt-1 text-center text-gray-700">{templateItem.name}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-2">
                    <NextButton
                        onClick={handleClick}
                        label="Seleccionar plantilla"
                        disabled={!template}
                    />
                </div>
            </div>
        </div>
    );
};

export default SelectTemplate;
