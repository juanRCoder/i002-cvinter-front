import { Link } from "react-router-dom";
import './About.css';

const About = () => {
  const TEAM = [
    { name: 'juana ramirez1', img: 'https://www.med.unc.edu/pharm/wp-content/uploads/sites/930/2019/01/juan-song-2023-400-2.jpg', link: 'https://www.linkedin.com/in/juan-ramirez-490b84271/', username: 'juanaRCoder' },
    { name: 'juana ramirez2', img: 'https://www.med.unc.edu/pharm/wp-content/uploads/sites/930/2019/01/juan-song-2023-400-2.jpg', link: 'https://www.linkedin.com/in/juan-ramirez-490b84271/', username: 'juanaRCoder' },
    { name: 'juana ramirez3', img: 'https://www.med.unc.edu/pharm/wp-content/uploads/sites/930/2019/01/juan-song-2023-400-2.jpg', link: 'https://www.linkedin.com/in/juan-ramirez-490b84271/', username: 'juanaRCoder' },
    { name: 'juana ramirez4', img: 'https://www.med.unc.edu/pharm/wp-content/uploads/sites/930/2019/01/juan-song-2023-400-2.jpg', link: 'https://www.linkedin.com/in/juan-ramirez-490b84271/', username: 'juanaRCoder' },
    { name: 'juana ramirez5', img: 'https://www.med.unc.edu/pharm/wp-content/uploads/sites/930/2019/01/juan-song-2023-400-2.jpg', link: 'https://www.linkedin.com/in/juan-ramirez-490b84271/', username: 'juanaRCoder' },
    { name: 'juana ramirez6', img: 'https://www.med.unc.edu/pharm/wp-content/uploads/sites/930/2019/01/juan-song-2023-400-2.jpg', link: 'https://www.linkedin.com/in/juan-ramirez-490b84271/', username: 'juanaRCoder' },
    { name: 'juana ramirez7', img: 'https://www.med.unc.edu/pharm/wp-content/uploads/sites/930/2019/01/juan-song-2023-400-2.jpg', link: 'https://www.linkedin.com/in/juan-ramirez-490b84271/', username: 'juanaRCoder' },
    { name: 'juana ramirez8', img: 'https://www.med.unc.edu/pharm/wp-content/uploads/sites/930/2019/01/juan-song-2023-400-2.jpg', link: 'https://www.linkedin.com/in/juan-ramirez-490b84271/', username: 'juanaRCoder' },
    { name: 'juana ramirez9', img: 'https://www.med.unc.edu/pharm/wp-content/uploads/sites/930/2019/01/juan-song-2023-400-2.jpg', link: 'https://www.linkedin.com/in/juan-ramirez-490b84271/', username: 'juanaRCoder' },
    { name: 'juana ramirez0', img: 'https://www.med.unc.edu/pharm/wp-content/uploads/sites/930/2019/01/juan-song-2023-400-2.jpg', link: 'https://www.linkedin.com/in/juan-ramirez-490b84271/', username: 'juanaRCoder' },
    { name: 'juana ramirez01', img: 'https://www.med.unc.edu/pharm/wp-content/uploads/sites/930/2019/01/juan-song-2023-400-2.jpg', link: 'https://www.linkedin.com/in/juan-ramirez-490b84271/', username: 'juanaRCoder' },
    { name: 'juana ramirez02', img: 'https://www.med.unc.edu/pharm/wp-content/uploads/sites/930/2019/01/juan-song-2023-400-2.jpg', link: 'https://www.linkedin.com/in/juan-ramirez-490b84271/', username: 'juanaRCoder' },
  ]

  return <section className="md:min-h-screen md:flex md:items-center md:justify-center font-lato background">
    <article className="lg:flex lg:items-start lg:justify-center max-w-7xl">
      <div className="lg:mb-0 lg:w-2/5 md:pt-7 md:px-8 xs:mb-10 flex flex-col items-start pt-4 px-4">
        <h1 className="lg:w-24 md:text-6xl text-neutral-800 leading-tight text-left text-5xl font-extrabold">Sobre nosotros</h1>
        <p className="lg:text-xl md:text-lg lg:w-80 text-left text-md my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Faucibus in libero risus semper habitant arcu eget.
          Et integer facilisi eget. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget.
          Et integer facilisi eget
        </p>
        <Link to={'/'} className="md:text-xl md:py-3 text-white text-lg py-2 px-10 rounded-full bg-blue-logo hover:bg-blue-2 transition">
          <button className="w-full h-full">
            Ir a Igrowker
          </button>
        </Link>
      </div>
      <div className="lg:w-7/12 md:flex md:justify-center md:scale-90 scale-95">
        <div className="sm:grid-cols-4 xs:grid-cols-3 grid grid-cols-2 gap-4 md:gap-4">
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
