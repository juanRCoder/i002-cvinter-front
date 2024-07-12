import React from 'react';
import People1 from '../../assets/people1.png'
import People2 from '../../assets/people2.png'
import People3 from '../../assets/people3.png'
import People4 from '../../assets/people4.png'

interface StepProps {
  image: string;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ image, title, description }) => {
  return (
    <div className="text-center p-4 flex flex-col items-center">
      <div className='w-72 my-5' style={{ height: '580px' }}>
        <img src={image} alt={title} className="rounded-lg h-full w-full object-cover" />
      </div>
      <section className='relative text-left flex flex-col pt-4'>
        <span className='absolute bg-zinc-800 h-1.5 w-11  top-0'></span>
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="text-gray-600 w-60 text-lg">{description}</p>
      </section>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="comoFunciona" className="bg-zinc-50 max-w-7xl m-auto">
      <div className="container mx-auto px-4">
        <div className="pt-20 gap-10 flex flex-col md:flex-row items-center mb-8 justify-center">
          <div className="text-neutral-800  lg:w-96 outline-1 text-left md:pr-8">
            <h2 className="text-6xl font-semibold leading-tight mb-4">¿Cómo funciona?</h2>
            <p className="mb-4 text-2xl leading-relaxed">
              ¡Crear tu CV perfecto nunca ha sido tan fácil! Regístrate, sigue estos sencillos pasos y obtén un CV profesional en minutos:
            </p>
          </div>
          <div className=" flex justify-center">
            <img
              src={People1}
              alt="Elige una plantilla"
              className="scale-90 rounded-lg w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-14">
          <div className="">
            <Step
              image={People4}
              title="Elige una plantilla"
              description="Selecciona entre 12 plantillas profesionales que se adapten a tu estilo y sector. Tenemos modelos de diseño y Harvard."
            />
          </div>
          <div className="">
            <Step
              image={People3}
              title="Completa tu información"
              description="Carga tu contacto, bio, experiencia, educación y habilidades, también puedes agregar otros datos."
            />
          </div>
          <div className="">
            <Step
              image={People2}
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
