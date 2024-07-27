import imgUpload from '../../../../assets/img-upload.webp';
import { useCvStore } from '../../../zustand/store/CvStore';
import { postCV } from '../../services/CVService';
import { handleDownloadPdf } from '../../utils/uploadPDF';

const Upload = () => {
  const { cvRef, name, lastName, bio, titulo, experiencia, education, techSkills, softSkills, idiomas, certificados, personaInfo } = useCvStore();

  const handleDownloadClick = async () => {
    console.log({
      name, 
      lastName, 
      titulo, 
      bio, 
      education, 
      experiencia, 
      techSkills, 
      idiomas,
      certificados, 
      softSkills, 
      personaInfo
    });
    try {
      if (cvRef?.current) {
        handleDownloadPdf(cvRef);
      }
      await postCV(name, lastName, titulo, bio, education, experiencia, techSkills, idiomas, certificados, softSkills, personaInfo);

    } catch (e) {
      console.log(e);
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
        <button onClick={handleDownloadClick} className="cursor-pointer float-right bg-blue-logo text-white py-3 px-12 rounded-md shadow-md hover:bg-blue-2 focus:outline-none focus:ring-2 transition">
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