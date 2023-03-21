import React from "react";
import { articles } from "../constants";
import Card_Articles from "./Card_Articles";

const Articles = () => {
  return (
    <section id="articles">
      <div className="container mx-auto py-16">

        <div className="space-y-4 flex flex-col justify-center items-center mb-8">
          <button className="btn-secondary">Artigos e Dicas</button>
          <h2 className="h2 text-primary text-center">
            <strong>Nossos artigos sobre saúde estomacal</strong>
          </h2>
          <p className="p text-gray_red max-w-[768px] text-center">
            Aqui você encontrará dicas e orientações para manter seu sistema digestivo saudável e funcionando corretamente. Nós nos dedicamos a fornecer informações de qualidade e precisas para ajudar nossos pacientes e visitantes.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-x-6 gap-y-4">
          {articles.card.map((card) => (
            <Card_Articles key={card.id} {...card} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Articles;
