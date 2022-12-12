import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { circle } from "../assets";
const Contact = () => {
  return (
    <section id="contact">
      <div className="w-screen min-h-screen flex justify-center items-center bg-secondary/[4%] shadow-sm bg-cover py-4 relative overflow-hidden">
        <img
          id="circle"
          src={circle}
          alt=""
          className="absolute  bottom-[-20%] right-[0%] z-[1] opacity-60"
        />
        <img
          id="circle"
          src={circle}
          alt=""
          className="absolute left-[0%] top-[-20%] z-[1] opacity-60"
        />
        <div className="w-full h-full xl:max-w-[1280px] space-container-section z-[2]">
          <div className="h-full grid sm:grid-cols-2 gap-4 content-center">
            <div className="space-y-4">
              <button className="btn-secondary">Contate-nos</button>
              <h2 className="h2 text-primary">
                <strong>
                  Entre em contato para <br className="sm:block hidden" />
                  marcar sua primeira <br className="sm:block hidden" />{" "}
                  consulta
                </strong>
              </h2>
              <p className="p text-gray_red max-w-[450px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt integer elit cum sed etiam nisl arcu.
              </p>
              <p>
                Ao informar seus dados você concorda que nosso time entre em
                contato para prosseguir com o agendamento.
              </p>
              <p>
                Os dados inseridos no nosso formulário estão seguros, sendo
                usados somente para a solicitação de agendamento.
              </p>
              <p>Saiba mais sobre o uso de dados em Políticas de Privacidade</p>
              <div className="flex flex-col md:flex-row gap-y-3 gap-x-14">
                <a href="" className="flex gap-3 group">
                  <div>
                    <div className="bg-primary  group-hover:bg-secondary w-[44px] h-[44px] rounded-lg flex justify-center items-center hover:shadow-sm group-hover:scale-110 transition-all ease-in-out duration-300">
                      <BsFillTelephoneFill className="text-white text-2xl " />
                    </div>
                  </div>
                  <div className="flex justify-center items-center p text-gray_red group-r group-hover:text-secondary transition-colors ease-in-out duration-150">
                    (31) 99335-5485
                  </div>
                </a>
                <a href="" className="flex gap-3 group">
                  <div>
                    <div className="bg-primary  group-hover:bg-secondary w-[44px] h-[44px] rounded-lg flex justify-center items-center hover:shadow-sm group-hover:scale-110 transition-transform ease-in-out duration-200">
                      <GrMail className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="flex justify-center items-center p text-gray_red group-hover:text-secondary transition-colors ease-in-out duration-150">
                    contact@dentalic.com
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className="bg-white shadow-btn rounded-2xl p-10 z-[2]">
                <form className="flex flex-col gap-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block h5 text-black mb-2">Nome:</label>
                      <input
                        className="w-full sm:w-max placeholder:text-[18px] placeholder:text-gray_red px-4 py-6 outline-none rounded-xl border border-1 border-gray bg-white shadow-sm text-secondary font-bold h-10 hover:border-secondary placeholder:font-normal duration-300 transition-colors"
                        type="text"
                        placeholder="Nome Completo..."
                      />
                    </div>
                    <div>
                      <label className="block h5 text-black mb-2">
                        E-mail:
                      </label>
                      <input
                        className="w-full sm:w-max  placeholder:text-gray_red px-4 py-6 outline-none rounded-xl border border-1 border-gray bg-white shadow-sm text-secondary font-bold h-10 hover:border-secondary placeholder:font-normal duration-300 transition-colors"
                        type="text"
                        placeholder="Endereço de e-mail..."
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block h5 text-black mb-2">
                        Telefone:
                      </label>
                      <input
                        className="w-full sm:w-max  placeholder:text-gray_red px-4 py-6 outline-none rounded-xl border border-1 border-gray bg-white shadow-sm text-secondary font-bold h-10 hover:border-secondary placeholder:font-normal duration-300 transition-colors"
                        type="text"
                        placeholder="(31) 99754-8545..."
                      />
                    </div>
                    <div>
                      <label className="block h5 text-black mb-2">
                        Convênio:
                      </label>
                      <input
                        className="w-full sm:w-max  placeholder:text-gray_red px-4 py-6 outline-none rounded-xl border border-1 border-gray bg-white shadow-sm text-secondary font-bold h-10 hover:border-secondary placeholder:font-normal duration-300 transition-colors"
                        type="text"
                        placeholder="Nome Convênio..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="h5 text-black block mb-4">
                      Menssagem:
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="placeholder:text-[18px] placeholder:text-gray_red w-full outline-none border border-1 border-gray rounded-xl px-4 py-2"
                      placeholder="Descreva qual tipo de serviço você tem interesse..."
                    ></textarea>
                  </div>
                  <button className=" w-full sm:w-max bg-primary rounded-xl px-8 py-4 font-bold text-white">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
