import { useState } from "react";
import { logo_ofc, home, circle } from "../assets";
import { MdOutlineMedicalServices } from "react-icons/md";
import { BsCalendar2Plus } from "react-icons/bs";
import { BiCookie } from "react-icons/bi";

const Hero = () => {
  const [cookies, setCookies] = useState(false);

  return (
    <section
      id="Hero"
      className="max-container padding-container flex flex-col gap-20 md:flex-row"
    >
      {/* Primeira parte */}
      <div className="flex flex-1 flex-col flexCenter">
        <div className="flex justify-center mt-16 mb-8 md:mt-0">
          <img
            src={logo_ofc}
            className="w-28 shadow-md"
            alt="Logo da Clínica"
          />
        </div>
        <div className="text-center text-primary mb-8">
          <h1 className="h1 mb-4">
            CENTRO <br />
            <span className="h2"> GASTROENTEROLÓGICO </span>
          </h1>
          <p className="p text-justify lg:max-w-[520px]">
            O Centro Gastro foi fundado em 1992 pelo Dr. Nantes Morillo, um
            renomado gastroenterologista e endoscopista em atividade. Oferecemos
            serviços de consulta eletiva, exames diagnósticos e terapêuticos,
            incluindo endoscopia digestiva, colonoscopia e ecoendoscopia. Nossa
            equipe está comprometida em fornecer atendimento personalizado de
            qualidade, em consonância com a necessidade de cada paciente.
          </p>
        </div>
        <div className="w-full flex flex-col md:flexCenter md:flex-row gap-4">
          <a
            href="#contact"
            className="flex flexCenter gap-2 bg-primary rounded-xl px-8 py-4 font-bold text-white shadow-btn hover:bg-secondary hover:-translate-y-1 transition duration-300"
          >
            <BsCalendar2Plus />
            Marcar um horário
          </a>
          <a
            href="#services"
            className="flex flexCenter gap-2 bg-white rounded-xl px-8 py-4 font-bold text-secondary shadow-btn hover:-translate-y-1 transition duration-300"
          >
            <MdOutlineMedicalServices className="text-xl" />
            Procurar serviços
          </a>
        </div>
      </div>
      {/* Segunda parte */}
      <div className="flex flex-1 flexCenter md:m-10">
        <img
          src={home}
          alt="Centro Gastroenterológico Dr. Nantes Morillo"
          className="w-full md:max-w-[80%] h-auto rounded-[2.5rem]"
        />
      </div>
    </section>
  );
};

export default Hero;
