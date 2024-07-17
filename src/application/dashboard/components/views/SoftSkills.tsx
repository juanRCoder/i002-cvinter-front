import { FaPlus, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NextButton from "../NextButton";
import { useCvStore } from "../../../zustand/store/CvStore";

const SoftSkills = () => {
    const navigate = useNavigate();
    const { setSoftSkills, softSkills } = useCvStore();

    const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const updatedSkills = [...softSkills || []];
        updatedSkills[index] = value;
        setSoftSkills(updatedSkills);
    };

    const addSoftSkills = () => {
        setSoftSkills([...softSkills || [], '']);
    }
    const removeSkill = (item: string) => {
        const updateSoftSkill = softSkills?.filter(skill => skill !== item);
        if (updateSoftSkill) setSoftSkills(updateSoftSkill);
    }

    const handleNext = () => {
        navigate("../other-data");
    };

    return (
        <div className="flex justify-center flex-col">
            <h3 className="text-base text-zinc-800 mt-2 border-b boder-b-blue-logo pb-2">Habilidades</h3>
            {softSkills && softSkills.map((item, index) => (
                <section key={index} className="flex gap-4 items-center first:mt-10 mt-5">
                    <input
                        type="text"
                        value={item}
                        placeholder="Habilidad Blanda"
                        onChange={(e) => handleChange(index, e)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                    />
                    <div
                        onClick={() => removeSkill(item)}
                        className="cursor-pointer h-8 w-8 bg-red-500/75 hover:bg-red-400 grid place-items-center rounded-full">
                        <FaTrash className="fill-white" />
                    </div>
                </section>
            ))}
            <div>
                <button
                    type="button"
                    onClick={addSoftSkills}
                    className="rounded-full mt-4 p-1 grid place-items-center bg-blue-logo hover:bg-blue-2 transition"
                >
                    <FaPlus className="fill-white text-2xl font-bold p-1" />
                </button>
            </div>
            <div className="mt-24">
                <NextButton onClick={handleNext} label="Guardar cambios y continuar" />
            </div>
        </div>
    );
};

export default SoftSkills;
