import React from "react";
import { BsSendFill } from "react-icons/bs";
import { circle } from "../assets";

const WithUs = () => {
  return (
    <section
      id="Fale_Conosco_CentroGastroBH"
      className="w-full bg-[#E5E7EB]/15 py-10 relative overflow-hidden"
    >
      <img
        id="circle"
        src={circle}
        alt=""
        className="absolute  left-0 top-10  -z-[10] opacity-15"
      />

      <div className="max-container padding-container  z-[2]">
        <div className="flex-col flexCenter gap-4 text-center mb-8">
          <div className="btn-secondary w-max select-none">Fale Conosco</div>
          <h2 className="h2 text-primary">
            <strong>Bem vindo ao nosso canal de comunicação</strong>
          </h2>
          <p className="p max-w-[768px]">
            Valorizamos sua opinião e estamos prontos para receber seus elogios,
            críticas e sugestões de melhorias. Queremos garantir que sua voz
            seja ouvida.
          </p>
        </div>

        <div className="flex flex-col flexCenter md:flex-row py-10 px-4  bg-white rounded-2xl shadow-btn">
          <div className="w-full md:w-[60%] flex flex-col md:flex-row flex-wrap">
            <div className="bg-gray-200 p-4 flex-1 w-full md:min-w-[350px]">
              <label className="block h5 text-black mb-2">Nome:</label>
              <input
                type="text"
                className="w-full placeholder:text-gray-200/50 p-4 outline-none rounded-xl border border-1 border-gray bg-gray/20 shadow-sm hover:border-secondary placeholder:font-normal duration-300 transition-colors"
                placeholder="Nome e sobrenome..."
              />
            </div>
            <div className="bg-gray-200 p-4 flex-1 w-full md:min-w-[350px] ">
              <label className="block h5 text-black mb-2">E-mail:</label>
              <input
                type="text"
                className="w-full placeholder:text-gray-200/50 p-4 outline-none rounded-xl border border-1 border-gray bg-gray/20 shadow-sm hover:border-secondary placeholder:font-normal duration-300 transition-colors"
                placeholder="E-mail pessoal..."
              />
            </div>
            <div className="bg-gray-200 p-4 flex-1 w-full md:min-w-[350px] ">
              <label className="block h5 text-black mb-2">Telefone:</label>
              <input
                type="text"
                className="w-full placeholder:text-gray-200/50 p-4 outline-none rounded-xl border border-1 border-gray bg-gray/20 shadow-sm hover:border-secondary placeholder:font-normal duration-300 transition-colors"
                placeholder="(xx) x xxxx-xxxx"
              />
            </div>
            <div className="bg-gray-200 p-4 flex-1 w-full md:min-w-[350px] ">
              <label className="block h5 text-black mb-2">Assunto:</label>
              <input
                type="text"
                className="w-full placeholder:text-gray-200/50 p-4 outline-none rounded-xl border border-1 border-gray bg-gray/20 shadow-sm hover:border-secondary placeholder:font-normal duration-300 transition-colors"
                placeholder="Titulo da mensagem..."
              />
            </div>
          </div>
          <div className="w-full md:w-[40%]">
            <div className="bg-gray-200 p-4 flex-1 w-full md:min-w-[350px] ">
              <label className="block h5 text-black mb-2">Mensagem:</label>
              <textarea
                rows="7"
                cols="33"
                className="w-full placeholder:text-gray-200/50 p-4 outline-none rounded-xl border border-1 border-gray bg-gray/20 shadow-sm hover:border-secondary placeholder:font-normal duration-300 transition-colors"
                placeholder="Descreva sua mensagem..."
              />
            </div>
          </div>
        </div>
        <div className="pl-4 mt-4">
          <button
            type="submit"
            className="flex justify-center items-center gap-2 w-full md:w-max  rounded-xl px-8 py-4 font-bold text-white bg-primary shadow-btn"
          >
            Enviar
            <BsSendFill className="text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WithUs;
