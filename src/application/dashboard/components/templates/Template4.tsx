import { FaSquarePhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi2";
import { FaBehanceSquare } from "react-icons/fa";
import { Template5Props } from "./interfaces-templates";

const Template4: React.FC<Template5Props> = ({ name, lastName, titulo, bio, education, personaInfo, experiencia, techSkills, idiomas, certificados, softSkills }) => {
  return (
    <main className="font-lato shadow-template pt-5">
      <section className="pb-10">
        <header className="shadow-topBotton pb-4 relative bg-green-700 text-slate-50">
          <h1 className="text-4xl text-text-center tracking-widest text-center">{name} {lastName}</h1>
          <h3 className="text-center text-lg flex items-center gap-4 justify-center">{titulo}</h3>
        </header>
        {/* REDES SOCIALES */}
        <article className=" px-10 grid grid-cols-2 py-3 overflow-hidden h-auto break-words whitespace-normal text-gray-700">
          {personaInfo?.map((x, index) => (
            <div key={`${x.icon}-${index}`} className="flex items-center gap-2 flex-wrap mt-2">
              {(() => {
                switch (x.icon) {
                  case 'github':
                    return (
                      <div className="h-5 w-5 grid place-items-center">
                        <FaGithub className="h-full w-full text-green-700" />
                      </div>
                    );
                  case 'linkedin':
                    return (
                      <div className="h-5 w-5 grid place-items-center">
                        <FaLinkedin className="h-full w-full text-green-700" />
                      </div>
                    );
                  case 'portfolio':
                    return (
                      <div className="h-5 w-5 grid place-items-center">
                        <HiIdentification className="h-full w-full text-green-700" />
                      </div>
                    );
                  case 'behance':
                    return (
                      <div className="h-5 w-5 grid place-items-center">
                        <FaBehanceSquare className="h-full w-full text-green-700" />
                      </div>
                    );
                  case 'email':
                    return (
                      <div className="h-5 w-5 grid place-items-center">
                        <MdEmail className="h-full w-full text-green-700" />
                      </div>
                    );
                  case 'telephone':
                    return (
                      <div className="h-5 w-5 grid place-items-center">
                        <FaSquarePhone className="h-full w-full text-green-700" />
                      </div>
                    );
                  case 'address':
                    return (
                      <div className="h-5 w-5 grid place-items-center">
                        <FaLocationDot className="h-full w-full text-green-700" />
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

        <section className="grid grid-cols-2 gap-4 px-10">
          {/* SOBRE MI */}
          <article className="min-w-full h-auto break-words whitespace-normal text-gray-700 mt-4">
            {bio && bio.length > 0 && (
              <header className="">
                <p className="pb-3 text-left text-base tracking-wide font-semibold text-gray-800 rounded-md" style={{ letterSpacing: '5px' }}>SOBRE MI</p>
              </header>
            )}
            <p className="w-[262px]  pb-3 text-gray-700 overflow-wrap text-sm">{bio}</p>
          </article>
          {/* EDUCACION */}
          <article className="min-w-full h-auto break-words whitespace-normal text-gray-700 mt-4">
            {education && education.length > 0 && (
              <>
                <header className="">
                  <p className="pb-3 text-left text-base tracking-wide font-semibold text-gray-800 rounded-md" style={{ letterSpacing: '5px' }}>EDUCACIÓN</p>
                </header>
                {education.map((x, index) => (
                  <div key={index} className="pb-3 text-sm">
                    <p className="font-bold text-gray-700 text-base">{x.carrera}</p>
                    <p className="text-gray-600">{x.instituto} {x.nivel ? `/ ${x.nivel}` : x.nivel}</p>
                    <p className="italic text-gray-600"><b className="italic">{x.dateStart} {x.dateEnd ? `- ${x.dateEnd}` : x.dateEnd}</b></p>
                  </div>
                ))}
              </>
            )}
          </article>
        </section>
        {/* EXPERIENCIA */}
        <article className="px-10 w-full overflow-hidden break-words whitespace-normal text-gray-700">
          {experiencia && experiencia.length > 0 && (
            <header className="">
              <p className="pb-3 text-left text-base tracking-wide font-semibold text-gray-800 rounded-md" style={{ letterSpacing: '5px' }}>EXPERIENCIA</p>
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
        <section className="grid grid-cols-2 gap-3 px-10">
          <div>
            {/* TECH SKILLS */}
            {techSkills && techSkills.length > 0 && (
              <article className="overflow-hidden break-words whitespace-normal text-gray-700 mt-2">
                <header className="">
                  <p className="pb-3 text-left text-base tracking-wide font-semibold text-gray-800 rounded-md" style={{ letterSpacing: '5px' }}>HABILIDADES TÉCNICAS</p>
                </header>
                {techSkills.map((x, i) => (
                  <div key={i} className="grid grid-cols-2 text-sm mb-1">
                    <p className="text-gray-700">{x.skill}</p>
                    <div className={`pb-2 text-center rounded-lg bg-gray-300 
                    w-${x.nivel == 'principiante' ? '6'
                        : (x.nivel == 'basico' ? '10'
                          : (x.nivel == 'intermedio' ? '24'
                            : (x.nivel == 'avanzado' ? '32' : '')))}`
                    }>
                      {x.nivel == 'principiante' ? '5%'
                        : (x.nivel == 'basico' ? '10%'
                          : (x.nivel == 'intermedio' ? '50%'
                            : (x.nivel == 'avanzado' ? '90%' : '')))}
                    </div>
                  </div>
                ))}
              </article>
            )}
            {/* IDIOMAS */}
            {idiomas && idiomas.length > 0 && (
              <article className="overflow-hidden break-words whitespace-normal text-gray-700 mt-2">
                <header className="mb-2">
                  <p className="pb-3 text-left text-base tracking-wide font-semibold text-gray-800 rounded-md" style={{ letterSpacing: '5px' }}>IDIOMAS</p>
                </header>
                <div className="pb-3">
                  <div>
                    {idiomas && idiomas.map((x, i) => (
                      x.languaje && (<p key={i} className="text-sm mb-[1px] text-gray-700">{x.languaje} <b>{x.nivel ? `- ${x.nivel}` : ''}</b></p>)))}
                  </div>
                </div>
              </article>
            )}
          </div>
          <div>
            {/* SOFT SKILLS */}
            {softSkills && softSkills.length > 0 && (
              <article className="overflow-hidden break-words whitespace-normal text-gray-700 mt-2">
                <header className="">
                  <p className="pb-3 text-left text-base tracking-wide font-semibold text-gray-800 rounded-md" style={{ letterSpacing: '5px' }}>HABILIDADES BLANDAS</p>
                </header>
                <ul className="list-disc list-inside text-sm pb-3">
                  {softSkills.map((x, i) => (
                    x && (<p key={i} className="text-gray-700">{x}</p>)
                  ))}
                </ul>
              </article>
            )}
            {/* CERTIFICADOS */}
            {certificados && certificados.length > 0 && (
              <article className="overflow-hidden break-words whitespace-normal text-gray-700 mt-2">
                <header className="mb-2">
                  <p className="pb-3 text-left text-base tracking-wide font-semibold text-gray-800 rounded-md" style={{ letterSpacing: '5px' }}>CERTIFICADOS</p>
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
          </div>
        </section>
      </section>
    </main>
  )
}

export default Template4