import React from "react";
import { about_01, about_02, circle, profile_photo } from "../assets";
const About = () => {
  return (
    <section id="about">
      <div className="flex justify-center items-center bg-secondary/[2%] shadow-sm bg-cover relative overflow-hidden">

        <img
          id="circle"
          src={circle}
          alt=""
          className="absolute w-[380px] right-[150px] bottom-[200px] z-[0] opacity-20"
        />
        <div className="container mx-auto py-16">
          <div className="grid sm:grid-cols-2 space-y-4">
            <div className="relative">
              <img data-anime="" src={about_01} alt="" className="max-w-[67%] float-left  rounded-[2.5rem] z-[3]" />
              <img src={about_02} alt="" className="max-w-[66%]  float-right mt-[-100px]  rounded-[2.5rem] z-[4]" />
            </div>
            <div className="sm:ml-20 self-center space-y-4 z-[5]">
              <div className="btn-secondary w-max select-none">Sobre nós</div>
              <div className="h2 text-primary">
                <strong>
                  Missão e Valores
                </strong>
              </div>
              <div className="flex flex-col gap-y-4 p text-gray_red">
                <p >
                Nosso objetivo é proporcionar atendimento e acompanhamento na área de Gastroenterologia, através de profissionais capacitados e experientes, comprometidos atender ás necessidades dos pacientes, com integridade e ética. Buscamos a satisfação do nosso Cliente. 
                  <br /><br /><span className="text-secondary font-bold">• Missão: </span> Atender e acompanhar o paciente na área de Gastroenterologia, utilizando-se do atendimento Clínico e da realização de exames Endoscópicos para colaborar de forma segura para a decisão terapêutica.

                </p>
                <p >
                  <span className="text-secondary font-bold">• Valores: </span> Oferecemos um atendimento humanizado, com equipe qualificada e respeito à autonomia do paciente. Atuamos com ética e segurança através da qualidade em todos os nossos processos.
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
                  <p className="text-gray_red text-sm">
                    "Estamos comprometidos em fornecer um atendimento excepcional e personalizado, e em garantir que todos os nossos pacientes sejam tratados com respeito, atenção e cuidado."
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
