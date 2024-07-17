import { Link } from 'react-router-dom';
import cvinter_white from '../../../assets/Cvinter_white.png';

const Footer = () => {

  return (
    <footer className='bg-musgo font-lato pt-10 px-16 pb-4'>
      <div className='max-w-7xl m-auto'>
        <section className='flex justify-between mx-7'>
          <a href='#home'>
            <div className='h-24 w-24'>
              <img
                className='w-full h-full object-cover'
                src={cvinter_white}
                title='cvinter_logo'
                alt='cvinter_logo'
              />
            </div>
          </a>
          <div className='text-white mt-12'>
            <h1 className='text-right font-bold text-lg mb-3'>Links</h1>
            <ul className='text-right flex flex-col gap-4'>
              <li className='hover:font-semibold'><Link to={'/about'}>Sobre nosotros</Link></li>
              <li className='hover:font-semibold'><a href="#home">Politicas de privacidad</a></li>
              <li className='hover:font-semibold'><a href="#home">Cookies</a></li>
            </ul>
          </div>
        </section>
        <div className='border-t border-1 mt-8 py-5 pb-7'>
          <p className='text-white'>Cvinter &copy;2024 - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;