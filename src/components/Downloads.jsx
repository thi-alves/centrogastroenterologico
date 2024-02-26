import React from "react";
import { BiRightArrow } from "react-icons/bi";
const Downloads = () => {
  return (
    <section id="downloads">
      <div className="container mx-auto py-16">
        <div className="space-y-4 flex flex-col justify-center items-center text-center bg-secondary/[4%] rounded-2xl p-6 ">
          <button className="btn-secondary">Downloads</button>
          <h2 className="h2 text-primary">
            <strong>Baixe um arquivo e salve-o no dispositivo</strong>
          </h2>
          <p className="p text-gray_red max-w-[768px]">
            Você pode solicitar seu arquivo, clicando em Termos ou Preparos e
            selecionar qual o arquivo desejado clicando em cima do título.
            <span className="ml-2 font-bold text-black/40">Exemplo:</span>{" "}
            <span className="font-medium text-secondary">
              Endoscopia Digestiva Alta
            </span>
          </p>
        </div>
        <div className="grid md:grid-cols-2 mt-6 gap-2">
          <div className="flex flex-col md:flex-row">
            <div className="border border-secondary rounded-2xl p-4 relative shadow-btn">
              <h3 className="h3 text-primary">Termos de Consentimento</h3>
              <p className="p text-gray_red max-w-[650px]">
                Documento que informa ao paciente sobre os procedimentos médicos
                a serem realizados, riscos e benefícios, para que possa tomar
                uma decisão consciente. É obrigatório em nossa clínica de
                gastroenterologia, garantindo a segurança e bem-estar de nossos
                pacientes.
              </p>
              <div className="bg-white shadow-btn absolute right-[-3%] top-[42%] rounded-full p-2 flex justify-center items-center">
                <BiRightArrow className="text-secondary text-xl" />
              </div>
            </div>
            <div className="px-8 bg-gray/60  rounded-2xl p-4 flex flex-col space-y-2">
              <span className="font-medium text-secondary">Colonoscopia</span>
              <span className="font-medium text-secondary">
                Endoscopia Baixa
              </span>
              <span className="font-medium text-secondary">
                Endoscopia Alta
              </span>
              <span className="font-medium text-secondary">
                Endoscopia Digestiva Alta
              </span>
            </div>
            <div className=""></div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="border border-secondary rounded-2xl p-4 relative shadow-btn">
              <h3 className="h3 text-primary">Preparos</h3>
              <p className="p text-gray_red max-w-[650px]">
                Importantes para garantir a qualidade dos resultados e a
                segurança do paciente. Orientamos nossos pacientes sobre os
                preparos específicos para cada exame, incluindo restrições
                alimentares, medicamentos e outras medidas necessárias. Com
                isso, garantimos que os resultados sejam precisos e os exames
                sejam realizados com tranquilidade.
              </p>
              <div className="bg-white shadow-btn absolute right-[-3%] top-[42%] rounded-full p-2 flex justify-center items-center">
                <BiRightArrow className="text-secondary text-xl" />
              </div>
            </div>
            <div className="px-8 bg-gray/60  rounded-2xl p-4 flex flex-col space-y-2">
              <span className="font-medium text-secondary">Colonoscopia</span>
              <span className="font-medium text-secondary">
                Endoscopia Baixa
              </span>
              <span className="font-medium text-secondary">
                Endoscopia Alta
              </span>
              <span className="font-medium text-secondary">
                Endoscopia Digestiva Alta
              </span>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downloads;
