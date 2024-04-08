import React from "react";
import { logo } from "../assets";

function Navbar() {
  return (
    <nav className="backdrop-blur-0 bg-gray_white/45 p-4 shadow-btn absolute top-0 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center ">
        <div className="flex items-center">
          <span className="text-secondary text-xl font-bold">
            <img src={logo} alt="" />
          </span>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4 font-extrabold">
            <li>
              <a href="#sobre" className="text-secondary hover:text-gray-300">
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#servicos"
                className="text-secondary hover:text-gray-300"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#corpo_clinico"
                className="text-secondary hover:text-gray-300"
              >
                Corpo clínico
              </a>
            </li>
            <li>
              <a href="#ajuda" className="text-secondary hover:text-gray-300">
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#downloads"
                className="text-secondary hover:text-gray-300"
              >
                Downloads
              </a>
            </li>
            <li>
              <a
                href="#agendamento"
                className="text-white bg-primary  px-4  rounded-md"
              >
                Agendamento
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
