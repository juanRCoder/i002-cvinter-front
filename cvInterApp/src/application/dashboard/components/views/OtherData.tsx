import { useNavigate } from "react-router-dom";
import NextButton from "../NextButton";
import { useCvStore } from "../../../zustand/store/CvStore";
import { useState } from "react";


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
        const updatedIdiomas = idiomas.map((idioma, i) =>
            i === index ? { ...idioma, [name]: value } : idioma
        );
        setIdiomasState(updatedIdiomas);
        setIdiomas(updatedIdiomas);
    };

    const handleChangeCertificados = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const updatedCertificados = certificados.map((certificado, i) =>
            i === index ? { ...certificado, [name]: value } : certificado
        );
        setCertificadosState(updatedCertificados);
        setCertificados(updatedCertificados);
    };

    const addIdioma = () => {
        setIdiomasState([
            ...idiomas,
            {
                languaje: '',
                nivel: '',
            }
        ]);
    };

    const addCertificado = () => {
        setCertificadosState([
            ...certificados,
            {
                skill: '',
                entidadEmisora: '',
                ano: 0,
            }
        ]);
    };

    const handleNext = () => {
        navigate("../upload");
    };

    return (
        <div className="flex justify-center flex-col">
            <h2>OtherData</h2>
            {idiomas.map((idioma, index) => (
                <section key={index} className="space-y-3 mt-12">
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
                className="mt-4 p-2 bg-blue-500 text-white rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
            >
                Agregar Más Idiomas
            </button>

            {certificados.map((certificado, index) => (
                <section key={index} className="space-y-3 mt-12">
                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            id={`skill-${index}`}
                            name="skill"
                            placeholder="Nombre de la certificación"
                            onChange={(e) => handleChangeCertificados(index, e)}
                            value={certificado.skill}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        />
                        <input
                            type="text"
                            id={`entidadEmisora-${index}`}
                            name="entidadEmisora"
                            placeholder="Entidad emisora del certificado"
                            onChange={(e) => handleChangeCertificados(index, e)}
                            value={certificado.entidadEmisora}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        />
                        <input
                            type="number"
                            id={`ano-${index}`}
                            name="ano"
                            placeholder="Año de certificación"
                            onChange={(e) => handleChangeCertificados(index, e)}
                            value={certificado.ano}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                </section>
            ))}
            <button
                type="button"
                onClick={addCertificado}
                className="mt-4 p-2 bg-blue-500 text-white rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
            >
                Agregar Más Certificados
            </button>

            <NextButton onClick={handleNext} label="Continuar" />
        </div>
    );
};

export default OtherData;
