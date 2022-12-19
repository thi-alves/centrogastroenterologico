import React, { useState } from "react";
import { testmonials } from "../constants";

import { BsFillChatDotsFill, BsChatQuoteFill } from "react-icons/bs";
import { circle } from "../assets";

const Testimonials = () => {
  const [moving, setMoving] = useState(true);
  const [count, setCount] = useState(0);
  moving ? setTimeout(initCarousel, 5000) : "";
  function initCarousel() {
    count > 3 ? setCount(0) : setCount(count + 1);
  }

  function setCarousel(index) {
    setCount(index);
    setMoving(false);
  }

  return (
    <section id="testmonials">
      <div className="container mx-auto my-20 relative">
        <img
          id="circle"
          src={circle}
          alt=""
          className="absolute right-0 top-0 z-[0] opacity-40"
        />
        <div className="flex flex-col justify-center items-center gap-y-4 mb-8 z-[2] relative">
          <div className="btn-secondary w-max select-none cursor-default">
            Depoimentos
          </div>
          <h2 className="h2 text-primary">
            <strong>Veja o que nossos clientes tem a dizer sobre nós!</strong>
          </h2>
          <p className="p text-gray_red max-w-[768px] text-center">
            Veja quais são as dúvidas mais frequentes de nossos pacientes e
            outras informações sobre nosso trabalho na grastroentereologia.
          </p>
        </div>{" "}
        {/*Header Section */}
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="w-full sm:w-[100%] md:w-[80%] lg:w-[70%] xl:w-[60%] rounded-2xl p-4 bg-gray/50 shadow-sm border border-gray flex flex-col sm:flex-row relative">
            <BsChatQuoteFill className="absolute right-0 bottom-0 text-black/5 text-[4rem] m-4" />
            <div className="flex flex-col items-center min-w-max">
              <img
                src={testmonials[count].photo}
                alt={testmonials[count].name}
                className="w-24 h-24 rounded-full shadow-btn"
              />
              <h4 className="font-bold text-base text-primary">
                {testmonials[count].name}
              </h4>
              <p className="text-xs text-gray_red">Paciente</p>
            </div>
            <div className="hidden sm:block w-[1px] bg-black/10 m-3" />
            <div className="flex items-center">
              <p className="p">{testmonials[count].content}</p>
            </div>
          </div>

          <div className="flex flex-row space-x-4">
            {testmonials.map((testimonial, index) =>
              count == index ? (
                <div className="relative">
                  <BsFillChatDotsFill className="absolute z-10 text-secondary right-[10%] top-[-68%] animate-bounce text-xl" />
                  <img
                    onClick={() => setCarousel(index)}
                    key={testimonial.id}
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full cursor-pointer -translate-y-3 ease-in-out duration-500 "
                  />
                </div>
              ) : (
                <img
                  onClick={() => setCarousel(index)}
                  key={testimonial.id}
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full cursor-pointer"
                />
              )
            )}
          </div>
        </div>{" "}
        {/*Testmonials Section */}
        <div className="flex flex-row items-center justify-center">
          <div className="w-[80%] h-[1px] bg-black/10 mt-10 mb-5" />
        </div>{" "}
        {/*Separate Bar */}
        <div className="flex flex-col justify-center items-center text-center mb-8">
          <h4 className="h4 text-primary">
            Preencha os campos abaixo e envie comentários, sugestões ou críticas
          </h4>
          <p className="p text-gray_red">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur ex sequi sit velit architecto iure eveniet, pariatur
            eaque praesentium inventore.
          </p>
        </div>{" "}
        {/*Header Testmonials */}
        <div className="rounded-2xl p-4">
          <div className="d">
          oi
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
