import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NextButton from "../NextButton";
import { useCvStore } from "../../../zustand/store/CvStore";

const Education = () => {
    const navigate = useNavigate();
    const { setEducation } = useCvStore();
    const [education, setEducationState] = useState([
        {
            instituto: "",
            carrera: "",
            nivel: "",
            anoStart: 0,
            anoEnd: 0,
        },
    ]);

    const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const updatedEducation = education.map((edu, i) => i === index ? { ...edu, [name]: value } : edu);
        setEducationState(updatedEducation);
        setEducation(updatedEducation);
    };

    const addExperience = () => {
        setEducationState([
            ...education,
            {
                instituto: "",
                carrera: "",
                nivel: "",
                anoStart: 0,
                anoEnd: 0,
            },
        ]);
    };

    const handleNext = () => {
        navigate("../tech-skills");
    };

    return (
        <div className="flex justify-center flex-col">
            <h2>Education</h2>
            {education.map((edu, index) => (
                <section key={index} className="space-y-3 mt-12">
                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            id={`instituto-${index}`}
                            name="instituto"
                            placeholder="Nombre de la institución donde estudiaste"
                            onChange={(e) => handleChange(index, e)}
                            value={edu.instituto}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        />
                        <input
                            type="text"
                            id={`carrera-${index}`}
                            name="carrera"
                            placeholder="Título o nombre del curso o carrera que hiciste"
                            onChange={(e) => handleChange(index, e)}
                            value={edu.carrera}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        />
                        <input
                            type="number"
                            id={`anoStart-${index}`}
                            name="anoStart"
                            placeholder="Año de inicio"
                            onChange={(e) => handleChange(index, e)}
                            value={edu.anoStart}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        />
                        <input
                            type="number"
                            id={`anoEnd-${index}`}
                            name="anoEnd"
                            placeholder="Año de fin"
                            onChange={(e) => handleChange(index, e)}
                            value={edu.anoEnd}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        />
                       <input
                            type="text"
                            id={`nivel-${index}`}
                            name="nivel"
                            placeholder="Nivel de Estudios"
                            onChange={(e) => handleChange(index, e)}
                            value={edu.nivel}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                </section>
            ))}
            <button
                type="button"
                onClick={addExperience}
                className="mt-4 p-2 bg-blue-500 text-white rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
            >
                Agregar Más Educacion
            </button>
            <NextButton onClick={handleNext} label="Continuar" />
        </div>
    );
};

export default Education;
