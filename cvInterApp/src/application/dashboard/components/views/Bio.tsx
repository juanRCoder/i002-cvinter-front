import { useNavigate } from "react-router-dom"
import NextButton from "../NextButton"


const Bio = () => {
    const navigate = useNavigate()
    const handleNext = () => {
        navigate("../experience")
    }
    return (
        <div className="flex justify-center">
            <h2>Bio</h2>
            <NextButton onClick={handleNext} label="Continuar" />
        </div >
    )
}

export default Bio