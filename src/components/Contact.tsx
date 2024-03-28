import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { circle } from "../assets";
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { name_Insurance, team } from "../constants";
import React, { useState } from "react";
import { insertMaskInPhone } from "../functions/phone";

const handlePhoneChange = (e) => {
  const { value } = e.target;
  e.target.value = insertMaskInPhone(value);
};

const onSubmitFormSchema = z.object({
  nome: z
    .string()
    .nonempty("O nome é obrigatório")
    .transform((nome) => {
      return nome
        .trim()
        .split(" ")
        .map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(" ");
    }),
  email: z
    .string()
    .email("Digite um email válido")
    .nonempty("O email é obrigatório")
    .toLowerCase(),
  telefone: z
    .string()
    .min(15, "Este campo deve ter no mínimo 15 caracteres.")
    .refine((value) => /^\d+$/.test(value.replace(/[() -]/g, "")), {
      message: "Este campo deve conter apenas números.",
    })
    .transform((value) => {
      return value.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4");
    }),
  convenio: z.string().nonempty("Este campo não pode ser vazio."),
  rede: z.string(),
  carteirinha: z
    .string()
    .refine((value) => /^\d+$/.test(value.replace(/[() -]/g, "")), {
      message: "Este campo deve conter apenas números.",
    }),
  agree: z.boolean().refine((value) => value === true, {
    message: "Você deve concordar com os termos.",
  }),
  private: z.string().default("Não"),
  medico: z.string(),
  exame: z.string(),
});

type onSubmitFormSchema = z.infer<typeof onSubmitFormSchema>;

