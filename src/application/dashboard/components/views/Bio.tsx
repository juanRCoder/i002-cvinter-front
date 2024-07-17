import { useNavigate } from "react-router-dom";
import NextButton from "../NextButton";
import { useCvStore } from "../../../zustand/store/CvStore";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi2";
import { FaBehanceSquare } from "react-icons/fa";

import React from "react";

const Bio: React.FC = () => {
    const navigate = useNavigate();
    const { bio, setBio, name, setName, lastName, setLastName, titulo, setTitulo, personaInfo = [], addInfo, editInfo, removeInfo } = useCvStore();

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
            case "email":
            case "telephone":
            case "address":
                if (value) {
                    if (personaInfo.find(inf => inf.icon === name)) {
                        editInfo(name, value);
                    } else {
                        addInfo({ icon: name, dato: value });
                    }
                } else {
                    removeInfo(name);
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
        <div className="scale-95 font-lato flex flex-col ">
            <div className=" bg-white">
                <form className="">
                    {/* Sección "Sobre mí" */}
                    <article className="space-y-2">
                        <h3 className="text-base text-zinc-800 mt-2">Sobre mí</h3>
                        <textarea
                            name="bio"
                            value={bio}
                            onChange={handleChange}
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            className="text-sm w-full h-28 p-2 border border-gray-300 rounded-md focus:border-blue-2 focus:border-spacing-1 focus:outline-none resize-none"
                        ></textarea>
                        <div className="grid grid-cols-2 gap-2">
                            {[
                                [name, 'name', 'Nombre'],
                                [lastName, 'lastName', 'Apellido'],
                                ['address', 'address', 'Ubicacion'],
                                ['telephone', 'telephone', 'Telefono'],
                                ['email', 'email', 'Email'],
                                [titulo, 'titulo', 'Título profesional'],
                            ].map(([store, txt, placeholder]) => (
                                txt == 'address' || txt == 'telephone' || txt == 'email'
                                    ? (
                                        <input
                                            key={txt}
                                            type={txt == 'email' ? 'email' : (txt == 'telephone' ? 'number' : 'text')}
                                            id={String(txt)}
                                            name={String(txt)}
                                            placeholder={placeholder}
                                            onChange={handleChange}
                                            value={personaInfo.find(inf => inf.icon === txt)?.dato || ''}
                                            className="text-sm w-full p-2 border border-gray-300 rounded-md  focus:border-blue-2 focus:border-spacing-1 focus:outline-none"
                                        />
                                    )
                                    : (
                                        <input
                                            key={txt}
                                            type="text"
                                            id={txt}
                                            name={txt}
                                            value={store}
                                            placeholder={placeholder}
                                            onChange={handleChange}
                                            className="text-sm w-full p-2 border border-gray-300 rounded-md  focus:border-blue-2 focus:border-spacing-1 focus:outline-none"
                                        />
                                    )
                            ))}
                        </div>
                    </article>

                    {/* Sección "Redes Sociales" */}
                    <article className="space-y-2 mt-6">
                        <h3 className="text-base text-zinc-800 mt-2">Redes</h3>
                        <section className="flex flex-col gap-2">
                            {[
                                ['github', 'Github', <FaGithub className="h-8 w-8 fill-blue-logo" />],
                                ['linkedin', 'Linkedin', <FaLinkedin className="h-8 w-8 fill-blue-logo" />],
                                ['portfolio', 'Portfolio', <HiIdentification className="h-8 w-8 fill-blue-logo" />],
                                ['behance', 'Behance', <FaBehanceSquare className="h-8 w-8 fill-blue-logo" />],
                            ].map(([property, name, icon]) => (
                                <div key={String(property)} className="flex gap-5 items-center">
                                    <input
                                        type="text"
                                        id={String(property)}
                                        name={String(property)}
                                        placeholder={String(name)}
                                        onChange={handleChange}
                                        value={personaInfo.find(inf => inf.icon === property)?.dato || ''}
                                        className="text-sm w-full p-2 border border-gray-300 rounded-md  focus:border-blue-2 focus:border-spacing-1 focus:outline-none"
                                    />
                                    {icon}
                                </div>
                            ))}
                        </section>
                    </article>
                </form>
            </div>
            <div className="mt-10">
                <NextButton
                    onClick={handleNext}
                    label="Guardar cambios y continuar"
                />
            </div>
        </div>
    );
};

export default Bio;
