import { useNavigate } from "react-router-dom";
import NextButton from "../NextButton";
import { useCvStore } from "../../../zustand/store/CvStore";
import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Modal from "./Modal";
import { addGroupInputs, updateInputs, removeGroupInputs } from "../../utils/UpdateInfo";
import Trash, { Plus } from "../BtnPlusTrash";


const OtherData = () => {
    const navigate = useNavigate();
    const { setIdiomas, idiomas, setCertificados, certificados } = useCvStore();
    const [lnModal, setLnModal] = useState<string | null>(null);
    const [idIncrement, setIdIncrement] = useState<number>(0);
    const lvlIdioma = ['principiante', 'intermedio', 'avanzado', 'nativo'];

    const handleChangeIdiomas = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const updatedIdiomas = idiomas?.map((idioma, i) => i === index ? { ...idioma, [name]: value } : idioma);
        if (updatedIdiomas) setIdiomas(updatedIdiomas);
    };

    const addIdioma = () => {
        setIdiomas([...idiomas || [], { languaje: '', nivel: '' }]);
    }
    const removeIdioma = (idioma: string) => {
        const updatedIdiomas = idiomas?.filter(ln => ln.languaje !== idioma);
        if (updatedIdiomas) setIdiomas(updatedIdiomas);
    }
    const handleSelectOption = (lvl: string, ln: string) => {
        const updatedIdiomas = idiomas?.map(prev => ({ ...prev, nivel: ln === prev.languaje ? lvl : prev.nivel }));
        if (updatedIdiomas) setIdiomas(updatedIdiomas);
        setLnModal(null);
    }

    const handleChangeCertificados = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
        updateInputs(id, event, certificados || [], setCertificados)
    };

    const newGroup = { id: idIncrement, skill: '', entidadEmisora: '', ano: '' };
    const addCertificado = () => {
        addGroupInputs(idIncrement, setIdIncrement, certificados || [], setCertificados, newGroup)
    }
    const removeCertificado = (id: number) => {
        removeGroupInputs(id, certificados || [], setCertificados);
    }

    const handleNext = () => {
        navigate("../upload");
    };

    return (
        <div className="flex justify-center flex-col sticky top-10">
            <h5 className="text-base text-zinc-800 mt-2 border-b boder-b-blue-logo pb-2">Idiomas:</h5>
            {idiomas?.map((idioma, index) => (
                <section key={index} className="first:mt-10 mt-5">
                    <div className="flex gap-4 items-center">
                        <input
                            type="text"
                            id={`languaje-${index}`}
                            name="languaje"
                            placeholder="Idioma"
                            onChange={(e) => handleChangeIdiomas(index, e)}
                            value={idioma.languaje}
                            className="text-sm grow p-2 border border-gray-300 rounded-md focus:border-blue-2 focus:border-spacing-1 focus:outline-none"
                        />
                        <div className="bg-transparent relative flex items-center flex-none">
                            <input
                                type="text"
                                id={`nivel-${index}`}
                                name="nivel"
                                placeholder="Nivel"
                                onChange={(e) => handleChangeIdiomas(index, e)}
                                onClick={() => setLnModal(idioma.languaje === lnModal ? null : idioma.languaje)}
                                value={idioma.nivel}
                                className="text-sm w-full  cursor-pointer p-2  border border-gray-300 rounded-md active:border-blue-2 active:border-spacing-1  outline-none"
                            />
                            <RiArrowDownSLine onClick={() => setLnModal(idioma.languaje === lnModal ? null : idioma.languaje)} className="right-3 absolute cursor-pointer text-2xl flex-none fill-gray-600" />
                            {lnModal == idioma.languaje &&
                                <Modal
                                    opciones={lvlIdioma}
                                    sendSelected={(selected) => handleSelectOption(selected, idioma.languaje)}
                                />
                            }
                        </div>
                        <div
                            onClick={() => removeIdioma(idioma.languaje)}
                            className="cursor-pointer h-8 w-8 bg-red-500/75 hover:bg-red-400 grid place-items-center rounded-full">
                            <FaTrash className="fill-white" />
                        </div>
                    </div>
                </section>
            ))}
            <Plus setState={addIdioma} />

            {/*----------------------CERTIFICADO----------------------*/}

            <h3 className="text-base text-zinc-800 mt-12 border-b boder-b-blue-logo pb-2">Certificados:</h3>
            {certificados?.map((certificado) => (
                <section key={certificado.id} className="first:mt-10 mt-5">
                    <section className="flex gap-2 items-center justify-between">
                        <h3 className="font-thin text-zinc-800">Certicado</h3>
                        <Trash setState={removeCertificado} id={certificado.id}/>
                    </section>
                    <div className="flex gap-4 mt-2">
                        <input
                            type="text"
                            id={`skill-${certificado.id}`}
                            name="skill"
                            placeholder="Nombre de la certificación"
                            onChange={(e) => handleChangeCertificados(certificado.id, e)}
                            value={certificado.skill}
                            className="text-sm grow p-2 border border-gray-300 rounded-md focus:border-blue-2 focus:border-spacing-1 focus:outline-none"
                        />
                        <input
                            type="text"
                            id={`entidadEmisora-${certificado.id}`}
                            name="entidadEmisora"
                            placeholder="Entidad emisora"
                            onChange={(e) => handleChangeCertificados(certificado.id, e)}
                            value={certificado.entidadEmisora}
                            className="text-sm flex-none p-2 border border-gray-300 rounded-md focus:border-blue-2 focus:border-spacing-1 focus:outline-none"
                        />
                        <input
                            type="number"
                            id={`ano-${certificado.id}`}
                            name="ano"
                            placeholder="Año de expedición"
                            onChange={(e) => handleChangeCertificados(certificado.id, e)}
                            value={certificado.ano}
                            className="w-40 text-sm flex-none p-2 border border-gray-300 rounded-md focus:border-blue-2 focus:border-spacing-1 focus:outline-none"
                        />
                    </div>
                </section>
            ))}
            <Plus setState={addCertificado} />
            <div className="mt-24">
                <NextButton
                    onClick={handleNext}
                    label="Finalizar"

                />
            </div>
        </div>
    );
};

export default OtherData;
