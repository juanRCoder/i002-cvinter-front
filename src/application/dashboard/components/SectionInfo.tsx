import React from 'react'
import { Info } from './templates/interfaces-templates'
interface PropsInfo {
  bio: string
  name: string,
  lastName: string,
  titulo: string
  personaInfo: Info[]
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}
const SectionInfo: React.FC<PropsInfo> = ({ bio, onChange, name, lastName, titulo, personaInfo }) => {

  return (
    <article className="space-y-2">
      <h3 className="text-base text-zinc-800 mt-2">Sobre mí</h3>
      <textarea
        name="bio"
        value={bio}
        onChange={onChange}
        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        className="text-sm w-full h-28 p-2 border border-gray-300 rounded-md focus:border-blue-2 focus:border-spacing-1 focus:outline-none resize-none"
      ></textarea>
      <div className="grid grid-cols-2 gap-2">
        {[
          [name, 'name', 'Nombre'],
          [lastName, 'lastName', 'Apellido'],
          ['address', 'address', 'Ubicacion'],
          ['telephone', 'telephone', 'Telefono'],
          ['email', 'email', 'Email'],
          [titulo, 'titulo', 'Título profesional'],
        ].map(([store, txt, placeholder]) => (
          txt == 'address' || txt == 'telephone' || txt == 'email'
            ? (
              <input
                key={txt}
                type={txt == 'email' ? 'email' : (txt == 'telephone' ? 'number' : 'text')}
                id={String(txt)}
                name={String(txt)}
                placeholder={placeholder}
                onChange={onChange}
                value={personaInfo.find(inf => inf.icon === txt)?.dato || ''}
                className="text-sm w-full p-2 border border-gray-300 rounded-md  focus:border-blue-2 focus:border-spacing-1 focus:outline-none"
              />
            )
            : (
              <input
                key={txt}
                type="text"
                id={txt}
                name={txt}
                value={store}
                placeholder={placeholder}
                onChange={onChange}
                className="text-sm w-full p-2 border border-gray-300 rounded-md  focus:border-blue-2 focus:border-spacing-1 focus:outline-none"
              />
            )
        ))}
      </div>
    </article>
  )
}

export default SectionInfo