import { FaSquarePhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi2";
import { FaBehanceSquare } from "react-icons/fa";
import { Template5Props } from "./interfaces-templates";


const Template4: React.FC<Template5Props> = ({ name, lastName, titulo, bio, education, location, experiencia, redes, techSkills, idiomas, certificados, softSkills }) => {
  return (
    <main className="m-5" style={{ maxWidth: '53rem' }}>
      <section className="outline outline-1 py-24">
        <header className="relative mx-24">
          <h1 className="text-6xl text-center tracking-widest">{name} {lastName}</h1>
          <span className="absolute top-9 w-full bg-slate-500/20 h-6" />
          <h3 className="text-center text-xl mt-2 flex items-center gap-4 justify-center">
            <span className="block h-2 w-2 bg-black rounded-full" />
            {titulo}
            <span className="block h-2 w-2 bg-black rounded-full" />
          </h3>
        </header>
        <section className="mx-12 justify-center flex gap-10 mt-20">
          <article className="" style={{ maxWidth: '22rem' }}>
            <header className="mb-5 flex justify-start items-center gap-3">
              <p className="text-xl tracking-wider" style={{ letterSpacing: '5px' }}>SOBRE MI</p>
            </header>
            <p>{bio}</p>
          </article>
          <article className="" style={{ maxWidth: '22rem' }}>
            {education.length > 0 && (
              <header className="mb-5 flex justify-start items-center gap-3">
                <p className="text-xl tracking-wider" style={{ letterSpacing: '5px' }}>ESTUDIOS</p>
              </header>
            )}
            <section>
              {education.map(x =>(
                <aside>
                <div className="mt-5 flex items-center gap-3">
                  <p>{x.anoStart} - {x.anoEnd}</p>
                  <span className="block h-1 w-1 bg-black rounded-full" />
                  <p>{x.instituto}</p>
                </div>
                <div className="flex items-center text-sm italic">
                  <p>{x.carrera}</p>
                  <span className="pl-3">{x.instituto}</span>
                </div>
              </aside>
              ))}
            </section>
          </article>
        </section>
        <section className="mx-auto mt-8" style={{ maxWidth: '42.5rem' }}>
          {experiencia.length > 0 && (
            <header className="mb-5 flex justify-start items-center gap-3">
              <p className="text-xl tracking-wider" style={{ letterSpacing: '5px' }}>EXPERIENCIA</p>
            </header>
          )}
          <article className="flex flex-col gap-5">
            {experiencia.map(x => (
              <section className="flex gap-10">
                <div className="italic w-24">
                  <p className="font-thin">{x.dateStart}</p>
                  <p className="font-semibold">{x.dateEnd}</p>
                </div>
                <div className="w-9/12">
                  <h2 className="font-bold">{x.empresa}</h2>
                  <p className="italic">{x.profesion}</p>
                  <div className="text-sm">
                    <li>{x.rol}</li>
                  </div>
                </div>
            </section>
            ))}
          </article>
        </section>
        <section className="mx-auto mt-10 pb-8 rounded-sm border-b-4 border-slate-500/50" style={{ maxWidth: '42.5rem' }}>
          {techSkills.length > 0 && (
            <header className="mb-5 flex justify-start items-center gap-3">
              <p className="text-xl tracking-wider" style={{ letterSpacing: '5px' }}>HABILIDADES TECNICAS</p>
            </header>
          )}
          {/* w-52: avanzando | w-44: intermedio |  w-28: basico | w-14 principiante*/}
          <aside className="grid grid-cols-2 gap-1">
            {techSkills.map(x => (
              <section className="flex gap-6 items-center">
              <p className="w-16">{x.skill}</p>
              <div className="flex flex-col gap-2"><span className={`block h-4 rounded-full bg-slate-500/40 
                ${x.nivel == 'principiante' ? 'w-14' 
                  : (x.nivel == 'basico' ? 'w-28'
                  : (x.nivel == 'intermedio' ? 'w-44'
                  : (x.nivel == 'avanzado' ? 'w-52' : '')))}`} 
              /></div>
            </section>
            ))}
          </aside>
        </section>
        <section className="mx-auto mt-10 pb-8 rounded-sm border-b-4 border-slate-500/50" style={{ maxWidth: '42.5rem' }}>
          {techSkills.length > 0 && (
            <header className="mb-5 flex justify-start items-center gap-3">
              <p className="text-xl tracking-wider" style={{ letterSpacing: '5px' }}>HABILIDADES BLANDAS</p>
            </header>
          )}
          {/* w-52: avanzando | w-44: intermedio |  w-28: basico | w-14 principiante*/}
          <aside className="grid grid-cols-2">
            {softSkills.map(x => (
              <li className="">{x}</li>
            ))}
          </aside>
        </section>
        <section className="mx-auto mt-10 pb-8 rounded-sm border-b-4 border-slate-500/50" style={{ maxWidth: '42.5rem' }}>
          {idiomas.length > 0 || certificados.length > 0 && (
            <header className="mb-5 flex justify-start items-center gap-3">
              <p className="text-xl tracking-wider" style={{ letterSpacing: '5px' }}>IDIOMAS Y CERTIFICADOS</p>
            </header>
          )}
          <aside className="flex">
            <div className="w-1/2">
              {idiomas.map(x => (
                <li>{x.languaje} - {x.nivel}</li>
              ))}
            </div>
            <div className="w-1/2">
              {certificados.map(x => (
                <li className="mb-4">
                  <p className="inline font-bold">{x.skill}</p>
                  <p className="pl-6">{x.entidadEmisora} - {x.ano}</p>
                </li>
              ))}
            </div>
          </aside>
        </section>
        <section className="justify-center text-sm mx-auto mt-5 flex gap-3 " style={{ maxWidth: '42.5rem' }}>
        {redes.map(x => (
            <div key={x.user} className="flex items-center gap-2">
              {x.red == 'github' ? <FaGithub />
                : (x.red == 'linkedin' ? <FaLinkedin />
                  : (x.red == 'portfolio' ? <HiIdentification />
                    : (x.red == 'behance' ? <FaBehanceSquare />
                      : '')))}
              <p>{x.user}</p>
            </div>
          ))}
        </section>
        <section className="justify-center text-sm mx-auto mt-2 flex gap-3 " style={{ maxWidth: '42.5rem' }}>
          {location.map(x => (
            <div className="flex items-center gap-2">
                {x.location == 'telephone' ? <FaSquarePhone/>
                    : (x.location == 'email' ? <MdEmail/>
                    : (x.location == 'address' ? <FaLocationDot/>
                    : ''))}
                <p>{x.texto}</p>
            </div>
          ))}
        </section>
      </section>
    </main>
  )
}

export default Template4