import React from "react";
import { services } from "../constants";
import Card_Services from "./Card_Services";

const Services = () => {
  return (
    <section id="services">
      <div className="container mx-auto py-16">
          <div className="space-y-4 flex flex-col justify-center items-center text-center mb-4">
            <button className="btn-secondary">Nossos serviços</button>
            <h2 className="h2 text-primary">
              <strong>
                Podemos lhe ajudar com uma variedade
                <br className="sm:block hidden" />
                de serviços gastroenterológicos
              </strong>
            </h2>
            <p className="p text-gray_red max-w-[768px]">
              A equipe está comprometida com a excelência no atendimento, sempre
              preocupada em atender às expectativas de seriedade e respeito pela
              saúde e bem-estar do ser humano
            </p>
          </div>

          <div className="grid sm:grid-cols-3 sm:gap-4 sm:p-10 gap-y-4">
            {services.card.map((card) => (
              <Card_Services key={card.id} {...card} />
            ))}
          </div>

       </div>
    </section>
  );
};

export default Services;
