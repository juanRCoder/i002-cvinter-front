import imgUpload from '../../../../assets/img-upload.png';
import { useCvStore } from '../../../zustand/store/CvStore';
import { handleDownloadPdf } from '../../utils/uploadPDF';

const Upload = () => {
    const { cvRef } = useCvStore();

    const handleDownloadClick = () => {
        if (cvRef?.current) {
            handleDownloadPdf(cvRef);
        }
    };
    return (
        <>
            <div className="text-gray-900/70 flex flex-col gap-1 mr-28 mt-5">
                <p className="text-lg">¡Lo has logrado!</p>
                <p className="text-lg">Chequea que no tengas errores de ortografía y que tus datos sean correctos.</p>
                <p className="text-lg">Puedes editar tu CV todas las veces que necesites.</p>
            </div>
            <div className="mt-12 h-10 flex items-center justify-center">
                <button onClick={handleDownloadClick} className="cursor-pointer float-right bg-blue-logo text-white py-3 px-12 rounded-md shadow-md hover:bg-blue-2 focus:outline-none focus:ring-2 transition duration-300">
                    Descargar en PDF
                </button>
            </div>
            <section className="mt-4 mr-5 flex justify-center">
                <div className="w-80 h-80">
                    <img className="w-full h-full object-cover" src={imgUpload} />
                </div>
            </section>
        </>
    )
};

export default Upload;