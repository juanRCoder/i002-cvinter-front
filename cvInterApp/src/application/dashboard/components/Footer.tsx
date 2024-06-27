import cvinter_logo1 from '../../../assets/cvinter_logo_1.png';

const Footer = () => {
  return (
    <footer className='bg-musgo font-lato pt-5 px-16 pb-4'>
      <section className='flex justify-between mx-7'>
        <div className='h-32 w-32'>
          <img
            className='w-full h-full object-cover'
            src={cvinter_logo1}
            title='cvinter_logo'
            alt='cvinter_logo'
          />
        </div>
        <div className='text-white mt-12'>
          <h1 className='text-right font-bold text-xl mb-2'>Links</h1>
          <ul className='text-right flex flex-col gap-5'>
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