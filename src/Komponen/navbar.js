import '../index.css';
//import 'tailwind.config';
import Logo from '../dist/img/Bengek.png';
import Dropdown from './dropdown';
import { useState } from "react";

export default function Nav() {
  return (
    <div className="Nav" class="flex items-center justify-between relative bg-dark">   
        <div class="px-4 flex items-center relative">
            <a href="#">
                <img src={Logo} alt="logo" width="40" />
            </a>
            <a href="index.html" class="text-base text-white py-2 mx-2 group-hover:text-sky-500 dark:text-white">WebGIS Sederhana</a>
        </div>
        <div class="flex items-center px-4 relative">
            <nav id="nav-menu" class="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                <ul class="block lg:flex">
                    <li class="group">
                        <a href="index.html" class="text-base text-white py-2 mx-8 group-hover:text-sky-500 dark:text-white">Cari Apa ?</a>
                    </li>
                    <li class="group">
                        <a href="#" class="text-base text-white py-2 mx-8 group-hover:text-sky-500 dark:text-white">Panduan</a>
                    </li>
                    <li class="group">                        
                        <Dropdown />                    
                    </li>
                    <li class="group">
                        <a href="#" class="text-base text-white py-2 mx-8 group-hover:text-sky-500 dark:text-white">GitHub</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  );
}
