import React from "react";
import { logo } from "../assets";
/*z-10 fixed*/
const Navbar = () => {
  return (
    <div className="w-screen h-[80px]  bg-white drop-shadow-lg flex justify-center items-center">
      <div className="xl:max-w-[1280px] w-full flex items-center justify-between">
        <div>
          <img
            src={logo}
            alt=""
            className="w-[180px] h-[180px object-contain]"
          />
        </div>
        <div className="hidden md:flex">
          <ul>
            <li className="current">Home</li>
            <li>Equipe</li>
            <li>Estrutura</li>
            <li>Procedimentos</li>
            <li>Preparos e Termos</li>
          </ul>
        </div>
        <div className="hidden gap-7  md:flex">
          <button className="py-4 px-4 shadow-btn font-bold bg-transparent text-black cursor-pointer rounded-xl text-sm leading-4 hover:scale-105 hover:shadow-lg hover:shadow-secondary/50">
            {" "}
            <img
              src={icon_phone}
              alt=""
              className="h-[22px] w-[22px] object-contain inline-block mr-2"
            />
            (31) 99335-5485
          </button>
          <button className="py-4 px-4 font-bold bg-primary text-white cursor-pointer rounded-xl text-sm leading-4 hover:bg-secondary hover:scale-105 hover:shadow-lg hover:shadow-secondary/50">
            Agendamento
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
