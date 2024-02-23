import React from "react";
import { services } from "../constants";
import Card_Services from "./Card_Services";

const Services = () => {
  return (
    <section id="services">
      <div className="container mx-auto my-20">
        <div className="w-full flex justify-center items-center">
          <div className="max-w-[768px] flex flex-col justify-center items-center text-center mb-8 gap-y-4">
            <div className="shadow-btn bg-white text-secondary px-4 py-3 rounded-lg font-bold leading-5 text-base w-max">
              Nossos serviços
            </div>
            <h2 className="h2 text-primary">
              <strong>
                Podemos lhe ajudar com as seguintes especialidades
              </strong>
            </h2>
            <p className="p">
              {" "}
              Nossa clínica é equipada com tecnologia de última geração e
              seguimos rigorosos protocolos de segurança para garantir a sua
              tranquilidade e bem-estar durante todas as suas visitas
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {services.card.map((card) => (
            <Card_Services key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
