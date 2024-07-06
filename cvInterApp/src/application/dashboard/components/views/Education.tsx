import { useNavigate } from "react-router-dom";
import NextButton from "../NextButton";

const Education = () => {

    const navigate = useNavigate()
    const handleNext = () => {
        navigate("../tech-skills")
    }
    return (
        <div className="flex justify-center">
            <h2>Education</h2>
            <NextButton onClick={handleNext} label="Continuar" />
        </div>
    )
};

export default Education;