import { FaSquarePhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi2";
import { FaBehanceSquare } from "react-icons/fa";
import { Template5Props } from "./interfaces-templates";

const Template3: React.FC<Template5Props> = ({ name, lastName, titulo, bio, education, personaInfo, experiencia, techSkills, idiomas, certificados, softSkills }) => {
  return (
    <main className="w-full h-full font-PTSans shadow-template">
      <div className="flex">
        <section className="w-1/2 bg-blue-950">
          <header className="py-4 text-white text-left overflow-hidden break-words px-8">
            <h1 className="relative z-20 text-5xl pb-4 tracking-wide overflow-wrap " style={{ maxWidth: "95%" }}>{name} {lastName}</h1>
            <h3 className="relative text-xl w-full overflow-wrap rounded-md">{titulo}</h3>
          </header>
          {/* REDES */}
          <article className="py-3 overflow-hidden h-auto break-words whitespace-normal text-white px-8">
            {personaInfo?.map((x, index) => (
              <div key={`${x.icon}-${index}`} className="flex items-center gap-2 flex-wrap mt-2">
                {(() => {
                  switch (x.icon) {
                    case 'github':
                      return (
                        <div className="h-5 w-5 grid place-items-center">
                          <FaGithub className="h-full w-full text-white" />
                        </div>
                      );
                    case 'linkedin':
                      return (
                        <div className="h-5 w-5 grid place-items-center">
                          <FaLinkedin className="h-full w-full text-white" />
                        </div>
                      );
                    case 'portfolio':
                      return (
                        <div className="h-5 w-5 grid place-items-center">
                          <HiIdentification className="h-full w-full text-white" />
                        </div>
                      );
                    case 'behance':
                      return (
                        <div className="h-5 w-5 grid place-items-center">
                          <FaBehanceSquare className="h-full w-full text-white" />
                        </div>
                      );
                    case 'email':
                      return (
                        <div className="h-5 w-5 grid place-items-center">
                          <MdEmail className="h-full w-full text-white" />
                        </div>
                      );
                    case 'telephone':
                      return (
                        <div className="h-5 w-5 grid place-items-center">
                          <FaSquarePhone className="h-full w-full text-white" />
                        </div>
                      );
                    case 'address':
                      return (
                        <div className="h-5 w-5 grid place-items-center">
                          <FaLocationDot className="h-full w-full text-white" />
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
          {/* EDUCATION */}
          {education && education.length > 0 && (
            <article className="min-w-full break-words whitespace-normal text-white mt-4">
              <header className="">
                <p className="py-2 text-left text-base tracking-wide font-semibold text-white border-b border-white px-8">EDUCACIÓN</p>
              </header>
              {education.map(x => (
                <div key={x.dateStart} className="mb-4 text-white px-8">
                  <p className="font-bold text-white">{x.carrera}</p>
                  <p className="text-sm">{x.instituto} {x.dateStart ? `| ${x.dateStart}` : ''} {x.dateEnd ? `- ${x.dateEnd}` : ''}</p>
                  <p className="text-sm italic">{x.nivel}</p>
                </div>
              ))}
            </article>
          )}
          {/* IDIOMAS */}
          {idiomas && idiomas.length > 0 && (
            <article className="min-w-full break-words whitespace-normal text-white mt-2">
              <header className="">
                <p className="py-2 text-left text-base tracking-wide font-semibold text-white border-b border-white px-8">IDIOMAS</p>
              </header>
              <div className="">
                <div>
                  {idiomas && idiomas.map((x, i) => (
                    x.languaje && (<p key={i} className="text-sm mb-[1px] text-white px-8">{x.languaje} {x.nivel ? `- ${x.nivel}` : ''}</p>)))}
                </div>
              </div>
            </article>
          )}
          {/* CERTIFICADOS */}
          {certificados && certificados.length > 0 && (
            <article className="min-w-full break-words whitespace-normal text-white mt-4 mb-10">
              <header className="">
                <p className="py-2 text-left text-base tracking-wide font-semibold text-white border-b border-white px-8">CERTIFICADOS</p>
              </header>
              <div className="px-8">
                <div>
                  {certificados && certificados.map((x, i) => (
                    <li key={i} className="text-sm inline mb-2 text-white">
                      <p className="font-bold">{x.skill}</p>
                      <p>{x.entidadEmisora} {x.ano ? `- ${x.ano}` : ''}</p>
                    </li>
                  ))}
                </div>
              </div>
            </article>
          )}
        </section>

        <section className="pl-4 w-1/2 shadow-left1">
          {/* SOBRE MI */}
          <article className="min-w-full break-words whitespace-normal text-blue-950 mt-2">
            {bio && bio.length > 0 && (
              <header className="">
                <p className="py-2 text-left text-base tracking-wide font-semibold text-blue-950 border-b border-blue-950">SOBRE MI</p>
              </header>
            )}
            <p className="w-[290px] text-blue-950 overflow-wrap text-sm">{bio}</p>
          </article>
          {/* EXPERIENCIA */}
          {experiencia && experiencia.length > 0 && (
            <article className="w-[275px] overflow-hidden break-words whitespace-normal text-blue-950 mt-2">
              <header className=" w-[275px]">
                <p className="py-2 text-left text-base tracking-wide font-semibold text-blue-950 border-b border-blue-950">EXPERIENCIA</p>
              </header>
              {experiencia.map((x, i) => (
                <div key={i} className="mb-2">
                  <p className=" italic grid grid-cols-2 text-blue-950">
                    <span className="">Inicio: {x.dateStart}</span>
                    <span className="">{x.dateEnd ? `Fin: ${x.dateEnd}` : ''}</span>
                  </p>
                  <p className="font-bold text-blue-950">{x.empresa}</p>
                  <p className="italic ">{x.profesion}</p>
                  <p className="overflow-wrap text-sm">{x.descripcion}</p>
                </div>
              ))}
            </article>
          )}
          {/* TECH SKILLS */}
          {techSkills && techSkills.length > 0 && (
            <article className="text-sm min-w-full break-words whitespace-normal text-blue-950 mt-2">
              <header className="">
                <p className="py-2 text-left text-base tracking-wide font-semibold text-blue-950 border-b border-blue-950">HABILIDADES TÉCNICAS</p>
              </header>
              {techSkills.map((x, i) => (
                <div key={i} className="text-blue-950">
                  <p className="text-blue-950">{x.skill}{x.nivel ? `- ${x.nivel}` : ''}</p>
                </div>
              ))}
            </article>
          )}
          {/* SOFT SKILLS */}
          {softSkills && softSkills.length > 0 && (
            <article className="mb-10 text-sm min-w-full break-words whitespace-normal text-blue-950 mt-4">
              <header className="">
                <p className="py-2 text-left text-base tracking-wide font-semibold text-blue-950 border-b border-blue-950">HABILIDADES BLANDAS</p>
              </header>
              <div className="list-outside">
                {softSkills.map((x, i) => (
                  <p key={i} className="text-gray-700">{x}</p>
                ))}
              </div>
            </article>
          )}
        </section>
      </div>
    </main>
  );
}

export default Template3;
