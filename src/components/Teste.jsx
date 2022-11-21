import React from "react";
import { profile_team } from "../assets";

const Teste = () => {
  return (
    <section id="teste">
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-full h-full xl:max-w-[1280px] px-3">
          <div
            id="header-section"
            className="flex flex-col items-center space-y-4"
          >
            <button className="btn-secondary shadow-lg ">Nossa equipe</button>
            <h2 className="h2 text-primary sm:max-w-xl sm:text-center">
              <strong>Conheça um pouco mais a nossa equipe de médicos</strong>
            </h2>
            <p className="p text-gray_red sm:max-w-xl  sm:text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              integer elit cum sed etiam. Nisl arcu ipsum turpis quisque risus
              ultrices eget.
            </p>
          </div>
          <div className="flex flex-nowrap overflow-x-scroll scroll scroll-smooth gap-4 scrollbar-hide absolute">
            <div className="max-w-[390px]  flex-none">
              <img
                src={profile_team}
                alt=""
                className="object-cover rounded-[2.8rem]"
              />
              <h3 className="h3 text-primary text-center">
                <strong>Luana Fontes</strong>
                <p className="text-xs text-gray_red">CRM: 478549/87</p>
              </h3>
              <p className="p text-gray_red text-center">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Rhoncus massa felis in sedeol commodo. Augue morbi molestie”
              </p>
            </div>
            <div className="max-w-[390px] flex-none">
              <img
                src={profile_team}
                alt=""
                className="object-cover rounded-[2.8rem]"
              />
              <h3 className="h3 text-primary text-center">
                <strong>Luana Fontes</strong>
                <p className="text-xs text-gray_red">CRM: 478549/87</p>
              </h3>
              <p className="p text-gray_red text-center">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Rhoncus massa felis in sedeol commodo. Augue morbi molestie”
              </p>
            </div>
            <div className="max-w-[390px] flex-none">
              <img
                src={profile_team}
                alt=""
                className="object-cover rounded-[2.8rem]"
              />
              <h3 className="h3 text-primary text-center">
                <strong>Luana Fontes</strong>
                <p className="text-xs text-gray_red">CRM: 478549/87</p>
              </h3>
              <p className="p text-gray_red text-center">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Rhoncus massa felis in sedeol commodo. Augue morbi molestie”
              </p>
            </div>
            <div className="max-w-[390px] flex-none">
              <img
                src={profile_team}
                alt=""
                className="object-cover rounded-[2.8rem]"
              />
              <h3 className="h3 text-primary text-center">
                <strong>Luana Fontes</strong>
                <p className="text-xs text-gray_red">CRM: 478549/87</p>
              </h3>
              <p className="p text-gray_red text-center">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Rhoncus massa felis in sedeol commodo. Augue morbi molestie”
              </p>
            </div>
            <div className="max-w-[390px] flex-none">
              <img
                src={profile_team}
                alt=""
                className="object-cover rounded-[2.8rem]"
              />
              <h3 className="h3 text-primary text-center">
                <strong>Luana Fontes</strong>
                <p className="text-xs text-gray_red">CRM: 478549/87</p>
              </h3>
              <p className="p text-gray_red text-center">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Rhoncus massa felis in sedeol commodo. Augue morbi molestie”
              </p>
            </div>
            <div className="max-w-[390px] flex-none">
              <img
                src={profile_team}
                alt=""
                className="object-cover rounded-[2.8rem]"
              />
              <h3 className="h3 text-primary text-center">
                <strong>Luana Fontes</strong>
                <p className="text-xs text-gray_red">CRM: 478549/87</p>
              </h3>
              <p className="p text-gray_red text-center">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Rhoncus massa felis in sedeol commodo. Augue morbi molestie”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teste;
