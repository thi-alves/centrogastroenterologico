import React from "react";
import { about_01, about_02, circle, profile_photo } from "../assets";
const About = () => {
  return (
    <section id="about">
      <div className="w-screen min-h-screen flex justify-center items-center bg-secondary/[4%] shadow-sm bg-cover relative overflow-hidden">
        <img
          id="circle"
          src={circle}
          alt=""
          className="absolute w-[300px] left-[150px] top-[200px] z-[0] opacity-40"
        />
        <img
          id="circle"
          src={circle}
          alt=""
          className="absolute w-[380px] right-[150px] bottom-[200px] z-[0] opacity-40"
        />
        <div className="w-full h-full xl:max-w-[1280px] px-3 p-10">
          <div className="grid sm:grid-cols-2 space-y-4">
            <div className="relative">
                <img src={about_01} alt="" className="max-w-[77%] float-left  rounded-[2.5rem] z-[3]"/>
                <img src={about_02} alt="" className="max-w-[76%]  float-right mt-[-100px]  rounded-[2.5rem] z-[4]" /> 
            </div>
            <div className="sm:ml-20 self-center space-y-4 z-[5]">
              <div className="btn-secondary w-max select-none">Sobre nós</div>
              <div className="h2 text-primary">
                <strong>
                  Nossa equipe tem apenas uma missão: Cuidar de você!
                </strong>
              </div>
              <div className="p text-gray_red">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                mecenas viverra em quis nibh. Tortor, quis aenean vitae, enim,
                magna tortor. Sed vivamus porttitor tempus
              </div>
              <div className="flex gap-4">
                <img
                  src={profile_photo}
                  alt=""
                  className="w-[84px] h-[84px] object-cover rounded-full shadow-lg"
                />
                <div className="mb-10">
                  <h3 className="h3 text-primary">
                    <p className="text-xs text-gray_red">CEO</p>
                    <strong>Ricardo Morillo Vigil</strong>
                  </h3>
                  <p className="p text-gray_red">
                    Gastroenterologia / Endoscopia Digestiva
                  </p>
                </div>
              </div>
              <button className="bg-primary rounded-xl px-8 py-4 font-bold text-white shadow-btn hover:bg-secondary hover:-translate-y-1 transition duration-300">
                Sobre nossa cliníca
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
