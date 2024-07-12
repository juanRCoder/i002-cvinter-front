import { useNavigate } from "react-router-dom";
import NextButton from "../NextButton";
import { useCvStore } from "../../../zustand/store/CvStore";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";


const OtherData = () => {
    const navigate = useNavigate();
    const { setIdiomas, setCertificados } = useCvStore();
    const [idiomas, setIdiomasState] = useState([
        {
            languaje: '',
            nivel: '',
        }
    ]);
    const [certificados, setCertificadosState] = useState([
        {
            skill: '',
            entidadEmisora: '',
            ano: 0,
        }
    ]);

    const handleChangeIdiomas = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const updatedIdiomas = idiomas.map((idioma, i) => i === index ? { ...idioma, [name]: value } : idioma);
        setIdiomasState(updatedIdiomas);
        setIdiomas(updatedIdiomas);
    };

    const handleChangeCertificados = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const updatedCertificados = certificados.map((certificado, i) => i === index ? { ...certificado, [name]: value } : certificado);
        setCertificadosState(updatedCertificados);
        setCertificados(updatedCertificados);
    };

    const addIdioma = () => setIdiomasState([...idiomas, { languaje: '', nivel: '' }]);
    const addCertificado = () => setCertificadosState([...certificados, { skill: '', entidadEmisora: '', ano: 0 }]);

    const handleNext = () => {
        navigate("../upload");
    };

    return (
        <div className="px-10">
            <h2 className="text-gray-900 text-xl mb-4">Carga tu información</h2>
            <h5 className="text-gray-900/50 font-semibold">Idiomas:</h5>
            {idiomas.map((idioma, index) => (
                <section key={index} className="w-96 text-gray-900 mt-4">
                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            id={`languaje-${index}`}
                            name="languaje"
                            placeholder="Idioma dominado"
                            onChange={(e) => handleChangeIdiomas(index, e)}
                            value={idioma.languaje}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        />
                        <input
                            type="text"
                            id={`nivel-${index}`}
                            name="nivel"
                            placeholder="Nivel"
                            onChange={(e) => handleChangeIdiomas(index, e)}
                            value={idioma.nivel}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                </section>
            ))}
            <button
                type="button"
                onClick={addIdioma}
                className="rounded-full mt-4 p-1 grid place-items-center bg-blue-logo hover:bg-blue-2 transition"
            >
                <FaPlus className="fill-white text-2xl font-bold p-1" />
            </button>

            <h5 className="text-gray-900/50 font-semibold mt-10">Certificados:</h5>
            {certificados.map((certificado, index) => (
                <section key={index} className="w-96 text-gray-900 mt-4">
                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            id={`skill-${index}`}
                            name="skill"
                            placeholder="Nombre de la certificación"
                            onChange={(e) => handleChangeCertificados(index, e)}
                            value={certificado.skill}
                            className="w-full p-2 text-gray-500 border-gray-300 rounded-lg focus:border-gray-500/50 border border-1 outline-none"
                        />
                        <input
                            type="text"
                            id={`entidadEmisora-${index}`}
                            name="entidadEmisora"
                            placeholder="Entidad emisora del certificado"
                            onChange={(e) => handleChangeCertificados(index, e)}
                            value={certificado.entidadEmisora}
                            className="w-full p-2 text-gray-500 border-gray-300 rounded-lg focus:border-gray-500/50 border border-1 outline-none"
                        />
                        <input
                            type="number"
                            id={`ano-${index}`}
                            name="ano"
                            placeholder="Año de certificación"
                            onChange={(e) => handleChangeCertificados(index, e)}
                            value={certificado.ano}
                            className="w-full p-2 text-gray-500 border-gray-300 rounded-lg focus:border-gray-500/50 border border-1 outline-none"
                        />
                    </div>
                </section>
            ))}
            <button
                type="button"
                onClick={addCertificado}
                className="rounded-full mt-4 p-1 grid place-items-center bg-blue-logo hover:bg-blue-2 transition"
            >
                <FaPlus className="fill-white text-2xl font-bold p-1" />
            </button>

            <NextButton
                onClick={handleNext}
                label="Finalizar"

            />
        </div>
    );
};

export default OtherData;
