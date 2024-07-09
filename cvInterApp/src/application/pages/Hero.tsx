import React from 'react';
import { useState } from 'react';

interface StatProps {
  count: number;
  label: string;
}

const Stat: React.FC<StatProps> = ({ count, label }) => {
  return (
    <div className="text-center mx-4">
      <div className="text-2xl font-bold">{count}</div>
      <div className="text-gray-500">{label}</div>
    </div>
  );
};

interface TemplateProps {
  name: string;
  image: string;
}

const Template: React.FC<TemplateProps> = ({ name, image }) => {
  return (
    <div className="text-center w-1/2 md:w-1/4 lg:w-1/6 p-2">
      <img src={image} alt={name} className="mx-auto mb-2 rounded-lg shadow-lg" />
      <div className="font-bold">{name}</div>
    </div>
  );
};

const MainPage: React.FC = () => {
  const [] = useState(false);

  const templates = [
    { name: 'Elegante', image: 'src/assets/cv_1.png' },
    { name: 'Ejecutivo', image: 'src/assets/cv_2.png' },
    { name: 'Soft', image: 'src/assets/cv_3.png' },
    { name: 'Clasico', image: 'src/assets/cv_4.png' },
    { name: 'New', image: 'src/assets/cv_5.png' },
  ];

  return (
    <div>
      <section className="bg-white relative pb-4">
        <div className="max-w-screen-xl mx-auto pt-24 pb-6 px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 text-center lg:text-left lg:pr-8">
              <h1 className="text-4xl font-bold mb-4">Crea tu CV profesional en sólo 5 minutos</h1>
              <p className="text-lg mb-6">
                Cvinter te ayuda a crear un curriculum profesional y atractivo en PDF.
                Podrás elegir entre varias plantillas, corregir errores y descargar tu CV con un click!
                ¡Empieza tu carrera con el pie derecho!
              </p>
              <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-[#94B9FF]">
                Crear mi CV ahora
              </button>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0 lg:pl-8">
              <img
                className="h-96 w-auto rounded-lg shadow-lg"
                src="src/assets/Heroimages.png"
                alt="Person working on laptop"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="relative bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col md:flex-row justify-around bg-green-200 py-4 rounded-full shadow-lg w-full md:w-2/3 max-w-screen-lg z-10 md:absolute md:top-[97%] md:mt-4 md:bottom-auto">
        <Stat count={85} label="Personas han usado el creador de CV's" />
        <Stat count={12} label="Plantillas de CV's en varios modelos" />
        <Stat count={4.9} label="Calificación de nuestros usuarios" />
      </div>

      <div className="relative flex flex-wrap justify-center gap-3 my-4 bg-[#95BE9E] pt-40" >
        {templates.map((template) => (
          <Template key={template.name} name={template.name} image={template.image} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
