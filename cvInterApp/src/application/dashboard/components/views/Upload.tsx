import NextButton from "../NextButton";

const Upload = () => {
    const handleClick = () => {
        alert("Finalizo el proceso.")
    }
    return (
        <div className="flex justify-center">
            <h2>Upload</h2>
            <NextButton onClick={handleClick} label="Descargar" />
        </div>
    )
};

export default Upload;