const Contact = () => {
  const inputStyle =
    "w-full placeholder:text-gray-200/50 p-4 outline-none rounded-xl border border-1 border-gray bg-gray/20 shadow-sm hover:border-secondary placeholder:font-normal duration-300 transition-colors";

  const {
    register,
    handleSubmit,
    watch,
    formState,
    formState: { errors },
  } = useForm<onSubmitFormSchema>({
    resolver: zodResolver(onSubmitFormSchema),
  });
  const checkAgree = watch("agree");
  const checkPrivate = watch("private");
  const phoneNumbers = ["5531986058783", "5531986110299"];
  function onSubmit(data: any) {
    return window.location.replace(
      "https://wa.me/" +
        phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)] +
        "?text=" +
        "*Nome:* " +
        data.nome +
        "%0A" +
        "|" +
        "%0A" +
        "*E-Mail:* " +
        data.email +
        "%0A" +
        "|" +
        "%0A" +
        "*Telefone:* " +
        data.telefone +
        "%0A" +
        "|" +
        "%0A" +
        "*Convênio:* " +
        data.convenio +
        "%0A" +
        "|" +
        "%0A" +
        "*Rede:* " +
        data.rede +
        "%0A" +
        "|" +
        "%0A" +
        "*Carteirinha:* " +
        data.carteirinha +
        "%0A" +
        "|" +
        "%0A" +
        "*Médico:* " +
        data.medico +
        "%0A" +
        "|" +
        "%0A" +
        "*Exame:* " +
        data.exame
    );
  }

  return (
    <section
      id="contact"
      className="w-full bg-secondary/[4%] shadow-sm relative overflow-hidden py-10"
    >
      <div className=" w-full h-full">
        <img
          id="circle"
          src={circle}
          alt=""
          className="absolute  right-0 bottom-0  -z-0 opacity-15 "
        />
        <img
          id="circle"
          src={circle}
          alt=""
          className="absolute   left-0 top-0  -z-0 opacity-15"
        />
      </div>
      <div className="max-container padding-container flex flex-col gap-x-20 gap-y-10 z-10">
        <div className="">
          <div className="flex flex-1 flex-col flexCenter gap-4 text-center">
            <div className="btn-secondary w-max select-none">Contate-nos</div>
            <h2 className="h2 text-primary self-start">
              <strong>Agendar consulta:</strong>
            </h2>
            <div className="w-full flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-1/2 text-left space-y-2 p">
                <p className="">
                  Agendar uma consulta conosco é fácil basta entrar em contato
                  com a nossa equipe através do telefone ou formulário de
                  contato. Teremos prazer em agendar uma consulta que atenda às
                  suas necessidades e horários disponíveis.
                </p>
                <p>
                  <span className="text-secondary">•</span> Ao informar seus
                  dados você concorda que nosso time entre em contato para
                  prosseguir com o agendamento.
                </p>
                <p>
                  <span className="text-secondary">•</span> Os dados inseridos
                  no nosso formulário não são salvos, sendo usados somente para
                  a solicitação de agendamento.
                </p>
                <p>
                  Saiba mais sobre o uso de dados em{" "}
                  <span className="text-secondary font-medium cursor-pointer">
                    Políticas de Privacidade
                  </span>
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div
                  id="Telefones_Centro_Gastroentereologico_BH"
                  className="flex flex-wrap gap-x-10 md:gap-x-6 lg:gap-x-16 gap-y-4 "
                >
                  <div className="text-start p space-y-2">
                    <p>
                      <span className="text-secondary">•</span> O seu
                      agendamento será confirmado após validação com a nossa
                      atendente via WhatsApp.{" "}
                    </p>
                    <p>
                      <span className="text-secondary font-extrabold">
                        Aguarde nossa confirmação!
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-x-10 md:gap-x-6 lg:gap-x-16 gap-y-4 ">
                    <div className="flex gap-2 group">
                      <div className="bg-primary  group-hover:bg-secondary w-12 h-12 rounded-lg flex justify-center items-center hover:shadow-sm group-hover:scale-110 transition-all ease-in-out duration-300">
                        <BsFillTelephoneFill className="text-white text-2xl" />
                      </div>
                      <div className="flex justify-center items-center p text-gray_red  group-hover:text-secondary transition-colors ease-in-out duration-150">
                        <strong>&nbsp;(31) 3263-2000</strong>
                      </div>
                    </div>

                    <div className="flex gap-2 group">
                      <div className="bg-primary  group-hover:bg-secondary w-12 h-12 rounded-lg flex justify-center items-center hover:shadow-sm group-hover:scale-110 transition-all ease-in-out duration-300">
                        <BsFillTelephoneFill className="text-white text-2xl " />
                      </div>
                      <div className="flex justify-center items-center p text-gray_red  group-hover:text-secondary transition-colors ease-in-out duration-150">
                        <strong>&nbsp;(31) 3263-2001</strong>
                      </div>
                    </div>

                    <div className="flex gap-2 group">
                      <div className="bg-primary  group-hover:bg-secondary w-12 h-12 rounded-lg flex justify-center items-center hover:shadow-sm group-hover:scale-110 transition-all ease-in-out duration-300">
                        <BsWhatsapp className="text-white text-2xl " />
                      </div>
                      <div className="flex justify-center items-center p text-gray_red  group-hover:text-secondary transition-colors ease-in-out duration-150">
                        <strong>(31) 98611-0299</strong>
                      </div>
                    </div>

                    <div className="flex gap-2 group">
                      <div className="bg-primary  group-hover:bg-secondary w-12 h-12 rounded-lg flex justify-center items-center hover:shadow-sm group-hover:scale-110 transition-all ease-in-out duration-300">
                        <BsWhatsapp className="text-white text-2xl " />
                      </div>
                      <div className="flex justify-center items-center p text-gray_red  group-hover:text-secondary transition-colors ease-in-out duration-150">
                        <strong>(31) 98605-8783</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Segunda Parte */}
        <div className="bg-white shadow-btn rounded-2xl p-4 z-10">
          <div className="w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              action=""
              className=" flex flex-wrap"
            >
              <div className="w-full md:w-1/2 lg:w-1/3">
                <div className="bg-gray-200 p-4">
                  <label className="block h5 text-black mb-2">Nome:</label>
                  <input
                    type="text"
                    className={inputStyle}
                    {...register("nome")}
                    placeholder="Nome e sobrenome"
                  />
                  {errors.nome && (
                    <span className="font-xs text-secondary pl-4 ">
                      {errors.nome.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <div className="bg-gray-200 p-4">
                  <label className="block h5 text-black mb-2">Email:</label>
                  <input
                    type="text"
                    className={inputStyle}
                    {...register("email")}
                    placeholder="exemplo@exemplo.com"
                  />
                  {errors.email && (
                    <span className="font-xs text-secondary pl-4 ">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <div className="bg-gray-200 p-4">
                  <label className="block h5 text-black mb-2">Telefone:</label>
                  <input
                    maxLength={16}
                    type="tel"
                    inputMode="numeric"
                    autoComplete="phone"
                    id="telefone"
                    className={inputStyle}
                    {...register("telefone")}
                    onChange={handlePhoneChange}
                    placeholder="(xx) x xxxx-xxxx"
                  />
                  {errors.telefone && (
                    <span className="font-xs text-secondary pl-4 ">
                      {errors.telefone.message}
                    </span>
                  )}
                </div>
              </div>
              {checkPrivate === "Não" ? (
                <>
                  <div className="w-full md:w-1/2 lg:w-1/3">
                    <div className="bg-gray-200 p-4">
                      <label className="block h5 text-black mb-2">
                        Convênio:
                      </label>
                      <select className={inputStyle} {...register("convenio")}>
                        <option value="" disabled selected hidden>
                          Escolha um convênio.
                        </option>
                        {name_Insurance.map((insurance, index) => (
                          <option value={insurance} key={index}>
                            {insurance}
                          </option>
                        ))}
                      </select>
                      {errors.convenio && (
                        <span className="font-xs text-secondary pl-4 ">
                          {errors.convenio.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3">
                    <div className="bg-gray-200 p-4">
                      <label className="block h5 text-black mb-2">Rede:</label>
                      <input
                        type="text"
                        className={inputStyle}
                        {...register("rede")}
                        placeholder="Rede de atendimento."
                      />
                      {errors.rede && (
                        <span className="font-xs text-secondary pl-4 ">
                          {errors.rede.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3">
                    <div className="bg-gray-200 p-4">
                      <label className="block h5 text-black mb-2">
                        N° Carteirinha:
                      </label>
                      <input
                        type="text"
                        className={inputStyle}
                        {...register("carteirinha")}
                        placeholder="Ref..."
                      />
                      {errors.carteirinha && (
                        <span className="font-xs text-secondary pl-4 ">
                          {errors.carteirinha.message}
                        </span>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full  md:w-1/2 lg:w-1/3">
                    <div className="bg-gray-200 p-4">
                      <label className="block h5 text-black mb-2">
                        Medico:
                      </label>
                      <select className={inputStyle} {...register("medico")}>
                        <option>Não</option>
                        <option>Sim</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full  md:w-1/2 lg:w-1/3">
                    <div className="bg-gray-200 p-4">
                      <label className="block h5 text-black mb-2">Exame:</label>
                      <select className={inputStyle} {...register("exame")}>
                        <option>Não</option>
                        <option>Sim</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              <div className="w-full  md:w-1/2 lg:w-1/3">
                <div className="bg-gray-200 p-4">
                  <label className="block h5 text-black mb-2">
                    Particular?
                  </label>
                  <select className={inputStyle} {...register("private")}>
                    <option defaultValue="Não">Não</option>
                    <option>Sim</option>
                  </select>
                </div>
              </div>
              <div className="w-full p-4 flex gap-2 items-center justify-between">
                <div className="">
                  <label className="flex cursor-pointer select-none items-center">
                    <div className="relative">
                      <input
                        type="checkbox"
                        className="sr-only"
                        {...register("agree", { required: true })}
                      />
                      {checkAgree ? (
                        <>
                          <div className="block h-8 w-14 rounded-full transition-all duration-200 bg-secondary"></div>
                          <div className="dot absolute right-1  top-1 h-6 w-6 rounded-full bg-white transition-all duration-1000"></div>
                        </>
                      ) : (
                        <>
                          <div className="block h-8 w-14 rounded-full transition-all duration-200 bg-[#E5E7EB]"></div>
                          <div className="dot absolute left-1  top-1 h-6 w-6 rounded-full bg-white transition-all duration-1000"></div>
                        </>
                      )}
                    </div>

                    <p className="ml-4 p">
                      Estou ciente de que devo aguardar retorno via WhatsApp.{" "}
                    </p>
                  </label>
                  {errors.agree && (
                    <span className="font-xs text-secondary pl-4 ">
                      {errors.agree.message}
                    </span>
                  )}
                </div>

                <div className="self-center">
                  <button
                    type="submit"
                    className="flex justify-center items-center gap-2 w-full md:w-max  rounded-xl px-8 py-4 font-bold text-white bg-primary shadow-btn"
                  >
                    Agendar hórario
                    <BsWhatsapp className="text-xl" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    // <div className="">
    //   <form onSubmit={handleSubmit(onSubmit)} action="">
    //     <label htmlFor="">Nome:</label>
    //     <input type="text" {...register("nome")} />
    //     {errors.nome && <span>{errors.nome.message}</span>}

    //     <label htmlFor="">Email:</label>
    //     <input type="email" {...register("email")} />
    //     {errors.email && <span>{errors.email.message}</span>}

    //     <label htmlFor="">Telefone:</label>
    //     <input type="text" {...register("telefone")} />
    //     {errors.telefone && <span>{errors.telefone.message}</span>}

    //     <label htmlFor="">Aceito os termos:</label>
    //     <input type="checkbox" {...register("agree", { required: true })} />
    //     {errors.agree && <span>{errors.agree.message}</span>}

    //     <button type="submit" disabled={!formState.isValid}>
    //       Enviar
    //     </button>
    //   </form>
    // </div>
  );
};

export default Contact;
