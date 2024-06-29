import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';

interface ButtonNavProps {
  onClick: () => void;
}

const ButtonNav: React.FC<ButtonNavProps> = ({ onClick }) => {
  return (
    <button
    type="button"
    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 transition-colors duration-300 ease-in-out hover:bg-[#95be9e] hover:text-white"
    onClick={onClick}
  >
    <span className="sr-only">Open main menu</span>
    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
  </button>
  );
};

export default ButtonNav;
