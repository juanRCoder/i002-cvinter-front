
import { FaSquarePhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi2";
import { FaBehanceSquare } from "react-icons/fa";
import { Template5Props } from "./interfaces-templates";

const Template3: React.FC<Template5Props> = ({ name, lastName, titulo, bio, education, personaInfo, experiencia, techSkills, idiomas, certificados, softSkills }) => {
    return (
        <main className="w-full h-full bg-gray-900 text-white p-8">
            <header className="mb-8 text-center py-4 border-b border-gray-700">
                <h1 className="text-4xl font-bold font-sans text-yellow-400">{name} {lastName}</h1>
                <h3 className="text-lg mt-2 bg-gray-800 text-yellow-300 p-2 rounded">{titulo}</h3>
            </header>

            <div className="flex gap-10">
                <section className="w-1/3 space-y-8">
                    <div className="space-y-4">
                        {personaInfo && personaInfo.map(x => (
                            <div key={x.dato} className="flex items-center gap-2 text-yellow-300">
                                {(() => {
                                    switch (x.icon) {
                                        case 'github':
                                            return <FaGithub />;
                                        case 'linkedin':
                                            return <FaLinkedin />;
                                        case 'portfolio':
                                            return <HiIdentification />;
                                        case 'behance':
                                            return <FaBehanceSquare />;
                                        case 'email':
                                            return <MdEmail />;
                                        case 'telephone':
                                            return <FaSquarePhone />;
                                        case 'address':
                                            return <FaLocationDot />;
                                        default:
                                            return null;
                                    }
                                })()}
                                <p>{x.dato}</p>
                            </div>
                        ))}
                    </div>

                    <article>
                        <header className="mb-2">
                            <p className="bg-gray-800 text-center text-xl font-bold text-yellow-400 p-2 rounded">SOBRE MI</p>
                        </header>
                        <p className="text-yellow-200">{bio}</p>
                    </article>

                    {education && education.length > 0 && (
                        <article>
                            <header className="mb-2">
                                <p className="bg-gray-800 text-xl text-center font-bold text-yellow-400 p-2 rounded">EDUCACIÓN</p>
                            </header>
                            {education.map(x => (
                                <div key={x.dateStart} className="mb-4">
                                    <p className="font-bold text-yellow-300">{x.carrera}</p>
                                    <p className="text-yellow-400">{x.instituto} - {x.dateStart} {x.dateEnd}</p>
                                    <p className="italic text-yellow-400">{x.nivel}</p>
                                </div>
                            ))}
                        </article>
                    )}
                </section>

                <section className="w-2/3 space-y-8">
                    {experiencia && experiencia.length > 0 && (
                        <article>
                            <header className="mb-2">
                                <p className="bg-gray-800 text-center text-xl font-bold text-yellow-400 p-2 rounded">EXPERIENCIA</p>
                            </header>
                            {experiencia.map((x, i) => (
                                <div key={i} className="mb-4">
                                    <p className="italic flex gap-2 text-yellow-400">
                                        <span>{x.dateStart}</span>
                                        <span>{x.dateEnd}</span>
                                    </p>
                                    <p className="font-bold text-yellow-300">{x.empresa}</p>
                                    <p className="italic text-yellow-400">{x.profesion}</p>
                                    <p className="text-yellow-200">{x.descripcion}</p>
                                </div>
                            ))}
                        </article>
                    )}

                    {techSkills && techSkills.length > 0 && (
                        <article>
                            <header className="mb-2">
                                <p className="text-xl font-bold text-yellow-400">HABILIDADES TÉCNICAS</p>
                            </header>
                            {techSkills.map((x, i) => (
                                <div key={i} className="mb-4">
                                    <p className="font-semibold text-yellow-300">{x.skill}</p>
                                    <div className={`h-2 rounded-full bg-yellow-600 w-${x.nivel === 'principiante' ? '1/4' : x.nivel === 'basico' ? '1/2' : x.nivel === 'intermedio' ? '3/4' : 'full'}`}></div>
                                </div>
                            ))}
                        </article>
                    )}

                    {softSkills && softSkills.length > 0 && (
                        <article>
                            <header className="mb-2">
                                <p className="text-xl font-bold text-yellow-400">HABILIDADES BLANDAS</p>
                            </header>
                            <ul className="list-disc list-inside text-yellow-200">
                                {softSkills.map((x, i) => (
                                    <li key={i}>{x}</li>
                                ))}
                            </ul>
                        </article>
                    )}

                    {(idiomas && idiomas.length > 0) || (certificados && certificados.length > 0) && (
                        <article>
                            <header className="mb-2">
                                <p className="text-xl font-bold text-yellow-400">IDIOMAS {certificados && certificados.length > 0 ? 'y CERTIFICADOS' : ''}</p>
                            </header>
                            <div className="flex gap-10">
                                <div className="text-yellow-200">
                                    {idiomas && idiomas.map((x, i) => (
                                        <li key={i} className="mb-2">{x.languaje} - {x.nivel}</li>
                                    ))}
                                </div>
                                <div className="text-yellow-200">
                                    {certificados && certificados.map((x, i) => (
                                        <li key={i} className="mb-2">
                                            <p className="font-bold">{x.skill}</p>
                                            <p>{x.entidadEmisora} - {x.ano}</p>
                                        </li>
                                    ))}
                                </div>
                            </div>
                        </article>
                    )}
                </section>
            </div>
        </main>
    );
}

export default Template3;
