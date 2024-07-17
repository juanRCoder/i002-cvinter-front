interface ModalInterface {
  opciones: string[];
  sendSelected: (selected: string) => void;
}

const Modal: React.FC<ModalInterface> = ({ opciones, sendSelected}) => {
  return (
    <aside className="z-10 absolute rounded-md top-14 bg-zinc-50 border border-1 border-blue-2/20">
      <p className="mx-2 pl-5 pt-4 py-2 text-slate-600 font-bold text-sm">OPCIONES</p>
      <ul className="">
        {opciones.map(option => (
          <li key={option}
            onClick={()=>sendSelected(option)}
            className="last:mb-2 cursor-pointer text-slate-800 font-inter mx-2 pl-5 pr-[65px] py-2 hover:bg-slate-200"
        >
              {option}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Modal