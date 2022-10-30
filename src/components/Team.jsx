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
        <button
          onClick={sliderLeft}
          className="sm:left-[5%] w-[80px] left-0 h-[80px] bg-secondary rounded-full absolute z-[8] text-white flex justify-center items-center shadow-lg shadow-btn"
        >
          Ant.
        </button>
        <button
          onClick={sliderRight}
          className="sm:right-[5%] w-[80px] right-0 h-[80px] bg-secondary rounded-full absolute z-[8] text-white flex justify-center items-center shadow-lg shadow-btn"
        >
          Prox.
        </button>
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
