import React from "react";
import { circle, schedule } from "../assets";
import { BsCalendar3 } from "react-icons/bs";
import { MdEmail, MdAccessTimeFilled, MdMedicalServices } from "react-icons/md";

const Schedule = () => {
  return (
    <section
      id="schedule"
      className="max-container padding-container flex mt-12 mb-20"
    >
      <div className="flex flex-col">
        <div
          id="Agendamentos Centro Gastro BH"
          className="flex  flex-col md:flex-row bg-primary rounded-3xl group overflow-hidden"
        >
          <div className="w-full md:w-[60%] relative">
            <img
              id="circle"
              src={circle}
              alt=""
              className="absolute -left-10 -top-10 z-[0]"
            />
            <img
              id="circle"
              src={circle}
              alt=""
              className="w-[44%] absolute -right-36 -bottom-36 z-[0]"
            />
            <div className="w-full h-full flex flex-col  relative justify-center p-10 gap-6 z-[1]">
              <h2 className="h2 text-white ">
                Solicite hoje mesmo o agendamento da sua consulta ou exame.
              </h2>
              <a
                href="#agendamento"
                className="bg-white rounded-xl px-8 py-4 font-bold text-secondary shadow-btn hover:-translate-y-1 transition duration-300 w-max"
              >
                <BsCalendar3 className="inline text-2xl mr-2" />
                Solicitar agendamento
              </a>
            </div>
          </div>
          <div className="w-full md:w-[40%]  overflow-hidden z-[1]">
            <img
              src={schedule}
              alt=""
              className="w-full h-full object-cover relative group-hover:scale-125 transition-transform duration-700 ease-in-out"
            />
          </div>
        </div>
        <div
          id="Informações Agendamentos Centro Gastro BH"
          className="flex flex-col md:flex-row bg-white rounded-3xl shadow-btn p-5 justify-between gap-4 mt-8"
        >
          <div className="flex flex-1 group">
            <div className="hidden md:block">
              <div className="p-4 bg-primary  group-hover:bg-secondary transition duration-300 rounded-2xl mr-5 flex justify-center items-center text-white text-4xl">
                <MdEmail />
              </div>
            </div>
            <div className="">
              <h3 className="h3 text-black mb-2">Contato</h3>
              <p className="p text-gray_red">(31) 3263-2000</p>

              <p className="p  text-secondary">
                <span className="font-bold">
                  centrogastro@centrogastro.com.br
                </span>
              </p>
              <div className="w-[0%] h-[2px] group-hover:w-[100%] bg-secondary transition-all duration-300" />
            </div>
          </div>
          <div className="w-full md:w-[1px]  h-[1px] md:h-auto bg-black/10"></div>
          <div className="flex flex-1 group">
            <div className="hidden md:block">
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
                <span className="font-bold text-secondary">Sábado:</span> 07:00h
                às 13:00h
              </p>
              <p className="p text-gray_red">
                <span className="font-bold text-secondary">Domingo:</span>{" "}
                Fechado
              </p>
              <div className="w-[0%] h-[2px] group-hover:w-[100%] bg-secondary transition-all duration-300" />
            </div>
          </div>
          <div className="w-full md:w-[1px]  h-[1px] md:h-auto bg-black/10"></div>
          <div className="flex flex-1 group">
            <div className="hidden md:block">
              <div className="p-4 bg-primary  group-hover:bg-secondary transition duration-300 rounded-2xl mr-5 flex justify-center items-center text-white text-4xl">
                <MdMedicalServices />
              </div>
            </div>
            <div className="">
              <h3 className="h3 text-black mb-2">Serviços</h3>
              <p className="p text-gray_red">
                <span className="font-bold text-secondary">● </span>
                Consultas &nbsp;&nbsp;
                <span className="font-bold text-secondary">● </span>
                Exames
              </p>
              <p className="p text-gray_red">
                <span className="font-bold text-secondary">● </span>
                Endoscopia &nbsp;&nbsp;
                <span className="font-bold text-secondary">● </span>
                Ecoendoscopia
              </p>
              <p className="p text-gray_red">
                <span className="font-bold text-secondary">● </span>
                Colonoscopia &nbsp;&nbsp;
                <span className="font-bold text-secondary">● </span>
                Cirurgião Geral
              </p>
              <div className="w-[0%] h-[2px] group-hover:w-[100%] bg-secondary transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
