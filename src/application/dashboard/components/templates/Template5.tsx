import { FaSquarePhone, FaLocationDot, FaSquareBehance } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi2";
import { Template5Props } from "./interfaces-templates";

const Template5: React.FC<Template5Props> = ({ name, lastName, bio, titulo, education, experiencia, personaInfo, techSkills, idiomas, certificados, softSkills }) => {
  return (
    <main className="font-sans shadow-template pb-12">

      <header className="pb-4 relative text-slate-700 px-8 mb-5">
        <h1 className="text-4xl text-text-left">{name} {lastName}</h1>
        <h3 className="text-lg flex items-center gap-4 justify-start">{titulo}</h3>
      </header>
      <section className="grid grid-cols-2 gap-4 px-8">
        {/* REDES 1 */}
        <section className="max-w-full flex flex-col justify-start h-auto break-words whitespace-normal text-gray-700">
          {personaInfo && personaInfo.map((x, index) => (
            (['github', 'linkedin', 'portfolio', 'behance'].includes(x.icon)) && (
              <div key={`${x.icon}-${index}`} className="py-2 flex items-center gap-2  max-w-62 flex-wrap overflow-hidden">
                {(() => {
                  switch (x.icon) {
                    case 'github':
                      return (
                        <div className="h-5 w-5 grid place-items-center">
                          <FaGithub className="h-full w-full text-slate-700" />
                        </div>
                      );
                    case 'linkedin':
                      return (
                        <div className="h-5 w-5 grid place-items-center">
                          <FaLinkedin className="h-full w-full text-slate-700" />
                        </div>
                      );
                    case 'portfolio':
                      return (
                        <div className="h-5 w-5 grid place-items-center">
                          <HiIdentification className="h-full w-full text-slate-700" />
                        </div>
                      );
                    case 'behance':
                      return (
                        <div className="h-5 w-5 grid place-items-center">
                          <FaSquareBehance className="h-full w-full text-slate-700" />
                        </div>
                      );
                    default:
                      return null;
                  }
                })()}
                <p className="text-sm overflow-wrap max-w-[85%]">{x.dato}</p>
              </div>
            )
          ))}
        </section>
        {/* IDIOMAS */}
        <section className="max-w-full flex flex-col justify-start  h-auto break-words whitespace-normal text-gray-700">
          {idiomas?.map((x, i) => (
            <p className="py-2 text-sm" key={i} >{x.languaje} <b>{x.nivel ? `- ${x.nivel}` : ''}</b></p>
          ))}
        </section>
      </section>

      <section className="grid grid-cols-2 gap-4 px-8">
        <div className="">
          {/* SOBRE MI */}
          {bio && bio.length > 0 && (
            <article className="min-w-full h-auto break-words whitespace-normal text-gray-700 mt-4">
              <header className="flex justify-start items-center gap-3 text-slate-700">
                <p className="text-3xl italic font-thin tracking-tighter">SOBRE MI</p>
              </header>
              <p className="text-sm text-slate-700 mt-2">{bio}</p>
            </article>
          )}
          {/* REDES 2 */}
          {personaInfo && personaInfo.length > 0 && (
            <article className="min-w-full h-auto break-words whitespace-normal text-gray-700 mt-4">
              <header className="flex justify-start items-center gap-3 mt-2">
                <p className="text-3xl italic font-thin tracking-tighter">CONTACTO</p>
              </header>
              <section className="py-3 overflow-hidden h-auto break-words whitespace-normal text-gray-700">
                {personaInfo?.map((x, index) => (
                  (['email', 'telephone', 'address'].includes(x.icon)) && (
                    <div key={`${x.icon}-${index}`} className="flex items-center gap-2 flex-wrap mt-2 text-sm">
                      {(() => {
                        switch (x.icon) {
                          case 'email':
                            return (
                              <div className="h-5 w-5 grid place-items-center">
                                <MdEmail className="h-full w-full text-slate-700" />
                              </div>
                            );
                          case 'telephone':
                            return (
                              <div className="h-5 w-5 grid place-items-center">
                                <FaSquarePhone className="h-full w-full text-slate-700" />
                              </div>
                            );
                          case 'address':
                            return (
                              <div className="h-5 w-5 grid place-items-center">
                                <FaLocationDot className="h-full w-full text-slate-700" />
                              </div>
                            );
                          default:
                            return null;
                        }
                      })()}
                      <p className="text-sm overflow-wrap" style={{ maxWidth: "85%" }}>{x.dato}</p>
                    </div>
                  )))}
              </section>
            </article>
          )}
          {/* EDUCACION */}
          {education && education.length > 0 && (
            <article className="min-w-full h-auto break-words whitespace-normal text-slate-700 mt-4">
              <header className="flex justify-start items-center gap-3 mt-2 ">
                <p className="text-3xl italic font-thin tracking-tighter">EDUCACIÓN</p>
              </header>
              {education?.map((x, index) => (
                <div key={index} className="pb-3 text-sm mt-2">
                  <p className="font-bold">{x.carrera}</p>
                  <p className="">{x.instituto} {x.nivel ? `/ ${x.nivel}` : x.nivel}</p>
                  <p className="italic"><b className="italic">{x.dateStart} {x.dateEnd ? `- ${x.dateEnd}` : x.dateEnd}</b></p>
                </div>
              ))}
            </article>
          )}
          {/* SOFT SKILLS */}
          {softSkills && softSkills.length > 0 && (
            <article className="min-w-full h-auto break-words whitespace-normal text-slate-700 mt-4">
              <header className="flex justify-start items-center gap-3">
                <p className="text-3xl italic font-thin">SOFT SKILLS</p>
              </header>
              <section>
                {softSkills?.map(x => <p className="text-sm mt-2" key={x}>{x}</p>)}
              </section>
            </article>
          )}
        </div>

        <div className="">
          {/* EXPERIENCIA */}
          {experiencia && experiencia.length > 0 && (
            <article className="min-w-full h-auto break-words whitespace-normal text-slate-700 mt-4">
              <header className="flex justify-start items-center gap-3">
                <p className="text-3xl italic font-thin">EXPERIENCIA</p>
              </header>
              <section className={`${experiencia && experiencia.length > 0 ? '' : ''}`}>
                {experiencia?.map((x, i) => (
                  <div key={i} className="text-sm mt-2">
                    <h3 className="font-bold">{x.profesion}</h3>
                    <p className="font-semibold">{x.empresa}</p>
                    <span className="font-thin italic">{x.dateStart} {x.dateEnd ? `- ${x.dateEnd}` : ''}</span>
                    <p className="">{x.descripcion}</p>
                  </div>
                ))}
              </section>
            </article>
          )}
          {/* TECH SKILLS */}
          {techSkills && techSkills.length > 0 && (
            <article className="min-w-full h-auto break-words whitespace-normal text-slate-700 mt-4">
              <header className=" flex justify-start items-center gap-3">
                <p className="text-3xl italic font-thin">TECH SKILLS</p>
              </header>
              <section>
                {techSkills?.map(x => (
                  <p className="text-sm mt-2" key={x.skill}>{x.skill} {x.nivel ? `- ${x.nivel}` : ''}</p>
                ))}
              </section>
            </article>
          )}
          {/* CERTIFICADOS */}
          {certificados && certificados.length > 0 && (
            <article className="min-w-full h-auto break-words whitespace-normal text-slate-700 mt-4">
              <header className="flex justify-start items-center gap-3">
                <p className="text-3xl italic font-thin">CERTIFICADOS</p>
              </header>
              <section>
                {certificados && certificados.map((x, i) => (
                  <div key={i} className="text-sm mt-2">
                    <p className="inline font-bold italic">{x.skill}</p>
                    <p className=" italic">{x.entidadEmisora}  <b>{x.ano ? `| ${x.ano}` : ''}</b></p>
                  </div>
                ))}
              </section>
            </article>
          )}
        </div>
      </section>
    </main >
  )
}

export default Template5