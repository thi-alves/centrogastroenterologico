import React from "react";
import { articles } from "../constants";
import Card_Articles from "./Card_Articles";

const Articles = () => {
  return (
    <section id="articles">
      <div className="container mx-auto my-20">
        <div className="w-full flex justify-center items-center">
          <div className="max-w-[768px] flex flex-col justify-center items-center text-center mb-8 gap-y-4">
            <div className="shadow-btn bg-white text-secondary px-4 py-3 rounded-lg font-bold leading-5 text-base w-max">Artigos e Dicas</div>
            <h2 className="h2 text-primary"><strong>Nossos artigos sobre saúde estomacal</strong></h2>
            <p className="p"> Aqui você encontrará dicas e orientações para manter seu sistema digestivo saudável e funcionando corretamente.
              Nós nos dedicamos a fornecer informações de qualidade e precisas para ajudar nossos pacientes e visitantes.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-wrap sm:flex-nowrap gap-4">
          {articles.card.map((card) => (
            <Card_Articles key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
