import React from "react";
import { about_01, about_02, profile_photo } from "../assets";

const About = () => {
  return (
    <div className="w-screen flex justify-center items-center  bg-light_red/20">
      <div className="xl:max-w-[1280px] w-full px-4 my-20">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col justify-start items-start h-[400px] sm:h-[700px] relative">
            <img
              src={about_01}
              alt=""
              className="flex z-[1] absolute  w-[75%]  top-0 left-0  rounded-3xl shadow-btn object-cover"
            />
            <img
              src={about_02}
              alt=""
              className="flex z-[2] absolute  w-[65%] bottom-0 right-0 rounded-3xl shadow-btn object-cover"
            />
          </div>
          <div className="flex justify-center items-center sm:pl-20">
            <div className="space-y-5">
              <button className="shadow-btn bg-white text-secondary px-4 py-3 rounded-lg font-bold leading-5 text-base">
                Sobre nós
              </button>
              <h2 className="tm">
                Nossa equipe tem apenas uma missão: Cuidar de você!
              </h2>
              <p className="pp">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                mecenas viverra em quis nibh. Tortor, quis aenean vitae, enim,
                magna tortor. Sed vivamus porttitor tempus
              </p>
              <div className="flex gap-4">
                <img src={profile_photo} alt="" className="w-[84px] h-[84px] object-cover rounded-full" />
                <div>
                  <h3 className="st">Dr. Ricardo Morillo Vigil</h3>
                  <p className="pp">Gastroenterologia / Endoscopia Digestiva</p>
                </div>
              </div>
              <button className="shadow-btn text-white w-[100%] sm:w-auto bg-primary px-8 py-6 rounded-xl font-bold leading-5 text-lg">
                Sobre nossa cliníca
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
