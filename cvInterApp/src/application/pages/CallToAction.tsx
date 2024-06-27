import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="bg-indigo-600 text-white py-20 px-4 text-center">
      <h2 className="text-4xl font-bold mb-6">¿Listo para Comenzar?</h2>
      <p className="text-xl mb-8">
        Regístrate o inicia sesión para empezar a destacar.
      </p>
      <div>
        <Link
          to="/register"
          className="bg-white text-indigo-600 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 mx-2"
        >
          Regístrate
        </Link>
        <Link
          to="/login"
          className="bg-white text-indigo-600 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 mx-2"
        >
          Inicia Sesión
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
