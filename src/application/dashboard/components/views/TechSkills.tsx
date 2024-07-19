import { useNavigate } from "react-router-dom";
import NextButton from "../NextButton";
import { useCvStore } from "../../../zustand/store/CvStore";
import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";
import Modal from "./Modal";
import { addGroupInputs, removeGroupInputs, selectedOption, updateInputs } from "../../utils/UpdateInfo";
import Trash, { Plus } from "../BtnPlusTrash";

const TechSkills = () => {
    const navigate = useNavigate()
    const [idIncrement, setIdCrement] = useState<number>(0);
    const [openModalId, setOpenModalId] = useState<number | null>(null);
    const { setTechSkills, techSkills } = useCvStore();
    const optionsLevel = ['principiante', 'basico', 'intermedio', 'avanzado']

    const handleChange = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
        updateInputs(id, event, techSkills || [], setTechSkills)
    };

    const newGroup = { id: idIncrement, skill: '', nivel: '', };
    const addSkill = () => {
        addGroupInputs(idIncrement, setIdCrement, techSkills || [], setTechSkills, newGroup)
    }
    const removeSkill = (id: number) => {
        removeGroupInputs(id, techSkills || [], setTechSkills);
    }

    const selectOption = (selected: string, id: number) => {
        selectedOption(id, selected, setTechSkills, techSkills || [], setOpenModalId)
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
                        <Trash setState={removeSkill} id={skill.id} />
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