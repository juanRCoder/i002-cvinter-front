import { useNavigate } from "react-router-dom";
import NextButton from "../NextButton";
import { useCvStore } from "../../../zustand/store/CvStore";
import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";
import Modal from "./Modal";
import { Plus } from "../BtnPlusTrash";
import { FaTrash } from "react-icons/fa";

const TechSkills = () => {
    const navigate = useNavigate()
    const [openModalId, setOpenModalId] = useState<number | null>(null);
    const { setTechSkills, techSkills } = useCvStore();
    const optionsLevel = ['principiante', 'basico', 'intermedio', 'avanzado']

    const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const updatedIdiomas = techSkills?.map((idioma, i) => i === index ? { ...idioma, [name]: value } : idioma);
        if (updatedIdiomas) setTechSkills(updatedIdiomas);
    };

    const addSkill = () => {
        setTechSkills([...techSkills || [], { skill: '', nivel: '' }]);
    }
    const removeSkill = (skill: string) => {
        const updatedIdiomas = techSkills?.filter(ln => ln.skill !== skill);
        if (updatedIdiomas) setTechSkills(updatedIdiomas);
    }

    const selectOption = (nivel: string, skill: string) => {
        const updatedIdiomas = techSkills?.map(prev => ({ ...prev, nivel: prev.skill === skill ? nivel : prev.nivel }));
        if (updatedIdiomas) setTechSkills(updatedIdiomas);
        setOpenModalId(null);
    }

    const handleNext = () => {
        navigate("../soft-skills")
    }
    return (
        <div className="flex justify-center flex-col">
            <h3 className="text-base text-zinc-800 mt-2 border-b boder-b-blue-logo pb-2">Tecnologias</h3>
            {techSkills && techSkills.map((skill, index) => (
                <section key={index} className="first:mt-10 mt-5">
                    <div className="flex gap-4 items-center">
                        <input
                            type="text"
                            id={`skill-${index}`}
                            name="skill"
                            placeholder="Habilidad Tecnica"
                            onChange={(e) => handleChange(index, e)}
                            value={skill.skill}
                            className="text-sm grow p-2 border border-gray-300 rounded-md focus:border-blue-2 focus:border-spacing-1 focus:outline-none"
                        />
                        <div className="bg-transparent relative flex items-center flex-none">
                            <input
                                type="text"
                                id={`nivel-${index}`}
                                name="nivel"
                                placeholder="Nivel"
                                onChange={(e) => handleChange(index, e)}
                                onClick={() => setOpenModalId(openModalId === index ? null : index)}
                                value={skill.nivel}
                                className="text-sm w-full  cursor-pointer p-2  border border-gray-300 rounded-md active:border-blue-2 active:border-spacing-1  outline-none"
                                readOnly
                            />
                            <RiArrowDownSLine onClick={() => setOpenModalId(openModalId === index ? null : index)} className="right-3 absolute cursor-pointer text-2xl flex-none fill-gray-600" />
                            {openModalId == index &&
                                <Modal
                                    opciones={optionsLevel}
                                    sendSelected={(nivel) => selectOption(nivel, skill.skill)}
                                />
                            }
                        </div>
                        <div
                            onClick={() => removeSkill(skill.skill)}
                            className="cursor-pointer h-8 w-8 bg-red-500/75 hover:bg-red-400 grid place-items-center rounded-full">
                            <FaTrash className="fill-white" />
                        </div>
                    </div>
                </section>
            ))}
            <Plus setState={addSkill} />
            <div className="mt-24">
                <NextButton onClick={handleNext} label="Guardar cambios y continuar" />
            </div>
        </div>
    )
};

export default TechSkills;