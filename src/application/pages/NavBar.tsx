import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import ButtonNav from './ButtonNav';
import { AiOutlineUser } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';
import logo1 from '../../assets/cvinter_logo_1.png'

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isCVTemplatesRoute: boolean = (
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
          <div className="flex lg:hidden">
            <ButtonNav onClick={() => setMobileMenuOpen(true)} />
          </div>
          <div className="lg:items-center hidden lg:flex lg:gap-16">
          {navigation.map((item) => (
            !isCVTemplatesRoute 
              ? (              
                  item.href === '/' || item.href === '/CVTemplates' 
                  ? (
                    <Link key={item.name} to={item.href} className="hover:border-b-2 hover:border-b-blue-logo text-md text-zinc-800 hover:text-black text-center transition-all">
                      {item.name}
                    </Link>
                    ) 
                  : (
                    <a key={item.name} href={item.href} className="hover:border-b-2 hover:border-b-blue-logo text-md text-zinc-800 hover:text-black transition-all">
                      {item.name}
                    </a>
                  )
                )
              : (
                  item.href === '/' || item.href === '/CVTemplates' ? (
                    <Link key={item.name} to={item.href} className="hover:border-b-2 hover:border-b-blue-logo text-md text-zinc-800 hover:text-black hover:font-semibold text-center transition-all">
                      {item.name}
                    </Link>
                  ) : null
                )
            ))}
            <a href="/Login" className="h-10 w-10 flex items-center justify-center text-2xl rounded-full outline outline-4 outline-blue-logo">
              <AiOutlineUser/>
            </a>
          </div>
        </nav>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a className="-m-1.5 p-1.5">
                <span className="sr-only">CV Inter App</span>
                <img
                  className="h-8 w-auto"
                  src="src/assets/cvinter_logo_1.png"
                  alt=""
                />
              </a>
              <ButtonNav onClick={() => setMobileMenuOpen(false)} />
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#94B9FF]"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="/Login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-[#94B9FF]"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}

export default Navbar;
