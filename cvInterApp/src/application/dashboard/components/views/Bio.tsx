import { useNavigate } from "react-router-dom";
import NextButton from "../NextButton";
import { useCvStore } from "../../../zustand/store/CvStore";
import React from "react";

const Bio: React.FC = () => {
    const navigate = useNavigate();
    const { bio, setBio, name, setName, lastName, setLastName, titulo, setTitulo, redes = [], location = [], addRed, editRed, removeRed, addLocation, editLocation, removeLocation } = useCvStore();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        // Update corresponding state based on input name
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
            case "linkedin":
            case "github":
            case "portfolio":
            case "behance":
                if (value) {
                    if (redes.find(red => red.red === name)) {
                        editRed(name, value);
                    } else {
                        addRed({ red: name, user: value });
                    }
                } else {
                    removeRed(name);
                }
                break;
            case "email":
            case "telephone":
            case "address":
                if (value) {
                    if (location.find(loc => loc.red === name)) {
                        editLocation(name, value);
                    } else {
                        addLocation({ red: name, user: value });
                    }
                } else {
                    removeLocation(name);
                }
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
                            onChange={handleChange}
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
                                id="address"
                                name="address"
                                placeholder="Location"
                                onChange={handleChange}
                                value={location.find(loc => loc.red === 'address')?.user || ''}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="text"
                                id="telephone"
                                name="telephone"
                                placeholder="Telefono"
                                onChange={handleChange}
                                value={location.find(loc => loc.red === 'telephone')?.user || ''}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                value={location.find(loc => loc.red === 'email')?.user || ''}
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
                                id="github"
                                name="github"
                                placeholder="Github"
                                onChange={handleChange}
                                value={redes.find(red => red.red === 'github')?.user || ''}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="text"
                                id="linkedin"
                                name="linkedin"
                                placeholder="Linkedin"
                                onChange={handleChange}
                                value={redes.find(red => red.red === 'linkedin')?.user || ''}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="text"
                                id="portfolio"
                                name="portfolio"
                                placeholder="Portfolio"
                                onChange={handleChange}
                                value={redes.find(red => red.red === 'portfolio')?.user || ''}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="text"
                                id="behance"
                                name="behance"
                                placeholder="Behance"
                                onChange={handleChange}
                                value={redes.find(red => red.red === 'behance')?.user || ''}
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

export default Bio;
