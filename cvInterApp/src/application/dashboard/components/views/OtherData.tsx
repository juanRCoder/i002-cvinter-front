

import { useNavigate } from "react-router-dom";
import NextButton from "../NextButton";

const OtherData = () => {

    const navigate = useNavigate()

    const handleNext = () => {
        navigate("../upload")
    }
    return (
        <div className="flex justify-center">
            <h2>OtherData</h2>
            <NextButton onClick={handleNext} label="Continuar" />
        </div>
    )
};

export default OtherData;