

import { useNavigate } from "react-router-dom";
import NextButton from "../NextButton";

const SoftSkills = () => {

    const navigate = useNavigate()

    const handleNext = () => {
        navigate("../other-data")
    }
    return (
        <div className="flex justify-center">
            <h2>Soft skills</h2>
            <NextButton onClick={handleNext} label="Continuar" />
        </div>
    )
};

export default SoftSkills;