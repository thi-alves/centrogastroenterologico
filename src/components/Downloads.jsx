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
            <div className="px-8 bg-[#E5E7EB]/15  rounded-2xl p-4 flex flex-col space-y-2">
              <a
                href="https://drive.google.com/uc?export=download&id=1QMb3Af67PKWdjuGjCWJ1Rypnn-86yecY"
                className="font-medium text-secondary"
              >
                Colonoscopia
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1Jzcf00DgBv31jF5g2fjhMgXWYuwEW0Wc"
                className="font-medium text-secondary"
              >
                Endoscopia Baixa
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=h1WVxlrIXuu2CCiy3MBF4hI8hYC9SCI4D9"
                className="font-medium text-secondary"
              >
                Endoscopia Alta
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1KGZMJjix0tO5_EGwofeCOHlWoRasizLI"
                className="font-medium text-secondary"
              >
                Endoscopia Digestiva Alta
              </a>
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
            <div className="px-8 bg-[#E5E7EB]/15  rounded-2xl p-4 flex flex-col space-y-2">
              <a
                href="https://drive.google.com/uc?export=download&id=1ABS1MlrWRrMXSc6Dp61saBDo-4OZvbGy"
                className="font-medium text-secondary"
              >
                Colonoscopia Manhã
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1EsMj72kx6iDjn0KUPBpj5O6YMP38zd17"
                className="font-medium text-secondary"
              >
                Colonoscopia Tarde
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1BGA_53P3hFz9QPaeSTmuM_Ih4YEYJmMo"
                className="font-medium text-secondary"
              >
                Endoscopia Baixa
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1j53rEtO6IecFwGDV0aHGsDzjjaE1zM6m"
                className="font-medium text-secondary"
              >
                Endoscopia Digestiva Alta Manhã
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1EkLavn_8y9A8WvgFXs0UkCkRgOIDpfxU
                "
                className="font-medium text-secondary"
              >
                Endoscopia Digestiva Alta Tarde
              </a>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downloads;
