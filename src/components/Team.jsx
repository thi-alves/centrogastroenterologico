import React from "react";
import Card_Team from "./Card_Team";
import { team } from "../constants";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { circle } from "../assets";

const Team = () => {
  const sliderLeft = () => {
    var slider = document.getElementById("Slider1");
    slider.style.scrollBehavior = "smooth";
    slider.scrollLeft = slider.scrollLeft + 203;
  };

  const sliderRight = () => {
    var slider = document.getElementById("Slider1");
    slider.style.scrollBehavior = "smooth";
    slider.scrollLeft = slider.scrollLeft - 203;
  };
  return (
    <>
    <section id="team">
      <div className="w-screen containermin-h-scren flex flex-col justify-center items-center relative">
        <img
          id="circle"
          src={circle}
          alt=""
          className="absolute  bottom-[-20%] right-[0%] z-[0] opacity-30"
        />

        <div className="xl:max-w-[1280px] w-full space-container-section z-[1]">
          <div className="space-y-4 flex flex-col justify-center items-center text-center">
            <button className="btn-secondary">Nossa equipe</button>
            <h2 className="h2 text-primary">
              <strong>Temos uma equipe médica qualificada e{" "}
              <br className="sm:block hidden" />
              pronta para cuidar de você</strong>
            </h2>
            <p className="p text-gray_red max-w-[768px]">
            Nossa equipe está altamente comprometida em oferecer excelência no atendimento aos nossos pacientes. Temos um forte compromisso em atender às expectativas de nossos pacientes, com uma abordagem séria e respeitosa em relação à saúde e bem-estar humano.

            </p>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center relative select-none">
        <img
          id="circle"
          src={circle}
          alt=""
          className="absolute w-[15%] left-[100px] top-40 z-[0] opacity-60"
        />
        <div className="w-full h-full xl:max-w-[1280px] flex justify-between absolute z-[3] top-[200px] px-3">
          <div
            onClick={sliderRight}
            className="rounded-full w-max  h-max  p-6 bg-white shadow-btn group hover:bg-secondary hover:-translate-y-1 transition duration-300"
          >
            <FaArrowLeft className="text-3xl text-secondary group-hover:text-white transition duration-300" />
          </div>
          <div
            onClick={sliderLeft}
            className="rounded-full w-max  h-max  p-6 bg-white shadow-btn group hover:bg-secondary hover:-translate-y-1 transition duration-300"
          >
            <FaArrowRight className="text-3xl text-secondary group-hover:text-white transition duration-300" />
          </div>
        </div>
      </div>
      <div className="relative flex items-center mb-20 select-none">
        <div
          id="Slider1"
          className="sm:pl-[16.7%] w-full h-full flex flex-nowrap overflow-x-scroll scroll scroll-smooth gap-4 pt-6 scrollbar-hide "
        >
          <div className="flex gap-4">
            {team.card.map((card) => (
              <Card_Team key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Team;
