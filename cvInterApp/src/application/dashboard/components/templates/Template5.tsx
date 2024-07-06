import { FaSquarePhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi2";
import { FaBehanceSquare } from "react-icons/fa";
import { Template5Props } from "./interfaces-templates";

const Template5: React.FC<Template5Props> = ({ name, lastName, bio, titulo, education, location, experiencia, redes, techSkills, idiomas, certificados, softSkills }) => {
  return (
    <main className="m-5" style={{ maxWidth: '53rem' }}>
      <section className="outline outline-1 py-24">
        <header>
          <h1 className="text-center mx-24 tracking-wide text-7xl pb-4 border-b border-black">{name} {lastName}</h1>
          <h3 className="text-center pt-2 text-xl tracking-widest mb-4">{titulo}</h3>
        </header>
        <section className="flex mx-14 mb-2 gap-3 justify-center">
          {redes.map(x => (
            <div key={x.user} className="flex items-center gap-1">
              {x.red == 'github' ? <FaGithub />
                : (x.red == 'linkedin' ? <FaLinkedin />
                  : (x.red == 'portfolio' ? <HiIdentification />
                    : (x.red == 'behance' ? <FaBehanceSquare />
                      : '')))}
              <p>{x.user}</p>
            </div>
          ))}
        </section>
        <section className="flex gap-5 mb-10 mx-24 justify-center">
          {idiomas.map(x => (
            <p>{x.languaje} - {x.nivel}</p>
          ))}
        </section>
        <section className="justify-center flex gap-10">
          <article style={{ maxWidth: '22rem' }}>
            <header className="flex justify-start items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-black block"></span>
              <p className="text-3xl italic font-thin tracking-tighter">SOBRE MI</p>
            </header>
            <p className="mt-5 mb-10 outline outline-1 outline-white">{bio}</p>
            <header className="flex justify-start items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-black block"></span>
              <p className="text-3xl italic font-thin tracking-tighter">CONTACTO</p>
            </header>
            <aside className="mt-5 mb-10 flex flex-col gap-5">
              {location.map(x => (
                <p className="flex items-center gap-5 font-semibold tex-sm">
                  {x.location == 'telephone' ? <FaSquarePhone className="text-2xl" />
                    : (x.location == 'email' ? <MdEmail className="text-2xl" />
                    : (x.location == 'address' ? <FaLocationDot className="text-2xl" />
                    : ''))}
                 {x.texto}
                </p>
              ))}
            </aside>
            {education.length > 0 && (
              <header className="mb-5 flex justify-start items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-black block"></span>
                <p className="text-3xl italic font-thin tracking-tighter">EDUCACION</p>
              </header>
            )}
            <section>
              {education.map(x => (
                <div key={x.instituto} className="mb-5">
                  <p className="font-bold">{x.instituto}  {x.nivel}</p>
                  <p className="italic">{x.carrera} {x.anoStart}  {x.anoEnd}</p>
                </div>
              ))}
            </section>
            {softSkills.length > 0 && (
              <header className="mb-5 mt-10 flex justify-start items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-black block"></span>
                <p className="text-3xl italic font-thin">SOFT SKILLS</p>
              </header>
            )}
            <section>
              {softSkills.map(x => (
                <li key={x}>{x}</li>
              ))}
            </section>
          </article>
          <article style={{ maxWidth: '22rem' }}>
            {experiencia.length > 0 && (
              <header className="flex justify-start items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-black block"></span>
                <p className="text-3xl italic font-thin">EXPERIENCIA</p>
              </header>
            )}
            <section className={`${experiencia.length > 0 ? 'mt-5' : ''}`}>
              {experiencia.map((x, i) => (
                <div key={i} className="mb-8 last:mb-10">
                  <h3 className="text-lg font-semibold">{x.profesion}</h3>
                  <p className="font-semibold">{x.empresa}</p>
                  <span className="font-thin italic">{x.dateStart}  -  {x.dateEnd}</span>
                  <p className="text-sm">{x.rol}</p>
                </div>
              ))}
            </section>
            {techSkills.length > 0 && (
              <header className="mb-5 flex justify-start items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-black block"></span>
                <p className="text-3xl italic font-thin">TECH SKILLS</p>
              </header>
            )}
            <section>
              {techSkills.map(x => (
                <li key={x.skill}>{x.skill} - {x.nivel}</li>
              ))}
            </section>
            {certificados.length > 0 && (
              <header className="mb-5 mt-10 flex justify-start items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-black block"></span>
                <p className="text-3xl italic font-thin">CERTIFICADOS</p>
              </header>
            )}
            <section>
              {certificados.map((x, i) => (
                <li key={i} className="mb-4">
                  <p className="inline font-bold">{x.skill}</p>
                  <p className="pl-6">{x.entidadEmisora} - {x.ano}</p>
                </li>
              ))}
            </section>
          </article>
        </section>
      </section>
    </main>
  )
}

export default Template5