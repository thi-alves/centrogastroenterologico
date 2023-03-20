import React from "react";
import { circle, schedule } from "../assets";
import {BsCalendar3} from "react-icons/bs"

const Schedule = () => {
  return (
    <section id="schedule">
    <div className="container mx-auto py-16">
          <div className="w-full grid sm:grid-cols-12 bg-primary self-center rounded-3xl overflow-hidden group">
            <div className="sm:col-span-7 flex flex-col justify-center p-10 gap-6 relative">
              <img
                id="circle"
                src={circle}
                alt=""
                className="absolute left-0 z-[1] transition-all duration-100"
              />
              <img
                id="circle"
                src={circle}
                alt=""
                className="absolute right-0  top-[40%] left-[60%] z-[1]"
              />
              <h2 className="h2 text-white z-[2]">
                Solicite hoje mesmo o agendamento da sua consulta
              </h2>
              <a href="#contact" className="bg-white rounded-xl px-8 py-4 font-bold text-secondary shadow-btn hover:-translate-y-1 transition duration-300 w-max z-[2]">
              <BsCalendar3 className="inline text-2xl mr-2"/>
                Solicitar agendamento
                
              </a>
            </div>
            <div className="sm:col-span-5 relative overflow-hidden">
              <img
                src={schedule}
                alt=""
                className="w-full h-full object-cover relative z-[2] group-hover:scale-125 transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>
     </div>
    </section>
  );
};

export default Schedule;
