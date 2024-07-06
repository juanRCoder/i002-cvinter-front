
import { useNavigate } from "react-router-dom";
import NextButton from "../NextButton";

const TechSkills = () => {

    const navigate = useNavigate()

    const handleNext = () => {
        navigate("../soft-skills")
    }
    return (
        <div className="flex justify-center">
            <h2>Tech skills</h2>
            <NextButton onClick={handleNext} label="Continuar" />
        </div>
    )
};

export default TechSkills;