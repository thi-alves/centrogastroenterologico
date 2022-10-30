import React from "react";

import { services } from "../constants";
import Card_Services from "./Card_Services";

const Services = () => {
  const sliderLeft = () => {
    var slider = document.getElementById("Slider");
    slider.scrollLeft = slider.scrollLeft - 208;
  };

  const sliderRight = () => {
    var slider = document.getElementById("Slider");
    slider.scrollLeft = slider.scrollLeft + 208;
  };

  return (
    <>
      <div className="w-screen flex justify-start items-center flex-col">
        <div className="xl:max-w-[1280px] w-full">
          <div className="grid sm:grid-cols-2 space-y-5 mb-10 ">
            <div className="space-y-5">
              <button className="shadow-btn bg-white text-secondary px-4 py-3 rounded-lg font-bold leading-5 text-base">
                Nossos serviços
              </button>
              <h2 className="tm text-start">
                Nossa equipe médica pode ajudar com uma variedade de serviços
                gastroenterológicos
              </h2>
            </div>
            <div className="self-end justify-end flex">
              <button className="shadow-btn text-white w-[100%] sm:w-auto bg-primary px-8 py-6 rounded-xl font-bold leading-5 text-lg">
                Reserve um Horário
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex items-center">
        <button
          onClick={sliderLeft}
          className="sm:left-[5%] w-[80px] left-0 h-[80px] bg-secondary rounded-full absolute z-[5] text-white flex justify-center items-center shadow-lg shadow-btn"
        >
          Ant.
        </button>
        <button
          onClick={sliderRight}
          className="sm:right-[5%] w-[80px] right-0 h-[80px] bg-secondary rounded-full absolute z-[5] text-white flex justify-center items-center shadow-lg shadow-btn"
        >
          Prox.
        </button>
        <div
          id="Slider"
          className="w-full h-full flex flex-nowrap overflow-x-scroll scroll scroll-smooth gap-4 pt-6 scrollbar-hide"
        >
          {services.card.map((card) => (
            <Card_Services key={card.id} {...card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;

