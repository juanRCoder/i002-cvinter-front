import { useState } from 'react';

export default function Hero() {
  const [] = useState(false);

  return (
    <section className="bg-white relative pb-4">
      <div className="max-w-screen-xl mx-auto pt-24 pb-6 px-6" >
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
  );
}
