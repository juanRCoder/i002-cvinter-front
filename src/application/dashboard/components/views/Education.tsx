import { RiArrowDownSLine } from "react-icons/ri";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NextButton from "../NextButton";
import { useCvStore } from "../../../zustand/store/CvStore";
import Modal from "./Modal";
import { addGroupInputs, removeGroupInputs, selectedOption, updateInputs } from "../../utils/UpdateInfo";
import Trash, { Plus } from "../BtnPlusTrash";

const Education = () => {
    const navigate = useNavigate();
    const { setEducation, education } = useCvStore();
    const [idIncrement, setIdIncrement] = useState<number>(0);
    const [openModalId, setOpenModalId] = useState<number | null>(null);
    const opcionesEducacion = ['Universidad', 'FP/Terciario', 'Bootcamp', 'Cursos/autodidacta']

    const handleChange = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
        updateInputs(id, event, education || [], setEducation)
    };

    const newGroup = { id: idIncrement, instituto: "", carrera: "", nivel: "", dateStart: '', dateEnd: ''};
    const addEducation = () => {
        addGroupInputs(idIncrement, setIdIncrement, education || [], setEducation, newGroup)
    }

    const removeEducation = (id: number) => {
        removeGroupInputs(id, education || [], setEducation); 
    }

    const selectOption = (selected: string, id: number) => {
        selectedOption(id, selected, setEducation, education || [], setOpenModalId)
    }
    const handleNext = () => {
        navigate("../tech-skills");
    };

    return (
        <div className="flex justify-center flex-col">
            <h3 className="text-base text-zinc-800 mt-2 border-b boder-b-blue-logo pb-2">Educaciones</h3>
            {education && education.map((edu) => (
                <section key={edu.id} className="first:mt-10 mt-5">
                    <div className="flex flex-col gap-4">
                        <section className="flex gap-2 items-center justify-between">
                            <h3 className="font-thin text-zinc-800 mt-2">Educación</h3>
                            <Trash setState={removeEducation} id={edu.id} />
                        </section>
                        <div className="flex flex-col gap-4">
                            <section className=" flex gap-4">
                                <div className="flex gap-4 w-full">
                                    <input
                                        type="text"
                                        id={`instituto-${edu.id}`}
                                        name="instituto"
                                        placeholder="Nombre de la institución donde estudiaste"
                                        onChange={(e) => handleChange(edu.id, e)}
                                        value={edu.instituto}
                                        className="grow text-sm w-3/5 p-2 py-3 border border-gray-300 rounded-md focus:border-blue-2 focus:border-spacing-1 focus:outline-none"
                                    />
                                    <div className="bg-transparent relative flex items-center w-2/5">
                                        <input
                                            type="text"
                                            id={`nivel-${edu.id}`}
                                            name="nivel"
                                            placeholder="Nivel"
                                            onChange={(e) => handleChange(edu.id, e)}
                                            onClick={() => setOpenModalId(openModalId === edu.id ? null : edu.id)}
                                            value={edu.nivel}
                                            className=" text-sm w-full h-full cursor-pointer p-2  border border-gray-300 rounded-md active:border-blue-2 active:border-spacing-1  outline-none"
                                            readOnly
                                        />
                                        <RiArrowDownSLine onClick={() => setOpenModalId(edu.id)} className="right-3 absolute cursor-pointer text-2xl flex-none fill-gray-600" />
                                        {openModalId === edu.id && //id seleccionado es igual al id de educacion
                                            <Modal 
                                                opciones={opcionesEducacion}
                                                sendSelected={(selected) => selectOption(selected, edu.id)} //Agregar un parametro que no esta en el modal (edu.id)
                                            />
                                        }
                                    </div>
                                </div>
                            </section>
                            <section className=" flex gap-4">
                                <div className="flex gap-4 w-full">
                                    <input
                                        type="text"
                                        id={`carrera-${edu.id}`}
                                        name="carrera"
                                        placeholder="Título o nombre del curso o carrera que hiciste"
                                        onChange={(e) => handleChange(edu.id, e)}
                                        value={edu.carrera}
                                        className="grow text-sm w-3/5 p-2 py-3 border border-gray-300 rounded-md focus:border-blue-2 focus:border-spacing-1 focus:outline-none"
                                    />
                                </div>
                                <div className="flex items-center w-[66%] gap-4 text-sm">
                                    <input
                                        type="text"
                                        id={`dateStart-${edu.id}`}
                                        name="dateStart"
                                        placeholder="Fecha de inicio"
                                        onChange={(e) => handleChange(edu.id, e)}
                                        value={edu.dateStart}
                                        className="w-1/2 p-2  py-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                                    />
                                    <input
                                        type="text"
                                        id={`dateEnd-${edu.id}`}
                                        name="dateEnd"
                                        placeholder="Fecha de fin"
                                        onChange={(e) => handleChange(edu.id, e)}
                                        value={edu.dateEnd}
                                        className="w-1/2 p-2 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            ))}
            <Plus setState={addEducation}/>
            <div className="mt-24">
                <NextButton onClick={handleNext} label="Guardar cambios y continuar" />
            </div>
        </div>
    );
};

export default Education;
