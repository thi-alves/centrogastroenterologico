import React from "react";
import Card_Team from "./Card_Team";
import { team } from "../constants";

const Team = () => {
  const sliderLeft = () => {
    var slider = document.getElementById("Slider1");
    slider.style.scrollBehavior = "smooth";
    slider.scrollLeft = slider.scrollLeft - 203;
  };

  const sliderRight = () => {
    var slider = document.getElementById("Slider1");
    slider.style.scrollBehavior = "smooth";
    slider.scrollLeft = slider.scrollLeft + 203;
  };
  return (
    <>
      <div className="w-screen flex flex-col justify-center items-center mt-10">
        <div className="xl:max-w-[1280px] w-full">
          <div className="flex justify-center items-center flex-col space-y-5">
            <button className="shadow-btn bg-white text-secondary px-4 py-3 rounded-lg font-bold leading-5 text-base">
              Nossa equipe
            </button>
            <h2 className="tm max-w-[700px] text-center">
              Temos uma equipe médica qualificada e pronta para cuidar de você
            </h2>
            <p className="pp max-w-[700px] text-center">
              A equipe está comprometida com a excelência no atendimento, sempre
              preocupada em atender às expectativas de seriedade e respeito pela
              saúde e bem-estar do ser humano
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex items-center mb-20">
      <div
          onClick={sliderLeft}
          className="mr-2 left-0 group flex justify-center items-center w-[74px] h-[74px] absolute z-[8] rounded-full bg-white shadow-lg hover:bg-secondary hover:shadow-secondary hover:transform hover:-translate-y-2 ease-in-out duration-300 "
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
          id="Slider1"
          className="w-full h-full flex flex-nowrap overflow-x-scroll scroll scroll-smooth gap-4 pt-6 scrollbar-hide"
        >
          {team.card.map((card) => (
            <Card_Team key={card.id} {...card} />
          ))}
        </div>
      </div>
      
    </>
  );
};

export default Team;
