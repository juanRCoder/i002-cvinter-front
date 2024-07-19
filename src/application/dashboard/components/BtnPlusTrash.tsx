import { FaTrash, FaPlus } from "react-icons/fa";

interface PropTrash {
  setState: (state: number) => void;
  id: number;
}
export const Trash: React.FC<PropTrash> = ({ setState, id }) => {
  return (
    <div
      onClick={() => setState(id)}
      className="cursor-pointer h-8 w-8 bg-red-500/75 hover:bg-red-400 grid place-items-center rounded-full">
      <FaTrash className="fill-white" />
    </div>
  )
}

export default Trash;

type PropPlus = { setState: () => void };

export const Plus: React.FC<PropPlus> = ({ setState }) => {
  return (<div>
    <button
      type="button"
      onClick={setState}
      className="rounded-full mt-4 p-1 grid place-items-center bg-blue-logo hover:bg-blue-2 transition"
    >
      <FaPlus className="fill-white text-2xl font-bold p-1" />
    </button>
  </div>)
}