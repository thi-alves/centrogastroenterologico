import { useState } from "react";
import { logo_ofc, home, circle } from "../assets";
import {
  MdEmail,
  MdAccessTimeFilled,
  MdMedicalServices,
  MdOutlineMedicalServices,
} from "react-icons/md";
import { BsCalendar2Plus } from "react-icons/bs";
import { BiCookie } from "react-icons/bi";

const Hero = () => {
  const [cookies, setCookies] = useState(false);

  return (
    <section id="home">
      <div className="w-screen min-h-screen relative">
        {cookies == false ? (
          <div className="my-4 w-full py-4 bg-black/80 fixed z-[99] shadow-sm text-white">
            <div className="text-center flex flex-col justify-center">
              <div className="flex justify-center items-center text-base">
                <BiCookie className="text-xl mr-2" />
                <p>
                  {" "}
                  <strong>Esse site usa cookies</strong>
                </p>
              </div>

              <p>
                Cookies: a gente guarda estatísticas de visitas para melhorar
                sua experiência de navegação, saiba mais em nossa{" "}
                <strong className="text-secondary">
                  <a href="www.google.com"> política de privacidade</a>
                </strong>
                .
              </p>
              <div className="flex justify-center">
                <a
                  onClick={() => setCookies(!cookies)}
                  className="font-bold text-secondary bg-white rounded-lg px-2 py-1 mt-2 cursor-pointer"
                >
                  Aceitar e fechar
                </a>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="w-full h-full grid sm:grid-cols-2 gap-y-4">
          <div className="flex flex-col justify-center items-end mr-20 relative overflow-hidden w-full h-full  space-container-section">
            <img
              id="circle"
              src={circle}
              alt=""
              className="w-[50%] absolute -right-[20%] -top-[20%] opacity-10 z-[0]"
            />
            <div className="rounded-2xl h-14 w-8 border-4 border-secondary flex justify-center items-center">
              <div className="bg-secondary w-[5px] h-[50%] rounded-full ease-in-out animate-bounce" />
            </div>
            <img
              id="circle"
              src={circle}
              alt=""
              className="w-[40%] absolute left-10 bottom-0 opacity-10 z-[0]"
            />

            <div className="self-center max-w-[568px] z-[1] flex flex-col gap-y-4">
              <div className="flex justify-center mb-6">
                <img
                  src={logo_ofc}
                  className="w-28 shadow-md self-center"
                ></img>
              </div>
              <h1 className="h1 text-primary text-center">
                <strong>CENTRO </strong>
              </h1>
              <h3 className="h2 text-secondary text-center mb-6">
                <strong>GASTROENTEROLÓGICO</strong>{" "}
              </h3>
              <p className="p text-gray_red text-justify mb-4">
                O Centro Gastro foi fundado em 1992 pelo Dr. Nantes Morillo, um
                renomado gastroenterologista e endoscopista em atividade.
                Oferecemos serviços de consulta eletiva, exames diagnósticos e
                terapêuticos, incluindo endoscopia digestiva, colonoscopia e
                ecoendoscopia. Nossa equipe está comprometida em fornecer
                atendimento personalizado de qualidade, em consonância com a
                necessidade de cada paciente.
              </p>
              <div className="flex justify-start gap-x-8 items-center flex-col sm:flex-row gap-y-2">
                <a
                  href="#contact"
                  className="flex justify-center items-center gap-2 w-full sm:w-max bg-primary rounded-xl px-8 py-4 font-bold text-white shadow-btn hover:bg-secondary hover:-translate-y-1 transition duration-300"
                >
                  <BsCalendar2Plus />
                  Marcar um hórario
                </a>
                <a
                  href="#services"
                  className="flex justify-center items-center gap-2 w-full sm:w-max bg-white rounded-xl px-8 py-4 font-bold text-secondary shadow-btn hover:-translate-y-1 transition duration-300"
                >
                  <MdOutlineMedicalServices className="text-xl" />
                  Procurar serviços
                </a>
              </div>
            </div>
          </div>
          <div className="overflow-hidden">
            <img src={home} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center">
        <div className="w-full h-full xl:max-w-[1280px] px-3 sm:px-10 lg:px-28 xl:px-4">
          <div className="right-0 left-0 m-auto flex flex-col md:flex-row gap-y-4 bg-white rounded-3xl shadow-btn p-10 justify-between relative mt-[-50px]">
            <div className="flex md:flex-col lg:flex-row gap-y-3 w-full justify-center group">
              <div className="w-max">
                <div className="p-4 bg-primary  group-hover:bg-secondary transition duration-300 rounded-2xl mr-5 flex justify-center items-center text-white text-4xl">
                  <MdEmail />
                </div>
              </div>
              <div className="">
                <h3 className="h3 text-black mb-2">Contato</h3>
                <p className="p text-gray_red">
                  (31) 3263-2000 | (31) 3263-2001
                </p>
                <p className="p text-gray_red">
                  (31) 98611-0299 | (31) 98660-50783
                </p>
                <a className="p font-bold text-secondary">
                  centrogastro@centrogastro.com.br
                </a>
                <div className="w-[0%] h-[2px] group-hover:w-[100%] bg-secondary transition-all duration-300" />
              </div>
            </div>

            <div className="w-full sm:w-[1px]  h-[1px] sm:h-auto mx-4 bg-black/10"></div>

            <div className="flex md:flex-col lg:flex-row gap-y-3 w-full justify-center group">
              <div className="w-max">
                <div className="p-4 bg-primary  group-hover:bg-secondary transition duration-300 rounded-2xl mr-5 flex justify-center items-center text-white text-4xl">
                  <MdAccessTimeFilled />
                </div>
              </div>
              <div className="">
                <h3 className="h3 text-black mb-2">Hórario</h3>
                <p className="p text-gray_red">
                  <span className="font-bold text-secondary">Seg - Sex:</span>{" "}
                  06:30h às 18:00h
                </p>
                <p className="p text-gray_red">
                  <span className="font-bold text-secondary">Sábado:</span>{" "}
                  06:30h às 13:00h
                </p>
                <p className="p text-gray_red">
                  <span className="font-bold text-secondary">Domingo:</span>{" "}
                  Fechado
                </p>
                <div className="w-[0%] h-[2px] group-hover:w-[100%] bg-secondary transition-all duration-300" />
              </div>
            </div>

            <div className="w-full sm:w-[1px]  h-[1px] sm:h-auto mx-4 bg-black/10"></div>

            <div className="flex md:flex-col lg:flex-row gap-y-3 w-full justify-center group">
              <div className="w-max">
                <div className="p-4 bg-primary  group-hover:bg-secondary transition duration-300 rounded-2xl mr-5 flex justify-center items-center text-white text-4xl">
                  <MdMedicalServices />
                </div>
              </div>
              <div className="">
                <h3 className="h3 text-black mb-2">Serviços</h3>
                <p className="p text-gray_red">
                  <span className="font-bold text-secondary">● </span>Endoscopia
                  / Gastroenterologia
                </p>
                <p className="p text-gray_red">
                  <span className="font-bold text-secondary">● </span>
                  Colonoscopia / Coloproctologia
                </p>
                <p className="p text-gray_red">
                  <span className="font-bold text-secondary">● </span>
                  Cirurgião Geral
                </p>
                <div className="w-[0%] h-[2px] group-hover:w-[100%] bg-secondary transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
