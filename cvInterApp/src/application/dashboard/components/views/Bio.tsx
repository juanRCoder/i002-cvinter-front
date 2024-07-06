import { useNavigate } from "react-router-dom"
import NextButton from "../NextButton"
import { useCvStore } from "../../../zustand/store/CvStore";
import React from "react";


const Bio = () => {
    const navigate = useNavigate()
    const { name, lastName, setName, setLastName } = useCvStore();

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };

    const handleNext = () => {
        navigate("../experience")
    }
    return (
        <div className="flex justify-center">
            <h2>Carga tu información</h2>
            <div>
                <form>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                    />
                    <label htmlFor="lastName">Lastname</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                </form>
            </div>
            <NextButton onClick={handleNext} label="Guardar cambios y continuar" />
        </div>
    );
};

export default Bio