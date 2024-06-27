import React from "react";

const Example: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex-1 px-6 pt-14 lg:px-8 bg-white max-w-2xl">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="py-10 sm:py-20 lg:py-30">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Crea tu CV profesional en solo 5 minutos
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Cvinter te ayuda a crear un curriculum profesional y atractivo en
              PDF. Podras elegir entre varias plantillas, corregir errores y
              descargar tu CV con un click! ¡Empieza tu carrera con el pie
              derecho!
            </p>
            <div className="mt-10">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-20 py-4 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Imagen a la derecha */}
      <div className="hidden lg:flex flex-1 items-center justify-center">
        <img
          src="src/assets/Heroimages.png"
          alt="Descripción de la imagen"
          className="h-96 w-auto mx-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Example;
