import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NextButton from "../NextButton";
import { useCvStore } from "../../../zustand/store/CvStore";
import { Plus } from "../BtnPlusTrash";

const SoftSkills = () => {
    const navigate = useNavigate();
    const { setSoftSkills, softSkills } = useCvStore();

    const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const updatedSkills = [...softSkills || []];
        updatedSkills[index] = value;
        setSoftSkills(updatedSkills);
    };

    const addSoftSkills = () => setSoftSkills([...softSkills || [], '']);
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
                        className="text-sm grow p-2 border border-gray-300 rounded-md focus:border-blue-2 focus:border-spacing-1 focus:outline-none"
                    />
                    <div
                        onClick={() => removeSkill(item)}
                        className="cursor-pointer h-8 w-8 bg-red-500/75 hover:bg-red-400 grid place-items-center rounded-full">
                        <FaTrash className="fill-white" />
                    </div>
                </section>
            ))}
            <div>
                <Plus setState={addSoftSkills}/>
            </div>
            <div className="mt-24">
                <NextButton onClick={handleNext} label="Guardar cambios y continuar" />
            </div>
        </div>
    );
};

export default SoftSkills;
