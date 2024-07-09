
import { useNavigate } from "react-router-dom";
import NextButton from "../NextButton";
import { useCvStore } from "../../../zustand/store/CvStore";
import { useState } from "react";

const TechSkills = () => {

    const navigate = useNavigate()

    const { setTechSkills } = useCvStore();
    const [skill, setSkill] = useState([{
        skill: '',
        nivel: '',
    }]);

    const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const updateSkills = skill.map((skill, i) => (
            i === index ? { ...skill, [name]: value } : skill
        ));
        setTechSkills(updateSkills);
        setSkill(updateSkills);
    };

    const addExperience = () => {
        setSkill([
            ...skill,
            {
                skill: '',
                nivel: '',
            }
        ]);
    };


    const handleNext = () => {
        navigate("../soft-skills")
    }
    return (
        <div className="flex justify-center flex-col">
            <h2>Tech skills</h2>
            {skill.map((skill, index) => (
                <section key={index} className="space-y-3 mt-12">
                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            id={`skill-${index}`}
                            name="skill"
                            placeholder="Languaje"
                            onChange={(e) => handleChange(index, e)}
                            value={skill.skill}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        />
                        <input
                            type="text"
                            id={`nivel-${index}`}
                            name="nivel"
                            placeholder="Nivel"
                            onChange={(e) => handleChange(index, e)}
                            value={skill.nivel}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                </section>
            ))}
            <button
                type="button"
                onClick={addExperience}
                className="mt-4 p-2 bg-blue-500 text-white rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
            >
                Agregar otro lenguaje
            </button>
            <NextButton onClick={handleNext} label="Continuar" />
        </div>
    )
};

export default TechSkills;