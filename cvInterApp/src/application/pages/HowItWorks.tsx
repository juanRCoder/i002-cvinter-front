import React from 'react';

interface StepProps {
  image: string;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ image, title, description }) => {
  return (
    <div className="text-center p-4 flex flex-col items-center">
      <img src={image} alt={title} className="mx-auto rounded-lg mb-4 w-[200px] h-auto max-w-xs" />
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="md:w-1/2 text-left md:pr-8">
            <h2 className="text-3xl font-bold mb-4">¿Cómo funciona?</h2>
            <p className="text-gray-600 mb-4">
              ¡Crear tu CV perfecto nunca ha sido tan fácil! Regístrate, sigue estos sencillos pasos y obtén un CV profesional en minutos:
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="src/assets/people1.png" alt="Elige una plantilla" className="mx-auto rounded-lg w-full h-auto max-w-xs" />
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3">
          <div className="flex-1 min-w-[150px]">
            <Step
              image="src/assets/people2.png"
              title="Elige una plantilla"
              description="Selecciona entre 12 plantillas profesionales que se adapten a tu estilo y sector. Tenemos modelos de diseño y Harvard."
            />
          </div>
          <div className="flex-1 min-w-[150px]">
            <Step
              image="src/assets/people3.png"
              title="Completa tu información"
              description="Carga tu contacto, bio, experiencia, educación y habilidades, también puedes agregar otros datos."
            />
          </div>
          <div className="flex-1 min-w-[150px]">
            <Step
              image="src/assets/people4.png"
              title="¡Chequea y descarga!"
              description="Chequea que los datos sean correctos y ¡sí! tienes tu CV profesional listo para compartir con reclutadores."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
