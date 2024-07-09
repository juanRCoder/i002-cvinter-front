import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NextButton from "../NextButton";
import { useCvStore } from "../../../zustand/store/CvStore";

const SoftSkills = () => {
    const navigate = useNavigate();
    const { setSoftSkills } = useCvStore();
    const [skill, setSkill] = useState<string[]>([""]);

    const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        const updatedSkills = [...skill];
        updatedSkills[index] = value;

        setSoftSkills(updatedSkills);
        setSkill(updatedSkills);
    };

    const addSoftSkills = () => {
        setSkill([...skill, '']);
    }

    const handleNext = () => {
        navigate("../other-data");
    };

    return (
        <div className="flex justify-center flex-col">
            <h2>Soft skills</h2>
            <div className="flex flex-col gap-4 mt-5">
                {skill.map((item, index) => (
                    <input
                        key={index}
                        type="text"
                        value={item}
                        placeholder="SoftSkills"
                        onChange={(e) => handleChange(index, e)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                    />
                ))}
            </div>
            <button
                type="button"
                onClick={addSoftSkills}
                className="mt-4 p-2 bg-blue-500 text-white rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
            >
                Agregar Más SoftSkills
            </button>
            <NextButton onClick={handleNext} label="Continuar" />
        </div>
    );
};

export default SoftSkills;
