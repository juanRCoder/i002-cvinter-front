import { AiOutlineUser } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';
import logo1 from '../../assets/logos/cvinter_logo_1.webp'

interface NavigationItem {
  name: string;
  href: string;
}

const navigation: NavigationItem[] = [
  { name: 'Inicio', href: '/' },
  { name: 'Cómo funciona', href: '#comoFunciona' },
  { name: 'Plantillas', href: '/CVTemplates' },
  { name: 'Contacto', href: '#contact' },
];

const Navbar: React.FC = () => {
  const location = useLocation();

  const isCVTemplatesRoute: boolean = (
    location.pathname === '/PrivacyPolicy' ||
    location.pathname === '/PrivacyCookies' ||
    location.pathname === '/CVTemplates' ||
    location.pathname === '/CVTemplates/bio' ||
    location.pathname === '/CVTemplates/experience' ||
    location.pathname === '/CVTemplates/education' ||
    location.pathname === '/CVTemplates/tech-skills' ||
    location.pathname === '/CVTemplates/soft-skills' ||
    location.pathname === '/CVTemplates/other-data' ||
    location.pathname === '/CVTemplates/upload'
  );

  return (
    <div id='home' className="max-w-7xl m-auto">
      <header className="relative inset-x-0 top-0 z-50 ">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to={'/'} className="">
              <div className='h-20 w-20'>
                <img
                  className="h-full w-full"
                  src={logo1}
                  alt="Your Company"
                />
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-16">
            {navigation.map((item) => (
              !isCVTemplatesRoute
                ? (
                  item.href === '/' || item.href === '/CVTemplates'
                    ? (
                      <Link key={item.name} to={item.href} className="hidden md:flex hover:border-b-2 hover:border-b-blue-logo text-md text-zinc-800 hover:text-black text-center transition-all">
                        {item.name}
                      </Link>
                    )
                    : (
                      <a key={item.name} href={item.href} className="hidden md:flex hover:border-b-2 hover:border-b-blue-logo text-md text-zinc-800 hover:text-black transition-all">
                        {item.name}
                      </a>
                    )
                )
                : (
                  item.href === '/' || item.href === '/CVTemplates'  ? (
                    <Link key={item.name} to={item.href} className="hidden md:flex hover:border-b-2 hover:border-b-blue-logo text-md text-zinc-800 hover:text-black hover:font-semibold text-center transition-all">
                      {item.name}
                    </Link>
                  ) : null
                )
            ))}
            <a href="/Login" className="h-10 w-10 flex items-center justify-center text-2xl rounded-full outline outline-4 outline-blue-logo">
              <AiOutlineUser />
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
