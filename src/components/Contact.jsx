import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { circle } from "../assets";
import { name_Insurance, name_Doctor } from "../constants";
import React, { useState } from "react";

const Contact = () => {
  const inputStyle =
    "w-full placeholder:text-gray_red p-4 outline-none rounded-xl border border-1 border-gray bg-gray/20 shadow-sm hover:border-secondary placeholder:font-normal duration-300 transition-colors";

  const [values, setValues] = useState({});
  const handleChange = (e) => {
    const valueInputs = { ...values };
    valueInputs[e.target.name] = e.target.value;
    setValues(valueInputs);
  };
  //console.log(values);

  const handleSubmit = (e) => {
    e.preventDefault();
    //values.nome = values.nome.replace(/ /g,"%");
    const Task =
      values.nome +
      "%" +
      values.email +
      "%" +
      values.telefone +
      "%" +
      values.convenio +
      "%" +
      values.carteirinha +
      "%" +
      values.medico;

    //console.log(Task);

    return window.location.replace(
      "https://wa.me/5531993430841?text=" +
        values.nome +
        "%0A" +
        values.email +
        "%0A" +
        values.convenio +
        "%0A" +
        values.carteirinha +
        "%0A" +
        values.medico
    );
  };

  return (
    <section id="contact">
      <div className="my-10">
        <div className="w-full bg-secondary/[4%] shadow-sm  relative overflow-hidden ">
          <img
            id="circle"
            src={circle}
            alt=""
            className="absolute  bottom-[-20%] right-[0%] -z-0 opacity-30"
          />
          <img
            id="circle"
            src={circle}
            alt=""
            className="absolute left-[0%] top-[-20%] -z-0 opacity-30"
          />
          <div className="container mx-auto py-16 flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2 relative z-[1] my-auto space-y-4">
              <div className="shadow-btn bg-white text-secondary px-4 py-3 rounded-lg font-bold leading-5 text-base w-max">
                Contate-nos
              </div>
              <h2 className="h2 text-primary">
                <strong>Agendar consulta:</strong>
              </h2>
              <div className="p text-gray_red w-full md:max-w-[450px] lg:max-w-[600px] space-y-2">
                <p className="mb-6">
                  Agendar uma consulta conosco é fácil basta entrar em contato
                  com a nossa equipe através do telefone, e-mail ou formulário
                  de contato. Teremos prazer em agendar uma consulta que atenda
                  às suas necessidades e horários disponíveis.
                </p>
                <p>
                  <span className="text-secondary">•</span> Ao informar seus
                  dados você concorda que nosso time entre em contato para
                  prosseguir com o agendamento.
                </p>
                <p>
                  <span className="text-secondary">•</span> Os dados inseridos
                  no nosso formulário estão seguros, sendo usados somente para a
                  solicitação de agendamento.
                </p>
                <p>
                  Saiba mais sobre o uso de dados em{" "}
                  <span className="text-secondary font-medium">
                    Políticas de Privacidade
                  </span>
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-y-3 gap-x-14">
                <a href="" className="flex gap-3 group">
                  <div>
                    <div className="bg-primary  group-hover:bg-secondary w-[44px] h-[44px] rounded-lg flex justify-center items-center hover:shadow-sm group-hover:scale-110 transition-all ease-in-out duration-300">
                      <BsFillTelephoneFill className="text-white text-2xl " />
                    </div>
                  </div>
                  <div className="flex justify-center items-center p text-gray_red group-r group-hover:text-secondary transition-colors ease-in-out duration-150">
                    <strong>(31) 99335-5485</strong>
                  </div>
                </a>
                <a href="" className="flex gap-3 group">
                  <div>
                    <div className="bg-primary  group-hover:bg-secondary w-[44px] h-[44px] rounded-lg flex justify-center items-center hover:shadow-sm group-hover:scale-110 transition-transform ease-in-out duration-200">
                      <GrMail className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="flex justify-center items-center p text-gray_red group-hover:text-secondary transition-colors ease-in-out duration-150">
                    <strong>contact@centrogastro.com</strong>
                  </div>
                </a>
              </div>
            </div>

            <div className="w-full  md:w-1/2 relative z-[1] bg-white shadow-btn rounded-2xl p-8 flex flex-col justify-between">
              <div className="w-full flex flex-row flex-wrap gap-y-4 gap-x-2">
                <div className="w-full md:w-[calc(50%-8px)]">
                  <label className="block h5 text-black mb-2">Nome:</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="nome"
                    className={`capitalize + ${inputStyle}`}
                    placeholder="Nome completo..."
                  />
                </div>
                <div className="w-full md:w-[calc(50%-8px)]">
                  <label className="block h5 text-black mb-2">Email:</label>
                  <input
                    onChange={handleChange}
                    type="email"
                    name="email"
                    className={inputStyle}
                    placeholder="Email pessoal..."
                  />
                </div>
                <div className="w-full md:w-[calc(50%-8px)]">
                  <label className="block h5 text-black mb-2">Telefone:</label>
                  <input
                    onChange={handleChange}
                    type="tel"
                    name="telefone"
                    className={inputStyle}
                    placeholder="Número pessoal..."
                  />
                </div>
                <div className="w-full md:w-[calc(50%-8px)]">
                  <label className="block h5 text-black mb-2">Convênio:</label>
                  <select
                    onChange={handleChange}
                    name="convenio"
                    className={inputStyle}
                  >
                    <option defaultValue="DEFAULT" disabled selected>
                      Escolha um convênio...
                    </option>
                    {name_Insurance.map((insurance, index) => (
                      <option value={insurance} key={index}>
                        {insurance}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full md:w-[calc(50%-8px)]">
                  <label className="block h5 text-black mb-2">
                    N° Carteirinha:
                  </label>
                  <input
                    onChange={handleChange}
                    type="number"
                    name="carteirinha"
                    className={inputStyle}
                    placeholder="Ref..."
                  />
                </div>
                <div className="w-full md:w-[calc(50%-8px)]">
                  <label className="block h5 text-black mb-2">Médico:</label>
                  <select
                    onChange={handleChange}
                    name="medico"
                    className={inputStyle}
                  >
                    <option defaultValue="DEFAULT" disabled selected>
                      Escolha seu médico...
                    </option>
                    {name_Doctor.map((doctor, index) => (
                      <option value={doctor} key={index}>
                        {doctor}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="self-center">
                <button
                  onClick={handleSubmit}
                  className="flex justify-center items-center gap-2 w-full md:w-max bg-primary rounded-xl px-8 py-4 font-bold text-white shadow-btn hover:bg-secondary hover:-translate-y-1 transition duration-300"
                >
                  Agendar hórario
                  <BsWhatsapp className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
