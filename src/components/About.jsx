import React from "react";
import {
  about_01,
  about_02,
  circle,
  profile_photo,
  profile_photo1,
} from "../assets";
const About = () => {
  return (
    <section
      id="sobre"
      className="max-container padding-container flex flex-col-reverse gap-20 md:flex-row"
    >
      <div className="flex flex-1 flex-col flexCenter relative">
        <img
          data-anime=""
          src={about_01}
          alt=""
          className="max-w-[67%] float-left self-start  rounded-[2.5rem] z-[3]"
        />
        <img
          src={about_02}
          alt=""
          className="max-w-[66%]  float-right self-end mt-[-100px]  rounded-[2.5rem] z-[4]"
        />
      </div>
      <div className="flex flex-1 flex-col flexCenter">
        <img
          id="circle"
          src={circle}
          alt=""
          className="absolute w-[580px] right-[-200px] z-[0] opacity-10"
        />
        <div className="flex flex-1 flex-col flexCenter z-[1]">
          <div className="btn-secondary w-max select-none mb-4">Sobre nós</div>
          <div className="h2 text-primary">
            <strong>Missão e Valores</strong>
            <div className="flex flex-col gap-y-4 p text-gray_red">
              <p>
                Nosso objetivo é proporcionar atendimento e acompanhamento na
                área de Gastroenterologia, através de profissionais capacitados
                e experientes, comprometidos em atender ás necessidades dos
                pacientes, com integridade e ética. Buscamos a satisfação do
                nosso Cliente.
                <br />
                <br />
                <span className="text-secondary font-bold">
                  • Missão:{" "}
                </span>{" "}
                Atender e acompanhar o paciente na área de Gastroenterologia,
                utilizando-se do atendimento Clínico e da realização de exames
                Endoscópicos para colaborar de forma segura para a decisão
                terapêutica.
              </p>
              <p>
                <span className="text-secondary font-bold">• Valores: </span>{" "}
                Oferecemos um atendimento humanizado, com equipe qualificada e
                respeito à autonomia do paciente. Atuamos com ética e segurança
                através da qualidade em todos os nossos processos.
              </p>
            </div>
            <div className="flex gap-4 pt-8">
              <img
                src={profile_photo}
                alt=""
                className="w-[84px] h-[84px] object-cover rounded-full shadow-lg"
              />
              <div className="mb-5">
                <h3 className="h3 text-primary">
                  <p className="text-xs text-gray_red">Diretor Técnico</p>
                  <strong>Ricardo Morillo Vigil</strong>
                </h3>
                <p className="text-gray_red text-sm font-normal max-w-[385px]">
                  "Prezamos pelo cuidado humanizado de nossos pacientes, com
                  ética, profissionalismo e respeito."
                </p>
              </div>
            </div>
            <div className="w-full h-max flex flex-col">
              <div className="flex flex-row-reverse items-end text-end gap-4 p-4">
                <img
                  src={profile_photo1}
                  alt=""
                  className="w-[84px] h-[84px] object-cover rounded-full shadow-lg"
                />
                <div className="">
                  <h3 className="h3 text-primary">
                    <p className="text-xs text-gray_red">Diretora Clínica</p>
                    <strong>Emanuella Braga de Carvalho</strong>
                  </h3>
                  <p className="text-gray_red text-sm text-end font-normal max-w-[385px]">
                    "Nosso objetivo é fornecer ao paciente uma assistência
                    médica comprometida com a qualidade do acolhimento e
                    proficiência."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
