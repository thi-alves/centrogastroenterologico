import React from "react";
import {
  circle,
  structure1,
  structure2,
  structure3,
  structure4,
} from "../assets";

const Our_Structure = () => {
  return (
    <section className="w-full relative">
      <div className="max-container padding-container">
        <div className="flex flex-col md:flex-row w-full  ">
          <img
            src={circle}
            alt=""
            className="absolute bottom-0 left-64 opacity-20 z-0"
          />
          <div className="w-full md:max-w-[500px] mt-10 mr-4 flex flex-col">
            <div className="btn-secondary w-max select-none mb-4 self-center">
              Nossa estrutura
            </div>
            <div className="h2 text-primary">
              <strong> Lorem ipsum dolor iste </strong>
              <div className="flex flex-col gap-y-4 p text-gray_red">
                <p>
                  Lorem ipsom iste earum repudiandae vel sit amet consectetur
                  adipisicing elit. Eveniet labore maiores ea laudantium,
                  repellendus ullam officiis eum assumenda eligendi nostrum
                  pariatur porro, maxime consequatur lit. Eveniet labore maiores
                  ea laudantium, repellendus ullam officiis.
                  <br />
                  <br />
                  <span className="text-secondary font-bold">
                    • Lorem Dolor:{" "}
                  </span>{" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  esse possimus deserunt repellendus. Impedit, a. Ipsum, placeat
                  dicta rerum, adipisci quas quod fuga recusandae eveniet
                  quisquam quaerat dolor fugit ipsam.
                </p>
                <p>
                  <span className="text-secondary font-bold">
                    • Lorem Dolor:{" "}
                  </span>{" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  doloremque sunt quia magnam voluptatem iusto laboriosam est
                  quisquam doloribus! Ipsam nihil necessitatibus corporis vero
                  laborum cupiditate nesciunt ab nisi aperiam.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-5 z-10">
            <div className="flex flex-col md:flex-row items-center gap-5">
              <img
                src={structure2}
                alt=""
                className="w-[80%] rounded-lg  shadow-sm"
              />
              <img
                src={structure3}
                alt=""
                className=" self-end rounded-lg shadow-sm"
              />
            </div>
            <div className="flex flex-col md:flex-row items-start gap-5 md:-ml-20">
              <img
                src={structure4}
                alt=""
                className="w-[80%] rounded-lg shadow-sm"
              />
              <img src={structure1} alt="" className="rounded-lg shadow-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Our_Structure;
