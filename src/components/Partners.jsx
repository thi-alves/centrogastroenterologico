import React from "react";
import { useState } from "react";
import {
  unimed,
  amil,
  sulamerica,
  allianz,
  cemig,
  vale,
  goldencross,
} from "../assets";

import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { name_Insurance } from "../constants";

const Partners = () => {
  const [expand, setExpand] = useState(false);
  const expandClass = expand ? "display" : "hidden";
  return (
    <section id="partners">
      <div className="container mx-auto my-16">
        <div className="w-full flex justify-center items-center">
          <div className="max-w-[768px] flex flex-col justify-center items-center text-center mb-8 gap-y-4">
            <h2 className="h2 text-primary">
              <strong>Nossos parceiros</strong>
            </h2>
            <p className="p">
              Nossa clínica tem o prazer de trabalhar com diversos convênios de
              saúde, visando oferecer a nossos pacientes uma experiência
              tranquila e acessível. Estamos preparados para oferecer o melhor
              atendimento aos pacientes conveniados.
            </p>
          </div>
        </div>

        <div className="hidden w-full h-max md:flex flex-1 justify-center place-items-center gap-8">
          <img src={sulamerica} alt="" className="w-40 object-cover" />
          <img src={amil} alt="" className="w-40 object-cover" />
          <img src={unimed} alt="" className="w-40 object-cover" />
          <img src={cemig} alt="" className="w-40 object-cover" />
          <img src={vale} alt="" className="w-40 object-cover" />
          <img src={allianz} alt="" className="w-40 object-cover" />
          <img src={goldencross} alt="" className="w-40 object-cover" />
        </div>

        <div className="w-full justify-center items-center flex flex-col flex-nowrap">
          <div
            onClick={() => setExpand(!expand)}
            className="cursor-pointer select-none font-bold text-base text-secondary mt-5 w-max gap-4 flex items-center justify-center text-center"
          >
            Clique para ver a lista
            {expand ? (
              <BsArrowUpCircle className="text-2xl" />
            ) : (
              <BsArrowDownCircle className="text-2xl" />
            )}
          </div>
          <div className={expandClass}>
            <ul className="flex flex-wrap gap-2 mt-4 justify-center">
              {name_Insurance.map((insurance, i) => (
                <li className="font-bold" key={i}>
                  {insurance}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
