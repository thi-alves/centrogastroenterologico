import React from "react";
import { services } from "../constants";
import Card_Services from "./Card_Services";

const Services = () => {
  return (
    <section
      id="servicos"
      className="max-container padding-container flex mt-12"
    >
      <div className="flex flex-1 flex-col flexCenter gap-4 text-center">
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
      </div>
    </section>
  );
};

export default Services;
