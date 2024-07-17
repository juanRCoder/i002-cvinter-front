import JesusMadero from '../../assets/team/jesusMadero.jpg'
import juanRamirez from '../../assets/team/juanRamirez.jpg'
import lucioMorales from '../../assets/team/lucioMorales.jpg'
import './About.css';

const About = () => {
  const TEAM = [
    { name: 'Jesus Madero', img: JesusMadero, link: 'https://www.linkedin.com/in/jesus-madero-vera-410a00240/', username: 'Jesus Madero' },
    { name: 'Lautaro Pintos', img: 'https://www.med.unc.edu/pharm/wp-content/uploads/sites/930/2019/01/juan-song-2023-400-2.jpg', link: 'https://www.linkedin.com/in/lautaro-pintos-20417a109/', username: 'Lautaro Pintos' },
    { name: 'Emiliano Diaz', img: 'https://www.med.unc.edu/pharm/wp-content/uploads/sites/930/2019/01/juan-song-2023-400-2.jpg', link: 'https://www.linkedin.com/in/emiliano-esteban-diaz/', username: 'Emiliano Diaz' },
    { name: 'Juan Ramirez', img: juanRamirez , link: 'https://www.linkedin.com/in/juan-ramirez-490b84271/', username: 'Juan Ramirez' },
    { name: 'Lucio Morales', img: lucioMorales, link: 'https://www.linkedin.com/in/lucio-morales/', username: 'Lucio Morales' },
    { name: 'Nicolás Irigoyen', img: 'https://www.med.unc.edu/pharm/wp-content/uploads/sites/930/2019/01/juan-song-2023-400-2.jpg', link: 'https://www.linkedin.com/in/nirigoyen/', username: 'Nicolás Irigoyen ' },
    { name: 'Christian Gil', img: 'https://www.med.unc.edu/pharm/wp-content/uploads/sites/930/2019/01/juan-song-2023-400-2.jpg', link: 'https://www.linkedin.com/in/christiangil72/', username: 'Christian Gil' },
  ]

  return <section className="lg:min-h-screen md:flex md:items-center md:justify-center font-lato background">
    <article className="lg:flex lg:items-center lg:justify-center max-w-7xl">
      <div className="lg:mb-0 lg:w-2/5 md:pt-7 md:px-8 xs:mb-10 flex flex-col items-start pt-4 px-4 mb-10">
        <h1 className="lg:w-24 md:text-6xl text-neutral-800 leading-tight text-left text-5xl font-extrabold">Sobre nosotros</h1>
        <p className="lg:text-xl md:text-lg text-left text-md my-6">
          Equipo apasionado de desarrolladores con experiencia en la creación de aplicaciones web modernas y robustas. 
          Utilizando las últimas tecnologías como React para el front-end y Java para el back-end, hemos creado una solución 
          que combina eficiencia y una experiencia de usuario excepcional.
        </p>
        <a href="https://igrowker.com/" target='_BLANK' className="md:text-xl md:py-3 text-white text-lg py-2 px-10 rounded-full bg-blue-logo hover:bg-blue-2 transition">
          <button className="w-full h-full">
            Ir a Igrowker
          </button>
        </a>
      </div>
      <div className="lg:scale-95 lg:w-7/12 md:flex md:justify-center mb-10">
        <div className="flex flex-wrap gap-4 items-center justify-center h-full">
          {TEAM.map((t) => (
            <div key={t.name} className="flex flex-col items-center">
              <div className="rounded-3xl mb-1">
                <img
                  className="w-40 h-full object-cover rounded-3xl"
                  src={t.img}
                  alt={t.name}
                  title={t.name}
                />
              </div>
              <p className="text-md">{t.name}</p>
              <p className="text-xs">
                <a href={t.link} target="_blank">
                  linkedin.com/{t.username}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  </section>;
};

export default About;
