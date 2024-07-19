import { Outlet } from "react-router-dom";
// import Template1 from "./application/dashboard/components/templates/Template1";

function App() {
  // const educationUser = [
  //   {
  //     id:1,
  //     instituto: 'Universidad Increible',
  //     carrera: 'Lic. en Administracion',
  //     nivel: 'Terciario',
  //     dateStart: 2015,
  //     dateEnd: 2018
  //   },
  //   {
  //     id: 2,
  //     instituto: 'Colegio Secundario Fauget',
  //     carrera: 'Bachillier en Economia',
  //     nivel: 'Tecnico',
  //     dateStart: 2018,
  //     dateEnd: 2022
  //   }
  // ]
  // const experienciaUser = [
  //   {
  //     id: 1,
  //     profesion: 'Asistencia de Gerencia',
  //     empresa: 'Empresa Increible',
  //     dateStart: 'Agosto 2019',
  //     dateEnd: 'Presente',
  //     descripcion: 'Asistencia administrativa integral a Gerencia.Seguimiento de Agenda.Revision de idoneidad de documentos y control de archivos. Creacion de Presentaciones mensuales.'
  //   },
  //   {
  //     id: 2,
  //     profesion: 'Asistencia de Administrativo',
  //     empresa: 'Empresa Fauget',
  //     dateStart: 'Enero 2016',
  //     dateEnd: 'Julio 2017',
  //     descripcion: 'Recepcion de Clientes, Manejo de Conmutador.Asistencia a mesa de entradas. Organizacion de libros de entrada y salidas.Mantenimiento de archivos.'
  //   },
  //   {
  //     id: 3,
  //     profesion: 'Pasante Administrativo',
  //     empresa: 'Empresa Fauget',
  //     dateStart: 'Enero 2016',
  //     dateEnd: 'Julio 2017',
  //     descripcion: 'Recepcion de Clientes, Manejo de Conmutador.Asistencia a mesa de entradas. Organizacion de libros de entrada y salidas.'
  //   }
  // ]
  // const idiomasUser = [
  //   { languaje: 'espanol', nivel: 'nativo' },
  //   { languaje: 'ingles', nivel: 'basico' }
  // ]
  // const techSkill = [
  //   { id: 1, skill: 'react', nivel: 'avanzado' },
  //   { id: 2, skill: 'javasctrip', nivel: 'principiante' }
  // ]
  // const certificaod1 = [
  //   {
  //     id: 1,
  //     skill: "JavaScript Developer",
  //     entidadEmisora: "Udemy",
  //     ano: 2020,
  //   },
  //   {
  //     id: 2,
  //     skill: "Python Developer",
  //     entidadEmisora: "Platzi",
  //     ano: 2022,
  //   },
  // ]
  // const InfoUser = [
  //   { icon: 'telephone', dato: '1257326' },
  //   { icon: 'address', dato: 'Calle Cualquiera 123, Cualquier Lugar' },
  //   { icon: 'github', dato: 'OliviaWilson' },
  //   { icon: 'linkedin', dato: 'OliviaWilson123' },
  //   { icon: 'portfolio', dato: 'PortfolioOlivia' },
  //   { icon: 'behance', dato: 'BehanceOlivia123' }
  // ];
  // const softSkillsUser = ['liderazgo', 'Iniciativa', 'Inteligencia Emocional', 'Comunicacion'];
  // const bioUser = "Soy una persona proactiva, organizada y responsable. Disfruto trabajar en equipo y aportar ideas nuevas. Busco un puesto desafiante y dinámico donde pueda continuar aprendiendo y sumando experiencia."
  return <>
    <Outlet />
    {/* <Template1
      templateSelected={1}
      name={"Olivia"}
      lastName={"Wilson"}
      bio={bioUser}
      titulo={'DESARROLLO WEB'}
      experiencia={experienciaUser}
      education={educationUser}
      techSkills={techSkill}
      softSkills={softSkillsUser}
      idiomas={idiomasUser}
      certificados={certificaod1}
      personaInfo={InfoUser}
    />; */}
  </>
}

export default App;
