import { useNavigate } from "react-router-dom";
import NextButton from "../NextButton";
import { useState } from "react";
import { useCvStore } from "../../../zustand/store/CvStore";

const Experience = () => {
    const navigate = useNavigate();
    const { setExperiencia } = useCvStore();
    const [experiences, setExperiences] = useState([{
        profesion: '',
        empresa: '',
        dateStart: '',
        dateEnd: '',
        descripcion: ''
    }]);

    const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const updatedExperiences = experiences.map((experience, i) => (i === index ? { ...experience, [name]: value } : experience));
        setExperiences(updatedExperiences);
        setExperiencia(updatedExperiences);
    };

    const addExperience = () => setExperiences([...experiences,{ profesion: '', empresa: '', dateStart: '', dateEnd: '', descripcion: '' }]);

    const handleNext = () => {
        navigate("../education");
    };

    return (
        <div className="flex justify-center flex-col">
            <h2>Experience</h2>
            {experiences.map((experience, index) => (
                <section key={index} className="space-y-3 mt-12">
                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            id={`empresa-${index}`}
                            name="empresa"
                            placeholder="Empresa en donde trabajaste o tu proyecto más relevante"
                            onChange={(e) => handleChange(index, e)}
                            value={experience.empresa}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        />
                        <input
                            type="text"
                            id={`profesion-${index}`}
                            name="profesion"
                            placeholder="Cargo que desempeñaste o rol"
                            onChange={(e) => handleChange(index, e)}
                            value={experience.profesion}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        />
                        <input
                            type="text"
                            id={`dateStart-${index}`}
                            name="dateStart"
                            placeholder="Desde"
                            onChange={(e) => handleChange(index, e)}
                            value={experience.dateStart}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        />
                        <input
                            type="text"
                            id={`dateEnd-${index}`}
                            name="dateEnd"
                            placeholder="Hasta"
                            onChange={(e) => handleChange(index, e)}
                            value={experience.dateEnd}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        />
                        <input
                            type="text"
                            id={`descripcion-${index}`}
                            name="descripcion"
                            placeholder="Carga aquí los detalles de tu experiencia"
                            onChange={(e) => handleChange(index, e)}
                            value={experience.descripcion}
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
                Agregar Más Experiencia
            </button>
            <NextButton onClick={handleNext} label="Continuar" />
        </div>
    );
};

export default Experience;
