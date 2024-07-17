
import { FaSquarePhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi2";
import { FaBehanceSquare } from "react-icons/fa";
import { Template5Props } from "./interfaces-templates";

const Template2: React.FC<Template5Props> = ({ name, lastName, titulo, bio, education, personaInfo, experiencia, techSkills, idiomas, certificados, softSkills }) => {
    return (
        <main className="w-full h-full bg-blue-50 p-8 font-sans">
            <header className="mb-8 text-center bg-blue-200 py-4">
                <h1 className="text-5xl tracking-wide font-serif text-slate-950">{name} {lastName}</h1>
                <h3 className="text-xl mt-2 text-slate-800">{titulo}</h3>
            </header>

            <div className="flex gap-10">
                <section className="w-1/3 space-y-8">
                    <div className="space-y-4 text-blue-900">
                        {personaInfo && personaInfo.map(x => (
                            <div key={x.dato} className="flex items-center gap-2">
                                {(() => {
                                    switch (x.icon) {
                                        case 'github':
                                            return <FaGithub className="text-blue-800" />;
                                        case 'linkedin':
                                            return <FaLinkedin className="text-blue-800" />;
                                        case 'portfolio':
                                            return <HiIdentification className="text-blue-800" />;
                                        case 'behance':
                                            return <FaBehanceSquare className="text-blue-800" />;
                                        case 'email':
                                            return <MdEmail className="text-blue-800" />;
                                        case 'telephone':
                                            return <FaSquarePhone className="text-blue-800" />;
                                        case 'address':
                                            return <FaLocationDot className="text-blue-800" />;
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
                        <p className="text-blue-900">{bio}</p>
                    </article>

                    {education && education.length > 0 && (
                        <article>
                            <header className="mb-2">
                                <p className="text-2xl tracking-wide font-semibold text-slate-950 underline decoration-blue-950">EDUCACIÓN</p>
                            </header>
                            {education.map(x => (
                                <div key={x.dateStart} className="mb-4">
                                    <p className="font-bold text-blue-900">{x.carrera}</p>
                                    <p className="text-blue-700">{x.instituto} - {x.dateStart} {x.dateEnd}</p>
                                    <p className="italic text-blue-700">{x.nivel}</p>
                                </div>
                            ))}
                        </article>
                    )}
                </section>

                <section className="w-2/3 space-y-8 text-blue-900">
                    {experiencia && experiencia.length > 0 && (
                        <article>
                            <header className="mb-2">
                                <p className="text-2xl tracking-wide font-semibold text-slate-950 underline decoration-blue-950">EXPERIENCIA</p>
                            </header>
                            {experiencia.map((x, i) => (
                                <div key={i} className="mb-4">
                                    <p className="italic flex gap-2 text-gray-600">
                                        <span>{x.dateStart}</span>
                                        <span>{x.dateEnd}</span>
                                    </p>
                                    <p className="font-bold text-blue-900">{x.empresa}</p>
                                    <p className="italic text-blue-900">{x.profesion}</p>
                                    <p className="text-blue-700">{x.descripcion}</p>
                                </div>
                            ))}
                        </article>
                    )}

                    {techSkills && techSkills.length > 0 && (
                        <article>
                            <header className="mb-2">
                                <p className="text-2xl tracking-wide font-semibold text-slate-950 underline decoration-blue-950">HABILIDADES TÉCNICAS</p>
                            </header>
                            {techSkills.map((x, i) => (
                                <div key={i} className="mb-4">
                                    <p className="font-semibold text-blue-900">{x.skill}</p>
                                    <div className={`h-2 rounded-full bg-blue-300 w-${x.nivel === 'principiante' ? '1/4' : x.nivel === 'basico' ? '1/2' : x.nivel === 'intermedio' ? '3/4' : 'full'}`}></div>
                                </div>
                            ))}
                        </article>
                    )}

                    {softSkills && softSkills.length > 0 && (
                        <article>
                            <header className="mb-2">
                                <p className="text-2xl tracking-wide font-semibold text-slate-950 underline decoration-blue-950">HABILIDADES BLANDAS</p>
                            </header>
                            <ul className="list-disc list-inside">
                                {softSkills.map((x, i) => (
                                    <li key={i} className="text-blue-900">{x}</li>
                                ))}
                            </ul>
                        </article>
                    )}

                    {(idiomas && idiomas.length > 0) || (certificados && certificados.length > 0) && (
                        <article>
                            <header className="mb-2">
                                <p className="text-2xl tracking-wide font-semibold text-slate-950 underline decoration-blue-950">IDIOMAS {certificados && certificados.length > 0 ? 'y CERTIFICADOS' : ''}</p>
                            </header>
                            <div className="flex gap-10">
                                <div>
                                    {idiomas && idiomas.map((x, i) => (
                                        <li key={i} className="mb-2 text-blue-900">{x.languaje} - {x.nivel}</li>
                                    ))}
                                </div>
                                <div>
                                    {certificados && certificados.map((x, i) => (
                                        <li key={i} className="mb-2 text-blue-900">
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

export default Template2;
