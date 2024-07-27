import NextButton from "../NextButton";
import clasico from "../../../../assets/cvTemplates/CV-Clasico.webp";
import ejecutivo from "../../../../assets/cvTemplates/CV-Ejecutivo.webp";
import elegante from "../../../../assets/cvTemplates/CV-Elegante.webp";
import newCv from "../../../../assets/cvTemplates/CV-New.webp";
import soft from "../../../../assets/cvTemplates/CV-Soft.webp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCvStore } from "../../../zustand/store/CvStore";
import NoDisponible from '../../../../assets/no-disponible.webp';

const SelectTemplate = () => {

  const navigate = useNavigate();
  const setTemplateSelected = useCvStore((state) => state.setTemplateSelected);
  const resetState = useCvStore((state) => state.resetState);
  const [template, setTemplate] = useState<number>(0)

  const handleClick = () => {
    resetState();
    setTemplateSelected(template);
    navigate("bio");
  };

  const templatesArray = [
    { id: 1, src: elegante, alt: "Plantilla 1", name: "Plantilla 1" },
    { id: 2, src: ejecutivo, alt: "Plantilla 2", name: "Plantilla 2" },
    { id: 3, src: soft, alt: "Plantilla 3", name: "Plantilla 3" },
    { id: 4, src: newCv, alt: "Plantilla 4", name: "Plantilla 4" },
    { id: 5, src: clasico, alt: "Plantilla 5", name: "Clasico" }
  ];

  const handleSelect = (templateId: number) => {
    setTemplate(templateId);
  };

  return (
    <>
      <section className="hidden md:flex flex-col">
        <article className="m-auto max-w-7xl w-full">
          <div className="md:lg-0 lg:ml-16 mt-8  md:my-12">
            <p className="leading-relaxed text-gray-900/80 lg:text-lg pt-2 md:w-4/5 md:m-auto lg:w-[52rem]">
              Todas nuestras plantillas serán exportadas en formato PDF tamaño A4 al terminar la carga de datos.
              Puedes optar por un CV con diseño y estilo o uno más formal.<br />
              Lo importante es que refleje tu gusto, personalidad y que se adapte a tu peril profesional.
            </p>
          </div>
        </article>
        <div className="pt-16 outline-1 bg-gray-200 flex flex-col items-center mt-0">
          <div className="flex justify-center gap-12 flex-wrap">
            {templatesArray.map((templateItem) => (
              <div
                key={templateItem.id}
                className="flex flex-col items-center"
              >
                <section className="h-60 w-44 shadow-xl">
                  <img
                    src={templateItem.src}
                    alt={templateItem.alt}
                    className="h-full w-full cursor-pointer border-2 box-border"
                    style={{
                      borderColor: template === templateItem.id ? '#3182CE' : 'transparent',
                    }}
                    onClick={() => handleSelect(templateItem.id)}
                  />
                </section>
                <p className="mt-1 text-center text-gray-700">{templateItem.name}</p>
              </div >
            ))}
          </div >
          <div className="flex justify-center my-10">
            <NextButton onClick={handleClick} label="Continuar" disabled={!template} />
          </div>
        </div >
      </section >
      <section className='md:hidden flex flex-col items-center justify-center font-lato'>
        <img className='h-24 w-24' src={NoDisponible} alt='noDisponible' />
        <h1 className='font-bold text-xl text-gray-700 text-center'>No disponible</h1>
        <p className='text-gray-700 text-center'>Esta pagina no esta disponible para resoluciones de pantalla tablet y mobile</p>
      </section>
    </>
  );
};

export default SelectTemplate;
