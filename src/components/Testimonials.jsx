import React, { useState } from "react";
import { testmonials } from "../constants";

import { BsFillChatDotsFill, BsChatQuoteFill } from "react-icons/bs";
import { circle, estrela, logo_google } from "../assets";

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
    <section id="testmonials" className="mt-10">
      <div className="container mx-auto  relative">
        <img
          id="circle"
          src={circle}
          alt=""
          className="absolute right-0 top-36 z-[0] opacity-20"
        />
        <div className="flex flex-col justify-center items-center gap-y-4 mb-8 z-[2] relative">
          <div className="btn-secondary w-max select-none cursor-default">
            Depoimentos
          </div>
          <h2 className="h2 text-primary">
            <strong>Veja o que nossos clientes tem a dizer sobre nós!</strong>
          </h2>
          <p className="p text-gray_red max-w-[768px] text-center">
            Nossa clínica de gastroenterologia se orgulha em oferecer um
            atendimento de qualidade e personalizado aos nossos pacientes. Em
            nossa página de depoimentos, você pode conferir os relatos de alguns
            deles, que expressam sua satisfação com os serviços que oferecemos.
          </p>
        </div>{" "}
        {/*Header Section */}
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="w-full md:w-[100%] md:w-[80%] lg:w-[70%] xl:w-[60%] rounded-2xl p-4 bg-white  shadow-sm border border-gray flex flex-col md:flex-row relative">
            <BsChatQuoteFill className="absolute right-0 bottom-0 text-black/5 text-[4rem] m-4" />
            <div className="flex flex-col items-center min-w-max">
              <img
                src={testmonials[count].photo}
                alt={testmonials[count].name}
                className="w-24 h-24 rounded-full shadow-btn"
              />
              <h4 className="font-bold text-base text-secondary">
                {testmonials[count].name}
              </h4>
              <p className="text-xs text-gray_red">Paciente</p>
            </div>
            <div className="hidden md:block w-[1px] bg-black/10 m-3" />
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
        <div className="flexCenter flex-col">
          <div className="flex flex-col w-full justify-center items-center text-center mb-8 px-20 mt-10">
            <div className="flex flexCenter w-[80%] h-1">
              <div className="flex-1 h-full w-full  bg-blue-500"></div>
              <div className="flex-1 h-full w-full bg-red-500"></div>
              <div className="flex-1 h-full w-full bg-yellow-500"></div>
              <div className="flex-1 h-full w-full bg-blue-500"></div>
              <div className="flex-1 h-full w-full bg-green-500"></div>
              <div className="flex-1 h-full w-full  bg-red-500"></div>
            </div>
          </div>
          <div className="flex flexCenter flex-col md:flex-row w-full h-full">
            <div className="flex-1 flexCenter">
              <img
                src={logo_google}
                alt=""
                className="w-[35%]  hidden md:flex"
              />
            </div>
            <div className="flex-1 flexCenter flex-col">
              <p className="p !font-bold">A sua opinião vale muito</p>
              <p>Avalie nossos serviços clicando nas estrelas.</p>
            </div>
            <div className="flex-1 cursor-pointer">
              <a href="https://g.page/r/CShUQV4UdmqkEBM/review">
                <p className="font-extrabold text-stone-700 text-lg text-center">
                  5/5
                </p>
                <div className="flex gap-2 flexCenter">
                  <img src={estrela} alt="" className="w-5" />
                  <img src={estrela} alt="" className="w-5" />
                  <img src={estrela} alt="" className="w-5" />
                  <img src={estrela} alt="" className="w-5" />
                  <img src={estrela} alt="" className="w-5" />
                </div>
              </a>
            </div>
          </div>
        </div>{" "}
        {/*Header Testmonials */}
      </div>
    </section>
  );
};

export default Testimonials;
