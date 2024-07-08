import { useNavigate } from "react-router-dom";
import NextButton from "../NextButton";
import { useCvStore } from "../../../zustand/store/CvStore";
import React from "react";

const Bio: React.FC = () => {
    const navigate = useNavigate();
    const { bio, name, lastName, titulo, setName, setLastName, setTitulo, setBio } = useCvStore();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        // funcion pa actualizar el estado global con los inputs
        switch (name) {
            case "bio":
                setBio(value);
                break;
            case "titulo":
                setTitulo(value);
                break;
            case "name":
                setName(value);
                break;
            case "lastName":
                setLastName(value);
                break;
            default:
                break;
        }
    };

    const handleNext = () => {
        navigate("../experience");
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-lg font-semibold mb-4">Carga tu información</h2>
            <div className="w-full max-w-md p-4 border border-gray-200 rounded-lg shadow-lg bg-white">
                <form className="space-y-3">
                    {/* Sección "Sobre mí" */}
                    <section className="space-y-3">
                        <h3 className="text-sm font-semibold">Sobre mí</h3>
                        <textarea
                            name="bio"
                            value={bio}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setBio(e.target.value)}
                            placeholder="Cuéntanos un poco sobre ti..."
                            className="w-full h-12 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none resize-none"
                        ></textarea>
                        <div className="grid grid-cols-2 gap-2">
                            <input
                                type="text"
                                placeholder="Nombre"
                                id="name"
                                name="name"
                                value={name}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Apellidos"
                                id="lastName"
                                name="lastName"
                                value={lastName}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Ubicación"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Teléfono"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="text"
                                value={titulo}
                                onChange={handleChange}
                                name="titulo"
                                placeholder="Título profesional"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                    </section>

                    {/* Sección "Redes Sociales" */}
                    <section className="space-y-3">
                        <h3 className="text-sm font-semibold">Redes Sociales</h3>
                        <div className="grid grid-cols-2 gap-2">
                            <input
                                type="text"
                                placeholder="Github"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Linkedin"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Portfolio"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Behance"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                    </section>
                </form>
            </div>
            <NextButton
                onClick={handleNext}
                label="Guardar cambios y continuar"
            />
        </div>
    );
};


export default Bio