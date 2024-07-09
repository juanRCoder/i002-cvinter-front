import NextButton from "../NextButton";
import imgUpload from '../../../../assets/img-upload.png';

const Upload = () => {
    const handleClick = () => {
        alert("Finalizo el proceso.")
    }
    return (
        <div className="px-10">
            <h2 className="text-gray-900 text-xl mb-4">Descargar tu CV</h2>
            <div className="text-gray-900/70 flex flex-col gap-1 mr-28">
                <p className="text-lg">¡Lo has logrado!</p>
                <p className="text-lg">Chequea que no tengas errores de ortografía y que tus datos sean correctos.</p>
                <p className="text-lg">Puedes editar tu CV todas las veces que necesites.</p>
            </div>
            <div className="h-10 flex items-center justify-center">
                <NextButton onClick={handleClick} label="Descargar en PDF" />
            </div>
            <section className="mt-16 grid place-items-center">
                <div className="w-96 h-96"><img className="w-full h-full object-cover" src={imgUpload} /></div>
            </section>
        </div>
    )
};

export default Upload;