import Template5 from './Template5'
import Template4 from './Template4'

function Show() {
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
            rol: 'Asistencia administrativa integral a Gerencia.Seguimiento de Agenda.Revision de idoneidad de documentos y control de archivos. Creacion de Presentaciones mensuales.'
        },
        {
            profesion: 'Asistencia de Administrativo',
            empresa: 'Empresa Fauget',
            dateStart: 'Enero 2016',
            dateEnd: 'Julio 2017',
            rol: 'Recepcion de Clientes, Manejo de Conmutador.Asistencia a mesa de entradas. Organizacion de libros de entrada y salidas.Mantenimiento de archivos.'
        },
        {
            profesion: 'Pasante Administrativo',
            empresa: 'Empresa Fauget',
            dateStart: 'Enero 2016',
            dateEnd: 'Julio 2017',
            rol: 'Recepcion de Clientes, Manejo de Conmutador.Asistencia a mesa de entradas. Organizacion de libros de entrada y salidas.'
        }
    ]
    const redesUser = [
        { red: 'github', user: 'OliviaWilson' },
        { red: 'linkedin', user: 'OliviaWilson123' },
        { red: 'portfolio', user: 'PortfolioOlivia' },
        { red: 'behance', user: 'BehanceOlivia123' }
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
    const locationUser = [
        { red: 'telephone', user: '1257326' },
        { red: 'email', user: 'OliviaWilson@gmail.com' },
        { red: 'address', user: 'Calle Cualquiera 123, Cualquier Lugar' }
    ]
    const softSkillsUser = ['liderazgo', 'Iniciativa', 'Inteligencia Emocional', 'Comunicacion'];
    const bioUser = "Soy una persona proactiva, organizada y responsable. Disfruto trabajar en equipo y aportar ideas nuevas. Busco un puesto desafiante y dinámico donde pueda continuar aprendiendo y sumando experiencia."
    return (
        <>
            <Template4
                name="Olivia"
                lastName="Wilson"
                titulo="Lic en Administracion"
                bio={bioUser}
                education={educationUser}
                location={locationUser}
                experiencia={experienciaUser}
                redes={redesUser}
                techSkills={techSkillsUser}
                idiomas={idiomasUser}
                certificados={certificadosUser}
                softSkills={softSkillsUser}
            />
            <Template5
                name="Olivia"
                lastName="Wilson"
                titulo="Lic en Administracion"
                bio={bioUser}
                education={educationUser || []}
                location={locationUser}
                experiencia={experienciaUser || []}
                redes={redesUser || []}
                techSkills={techSkillsUser || []}
                idiomas={idiomasUser || []}
                certificados={certificadosUser || []}
                softSkills={softSkillsUser || []}
            />
        </>
    )
}

export default Show