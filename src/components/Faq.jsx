import { useState } from "react";
import { Faq_Menu, Exames, Agendamentos } from "../constants";
import Card_Faq from "./Card_Faq";
import { circle } from "../assets";

const Faq = () => {
  const [Menu_Links, setMenu] = useState("Exames");
  return (
    <section id="faq">
      <div className="container mx-auto my-20">

        <div className="w-full flex justify-center items-center">
          <div className="max-w-[768px] flex flex-col justify-center items-center text-center mb-8 gap-y-4">
            <div className="shadow-btn bg-white text-secondary px-4 py-3 rounded-lg font-bold leading-5 text-base w-max">FAQ</div>
            <h2 className="h2 text-primary"><strong>Como podemos ajudar?</strong></h2>
            <p className="p">Veja quais são as dúvidas mais frequentes de nossos pacientes e
              outras informações sobre nosso trabalho na grastroentereologia.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-wrap md:flex-nowrap gap-4">
          <div className="w-full md:w-2/12 bg-white shadow-btn rounded-2xl border-[1px] border-gray py-6">
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
          <div className="w-full md:w-10/12 bg-white shadow-btn rounded-2xl border-[1px] border-gray py-6 relative overflow-hidden z-[0]">
            <img
              id="circle"
              src={circle}
              alt=""
              className="absolute bottom-[01%] right-[-20%] z-[-1] opacity-40"
            />
            {Menu_Links == "Exames"
              ? Exames.map((user, index) => (
                <Card_Faq
                  key={index}
                  questions={user.questions}
                  answers={user.answers}
                />
              ))
              : false
            }
            {Menu_Links == "Agendamentos"
              ? Agendamentos.map((user, index) => (
                <Card_Faq
                  key={index}
                  questions={user.questions}
                  answers={user.answers}
                />
              ))
              : false
            }
            {Menu_Links == "Pagamentos"
              ? Exames.map((user, index) => (
                <Card_Faq
                  key={index}
                  questions={user.questions}
                  answers={user.answers}
                />
              ))
              : false
            }
            {Menu_Links == "Convênios"
              ? Exames.map((user, index) => (
                <Card_Faq
                  key={index}
                  questions={user.questions}
                  answers={user.answers}
                />
              ))
              : false
            }
            {Menu_Links == "Retornos"
              ? Exames.map((user, index) => (
                <Card_Faq
                  key={index}
                  questions={user.questions}
                  answers={user.answers}
                />
              ))
              : false
            }
            {Menu_Links == "Preparos"
              ? Exames.map((user, index) => (
                <Card_Faq
                  key={index}
                  questions={user.questions}
                  answers={user.answers}
                />
              ))
              : false
            }
            {Menu_Links == "Cancelamentos"
              ? Exames.map((user, index) => (
                <Card_Faq
                  key={index}
                  questions={user.questions}
                  answers={user.answers}
                />
              ))
              : false
            }
          </div>
        </div>


      </div>

    </section>
  );
};

export default Faq;
