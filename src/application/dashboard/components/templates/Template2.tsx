
import { FaSquarePhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi2";
import { FaBehanceSquare } from "react-icons/fa";
import { Template5Props } from "./interfaces-templates";

const Template2: React.FC<Template5Props> = ({ name, lastName, titulo, bio, education, personaInfo, experiencia, techSkills, idiomas, certificados, softSkills }) => {
  return (
    <main className="w-full h-full p-8 shadow-template">
      <header className=" text-slate-500 grid place-items-center py-2 text-center overflow-hidden break-words">
        <h1 className="text-5xl tracking-wide overflow-wrap" style={{ maxWidth: "95%" }}>{name} {lastName}</h1>
        <h3 className="w-full text-xl overflow-wrap py-3 border-b border-slate-300">{titulo}</h3>
      </header>

      <div className="grid grid-cols-2 gap-8">
        <section>
          {/* SOBRE MI */}
          <article className="min-w-full break-words whitespace-normal text-gray-700 mt-2">
            {bio && bio.length > 0 && (
              <header className="w-[275px]">
                <p className="py-2 text-left text-base tracking-wide font-semibold text-slate-500 border-b border-slate-300 ">SOBRE MI</p>
              </header>
            )}
            <p className="w-[275px] text-gray-700 overflow-wrap text-sm">{bio}</p>
          </article>
          {/* EXPERIENCIA */}
          {experiencia && experiencia.length > 0 && (
            <article className="w-[275px] overflow-hidden break-words whitespace-normal text-gray-700 mt-2">
              <header className=" w-[275px]">
                <p className="py-2 text-left text-base tracking-wide font-semibold text-slate-500 border-b border-slate-300">EXPERIENCIA</p>
              </header>
              {experiencia.map((x, i) => (
                <div key={i} className="mb-2">
                  <p className=" italic grid grid-cols-2 text-gray-600">
                    <span className="">Inicio: {x.dateStart}</span>
                    <span className="">{x.dateEnd ? `Fin: ${x.dateEnd}` : ''}</span>
                  </p>
                  <p className="font-bold text-slate-500">{x.empresa}</p>
                  <p className="italic text-slate-500">{x.profesion}</p>
                  <p className="text-gray-700 overflow-wrap text-sm">{x.descripcion}</p>
                </div>
              ))}
            </article>
          )}
          {/* IDIOMAS */}
          {idiomas && idiomas.length > 0 && (
            <article className="min-w-full break-words whitespace-normal text-gray-700 mt-2">
              <header className="">
                <p className="py-2 text-left text-base tracking-wide font-semibold text-slate-500 border-b border-slate-300">IDIOMAS</p>
              </header>
              <div className="">
                <div>
                  {idiomas && idiomas.map((x, i) => (
                    x.languaje && (<p key={i} className="text-sm mb-[1px] text-gray-700">{x.languaje} {x.nivel ? `- ${x.nivel}` : ''}</p>)))}
                </div>
              </div>
            </article>
          )}
        </section>
        <section>
          {/* TECH SKILLS */}
          {techSkills && techSkills.length > 0 && (
            <article className="text-sm min-w-full break-words whitespace-normal text-gray-700 mt-2">
              <header className="">
                <p className="py-2 text-left text-base tracking-wide font-semibold text-slate-500 border-b border-slate-300">HABILIDADES TÉCNICAS</p>
              </header>
              {techSkills.map((x, i) => (
                <div key={i} className="">
                  <p className="text-gray-700">{x.skill} <b>{x.nivel ? `- ${x.nivel}` : ''}</b></p>
                </div>
              ))}
            </article>
          )}
          {/* SOFT SKILLS */}
          {softSkills && softSkills.length > 0 && (
            <article className="text-sm min-w-full break-words whitespace-normal text-gray-700 mt-4">
              <header className="">
                <p className="py-2 text-left text-base tracking-wide font-semibold text-slate-500 border-b border-slate-300">HABILIDADES BLANDAS</p>
              </header>
              <div className="list-outside">
                {softSkills.map((x, i) => (
                  <p key={i} className="text-gray-700">{x}</p>
                ))}
              </div>
            </article>
          )}
          {/* EDUCATION */}
          {education && education.length > 0 && (
            <article className="min-w-full break-words whitespace-normal text-gray-700 mt-4">
              <header className="">
                <p className="py-2 text-left text-base tracking-wide font-semibold text-slate-500 border-b border-slate-300">EDUCACIÓN</p>
              </header>
              {education.map(x => (
                <div key={x.dateStart} className="mb-4">
                  <p className="font-bold text-slate-500">{x.carrera}</p>
                  <p className="text-sm text-gray-700">{x.instituto} {x.dateStart ? `| ${x.dateStart}` : ''} {x.dateEnd ? `- ${x.dateEnd}` : ''}</p>
                  <p className="text-sm italic text-gray-700">{x.nivel}</p>
                </div>
              ))}
            </article>
          )}
          {/* CERTIFICADOS */}
          {certificados && certificados.length > 0 && (
            <article className="min-w-full break-words whitespace-normal text-gray-700 mt-4">
              <header className="">
                <p className="py-2 text-left text-base tracking-wide font-semibold text-slate-500 border-b border-slate-300">CERTIFICADOS</p>
              </header>
              <div className="">
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
      {/* REDES */}
      <article className="py-3 overflow-hidden h-auto break-words whitespace-normal text-gray-700">
        {personaInfo && personaInfo.length > 0 && (
          <header className="w-full">
            <p className="py-2 text-left text-base tracking-wide font-semibold text-slate-500 border-b border-slate-300 ">REDES SOCIALES</p>
          </header>
        )}
        {personaInfo?.map((x, index) => (
          <div key={`${x.icon}-${index}`} className="flex items-center gap-2 flex-wrap mt-2">
            {(() => {
              switch (x.icon) {
                case 'github':
                  return (
                    <div className="h-5 w-5 grid place-items-center">
                      <FaGithub className="h-full w-full text-gray-700" />
                    </div>
                  );
                case 'linkedin':
                  return (
                    <div className="h-5 w-5 grid place-items-center">
                      <FaLinkedin className="h-full w-full text-gray-700" />
                    </div>
                  );
                case 'portfolio':
                  return (
                    <div className="h-5 w-5 grid place-items-center">
                      <HiIdentification className="h-full w-full text-gray-700" />
                    </div>
                  );
                case 'behance':
                  return (
                    <div className="h-5 w-5 grid place-items-center">
                      <FaBehanceSquare className="h-full w-full text-gray-700" />
                    </div>
                  );
                case 'email':
                  return (
                    <div className="h-5 w-5 grid place-items-center">
                      <MdEmail className="h-full w-full text-gray-700" />
                    </div>
                  );
                case 'telephone':
                  return (
                    <div className="h-5 w-5 grid place-items-center">
                      <FaSquarePhone className="h-full w-full text-gray-700" />
                    </div>
                  );
                case 'address':
                  return (
                    <div className="h-5 w-5 grid place-items-center">
                      <FaLocationDot className="h-full w-full text-gray-700" />
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
    </main>
  );
}

export default Template2;
