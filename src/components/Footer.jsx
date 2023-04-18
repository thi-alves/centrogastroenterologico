import { MdEmail, MdLocationPin } from "react-icons/md";
import { BsFillTelephoneFill, BsFillChatQuoteFill, BsLinkedin } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";


import { logo } from "../assets";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container mx-auto my-10">
        <div className="w-full flex justify-items-center items-center flex-wrap gap-y-4">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="flex flex-col justify-center space-y-2">
              <h4 className="h4 text-primary">
                Assine nosso canal de novidades
              </h4>
              <p className="p text-gray_red text-justify">
                Assine e receba por e-mail os nossos destaques a cada quinze dias.
                Fique por dentro de todas as nossas novidades.
              </p>
              <input
                type="text"
                className="w-full bg-black/10 rounded-xl p-2 focus:outline-0 text-lg text-secondary"
                placeholder="Digite o seu e-mail..."
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary rounded-xl text-white font-bold text-base hover:bg-secondary duration-300 transition-colors"
              >
                Assinar
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="flex flex-row justify-center items-center">
              <div className="">
                <h5 className="h5 mb-2">Menu</h5>
                <ul className="">
                  <li className="font-bold bg-secondary/10 text-secondary"><a href="#home">Home</a></li>
                  <li><a href="#about">Sobre</a></li>
                  <li><a href="#services">Serviços</a></li>
                  <li><a href="#team">Equipe</a></li>
                  <li><a href="#partners">Convênios</a></li>
                </ul>
              </div>
              <div className="">
                <ul>
                  <li><a href="#articles">Artigos</a></li>
                  <li><a href="#contact">Contato</a></li>
                  <li><a href="#team">Localização</a></li>
                </ul>
              </div>
              <div className="">
                <h5 className="h5 mb-2">Utilitários</h5>
                <ul className="">
                  <li><a href="#downloads">Downloads</a></li>
                  <li><a href="#faq">Ajuda</a></li>
                  <li><a href="#articles">Artigos</a></li>
                  <li><a href="#news">Novidades</a></li>
                  <li className="font-bold bg-secondary/10 text-secondary">LGPD</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="flex flex-col justify-center items-center">
              <h5 className="h5 ml-2 mb-2 col-span-2">Contato</h5>
              <div>
                <ul>
                  <li >
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
        </div>

        <div className="w-full flex flex-wrap text-center justify-center items-center mt-6 gap-y-4">
          <div className="w-full sm:w-1/3">
            <div className="flex justify-center items-center">
              <img src={logo} alt="" className="w-[180px]" />
            </div>
          </div>
          <div className="w-full sm:w-1/3">
            <div className="flex justify-center text-black/30 text-3xl gap-3">
              <BsLinkedin className="hover:text-secondary hover:scale-125 duration-150 ease-in-out" />
              <RiInstagramFill className="hover:text-secondary hover:scale-125 duration-150 ease-in-out" />
              <IoLogoWhatsapp className="hover:text-secondary hover:scale-125 duration-150 ease-in-out" />
              <BsFillChatQuoteFill className="hover:text-secondary hover:scale-125 duration-150 ease-in-out" />
            </div>
          </div>
          <div className="w-full sm:w-1/3">
            <p className="p text-gray_red">Copyright © Desenhado e Desenvolvido por <br /> <span className="text-primary"><u>Thi Alves</u></span> - <span className="text-primary"><u>TAGLINE</u></span></p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
