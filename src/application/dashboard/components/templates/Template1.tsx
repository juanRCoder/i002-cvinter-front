import { FaSquarePhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi2";
import { FaBehanceSquare } from "react-icons/fa";
import { Template5Props } from "./interfaces-templates";
import './Templates.css';

const Template1: React.FC<Template5Props> = ({ name, lastName, titulo, bio, education, personaInfo, experiencia, techSkills, idiomas, certificados, softSkills }) => {
    return (
        <main className="w-full h-full bg-white shadow-custom p-8">
            <header className="mb-8 text-center py-4">
                <h1 className="text-5xl tracking-wide font-serif text-zinc-700">{name} {lastName}</h1>
                <h3 className="text-xl mt-2  bg-orange-200 text-zinc-500">{titulo}</h3>
            </header>

            <div className="flex gap-10">
                {/* REDES SOCIALES */}
                <section className="w-1/3 space-y-8">
                    <div className="space-y-4 text-gray-700">
                        {personaInfo && personaInfo.map(x => (
                            <div key={x.dato} className="flex items-center gap-2">
                                {(() => {
                                    switch (x.icon) {
                                        case 'github':
                                            return <FaGithub className="text-orange-300" />;
                                        case 'linkedin':
                                            return <FaLinkedin className="text-orange-300" />;
                                        case 'portfolio':
                                            return <HiIdentification className="text-orange-300" />;
                                        case 'behance':
                                            return <FaBehanceSquare className="text-orange-300" />;
                                        case 'email':
                                            return <MdEmail className="text-orange-300" />;
                                        case 'telephone':
                                            return <FaSquarePhone className="text-orange-300" />;
                                        case 'address':
                                            return <FaLocationDot className="text-orange-300" />;
                                        default:
                                            return null;
                                    }
                                })()}
                                <p>{x.dato}</p>
                            </div>
                        ))}
                    </div>

                    <article>
                        {bio && bio.length > 0 && (
                            <header className="mb-2">
                                <p className="bg-orange-200 text-center text-2xl tracking-wide font-semibold text-gray-800">SOBRE MI</p>
                            </header>
                        )}
                        <p className="text-gray-700">{bio}</p>
                    </article>

                    {education && education.length > 0 && (
                        <article>
                            <header className="mb-2">
                                <p className="bg-orange-200 text-2xl text-center tracking-wide font-semibold text-gray-800">EDUCACIÓN</p>
                            </header>
                            {education.map(x => (
                                <div key={x.dateStart} className="mb-4">
                                    <p className="font-bold text-gray-700">{x.carrera}</p>
                                    <p className="text-gray-600">{x.instituto} - {x.dateStart} {x.dateEnd}</p>
                                    <p className="italic text-gray-600">{x.nivel}</p>
                                </div>
                            ))}
                        </article>
                    )}
                </section>
                <section className="w-2/3 space-y-8 text-gray-700">
                    {/* EXPERIENCIA */}
                    <article>
                        {experiencia && experiencia.length > 0 && (
                            <>
                                <header className="mb-2">
                                    <p className="bg-orange-200 text-center text-2xl tracking-wide font-semibold text-gray-800">EXPERIENCIA</p>
                                </header>
                            </>
                        )}
                        {experiencia && experiencia.map((x, i) => (
                            <div key={i} className="mb-4">
                                <p className="italic flex gap-2 text-gray-600">
                                    <span>{x.dateStart}</span>
                                    <span>{x.dateEnd}</span>
                                </p>
                                <p className="font-bold text-gray-800">{x.empresa}</p>
                                <p className="italic text-gray-700">{x.profesion}</p>
                                <p className="text-gray-600">{x.descripcion}</p>
                            </div>
                        ))}
                    </article>
                    {/* TECH SKILLS */}
                    {techSkills && techSkills.length > 0 && (
                        <article>
                            <header className="mb-2">
                                <p className="text-2xl tracking-wide font-semibold text-gray-800">HABILIDADES TÉCNICAS</p>
                            </header>
                            {techSkills.map((x, i) => (
                                <div key={i} className="mb-4">
                                    <p className="font-semibold text-gray-700">{x.skill}</p>
                                    <div className={`h-2 rounded-full bg-gray-300 w-${x.nivel == 'principiante' ? '10'
                                        : (x.nivel == 'basico' ? '24'
                                            : (x.nivel == 'intermedio' ? '32'
                                                : (x.nivel == 'avanzado' ? '36' : '')))}`}></div>
                                </div>
                            ))}
                        </article>
                    )}
                    {/* SOFT SKILLS */}
                    {softSkills && softSkills.length > 0 && (
                        <article>
                            <header className="mb-2">
                                <p className="text-2xl tracking-wide font-semibold text-gray-800">HABILIDADES BLANDAS</p>
                            </header>
                            <ul className="list-disc list-inside">
                                {softSkills.map((x, i) => (
                                    <li key={i} className="text-gray-700">{x}</li>
                                ))}
                            </ul>
                        </article>
                    )}
                    {idiomas && idiomas.length > 0 && (
                        <article>
                            <header className="mb-2">
                                <p className="text-2xl tracking-wide font-semibold text-gray-800">IDIOMAS</p>
                            </header>
                            <div className="flex gap-10">
                                <div>
                                    {idiomas && idiomas.map((x, i) => (
                                        <li key={i} className="mb-2 text-gray-700">{x.languaje} <b>{x.nivel}</b></li>
                                    ))}
                                </div>
                            </div>
                        </article>
                    )}
                    {certificados && certificados.length > 0 && (
                        <article>
                            <header className="mb-2">
                                <p className="text-2xl tracking-wide font-semibold text-gray-800">CERTIFICADOS</p>
                            </header>
                            <div className="flex gap-10">
                                <div>
                                    {certificados && certificados.map((x, i) => (
                                        <li key={i} className="inline mb-2 text-gray-700">
                                            <p className="font-bold">{x.skill}</p>
                                            <p>{x.entidadEmisora} {x.ano ? `- ${x.ano}` : ''}</p>
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

export default Template1;
