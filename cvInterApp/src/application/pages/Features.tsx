import React from "react";

const Features = () => {
  return (
    <div className="py-20 px-4 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Características y Beneficios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Entrevistas en Video</h3>
          <p>Graba y revisa tus entrevistas para mejorar tu desempeño.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">
            Plantillas de CV Profesionales
          </h3>
          <p>
            Utiliza nuestras plantillas para crear un currículum atractivo y
            eficaz.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Perfil Completo</h3>
          <p>
            Presenta un perfil completo con videos de entrevistas y CVs a los
            reclutadores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
