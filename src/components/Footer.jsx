import { MdEmail, MdLocationPin } from "react-icons/md";
import { BsFillTelephoneFill, BsFillChatQuoteFill,BsLinkedin } from "react-icons/bs";
import {RiInstagramFill} from "react-icons/ri";
import {IoLogoWhatsapp} from "react-icons/io";


import { logo } from "../assets";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="w-screen h-full flex justify-center items-center">
        <div className="w-full h-full xl:max-w-[1280px] px-3">

          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-5">
            <div id="Subscribe-Newsletter" className="space-y-8 col-span-2 mb-4">
              <div>
                <h4 className="h4 text-primary">
                  Assine nosso canal de novidades
                </h4>
                <p className="p text-gray_red">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla.
                </p>
              </div>
              <div className="flex gap-4 px-4 items-center justify-between w-full h-[4rem] bg-gray rounded-lg border-transparent border-1 border hover:border-1 hover:border hover:border-secondary  transition-colors duration-300">
                <input
                  type="text"
                  className="w-full bg-transparent focus:outline-0 text-lg text-secondary"
                  placeholder="Digite o seu e-mail..."
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary rounded-xl text-white font-bold text-base hover:-translate-y-1 duration-300 ease-in-out hover:shadow-lg hover:light_red"
                >
                  Assinar
                </button>
              </div>
            </div>

            <div id="menu">
              <h5 className="h5 ml-2 mb-2">Menu</h5>
              <div className="grid grid-cols-2">
                <div>
                  <ul className="space-y-1">
                    <li className="font-bold bg-secondary/10 text-secondary"><a href="#home">Home</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#team">Equipe</a></li>
                    <li><a href="#partners">Convênios</a></li>
                  </ul>
                </div>
                <div className="space-y-1">
                  <ul>
                    <li><a href="#articles">Artigos</a></li>
                    <li><a href="#contact">Contato</a></li>
                    <li><a href="#team">Localização</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="utility">
              <h5 className="h5 ml-2 mb-2">Utilitários</h5>
              <div>
                <ul className="space-y-1">
                  <li><a href="#downloads">Downloads</a></li>
                  <li><a href="#faq">Ajuda</a></li>
                  <li><a href="#articles">Artigos</a></li>
                  <li><a href="#news">Novidades</a></li>
                  <li className="font-bold bg-secondary/10 text-secondary">LGPD</li>
                </ul>
              </div>
            </div>

            <div id="contact">
              <h5 className="h5 ml-2 mb-2 col-span-2">Contato</h5>
              <div>
                <ul>
                  <li>
                    {" "}
                    <MdEmail className="text-primary  text-2xl" />{" "}
                    contato@gastro.com
                  </li>
                  <li>
                    {" "}
                    <BsFillTelephoneFill className="text-primary  text-2xl" />{" "}
                    (+55) 31 3263-2000 <br />
                    (+55) 31 3263-2000 <br />
                  </li>
                  <li>
                    {" "}
                    <MdLocationPin className="text-primary  text-2xl" />{" "}
                    <div className="inline-block">
                      353 R. Pernambuco <br /> Conj. 507 e 609 <br />{" "}
                      Belo-Horizonte
                    </div>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="text-gray_red/20  my-6" />

          <div className="flex flex-row flex-wrap justify-between items-center gap-2">
            <img src={logo} alt="" className="w-[180px]"/>
            <div className="flex text-black/30 text-2xl gap-3">
            <BsLinkedin className="hover:text-secondary hover:scale-125 duration-150 ease-in-out" />
            <RiInstagramFill className="hover:text-secondary hover:scale-125 duration-150 ease-in-out" />
            <IoLogoWhatsapp  className="hover:text-secondary hover:scale-125 duration-150 ease-in-out"/>
            <BsFillChatQuoteFill className="hover:text-secondary hover:scale-125 duration-150 ease-in-out" />
            </div>
            <p className="p text-gray_red">Copyright © Desenhado e Desenvolvido por <br/> <span className="text-primary"><u>Thi Alves</u></span> - <span className="text-primary"><u>TAGLINE</u></span></p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
