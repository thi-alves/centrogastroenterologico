import React from "react";
import { services } from "../constants";
import Card_Services from "./Card_Services";

const Services = () => {
  return (
    <section
      id="servicos"
      className="w-full relative max-container padding-container flex mt-12 flex-col"
    >
      <div className="w-full flex flex-1 flex-col flexCenter gap-4 text-center z-10">
        <div className="btn-secondary w-max select-none">Nossos serviços</div>
        <h2 className="h2 text-primary">
          <strong>Podemos lhe ajudar com as seguintes especialidades</strong>
        </h2>
        <p className="p max-w-[768px]">
          Nossa clínica segue rigorosos protocolos de segurança para garantir a
          sua tranquilidade e bem-estar durante todas as suas visitas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {services.card.map((card) => (
            <Card_Services key={card.id} {...card} />
          ))}
        </div>
        <div className="flex  w-full mt-4 rounded-2xl bg-secondary/[4%] p-2 md:p-10 flex-wrap gap-10 border-2 border-secondary">
          <div className="flex-1 flex-col min-w-[250px]">
            <img src="" alt="" />
            <h2 className="h3 text-primary mb-2 ">Endoscopia</h2>
            <p className="p text-justify">
              Exame que permite identificar problemas relacionados ao aparelho
              digestivo. Sob sedação por anestesiologista, com um tubo flexível,
              o médico consegue obter imagens com precisão e analisar a saúde do
              estômago, esôfago e do duodeno. A endoscopia é o principal
              procedimento responsável pela identificação de doenças como
              refluxo, gastrite, úlceras, câncer, doença celíaca, varizes de
              esôfago e outras
            </p>
          </div>
          <div className="flex-1 flex-col min-w-[250px]">
            <img src="" alt="" />
            <h2 className="h3 text-primary mb-2 ">Colonoscopia</h2>
            <p className="p text-justify">
              A Colonoscopia é o procedimento responsável pela prevenção do
              câncer de intestino, com a identificação e retirada de pólipos que
              podem ser encontrados durante o exame. Usado também nos casos de
              doença inflamatória intestinal como a Doença de Crohn,
              retocolitie, investigação de hemorragia digestiva, doença
              diverticular, diarreia crônica.
            </p>
          </div>
          <div className="flex-1 flex-col min-w-[250px]">
            <img src="" alt="" />
            <h2 className="h3 text-primary mb-2 ">Ecoendoscopia</h2>
            <p className="p text-justify">
              A Ecoendoscopia ou Ultrassom Endoscópico é o exame que auxilia na
              avaliação e diagnóstico de afeições da parede do esôfago, estômago
              e duodeno, assim como de órgãos próximos (ex.: pâncreas, vesícula,
              vias biliares, mediastino). Com esse tipo de ultrassom, é possível
              obter obter mais detalhes sobre nódulos ou cistos de pâncreas,
              lesões subepiteliais, pesquisa de microlitiase biliar, além de
              estadiamento de tumores. Existe ainda a possibilidade de biópsia
              por meio de punção ecoguiada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
