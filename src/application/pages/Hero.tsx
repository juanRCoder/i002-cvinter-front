import React from 'react';
import { MdOutlineFeed } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import CVelegante from '../../assets/cvTemplates/CV-Elegante.webp';
import CVejecutivo from '../../assets/cvTemplates/CV-Ejecutivo.webp';
import CVsoft from '../../assets/cvTemplates/CV-Soft.webp';
import CVnew from '../../assets/cvTemplates/CV-New.webp';
import CVclasico from '../../assets/cvTemplates/CV-Clasico.webp';
import { Link } from 'react-router-dom';
import HeroImages from '../../assets/Heroimages.webp'
import NoDisponible from '../../assets/no-disponible.webp';

interface StatProps {
  count: number;
  label: string;
}

const Stat: React.FC<StatProps> = ({ count, label }) => {
  return (
    <div className="md:mx-0 lg:mx-16 text-center flex flex-col items-center gap-1">
      <div className='bg-zinc-50 text-3xl p-1 rounded-full grid place-items-center'>
        {count == 85
          ? (<><CiStar /></>)
          : (count == 4.9 ? (<><AiOutlineUser /></>)
            : (count == 12 ? (<><MdOutlineFeed /></>) : ''))}
      </div>
      <div className="text-3xl text-zinc-800 font-bold  flex gap-2">
        {count == 85
          ? (<>85 <FaPlus /></>)
          : (count == 4.9 ? (<>4.9/5</>)
            : (count == 12 ? (<>12</>) : ''))}
      </div>
      <div className="text-zinc-800 w-36">{label}</div>
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
      <div className='rounded-xl mb-3 h-72'>
        <img src={image} alt={name} className="rounded-xl h-full w-full" />
      </div>
      <div className="text-white text-lg font-thin">{name}</div>
    </div>
  );
};

const MainPage: React.FC = () => {

  const templates = [
    { name: 'Template 1', image: CVelegante },
    { name: 'Template 2', image: CVejecutivo },
    { name: 'Template 3', image: CVsoft },
    { name: 'Template 4', image: CVnew },
    { name: 'Template 5', image: CVclasico },
  ];

  return (
    <div>
      <section className="hidden md:block scale-95 m-auto max-w-7xl bg-zinc-50 relative pb-4">
        <div className="flex items-center justify-evenly md:gap-3">
          <div className="flex flex-col gap-6 w-2/5 text-zinc-800">
            <h1 className=" md:text-5xl lg:text-6xl text-6xl font-bold leading-tight">Crea tu CV profesional en sólo 5 minutos</h1>
            <p className="md:text-[18px] lg:text-2xl leading-8 mb-4 md:w-[19rem] lg:w-[29rem]">
              Cvinter te ayuda a crear un curriculum profesional y atractivo en PDF.<br />
              Podrás elegir entre varias plantillas, corregir errores y descargar tu CV con un click!
              ¡Empieza tu carrera con el pie derecho!
            </p>
            <div className='inline'>
              <Link to={'/CVTemplates'} className="md:px-5 md:py-3 md:text-xl lg:px-8 lg:py-4 lg:text-2xl bg-blue-logo text-white rounded-full hover:bg-blue-2">
                Crear mi CV ahora
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 lg:pl-8">
            <img
              className="h-full w-full rounded-lg"
              src={HeroImages}
              alt="Person working on laptop"
            />
          </div>
        </div>
      </section>

      <div className="hidden md:flex lg:m-auto lg:max-w-7xl absolute flex-col md:flex-row
         justify-around left-2/4 transform -translate-x-1/2 bg-emerald-100 
         py-4 md:w-full lg:w-min lg:rounded-full z-10 md:absolute  md:mt-4 md:bottom-auto">
        <Stat count={85} label="Personas han usado el creador de CV's" />
        <Stat count={12} label="Plantillas de CV's en varios modelos" />
        <Stat count={4.9} label="Calificación de nuestros usuarios" />
      </div>

      <div className="hidden md:block relative bg-musgo mt-20 pt-36 pb-16" >
        <section className='lg:justify-evenly flex max-w-7xl m-auto'>
          {templates.map((template) => (
            <Template key={template.name} name={template.name} image={template.image} />
          ))}
        </section>
      </div>
      
      <section className='md:hidden flex flex-col items-center justify-center font-lato'>
        <img className='h-24 w-24' src={NoDisponible} alt='noDisponible'/>
        <h1 className='font-bold text-xl text-gray-700 text-center'>No disponible</h1>
        <p className='text-gray-700 text-center'>Esta pagina no esta disponible para resoluciones de pantalla tablet y mobile</p>
      </section>
    </div>
  );
};

export default MainPage;
