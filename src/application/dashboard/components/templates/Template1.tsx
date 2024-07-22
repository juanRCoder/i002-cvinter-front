import { FaSquarePhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi2";
import { FaBehanceSquare } from "react-icons/fa";
import { Template5Props } from "./interfaces-templates";
import './Templates.css';

const Template1: React.FC<Template5Props> = ({ name, lastName, titulo, bio, education, personaInfo, experiencia, techSkills, idiomas, certificados, softSkills }) => {
  return (
    <main className="font-lato shadow-template">
      <header className="py-4 bg-orange-200 grid place-items-center text-white text-center overflow-hidden break-words">
        <h1 className="relative z-20 text-5xl pb-4 tracking-wide text-white overflow-wrap " style={{ maxWidth: "95%" }}>{name} {lastName}</h1>
        <h3 className="relative text-xl w-full overflow-wrap rounded-md">{titulo}</h3>
      </header>
      <div className="grid grid-cols-2 gap-4 p-4">
        <section className="">
          {/* REDES SOCIALES */}
          <article className="py-3 overflow-hidden h-auto break-words whitespace-normal text-gray-700">
            {personaInfo?.map((x, index) => (
              <div key={`${x.icon}-${index}`} className="flex items-center gap-2 flex-wrap mt-2">
                {(() => {
                  switch (x.icon) {
                    case 'github':
                      return (
                        <div className="h-5 w-5 grid place-items-center">
                          <FaGithub className="h-full w-full text-orange-300" />
                        </div>
                      );
                    case 'linkedin':
                      return (
                        <div className="h-5 w-5 grid place-items-center">
                          <FaLinkedin className="h-full w-full text-orange-300" />
                        </div>
                      );
                    case 'portfolio':
                      return (
                        <div className="h-5 w-5 grid place-items-center">
                          <HiIdentification className="h-full w-full text-orange-300" />
                        </div>
                      );
                    case 'behance':
                      return (
                        <div className="h-5 w-5 grid place-items-center">
                          <FaBehanceSquare className="h-full w-full text-orange-300" />
                        </div>
                      );
                    case 'email':
                      return (
                        <div className="h-5 w-5 grid place-items-center">
                          <MdEmail className="h-full w-full text-orange-300" />
                        </div>
                      );
                    case 'telephone':
                      return (
                        <div className="h-5 w-5 grid place-items-center">
                          <FaSquarePhone className="h-full w-full text-orange-300" />
                        </div>
                      );
                    case 'address':
                      return (
                        <div className="h-5 w-5 grid place-items-center">
                          <FaLocationDot className="h-full w-full text-orange-300" />
                        </div>
                      );
                    default:
                      return null;
                  }
                })()}
                <p className="text-sm overflow-wrap" style={{ maxWidth: "85%" }}>{x.dato}</p>
              </div>
            ))}
          </article>
          {/* SOBRE MI */}
          <article className="min-w-full h-auto break-words whitespace-normal text-gray-700 mt-4">
            {bio && bio.length > 0 && (
              <header className="">
                <p className="bg-orange-200 pb-3 text-center text-base tracking-wide font-semibold text-gray-800 rounded-md">SOBRE MI</p>
              </header>
            )}
            <p className="w-[275px] pb-3 text-gray-700 overflow-wrap text-sm">{bio}</p>
          </article>
          {/* EDUCACION */}
          {education && education.length > 0 && (
            <article className="mt-2">
              <header className="mb-2">
                <p className="bg-orange-200 pb-3 text-center text-base tracking-wide font-semibold text-gray-800 rounded-md">EDUCACIÓN</p>
              </header>
              {education.map((x, index) => (
                <div key={index} className="pb-3 text-sm">
                  <p className="font-bold text-gray-700 text-base">{x.carrera}</p>
                  <p className="text-gray-600">{x.instituto} {x.nivel ? `/ ${x.nivel}` : x.nivel}</p>
                  <p className="italic text-gray-600"><b className="italic">{x.dateStart} {x.dateEnd ? `- ${x.dateEnd}` : x.dateEnd}</b></p>
                </div>
              ))}
            </article>
          )}
        </section>
        <section className="">
          {/* EXPERIENCIA */}
          <article className="overflow-hidden break-words whitespace-normal text-gray-700">
            {experiencia && experiencia.length > 0 && (
              <header className="mb-2">
                <p className="bg-orange-200 pb-3 text-center text-base tracking-wide font-semibold text-gray-800 rounded-md">EXPERIENCIA</p>
              </header>
            )}
            {experiencia && experiencia.map((x, i) => (
              <div key={i} className="text-sm pb-3">
                <p className="font-bold text-gray-800 text-base">{x.empresa}</p>
                <div className="relative grid grid-cols-2">
                  <p className="italic text-gray-700">{x.profesion}</p>
                  <p className="absolute right-0 italic flex gap-2 text-gray-600 font-bold">
                    <span>{x.dateStart}</span>
                    <span>{x.dateEnd ? `- ${x.dateEnd}` : x.dateEnd}</span>
                  </p>
                </div>
                {x.descripcion && <p className="text-gray-600">{x.descripcion}</p>}
              </div>
            ))}
          </article>
          {/* TECH SKILLS */}
          {techSkills && techSkills.length > 0 && (
            <article className="overflow-hidden break-words whitespace-normal text-gray-700 mt-2">
              <header className="mb-2">
                <p className="bg-orange-200 pb-3 text-center text-base tracking-wide font-semibold text-gray-800 rounded-md">HABILIDADES TÉCNICAS</p>
              </header>
              {techSkills.map((x, i) => (
                <div key={i} className="mb-1 grid grid-cols-2">
                  <p className="font-semibold text-gray-700">{x.skill}</p>
                  {x.nivel && (
                    <div className={`text-[12px] pb-3 text-center rounded-lg bg-gray-300 
                                        w-${x.nivel == 'principiante' ? '6'
                        : (x.nivel == 'basico' ? '10'
                          : (x.nivel == 'intermedio' ? '24'
                            : (x.nivel == 'avanzado' ? '36' : '')))}`
                    }>
                      {x.nivel == 'principiante' ? '5%'
                        : (x.nivel == 'basico' ? '10%'
                          : (x.nivel == 'intermedio' ? '50%'
                            : (x.nivel == 'avanzado' ? '90%' : '')))}
                    </div>
                  )}
                </div>
              ))}
            </article>
          )}
          {/* SOFT SKILLS */}
          {softSkills && softSkills.length > 0 && (
            <article className="overflow-hidden break-words whitespace-normal text-gray-700 mt-2">
              <header className="mb-2">
                <p className="bg-orange-200 pb-3 text-center text-base tracking-wide font-semibold text-gray-800 rounded-md">HABILIDADES BLANDAS</p>
              </header>
              <ul className="list-disc list-inside text-sm pb-3">
                {softSkills.map((x, i) => (
                  x && (<p key={i} className="text-gray-700">{x}</p>)
                ))}
              </ul>
            </article>
          )}
          {/* IDIOMAS */}
          {idiomas && idiomas.length > 0 && (
            <article className="py-3 overflow-hidden h-auto break-words whitespace-normal text-gray-700">
              <header className="mb-2">
                <p className="bg-orange-200 pb-3 text-center text-base tracking-wide font-semibold text-gray-800 rounded-md">IDIOMAS</p>
              </header>
              <div className="pb-3">
                <div>
                  {idiomas && idiomas.map((x, i) => (
                    x.languaje && (<p key={i} className="text-sm mb-[1px] text-gray-700">{x.languaje} <b>{x.nivel ? `- ${x.nivel}` : ''}</b></p>)))}
                </div>
              </div>
            </article>
          )}
          {/* CERTIFICADOS */}
          {certificados && certificados.length > 0 && (
            <article className="overflow-hidden break-words whitespace-normal text-gray-700 mt-2">
              <header className="mb-2">
                <p className="bg-orange-200 pb-3 text-center text-base tracking-wide font-semibold text-gray-800 rounded-md">CERTIFICADOS</p>
              </header>
              <div className="pb-3">
                <div>
                  {certificados && certificados.map((x, i) => (
                    <li key={i} className="text-sm inline mb-2 text-gray-700">
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
