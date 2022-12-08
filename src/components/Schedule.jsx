import React from "react";
import { circle, schedule } from "../assets";

const Schedule = () => {
  return (
    <section id="schedule">
      <div className="w-screen flex justify-center items-center">
        <div className="w-full h-full xl:max-w-[1280px] flex flex-col py-10 sm:py-20 px-3">
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
                Agende hoje mesmo uma consulta virtual ou presencial
              </h2>
              <button className="px-4 py-6 bg-white rounded-xl h5 text-secondary w-max z-[2]">
                Agendar um horário
              </button>
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
      </div>
    </section>
  );
};

export default Schedule;
