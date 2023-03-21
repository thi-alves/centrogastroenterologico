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

import { BsArrowDownCircle,BsArrowUpCircle } from "react-icons/bs";

const Partners = () => {
  const [expand, setExpand] = useState(false);
  const expandClass = expand
    ? "display"
    : "hidden";
  return (
    <section id="partners">
        <div className="container mx-auto py-16">
    
          <div className="space-y-4 flex flex-col justify-center items-center mb-8">
            <h2 className="h3 text-primary text-center">
              <strong>Nossos parceiros</strong>
            </h2>
            <p className="p text-gray_red max-w-[768px] text-center">
              Nossa clínica tem o prazer de trabalhar com diversos convênios de saúde, visando oferecer a nossos pacientes uma experiência tranquila e acessível. Estamos preparados para oferecer o melhor atendimento aos pacientes conveniados.
            </p>
          </div>
          <div className="w-full h-max flex flex-1 justify-center place-items-center gap-8">
            <img src={sulamerica} alt="" className="w-40 object-cover" />
            <img src={amil} alt="" className="w-40 object-cover" />
            <img src={unimed} alt="" className="w-40 object-cover" />
            <img src={cemig} alt="" className="w-40 object-cover" />
            <img src={vale} alt="" className="w-40 object-cover" />
            <img src={allianz} alt="" className="w-40 object-cover" />
            <img src={goldencross} alt="" className="w-40 object-cover" />
          </div>

          <div className="w-full h-max flex flex-col justify-center items-center">
            <div onClick={() => setExpand(!expand)} className="cursor-pointer select-none font-bold text-base text-secondary mt-5 w-max gap-4 flex items-center justify-center text-center">
              Clique para ver a lista
              {expand ?
              <BsArrowUpCircle className="text-2xl"/>
              :
              <BsArrowDownCircle className="text-2xl"/>
              }
              
            </div>
            <div className={expandClass}>
              <ul className="flex flex-wrap gap-2 mt-4 justify-center">
                <li className="font-bold">AMIL</li>
                <li className="font-bold">ASPEMG</li>
                <li className="font-bold">BHTRANS</li>
                <li className="font-bold">CASSI</li>
                <li className="font-bold">CASU </li>
                <li className="font-bold">CEMIG</li>
                <li className="font-bold">SULAMÉRICA</li>
                <li className="font-bold">COPASS SAUDE</li>
                <li className="font-bold">DESBAN</li>
                <li className="font-bold">FUNDAFFEMG</li>
                <li className="font-bold">FUNDAÇÃO ITAU</li>
                <li className="font-bold">FUNDAÇÃO LIBERTAS</li>
                <li className="font-bold">UNIMED</li>
                <li className="font-bold">NOTREDAME INTERMÉDICA</li>
                <li className="font-bold">FUNDAÇÃO SÃO FRANCISCO XAVIER</li>
                <li className="font-bold">GOLDEN CROSS</li>
                <li className="font-bold">IPSEMG</li>
                <li className="font-bold">PASA/VALE</li>
                <li className="font-bold">POSTAL SAUDE</li>
                <li className="font-bold">SAÚDE SISTEMA</li>
                <li className="font-bold">SAÚDE AMMP</li>
              </ul>
            </div>
          </div>
       </div>
    </section>
  );
};

export default Partners;
