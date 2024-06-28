import cvinter_white from '../../../assets/Cvinter_white.png';

const Footer = () => {
  return (
    <footer className='bg-musgo font-lato pt-10 px-16 pb-4'>
      <section className='flex justify-between mx-7'>
        <div className='h-24 w-24'>
          <img
            className='w-full h-full object-cover'
            src={cvinter_white}
            title='cvinter_logo'
            alt='cvinter_logo'
          />
        </div>
        <div className='text-white mt-12'>
          <h1 className='text-right font-bold text-lg mb-3'>Links</h1>
          <ul className='text-right flex flex-col gap-4'>
            <li className='hover:font-semibold'><a href="/">Sobre nosotros</a></li>
            <li className='hover:font-semibold'><a href="/">Politicas de privacidad</a></li>
            <li className='hover:font-semibold'><a href="/">Cookies</a></li>
          </ul>
        </div>
      </section>
      <div className='border-t border-1 mt-8 py-5 pb-7'>
        <p className='text-white'>Cvinter &copy;2024 - Todos los derechos reservados</p>
      </div>
    </footer>
  )
}

export default Footer;