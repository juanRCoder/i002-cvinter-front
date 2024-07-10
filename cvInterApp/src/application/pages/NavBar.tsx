import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import ButtonNav from './ButtonNav';

interface NavigationItem {
  name: string;
  href: string;
}

const navigation: NavigationItem[] = [
  { name: 'Inicio', href: '/Home' },
  { name: 'Cómo funciona', href: '/HowItWorks' },
  { name: 'Plantillas', href: '/CVTemplates' },
  { name: 'Contacto', href: '/Contact' },
];

const Example: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white pt-0 pb-6">
      <header className="relative inset-x-0 top-0 z-50 ">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a className="-m-1.5 p-1.5">
              <span className="sr-only">CV Inter App</span>
              <img
                className="h-20 w-20"
                src="src/assets/cvinter_logo_1.png"
                alt="Your Company"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <ButtonNav onClick={() => setMobileMenuOpen(true)} />
          </div>
          <div className="hidden lg:flex lg:gap-x-12 lg:flex-1 lg:justify-end">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 hover:bg-[#94B9FF] rounded-md px-3 py-2">
                {item.name}
              </a>
            ))}
            <a href="/Login" className="text-sm font-semibold leading-6 text-gray-900 hover:bg-[#94B9FF] rounded-md px-3 py-2">
              Log in <span aria-hidden="true">&rarr;</span>
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

export default Example;
