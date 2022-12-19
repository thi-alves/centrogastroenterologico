import React from "react";
import { home, circle } from "../assets";
import {
  MdEmail,
  MdAccessTimeFilled,
  MdMedicalServices,
  MdOutlineMedicalServices,
} from "react-icons/md";
import { BsCalendar2Plus } from "react-icons/bs";

const Hero = () => {
  return (
    <section id="home">
      <div className="w-screen min-h-screen">
        <div className="w-full h-full grid sm:grid-cols-2 gap-y-4">
          <div className="flex flex-col justify-center items-end mr-20 relative overflow-hidden w-full h-full  space-container-section">
            <img
              id="circle"
              src={circle}
              alt=""
              className="w-[50%] absolute -right-[20%] -top-[20%] opacity-60 z-[0]"
            />
            <div className="rounded-2xl h-14 w-8 border-4 border-secondary flex justify-center items-center">
              <div className="bg-secondary w-[5px] h-[50%] rounded-full ease-in-out animate-bounce" />
            </div>
            <img
              id="circle"
              src={circle}
              alt=""
              className="w-[40%] absolute left-10 bottom-0 opacity-60 z-[0]"
            />
            <div className="self-end max-w-[568px] z-[1] flex flex-col gap-y-4">
              <h1 className="h1 text-primary">
                <strong>
                  Uma{" "}
                  <span className="text-secondary">
                    clínica gastroenterologica
                  </span>{" "}
                  que você pode confiar
                </strong>
              </h1>
              <p className="p text-gray_red mb-4">
                O centro Gastro foi criado pelo Dr. 
                Nantes Morillo no ano de 1992 ainda
                atuante como gastroenterologista
                e endoscopista. Somos uma clínica especializada
                em doenças do aparelho digestivo com atendimento
                em consultas eletivas, exames diagnósticos e terapêuticos de endoscopia digestiva, Colonoscopia e Ecoendoscopia.
              </p>
              <div className="flex justify-start gap-x-8 items-center flex-col sm:flex-row gap-y-2">
                <a href="#contact" className="flex justify-center items-center gap-2 w-full sm:w-max bg-primary rounded-xl px-8 py-4 font-bold text-white shadow-btn hover:bg-secondary hover:-translate-y-1 transition duration-300">
                  <BsCalendar2Plus />
                  Marcar um hórario
                </a>
                <a href="#services" className="flex justify-center items-center gap-2 w-full sm:w-max bg-white rounded-xl px-8 py-4 font-bold text-secondary shadow-btn hover:-translate-y-1 transition duration-300">
                  <MdOutlineMedicalServices className="text-xl" />
                  Procurar serviços
                </a>
              </div>
            </div>
          </div>
          <div className="overflow-hidden">
            <img src={home} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center">
        <div className="w-full h-full xl:max-w-[1280px] px-3 sm:px-10 lg:px-48 xl:px-10">
          <div className="right-0 left-0 m-auto flex flex-col md:flex-row gap-y-4 bg-white rounded-3xl shadow-btn p-10 justify-between relative mt-[-100px]">
            <div className="flex md:flex-col lg:flex-row gap-y-3 w-full justify-center group">
              <div className="w-max">
                <div className="p-4 bg-primary  group-hover:bg-secondary transition duration-300 rounded-2xl mr-5 flex justify-center items-center text-white text-4xl">
                  <MdEmail />
                </div>
              </div>
              <div className="">
                <h3 className="h3 text-black mb-2">Contato</h3>
                <p className="p text-gray_red">(31) 3263-2000</p>
                <p className="p text-gray_red">(31) 98611-0299</p>
                <a className="p font-bold text-secondary">
                  contato@centrogastro.com
                </a>
                <div className="w-[0%] h-[2px] group-hover:w-[100%] bg-secondary transition-all duration-300" />
              </div>
            </div>

            <div className="w-full sm:w-[1px]  h-[1px] sm:h-auto mx-4 bg-black/10"></div>

            <div className="flex md:flex-col lg:flex-row gap-y-3 w-full justify-center group">
              <div className="w-max">
                <div className="p-4 bg-primary  group-hover:bg-secondary transition duration-300 rounded-2xl mr-5 flex justify-center items-center text-white text-4xl">
                  <MdAccessTimeFilled />
                </div>
              </div>
              <div className="">
                <h3 className="h3 text-black mb-2">Hórario</h3>
                <p className="p text-gray_red">
                  <span className="font-bold text-secondary">Seg - Sex:</span>{" "}
                  07:00h às 18:00h
                </p>
                <p className="p text-gray_red">
                  <span className="font-bold text-secondary">Sábado:</span>{" "}
                  07:00h às 13:00h
                </p>
                <p className="p text-gray_red">
                  <span className="font-bold text-secondary">Domingo:</span>{" "}
                  Fechado
                </p>
                <div className="w-[0%] h-[2px] group-hover:w-[100%] bg-secondary transition-all duration-300" />
              </div>
            </div>

            <div className="w-full sm:w-[1px]  h-[1px] sm:h-auto mx-4 bg-black/10"></div>

            <div className="flex md:flex-col lg:flex-row gap-y-3 w-full justify-center group">
              <div className="w-max">
                <div className="p-4 bg-primary  group-hover:bg-secondary transition duration-300 rounded-2xl mr-5 flex justify-center items-center text-white text-4xl">
                  <MdMedicalServices />
                </div>
              </div>
              <div className="">
                <h3 className="h3 text-black mb-2">Serviços</h3>
                <p className="p text-gray_red">
                  <span className="font-bold text-secondary">● </span>Endoscopia
                  Digestiva
                </p>
                <p className="p text-gray_red">
                  <span className="font-bold text-secondary">● </span>
                  Colonoscopia
                </p>
                <p className="p text-gray_red">
                  <span className="font-bold text-secondary">● </span>
                  Ecoendoscopia
                </p>
                <div className="w-[0%] h-[2px] group-hover:w-[100%] bg-secondary transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
