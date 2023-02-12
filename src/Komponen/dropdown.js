import '../index.css';
//import 'tailwind.config';
import { useState } from "react";

export default function Dropdown() {
  const [showOption, setShowOption] = useState(false);
  const handleClick = () => {
    setShowOption(!showOption);
  };
  return (
    <div className="relative py-0 inline-block text-left">
      <div className="flex items-center mx-8 relative">
        <button onClick={handleClick} type="button" class="inline-flex w-full justify-center text-base text-white py-0 px-4 group-hover:text-sky-500 dark:text-white" id="menu-button" aria-expanded="true" aria-haspopup="true">
          Data
          <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
        </button>
      </div>

    <div className="absolute right-0 z-10 mt-4 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      {showOption && (
        <div className="py-1" role="none">
        <a href="#" class="text-gray-700 hover:text-sky-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Batas Administrasi</a>
        <a href="#" class="text-gray-700 hover:text-sky-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Pola Ruang Eksisting</a>
        <a href="#" class="text-gray-700 hover:text-sky-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Rencana Detail Tata Ruang</a>
        <a href="#" class="text-gray-700 hover:text-sky-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Proyek Strategis Nasional</a>
      </div>
      )}
    </div>
  </div>

  )
}
