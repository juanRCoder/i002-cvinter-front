import { useNavigate } from "react-router-dom";
import NextButton from "../NextButton";
import { useCvStore } from "../../../zustand/store/CvStore";
import { ChangeEvent, useState } from "react";
import { addGroupInputs, removeGroupInputs, updateInputs } from "../../utils/UpdateInfo";
import Trash, { Plus } from "../BtnPlusTrash";

const Experience = () => {
    const navigate = useNavigate();
    const [incrementId, setIncrementId] = useState<number>(0);
    const { setExperiencia, experiencia } = useCvStore();

    const handleChange = (id: number, event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        updateInputs(id, event, experiencia || [], setExperiencia)
    };

    const newGroup = { id: incrementId, profesion: '', empresa: '', dateStart: '', dateEnd: '', descripcion: '' };
    const addExperience = () => {
        addGroupInputs(incrementId, setIncrementId, experiencia || [], setExperiencia, newGroup)
    };

    const removeExperience = (id: number) => {
        removeGroupInputs(id, experiencia || [], setExperiencia);
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
                           <Trash setState={removeExperience} id={experience.id} />
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
            <Plus setState={addExperience} />
            <div className="mt-24">
                <NextButton onClick={handleNext} label="Guardar cambios y continuar" />
            </div>
        </div>
    );
};

export default Experience;
