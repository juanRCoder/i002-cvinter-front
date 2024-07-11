import { useCvStore } from '../../../zustand/store/CvStore';
import Template4 from './Template4'

function Show() {
  const { name, lastName, bio, titulo, experiencia, education, techSkills, softSkills, idiomas, certificados, personaInfo } = useCvStore();
  const educationUser = [
    {
      instituto: 'Universidad Increible',
      carrera: 'Lic. en Administracion',
      nivel: 'Terciario',
      anoStart: 2015,
      anoEnd: 2018
    },
    {
      instituto: 'Colegio Secundario Fauget',
      carrera: 'Bachillier en Economia',
      nivel: 'Tecnico',
      anoStart: 2018,
      anoEnd: 2022
    }
  ]
  const experienciaUser = [
    {
      profesion: 'Asistencia de Gerencia',
      empresa: 'Empresa Increible',
      dateStart: 'Agosto 2019',
      dateEnd: 'Presente',
      descripcion: 'Asistencia administrativa integral a Gerencia.Seguimiento de Agenda.Revision de idoneidad de documentos y control de archivos. Creacion de Presentaciones mensuales.'
    },
    {
      profesion: 'Asistencia de Administrativo',
      empresa: 'Empresa Fauget',
      dateStart: 'Enero 2016',
      dateEnd: 'Julio 2017',
      descripcion: 'Recepcion de Clientes, Manejo de Conmutador.Asistencia a mesa de entradas. Organizacion de libros de entrada y salidas.Mantenimiento de archivos.'
    },
    {
      profesion: 'Pasante Administrativo',
      empresa: 'Empresa Fauget',
      dateStart: 'Enero 2016',
      dateEnd: 'Julio 2017',
      descripcion: 'Recepcion de Clientes, Manejo de Conmutador.Asistencia a mesa de entradas. Organizacion de libros de entrada y salidas.'
    }
  ]
  const techSkillsUser = [
    { skill: 'javascript', nivel: 'intermedio' },
    { skill: 'python', nivel: 'basico' },
    { skill: 'react', nivel: 'avanzado' },
  ]
  const idiomasUser = [
    { languaje: 'espanol', nivel: 'nativo' },
    { languaje: 'ingles', nivel: 'basico' }
  ]
  const certificadosUser = [
    {
      skill: 'JavaScript Developer',
      entidadEmisora: 'Udemy',
      ano: 2020
    },
    {
      skill: 'Python Developer',
      entidadEmisora: 'Platzi',
      ano: 2022
    },
  ]
  const InfoUser = [
    { icon: 'telephone', dato: '1257326' },
    { icon: 'address', dato: 'Calle Cualquiera 123, Cualquier Lugar' },
    { icon: 'github', dato: 'OliviaWilson' },
    { icon: 'linkedin', dato: 'OliviaWilson123' },
    { icon: 'portfolio', dato: 'PortfolioOlivia' },
    { icon: 'behance', dato: 'BehanceOlivia123' }
  ];
  const softSkillsUser = ['liderazgo', 'Iniciativa', 'Inteligencia Emocional', 'Comunicacion'];
  const bioUser = "Soy una persona proactiva, organizada y responsable. Disfruto trabajar en equipo y aportar ideas nuevas. Busco un puesto desafiante y dinámico donde pueda continuar aprendiendo y sumando experiencia."
  return (
    <>
      <Template4
        name={name || "Olivia"}
        lastName={lastName || "Wilson"}
        titulo={titulo || "Lic en Administracion"}
        bio={bio || bioUser}
        education={education || educationUser}
        personaInfo={personaInfo || InfoUser}
        experiencia={experiencia || experienciaUser}
        techSkills={techSkills || techSkillsUser}
        idiomas={idiomas || idiomasUser}
        certificados={certificados || certificadosUser}
        softSkills={softSkills || softSkillsUser}
      />
    </>
  )
}

export default Show