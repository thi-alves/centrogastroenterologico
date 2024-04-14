import React from "react";
import { logo1 } from "../assets";

function Navbar() {
  return (
    <nav className="backdrop-blur bg-gray_white/70 p-4 shadow-btn  top-0 w-full fixed z-[9000]">
      <div className="max-w-7xl mx-auto flex justify-between items-center ">
        <div className="flex items-center">
          <span className="text-secondary text-xl font-bold">
            <img src={logo1} alt="" />
          </span>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4 font-bold">
            <li>
              <a
                href="#sobre"
                className="text-secondary hover:text-gray-300 font-bold"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#servicos"
                className="text-secondary hover:text-gray-300 font-bold"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#corpo_clinico"
                className="text-secondary hover:text-gray-300 font-bold"
              >
                Corpo clínico
              </a>
            </li>
            <li>
              <a
                href="#ajuda"
                className="text-secondary hover:text-gray-300 font-bold"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#downloads"
                className="text-secondary hover:text-gray-300 font-bold"
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
