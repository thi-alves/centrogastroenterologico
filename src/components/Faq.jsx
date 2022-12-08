import { useState } from "react";
import { Faq_Menu, Account, Orders } from "../constants";
import Card_Faq from "./Card_Faq";
import { GiTalk } from "react-icons/gi";
import { circle } from "../assets";

const Faq = () => {
  const [Menu_Links, setMenu] = useState(false);
  return (
    <section id="faq">
      <div className="w-screen min-h-screen flex flex-col justify-center items-center">
        <div className="w-full h-full xl:max-w-[1280px]">
      
          <div className="space-y-4 flex flex-col justify-center items-center text-center mb-8">
            <button className="btn-secondary">FAQ</button>
            <h2 className="h2 text-primary">
              <strong>Como podemos ajudar?</strong>
            </h2>
            <p className="p text-gray_red max-w-[768px]">
              Veja quais são as dúvidas mais frequentes de nossos pacientes e
              outras informações sobre nosso trabalho na grastroentereologia.
            </p>
          </div>

          <div className="grid sm:grid-cols-12 gap-4">
            <div className="sm:col-span-2">
              <div className="bg-white shadow-btn rounded-2xl border-[1px] border-gray py-6">
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
            </div>
            <div className="sm:col-span-10">
              <div className="w-full h-full bg-white shadow-btn rounded-2xl border-[1px] border-gray py-6 min-h-[442px] relative overflow-hidden z-[0]">
                <img
                  id="circle"
                  src={circle}
                  alt=""
                  className="absolute bottom-[0l%] right-[-20%] z-[-1] opacity-40"
                />
                {Menu_Links == false ? (
                  <div className="w-full  h-full flex flex-col justify-center items-center  z-[2]">
                    <GiTalk className="w-40 h-40 text-black/10 z-[2]" />
                    <p className="p text-gray_red">
                      1. Use o menu lateral para obter um tema.
                    </p>
                    <p className="p text-gray_red">
                      2. Selecione a pergunta para obter uma resposta.
                    </p>
                  </div>
                ) : (
                  ""
                )}

                {Menu_Links == "Orders"
                  ? Orders.map((user, index) => (
                      <Card_Faq
                        key={index}
                        questions={user.questions}
                        answers={user.answers}
                      />
                    ))
                  : false}
                {Menu_Links == "Account"
                  ? Account.map((user, index) => (
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
        </div>
      </div>
    </section>
  );
};

export default Faq;
