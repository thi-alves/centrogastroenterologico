import { useState } from "react";
import { Faq_Menu, Exames, Agendamentos } from "../constants";
import Card_Faq from "./Card_Faq";
import { circle } from "../assets";

const Faq = () => {
  const [Menu_Links, setMenu] = useState("Exames");
  return (
    <section id="ajuda" className="max-container padding-container flex mt-12">
      <div className="flex flex-1 flex-col flexCenter gap-4 text-center">
        <div className="btn-secondary w-max select-none">FAQ</div>
        <h2 className="h2 text-primary">
          <strong>Como podemos ajudar?</strong>
        </h2>
        <p className="p max-w-[768px]">
          Veja quais são as dúvidas mais frequentes de nossos pacientes e outras
          informações sobre nosso trabalho na grastroentereologia.
        </p>
        <div className="flex flexCenter flex-col md:flex-row flex-wrap w-full gap-4 text-left mt-8">
          <div className="flex flex-col  w-full md:w-2/12 bg-white shadow-btn rounded-2xl border-[1px] border-gray py-6 h-full">
            {Faq_Menu.map((menu, index) => (
              <div
                onClick={() => setMenu(menu)}
                key={index}
                className="p-4 select-none cursor-pointer hover:text-secondary hover:border-l-4 border-secondary font-bold transition-colors duration-150 "
              >
                {menu}
              </div>
            ))}
          </div>
          <div className="flex flex-1 flex-col md:w-10/12  bg-white shadow-btn rounded-2xl border-[1px] border-gray py-2 relative z-[1] overflow-hidden ">
            <img
              id="circle"
              src={circle}
              alt=""
              className="absolute -right-20 -bottom-20  opacity-15 w-[45%]"
            />
            {Menu_Links == "Exames"
              ? Exames.map((user, index) => (
                  <Card_Faq
                    key={index}
                    questions={user.questions}
                    answers={user.answers}
                  />
                ))
              : false}
            {Menu_Links == "Agendamentos"
              ? Agendamentos.map((user, index) => (
                  <Card_Faq
                    key={index}
                    questions={user.questions}
                    answers={user.answers}
                  />
                ))
              : false}
            {Menu_Links == "Pagamentos"
              ? Exames.map((user, index) => (
                  <Card_Faq
                    key={index}
                    questions={user.questions}
                    answers={user.answers}
                  />
                ))
              : false}

            {Menu_Links == "Preparos"
              ? Exames.map((user, index) => (
                  <Card_Faq
                    key={index}
                    questions={user.questions}
                    answers={user.answers}
                  />
                ))
              : false}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
