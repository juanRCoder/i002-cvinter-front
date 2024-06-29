import React from 'react';

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

const Features: React.FC = () => {
  return (
    <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 flex justify-around bg-green-200 py-4 rounded-full my-4 shadow-lg w-11/12 md:w-2/3 z-10">
      <Stat count={85} label="Personas han usado el creador de CV's" />
      <Stat count={12} label="Plantillas de CV's en varios modelos" />
      <Stat count={4.9} label="Calificación de nuestros usuarios" />
    </div>
  );
};

export default Features;
