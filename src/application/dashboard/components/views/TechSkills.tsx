import { useNavigate } from "react-router-dom";
import NextButton from "../NextButton";
import { useCvStore } from "../../../zustand/store/CvStore";
import { FaPlus, FaTrash } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";
import Modal from "./Modal";

const TechSkills = () => {
    const navigate = useNavigate()
    const [idIncrement, setIdCrement] = useState<number>(0);
    const [openModalId, setOpenModalId] = useState<number | null>(null);
    const { setTechSkills, techSkills } = useCvStore();
    const optionsLevel = ['principiante', 'basico', 'intermedio', 'avanzado']

    const handleChange = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const updateSkills = techSkills && techSkills.map((skill) => (skill.id === id ? { ...skill, [name]: value } : skill));
        if (updateSkills) setTechSkills(updateSkills);
    };

    const addSkill = () => {
        setTechSkills([...(techSkills || []), { id: idIncrement, skill: '', nivel: '', }]);
        setIdCrement(idIncrement + 1)
    }
    const removeSkill = (id: number) => {
        const updateSkills = techSkills && techSkills.filter(skill => skill.id !== id)
        if (updateSkills) setTechSkills(updateSkills);
    }

    const selectOption = (selected: string, id: number) => {
        const updateSkills = techSkills && techSkills.map((skill) => (skill.id === id ? { ...skill, nivel: selected } : skill));
        if (updateSkills) setTechSkills(updateSkills);
        setOpenModalId(null);
    }
    

    const handleNext = () => {
        navigate("../soft-skills")
    }
    return (
        <div className="flex justify-center flex-col">
            <h3 className="text-base text-zinc-800 mt-2 border-b boder-b-blue-logo pb-2">Tecnologias</h3>
            {techSkills && techSkills.map((skill) => (
                <section key={skill.id} className="first:mt-10 mt-5">
                    <div className="flex gap-4 items-center">
                        <input
                            type="text"
                            id={`skill-${skill.id}`}
                            name="skill"
                            placeholder="Habilidad Tecnica"
                            onChange={(e) => handleChange(skill.id, e)}
                            value={skill.skill}
                            className="text-sm grow p-2 border border-gray-300 rounded-md focus:border-blue-2 focus:border-spacing-1 focus:outline-none"
                        />
                        <div className="bg-transparent relative flex items-center flex-none">
                            <input
                                type="text"
                                id={`nivel-${skill.id}`}
                                name="nivel"
                                placeholder="Nivel"
                                onChange={(e) => handleChange(skill.id, e)}
                                onClick={() => setOpenModalId(openModalId === skill.id ? null : skill.id)}
                                value={skill.nivel}
                                className="text-sm w-full  cursor-pointer p-2  border border-gray-300 rounded-md active:border-blue-2 active:border-spacing-1  outline-none"
                                readOnly
                            />
                            <RiArrowDownSLine onClick={() => setOpenModalId(openModalId === skill.id ? null : skill.id)} className="right-3 absolute cursor-pointer text-2xl flex-none fill-gray-600" />
                            {openModalId == skill.id && 
                                <Modal
                                    opciones={optionsLevel}
                                    sendSelected={(selected) => selectOption(selected, skill.id)}
                                />
                            }
                        </div>
                        <div
                            onClick={() => removeSkill(skill.id)}
                            className="cursor-pointer h-8 w-8 bg-red-500/75 hover:bg-red-400 grid place-items-center rounded-full">
                            <FaTrash className="fill-white" />
                        </div>
                    </div>
                </section>
            ))}
            <div>
                <button
                    type="button"
                    onClick={addSkill}
                    className="rounded-full mt-4 p-1 grid place-items-center bg-blue-logo hover:bg-blue-2 transition"
                >
                    <FaPlus className="fill-white text-2xl font-bold p-1" />
                </button>
            </div>
            <div className="mt-24">
                <NextButton onClick={handleNext} label="Guardar cambios y continuar" />
            </div>
        </div>
    )
};

export default TechSkills;