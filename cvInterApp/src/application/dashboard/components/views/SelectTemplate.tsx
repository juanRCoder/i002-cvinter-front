import { useNavigate } from "react-router-dom";
import NextButton from "../NextButton";

const SelectTemplate = () => {

    const navigate = useNavigate()

    const handleNext = () => {
        navigate("bio")
    }
    return (
        <div className="flex justify-center">
            <h2>Select template</h2>
            <NextButton onClick={handleNext} label="Continuar" />
        </div>
    )
};

export default SelectTemplate;