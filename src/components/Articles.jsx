import React from "react";
import { articles } from "../constants";
import Card_Articles from "./Card_Articles";

const Articles = () => {
  return (
    <section
      id="Artigos Médicos Centro Gastro BH"
      className="max-container padding-container flex mt-12"
    >
      <div className="">
        <div className="flex flex-1 flex-col flexCenter gap-4 text-center">
          <div className="btn-secondary w-max select-none">Artigos e Dicas</div>
          <h2 className="h2 text-primary">
            <strong>Nossos artigos sobre saúde estomacal</strong>
          </h2>
          <p className="p max-w-[768px]">
            Aqui você encontrará dicas e orientações para manter seu sistema
            digestivo saudável e funcionando corretamente. Nós nos dedicamos a
            fornecer informações de qualidade e precisas para ajudar nossos
            pacientes e visitantes.
          </p>
        </div>
        <div className="flex flex-1 flex-col md:flex-row gap-4 mt-8">
          {articles.card.map((card) => (
            <Card_Articles key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
