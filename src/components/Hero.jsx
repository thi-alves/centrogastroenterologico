import React from "react";
import { circle, home } from "../assets";

const Hero = () => {
  return (
    <section className="max-container padding-container flexCenter pt-[100px] xl:pt-[200px]">
      <div className="w-full flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 flex-col md:flex-row content-end mb-12">
          <h1 className="hidden md:block h1 leading-relaxed mb-8 text-primary">
            CENTRO GASTROENTEROLÓGICO
          </h1>
          <p className="p text-justify">
            Doutor Nantes Morillo, fundador da clínica Centro
            Gastroenterologico, é formado em Medicina no ano de 1976, pela
            Universidade Peruana Cayetano Heredia, fez residência médica em
            Gastroenterologia na Facultad de Medicina San Fernando, em Lima,
            Peru. Logo em seguida veio para o Brasil. Dr. Nantes assumiu o
            serviço de endoscopia do Hospital Semper, onde ficou muito conhecido
            pelos seus pacientes, destacando-se pelo seu carisma, dedicação e
            amor pela profissão. Em 1981, montou seu primeiro consultório, a sua
            serenidade, empatia e competência o faz se destacar. O consultório
            cresceu, e foi em 2004 que o Centro Gastroenterologico foi
            inaugurado para atendimento de consultas e exames. Em 2008, seu
            filho, Dr. Ricardo Morillo voltou ao Brasil após concluir sua
            especialização em Gatroenterologia e Endoscopia Avançada na França,
            trazendo toda sua expertise, assumindo o cargo de diretor técnico da
            clínica. Temos um quadro de médicos renomados e profissionais
            altamente engajados que contribuem diariamente para o crescimento,
            modernização e solidez da clínica. Em 2024, a clínica completa 20
            anos de história, com atendimento humanizado, respeitoso, com padrão
            inigualável.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img src={home} alt="" className="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
