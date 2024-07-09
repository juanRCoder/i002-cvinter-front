import { FaSquarePhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi2";
import { FaBehanceSquare } from "react-icons/fa";
import { Template5Props } from "./interfaces-templates";


const Template4: React.FC<Template5Props> = ({ name, lastName, titulo, bio, education, location, experiencia, redes, techSkills, idiomas, certificados, softSkills }) => {
  return (
    <main className="w-full h-full bg-stone-50 outline outline-1 outline-stone-200 scale-95" style={{ maxWidth: '45rem' }}>
      <section className="py-24">
        <header className="relative mx-24">
          <h1 className="text-5xl text-center tracking-widest">{name} {lastName}</h1>
          <span className="absolute top-7 w-full bg-slate-400/20 h-6" />
          <h3 className="text-center text-xl mt-2 flex items-center gap-4 justify-center">
            <span className="block h-2 w-2 bg-black rounded-full" />
            {titulo}
            <span className="block h-2 w-2 bg-black rounded-full" />
          </h3>
        </header>
        <section className="mx-5 justify-center flex gap-5 mt-10 scale-90">
          <article className="" style={{ minWidth: '18rem' }}>
            <header className="mb-5 flex justify-start items-center gap-3">
              <p className="text-xl tracking-wider" style={{ letterSpacing: '5px' }}>SOBRE MI</p>
            </header>
            <p>{bio}</p>
          </article>
          <article className="" style={{ minWidth: '18rem' }}>
            {education && education.length > 0 && (
              <header className="mb-5 flex justify-start items-center gap-3">
                <p className="text-xl tracking-wider" style={{ letterSpacing: '5px' }}>ESTUDIOS</p>
              </header>
            )}
            <section>
              {education && education.map(x => (
                <aside>
                  <div className="mt-5 flex items-center gap-3">
                    <p className="text-xs">{x.anoStart} {x.anoEnd}</p>
                    <p className="text-md">{x.carrera}</p>
                  </div>
                  <div className="flex flex-col text-sm italic">
                    <p>{x.instituto}</p>
                    <p>{x.nivel}</p>
                  </div>
                </aside>
              ))}
            </section>
          </article>
        </section>
        <section className="mx-5 scale-90">
          {experiencia && experiencia.length > 0 && (
            <header className="mb-5 flex justify-start items-center gap-3">
              <p className="text-xl tracking-wider" style={{ letterSpacing: '5px' }}>EXPERIENCIA</p>
            </header>
          )}
          <article className="flex flex-col gap-5">
            {experiencia && experiencia.map((x, i) => (
              <section key={i} className="flex gap-10">
                <div className="italic w-24">
                  <p className="font-thin">{x.dateStart}</p>
                  <p className="font-semibold">{x.dateEnd}</p>
                </div>
                <div className="w-9/12">
                  <h2 className="font-bold">{x.empresa}</h2>
                  <p className="italic">{x.profesion}</p>
                  <div className="text-sm">
                    <p>{x.rol}</p>
                  </div>
                </div>
              </section>
            ))}
          </article>
        </section>
        <section className="mx-5 scale-90 mt-2 pb-8 rounded-sm border-b-4 border-slate-500/50">
          {techSkills && techSkills.length > 0 && (
            <header className="mb-5 flex justify-start items-center gap-3">
              <p className="text-xl tracking-wider" style={{ letterSpacing: '5px' }}>HABILIDADES TECNICAS</p>
            </header>
          )}
          {/* w-52: avanzando | w-44: intermedio |  w-28: basico | w-14 principiante*/}
          <aside className="grid grid-cols-2 gap-1">
            {techSkills && techSkills.map(x => (
              <section className="flex gap-4 items-center">
                <p className="w-16">{x.skill}</p>
                <div className="w-16 flex gap-2 flex-col"><span className={`block h-4 rounded-full bg-slate-500/40 
                ${x.nivel == 'principiante' ? 'w-10'
                    : (x.nivel == 'basico' ? 'w-24'
                      : (x.nivel == 'intermedio' ? 'w-32'
                        : (x.nivel == 'avanzado' ? 'w-36' : '')))}`}
                /></div>
              </section>
            ))}
          </aside>
        </section>
        <section className="mx-5 scale-90 mt-2 pb-8 rounded-sm border-b-4 border-slate-500/50">
          {techSkills && techSkills.length > 0 && (
            <header className="mb-5 flex justify-start items-center gap-3">
              <p className="text-xl tracking-wider" style={{ letterSpacing: '5px' }}>HABILIDADES BLANDAS</p>
            </header>
          )}
          {/* w-52: avanzando | w-44: intermedio |  w-28: basico | w-14 principiante*/}
          <aside className="grid grid-cols-2">
            {softSkills && softSkills.map(x => (
              <li className="">{x}</li>
            ))}
          </aside>
        </section>
        <section className="mx-5 scale-90 mt-2 pb-8 rounded-sm border-b-4 border-slate-500/50">
          {idiomas && idiomas.length > 0 && (
            <header className="mb-5 flex justify-start items-center gap-3">
              <p className="text-xl tracking-wider" style={{ letterSpacing: '5px' }}>IDIOMAS {certificados && certificados?.length > 0 ? 'y CERTIFICADOS' : ''}</p>
            </header>
          )}
          <aside className="flex">
            <div className="w-1/2">
              {idiomas && idiomas.map(x => (
                <li>{x.languaje}  {x.nivel}</li>
              ))}
            </div>
            <div className="w-1/2">
              {certificados && certificados.map(x => (
                <li className="mb-4">
                  <p className="inline font-bold">{x.skill}</p>
                  <p className="pl-6">{x.entidadEmisora}  {x.ano}</p>
                </li>
              ))}
            </div>
          </aside>
        </section>
        <section className="mx-5 scale-90 mt-2 pb-2 justify-center text-sm flex gap-3 ">
          {redes && redes.map(x => (
            <div key={x.user} className="flex items-center gap-2">
              {(() => {
                switch (x.red) {
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
              <p>{x.user}</p>
            </div>
          ))}
        </section>
        <section className="mx-5 scale-90 mt-2 pb-8 justify-center text-sm flex gap-3">
          {location && location.map(x => (
            <div className="flex items-center gap-2">
              {x.red == 'telephone' ? <FaSquarePhone />
                : (x.red == 'email' ? <MdEmail />
                  : (x.red == 'address' ? <FaLocationDot />
                    : ''))}
              <p>{x.user}</p>
            </div>
          ))}
        </section>
      </section>
    </main>
  )
}

export default Template4