import { FaSquarePhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi2";
import { FaBehanceSquare } from "react-icons/fa";
import { Template5Props } from "./interfaces-templates";

const Template4: React.FC<Template5Props> = ({ name, lastName, titulo, bio, education, personaInfo, experiencia, techSkills, idiomas, certificados, softSkills }) => {
  return (
    <main className="w-full h-full bg-stone-50 outline outline-1 outline-stone-200">
      <section className="py-10">
        <header className="relative">
          <h1 className="text-4xl text-center tracking-widest">{name} {lastName}</h1>
          <h3 className="text-center text-lg mt-2 flex items-center gap-4 justify-center">
            <span className="block h-2 w-2 bg-black rounded-full" />
            {titulo}
            <span className="block h-2 w-2 bg-black rounded-full" />
          </h3>
        </header>
        <div className="" style={{ transform: 'scale(.7)' }}>
          <section className="justify-center items-center text-md flex gap-3 my-4">
            {personaInfo && personaInfo.map(x => (
              <div key={x.dato} className="flex items-center gap-2">
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
                    default:
                      return null;
                  }
                })()}
                {(() => {
                  switch (x.icon) {
                    case 'github':
                      return <p>{x.dato}</p>;
                    case 'linkedin':
                      return <p>{x.dato}</p>;
                    case 'portfolio':
                      return <p>{x.dato}</p>;
                    case 'behance':
                      return <p>{x.dato}</p>;
                    default:
                      return null;
                  }
                })()}
              </div>
            ))}
          </section>
          <section className="justify-center text-md flex gap-3 ">
            {personaInfo && personaInfo.map(x => (
              <div key={x.icon} className="flex items-center gap-2">
                {(() => {
                  switch (x.icon) {
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
                {(() => {
                  switch (x.icon) {
                    case 'telephone':
                      return <p>{x.dato}</p>;
                    case 'address':
                      return <p>{x.dato}</p>;
                    case 'email':
                      return <p>{x.dato}</p>;
                    default:
                      return null;
                  }
                })()}
              </div>
            ))}
          </section>
        </div>
        <section className="flex gap-5" style={{ transform: 'scale(.8)', marginBottom: '-35px' }}>
          <article className="w-1/2">
            <header className="mb-5 flex justify-start gap-3">
              <p className="text-xl tracking-wider" style={{ letterSpacing: '5px' }}>SOBRE MI</p>
            </header>
            <p className="max-w-80">{bio}</p>
          </article>
          <article className="w-1/2">
            {education && education.length > 0 && (
              <header className="mb-5 flex justify-start gap-3">
                <p className="text-xl tracking-wider" style={{ letterSpacing: '5px' }}>ESTUDIOS</p>
              </header>
            )}
            <section>
              {education && education.map(x => (
                <aside>
                  <div className="flex flex-col">
                    <p className="">{x.dateStart} {x.dateEnd}</p>
                    <p className="font-bold">{x.carrera}</p>
                  </div>
                  <div className="flex flex-col italic">
                    <p className="font-semibold">{x.instituto}</p>
                    <p>{x.nivel}</p>
                  </div>
                </aside>
              ))}
            </section>
          </article>
        </section>

        <div className="flex gap-5" style={{ transform: 'scale(.8)', marginBottom: '-55px' }}>
          <div className="flex flex-col gap-5 w-1/2">
            <section className="">
              {experiencia && experiencia.length > 0 && (
                <header className="mb-5 flex justify-start items-center gap-3">
                  <p className="text-xl tracking-wider" style={{ letterSpacing: '5px' }}>EXPERIENCIA</p>
                </header>
              )}
              <article className="flex flex-col gap-5">
                {experiencia && experiencia.map((x, i) => (
                  <section key={i} className="flex flex-col">
                    <div className="italic flex gap-3">
                      <p className="font-thin">{x.dateStart}</p>
                      <p className="font-semibold">{x.dateEnd}</p>
                    </div>
                    <div className="">
                      <h2 className="font-bold">{x.empresa}</h2>
                      <p className="font-semibold italic">{x.profesion}</p>
                      <div className="text-sm">
                        <p>{x.descripcion}</p>
                      </div>
                    </div>
                  </section>
                ))}
              </article>
            </section>
          </div>
          <div className="w-1/2">
            <div className="">
              <section className="pb-8 rounded-sm">
                {techSkills && techSkills.length > 0 && (
                  <header className="mb-5 flex justify-start items-center gap-3">
                    <p className="text-xl tracking-wider" style={{ letterSpacing: '5px' }}>HABILIDADES TECNICAS</p>
                  </header>
                )}
                {/* w-52: avanzando | w-44: intermedio |  w-28: basico | w-14 principiante*/}
                <aside className="flex flex-col">
                  {techSkills && techSkills.map(x => (
                    <section className="flex gap-4 items-center">
                      <p className="w-16">{x.skill}</p>
                      <div className="w-16 flex gap-2 flex-col">
                        <span className={`block h-4 rounded-full bg-slate-500/40 
                          ${x.nivel == 'principiante' ? 'w-10'
                            : (x.nivel == 'basico' ? 'w-24'
                              : (x.nivel == 'intermedio' ? 'w-32'
                                : (x.nivel == 'avanzado' ? 'w-36' : '')))}`}
                        /></div>
                    </section>
                  ))}
                </aside>
              </section>
              <section className="pb-8 rounded-sm">
                {techSkills && techSkills.length > 0 && (
                  <header className="mb-5 flex justify-start items-center gap-3">
                    <p className="text-xl tracking-wider" style={{ letterSpacing: '5px' }}>HABILIDADES BLANDAS</p>
                  </header>
                )}
                {/* w-52: avanzando | w-44: intermedio |  w-28: basico | w-14 principiante*/}
                <aside className="flex flex-col">
                  {softSkills && softSkills.map(x => (
                    <li className="">{x}</li>
                  ))}
                </aside>
              </section>
            </div>
          </div>
        </div>
        <section className="" style={{ transform: 'scale(.8)' }}>
          {idiomas && idiomas.length > 0 && (
            <header className="flex justify-start items-center">
              <p className="text-xl tracking-wider" style={{ letterSpacing: '5px' }}>IDIOMAS {certificados && certificados?.length > 0 ? 'y CERTIFICADOS' : ''}</p>
            </header>
          )}
          <aside className="flex mt-5 gap-10">
            <div className="">
              {idiomas && idiomas.map(x => (
                <li className="text-,d">{x.languaje}  {x.nivel}</li>
              ))}
            </div>
            <div className="">
              {certificados && certificados.map(x => (
                <li className="mb-4">
                  <p className="inline font-bold">{x.skill}</p>
                  <p className="">{x.entidadEmisora}  {x.ano}</p>
                </li>
              ))}
            </div>
          </aside>
        </section>
      </section>
    </main>
  )
}

export default Template4