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
          <p className="p text-justify">
          Doutor Nantes Morillo fundador da clínica Centro Gastroenterologico é formado em Medicina
no ano de 1976, pela Universidade Peruana Cayetano Heredia, fez residência médica em
Gastroenterologia na faculdade de medicina San Fernando, pertencente a universidade
Nacional Mayor de San Marcos no Peru, logo em seguida veio para o Brasil. Dr. Nantes fundou
o serviço de endoscopia do hospital SEMPER, onde ficou muito conhecido pelos seus
pacientes, destacando-se pelo seu carisma, dedicação e amor pela profissão. Em 1981, montou
seu primeiro consultório, a sua serenidade, empatia e competência o faz se destacar. O
consultório cresceu, e foi em 2004 que o Centro Gastroenterologico foi inaugurado para
atendimento de consultas e exames. Em 2008, seu filho, Dr. Ricardo Morillo voltou ao Brasil
após concluir sua especialização em Gatroenterologia e endoscopia avançada na França,
trazendo toda sua expertise, assumindo o cargo de diretor técnico da clínica. Temos um
quadro de médicos renomados na área da Gastroenterologia e Endoscopia Digestiva, que em
conjunto com toda a equipe de enfermagem, recepção, administrativo, farmacêuticos
contribuem diariamente para o crescimento, modernização e solidez da clínica. Esse ano de
2024 a clínica completa 20 anos de história, com atendimento humanizado, respeitoso, com
padrão inigualável.
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
