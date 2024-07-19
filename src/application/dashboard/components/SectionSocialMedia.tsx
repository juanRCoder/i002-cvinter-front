import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi2";
import { FaBehanceSquare } from "react-icons/fa";
import { Info } from "./templates/interfaces-templates";

interface PropSocialMedia {
  state: Info[];
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const SectionSocialMedia: React.FC<PropSocialMedia> = ({ onChange, state }) => {
  return (
    <>
      <article className="space-y-2 mt-6">
        <h3 className="text-base text-zinc-800 mt-2">Redes</h3>
        <section className="flex flex-col gap-2">
          {[
            ['github', 'Github', <FaGithub className="h-8 w-8 fill-blue-logo" />],
            ['linkedin', 'Linkedin', <FaLinkedin className="h-8 w-8 fill-blue-logo" />],
            ['portfolio', 'Portfolio', <HiIdentification className="h-8 w-8 fill-blue-logo" />],
            ['behance', 'Behance', <FaBehanceSquare className="h-8 w-8 fill-blue-logo" />],
          ].map(([property, name, icon]) => (
            <div key={String(property)} className="flex gap-5 items-center">
              <input
                type="text"
                id={String(property)}
                name={String(property)}
                placeholder={String(name)}
                onChange={onChange}
                value={state.find(inf => inf.icon === property)?.dato || ''}
                className="text-sm w-full p-2 border border-gray-300 rounded-md  focus:border-blue-2 focus:border-spacing-1 focus:outline-none"
              />
              {icon}
            </div>
          ))}
        </section>
      </article>
    </>
  )
}

export default SectionSocialMedia