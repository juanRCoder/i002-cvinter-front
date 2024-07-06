
import { useNavigate } from "react-router-dom";
import NextButton from "../NextButton";

const Experience = () => {

    const navigate = useNavigate()

    const handleNext = () => {
        navigate("../education")
    }
    return (
        <div className="flex justify-center">
            <h2>Experience</h2>
            <NextButton onClick={handleNext} label="Continuar" />
        </div>
    )
};

export default Experience;