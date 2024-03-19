import { circle } from "../assets";
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { name_Insurance, team } from "../constants";
import React, { useState } from "react";
import { insertMaskInPhone } from "../functions/phone";

const Contact = () => {
  const inputStyle =
    "w-full placeholder:text-gray_red p-4 outline-none rounded-xl border border-1 border-gray bg-gray/20 shadow-sm hover:border-secondary placeholder:font-normal duration-300 transition-colors";

  const phoneNumbers = ["5531986058783", "5531986110299"];
  const [values, setValues] = useState({});
  const handleChange = (e) => {
    const valueInputs = { ...values };
    if (e.target.name === "telefone") {
      e.target.value = insertMaskInPhone(e.target.value);
    }
    valueInputs[e.target.name] = e.target.value;
    setValues(valueInputs);
  };

  const [isChecked, setIsChecked] = useState(true);
  const [isCheckedClass, setIsCheckedClass] = useState([
    "left-1",
    "bg-[#E5E7EB]",
    "cursor-not-allowed bg-[#E5E7EB] disabled",
    "",
  ]);
  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    if (isChecked === true) {
      setIsCheckedClass([
        "!right-1",
        "!bg-secondary",
        "cursor-pointer bg-primary enable  shadow-btn",
        handleSubmit,
      ]);
    } else {
      setIsCheckedClass([
        "left-1",
        "bg-[#E5E7EB]",
        "cursor-not-allowed bg-[#E5E7EB] disable",
      ]);
    }
  };

  const [showInputs1, setShowInputs1] = useState("");
  const [showInputs, setShowInputs] = useState("hidden");
  const handleSelectChange = (e) => {
    setShowInputs(e.target.value === "Sim" ? "block" : "hidden");
    setShowInputs1(e.target.value === "Sim" ? "hidden" : "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const Task =
      values.nome +
      "%" +
      values.email +
      "%" +
      values.telefone +
      "%" +
      values.convenio +
      "%" +
      values.rede +
      "%" +
      values.carteirinha +
      "%" +
      values.medico +
      "%" +
      values.exame;

    //console.log(Task);
    return window.location.replace(
      "https://wa.me/" +
        phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)] +
        "?text=" +
        "*Nome:* " +
        values.nome +
        "%0A" +
        "|" +
        "%0A" +
        "*E-Mail:* " +
        values.email +
        "%0A" +
        "|" +
        "%0A" +
        "*Telefone:* " +
        values.telefone +
        "%0A" +
        "|" +
        "%0A" +
        "*Convênio:* " +
        values.convenio +
        "%0A" +
        "|" +
        "%0A" +
        "*Rede:* " +
        values.rede +
        "%0A" +
        "|" +
        "%0A" +
        "*Carteirinha:* " +
        values.carteirinha +
        "%0A" +
        "|" +
        "%0A" +
        "*Médico:* " +
        values.medico +
        "%0A" +
        "|" +
        "%0A" +
        "*Exame:* " +
        values.exame
    );
  };

  return (
    <section
      id="contact"
      className="w-full bg-secondary/[4%] shadow-sm relative overflow-hidden py-10"
    >
      <div className=" w-full h-full">
        <img
          id="circle"
          src={circle}
          alt=""
          className="absolute  right-0 bottom-0  -z-0 opacity-15"
        />
        <img
          id="circle"
          src={circle}
          alt=""
          className="absolute   left-0 top-0  -z-0 opacity-15"
        />
      </div>
      <div className="max-container padding-container flex flex-col gap-x-20 gap-y-10 z-10">
        <div className="">
          <div className="flex flex-1 flex-col flexCenter gap-4 text-center">
            <div className="btn-secondary w-max select-none">Contate-nos</div>
            <h2 className="h2 text-primary self-start">
              <strong>Agendar consulta:</strong>
            </h2>
            <div className="w-full flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-1/2 text-left space-y-2 p">
                <p className="">
                  Agendar uma consulta conosco é fácil basta entrar em contato
                  com a nossa equipe através do telefone ou formulário de
                  contato. Teremos prazer em agendar uma consulta que atenda às
                  suas necessidades e horários disponíveis.
                </p>
                <p>
                  <span className="text-secondary">•</span> Ao informar seus
                  dados você concorda que nosso time entre em contato para
                  prosseguir com o agendamento.
                </p>
                <p>
                  <span className="text-secondary">•</span> Os dados inseridos
                  no nosso formulário não são salvos, sendo usados somente para
                  a solicitação de agendamento.
                </p>
                <p>
                  Saiba mais sobre o uso de dados em{" "}
                  <span className="text-secondary font-medium cursor-pointer">
                    Políticas de Privacidade
                  </span>
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div
                  id="Telefones_Centro_Gastroentereologico_BH"
                  className="flex flex-wrap gap-x-10 md:gap-x-6 lg:gap-x-16 gap-y-4 "
                >
                  <div className="text-start p space-y-2">
                    <p>
                      <span className="text-secondary">•</span> O seu
                      agendamento será confirmado após validação com a nossa
                      atendente via WhatsApp.{" "}
                    </p>
                    <p>
                      <span className="text-secondary font-extrabold">
                        Aguarde nossa confirmação!
                      </span>
                    </p>
                  </div>
                  <div className="">
                    <a href="" className="flex gap-3 group">
                      <div>
                        <div className="bg-primary  group-hover:bg-secondary w-[44px] h-[44px] rounded-lg flex justify-center items-center hover:shadow-sm group-hover:scale-110 transition-all ease-in-out duration-300">
                          <BsFillTelephoneFill className="text-white text-2xl " />
                        </div>
                      </div>
                      <div className="flex justify-center items-center p text-gray_red group-r group-hover:text-secondary transition-colors ease-in-out duration-150">
                        <strong>&nbsp;(31) 3263-2000</strong>
                      </div>
                    </a>
                  </div>
                  <div className="">
                    <a href="" className="flex gap-3 group">
                      <div>
                        <div className="bg-primary  group-hover:bg-secondary w-[44px] h-[44px] rounded-lg flex justify-center items-center hover:shadow-sm group-hover:scale-110 transition-all ease-in-out duration-300">
                          <BsFillTelephoneFill className="text-white text-2xl " />
                        </div>
                      </div>
                      <div className="flex justify-center items-center p text-gray_red group-r group-hover:text-secondary transition-colors ease-in-out duration-150">
                        <strong>&nbsp;(31) 3263-2001</strong>
                      </div>
                    </a>
                  </div>
                  <div className="">
                    <a href="" className="flex gap-3 group">
                      <div>
                        <div className="bg-primary  group-hover:bg-secondary w-[44px] h-[44px] rounded-lg flex justify-center items-center hover:shadow-sm group-hover:scale-110 transition-all ease-in-out duration-300">
                          <BsWhatsapp className="text-white text-2xl " />
                        </div>
                      </div>
                      <div className="flex justify-center items-center p text-gray_red group-r group-hover:text-secondary transition-colors ease-in-out duration-150">
                        <strong>(31) 98611-0299</strong>
                      </div>
                    </a>
                  </div>
                  <div className="">
                    <a href="" className="flex gap-3 group">
                      <div>
                        <div className="bg-primary  group-hover:bg-secondary w-[44px] h-[44px] rounded-lg flex justify-center items-center hover:shadow-sm group-hover:scale-110 transition-all ease-in-out duration-300">
                          <BsWhatsapp className="text-white text-2xl " />
                        </div>
                      </div>
                      <div className="flex justify-center items-center p text-gray_red group-r group-hover:text-secondary transition-colors ease-in-out duration-150">
                        <strong>(31) 98605-8783</strong>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Segunda Parte */}

        <div className="bg-white shadow-btn rounded-2xl p-4 z-10">
          <div className="w-full">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 lg:w-1/3">
                <div class="bg-gray-200 p-4">
                  <label className="block h5 text-black mb-2">Nome:</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="nome"
                    className={`capitalize + ${inputStyle}`}
                    placeholder="Nome completo..."
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <div className="bg-gray-200 p-4">
                  <label className="block h5 text-black mb-2">E-mail:</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="email"
                    className={`capitalize + ${inputStyle}`}
                    placeholder="E-mail pessoal..."
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <div className="bg-gray-200 p-4">
                  <label className="block h5 text-black mb-2">Telefone:</label>
                  <input
                    onChange={handleChange}
                    type="tel"
                    maxlength="15"
                    name="telefone"
                    className={`capitalize + ${inputStyle}`}
                    placeholder="Número pessoal..."
                  />
                </div>
              </div>
              <div className={`w-full md:w-1/2 lg:w-1/3 + ${showInputs1}`}>
                <div className="bg-gray-200 p-4">
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
              </div>
              <div className={`w-full md:w-1/2 lg:w-1/3 + ${showInputs1}`}>
                <div className="bg-gray-200 p-4">
                  <label className="block h5 text-black mb-2">Rede:</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="rede"
                    className={`capitalize + ${inputStyle}`}
                    placeholder="Rede de atendimento..."
                  />
                </div>
              </div>
              <div className={`w-full md:w-1/2 lg:w-1/3 + ${showInputs1}`}>
                <div className="bg-gray-200 p-4">
                  <label className="block h5 text-black mb-2">
                    N° Carteirinha:
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="carteirinha"
                    className={`capitalize + ${inputStyle}`}
                    placeholder="Ref..."
                  />
                </div>
              </div>
              <div className="w-full  md:w-1/2 lg:w-1/3">
                <div className="bg-gray-200 p-4">
                  <label className="block h5 text-black mb-2">
                    Particular?
                  </label>
                  <select
                    onChange={handleSelectChange}
                    name="particular"
                    className={inputStyle}
                  >
                    <option>Não</option>
                    <option>Sim</option>
                  </select>
                </div>
              </div>

              <div className={`w-full md:w-1/2 lg:w-1/3 + ${showInputs}`}>
                <div className="bg-gray-200 p-4">
                  <label className="block h5 text-black mb-2">Médico:</label>
                  <select
                    onChange={handleChange}
                    name="medico"
                    className={inputStyle}
                  >
                    <option defaultValue="DEFAULT" disabled selected>
                      Escolha seu médico...
                    </option>
                    {team.card.map((item, index) => (
                      <option value={item.title} key={index}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={`w-full md:w-1/2 lg:w-1/3 + ${showInputs}`}>
                <div className="bg-gray-200 p-4">
                  <label className="block h5 text-black mb-2">Exame:</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="exame"
                    className={`capitalize + ${inputStyle}`}
                    placeholder="Nome Exame..."
                  />
                </div>
              </div>
            </div>

            <div className="w-full p-4 flex gap-2 items-center justify-between">
              <div className="">
                <label className="flex cursor-pointer select-none items-center">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      className="sr-only"
                    />

                    <div
                      className={`block h-8 w-14 rounded-full transition-all duration-200 + ${isCheckedClass[1]}`}
                    ></div>

                    <div
                      className={`dot absolute  top-1 h-6 w-6 rounded-full bg-white transition-all duration-200 + ${isCheckedClass[0]}`}
                    ></div>
                  </div>
                  <p className="ml-4 p">
                    Estou ciente de que devo aguardar retorno via WhatsApp.{" "}
                  </p>
                </label>
              </div>
              <div className="self-center">
                <button
                  onClick={isCheckedClass[3]}
                  className={`flex justify-center items-center gap-2 w-full md:w-max  rounded-xl px-8 py-4 font-bold text-white + ${isCheckedClass[2]}`}
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
