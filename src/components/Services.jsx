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
        <div
          onClick={sliderLeft}
          className="ml-2 left-0 group flex justify-center items-center w-[74px] h-[74px] absolute z-[8] rounded-full bg-white shadow-lg hover:bg-secondary hover:shadow-secondary hover:transform hover:-translate-y-2 ease-in-out duration-300 "
        >
          <svg
            id="left"
            viewBox="0 0 306 306"
            className="w-[34px] h-[34px] fill-secondary group-hover:fill-white"
          >
            <polygon points="247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153 "/>
          </svg>
        </div>
        <div
          onClick={sliderRight}
          className="mr-2 right-0 group flex justify-center items-center w-[74px] h-[74px] absolute z-[8] rounded-full bg-white shadow-lg hover:bg-secondary hover:shadow-secondary hover:transform hover:-translate-y-2 ease-in-out duration-300 "
        >
          <svg
            id="right"
            viewBox="0 0 306 306"
            className="w-[34px] h-[34px] fill-secondary group-hover:fill-white"
          >
            <polygon points="58.65,267.75 175.95,153 58.65,35.7 94.35,0 247.35,153 94.35,306" />
          </svg>
        </div>
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
