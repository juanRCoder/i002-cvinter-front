import { useNavigate } from "react-router-dom";
import NextButton from "../NextButton";
import { useCvStore } from "../../../zustand/store/CvStore";
import { FaPlus, FaTrash } from "react-icons/fa";
import { ChangeEvent, useState } from "react";

const Experience = () => {
    const navigate = useNavigate();
    const [incrementId, setIncrementId] = useState<number>(0);
    const { setExperiencia, experiencia } = useCvStore();

    const handleChange = (id: number, event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        const updatedExperiences = experiencia && experiencia.map((experience) => (experience.id === id ? { ...experience, [name]: value } : experience));
        if (updatedExperiences) setExperiencia(updatedExperiences);
    };
    const addExperience = () => {
        setExperiencia([...(experiencia || []), { id: incrementId, profesion: '', empresa: '', dateStart: '', dateEnd: '', descripcion: '' }]);
        setIncrementId(incrementId + 1);
    };
    const removeExperience = (id: number) => {
        const updatedExperiences = experiencia && experiencia.filter(experience => experience.id !== id);
        if (updatedExperiences) setExperiencia(updatedExperiences);
    };
    const handleNext = () => {
        navigate("../education");
    };

    return (
        <div className=" flex justify-center flex-col">
             <h3 className="text-base text-zinc-800 mt-2 border-b boder-b-blue-logo pb-2">Experiencias</h3>
            {experiencia && experiencia.map((experience) => (
                <section key={experience.id} className="first:mt-10 mt-5">
                    <div className="flex flex-col gap-4">
                        <section className="flex gap-2 items-center justify-between">
                            <h3 className="font-thin text-zinc-800 mt-2">Experiencia</h3>
                            <div
                                onClick={() => removeExperience(experience.id)}
                                className="cursor-pointer h-8 w-8 bg-red-500/75 hover:bg-red-400 grid place-items-center rounded-full">
                                <FaTrash className="fill-white" />
                            </div>
                        </section>
                        <input
                            type="text"
                            id={`empresa-${experience.id}`}
                            name="empresa"
                            placeholder="Empresa en donde trabajaste o tu proyecto más relevante"
                            onChange={(e) => handleChange(experience.id, e)}
                            value={experience.empresa}
                            className="text-sm w-full p-2 py-3 border border-gray-300 rounded-md  focus:border-blue-2 focus:border-spacing-1 focus:outline-none"
                        />
                        <section className="flex gap-2">
                            {[
                                ['profesion', experience.profesion, 'Cargo que desempeñaste o rol'],
                                ['dateStart', experience.dateStart, 'Desde'],
                                ['dateEnd', experience.dateEnd, 'Hasta'],
                            ].map(([name, property, placeholder]) => (
                                <input
                                type="text"
                                id={`${name}-${experience.id}`}
                                name={String(name)}
                                placeholder={String(placeholder)}
                                onChange={(e) => handleChange(experience.id, e)}
                                value={property}
                                className={`text-sm ${name === 'profesion' ? 'grow' : 'flex-none'} p-2 py-3 border border-gray-300 rounded-md  focus:border-blue-2 focus:border-spacing-1 focus:outline-none`}
                            />
                            ))}
                        </section>
                        <textarea
                            id={`descripcion-${experience.id}`}
                            name="descripcion"
                            placeholder="Carga aquí los detalles de tu experiencia"
                            onChange={(e) => handleChange(experience.id, e)}
                            value={experience.descripcion}
                            className="h-28 resize-none text-sm w-full p-2 py-3 border border-gray-300 rounded-md  focus:border-blue-2 focus:border-spacing-1 focus:outline-none"
                        ></textarea>
                    </div>
                </section>
            ))}
            <div>
                <button
                    type="button"
                    onClick={addExperience}
                    className="rounded-full mt-4 p-1 grid place-items-center bg-blue-logo hover:bg-blue-2 transition"
                >
                    <FaPlus className="fill-white text-2xl font-bold p-1" />
                </button>
            </div>
            <div className="mt-24">
                <NextButton onClick={handleNext} label="Guardar cambios y continuar" />
            </div>
        </div>
    );
};

export default Experience;
