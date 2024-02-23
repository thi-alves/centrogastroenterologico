import React from "react";

import { AiOutlineMail } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Card_Team = ({ photo, title, sTitle, content, crm }) => {
  return (
    <div className="max-w-[390px]  flex-none text-center">
      <div className="overflow-hidden rounded-[2.8rem] mb-4">
        <img
          src={photo}
          alt=""
          className="object-cover   hover:scale-110 ease-in-out duration-300"
        />
      </div>
      <h3 className="h3 text-primary text-center">
        <strong>{title}</strong>
        <p className="text-xs text-gray_red">{crm}</p>
      </h3>
      <p className="p font-bold text-primary mb-2">{sTitle}</p>
      <div className="flex text-secondary text-2xl gap-3 justify-center items-center">
        <FiLinkedin className="hover:text-primary hover:scale-125 duration-150 ease-in-out" />
        <FaWhatsapp className="hover:text-primary hover:scale-125 duration-150 ease-in-out" />
        <AiOutlineMail className="hover:text-primary hover:scale-125 duration-150 ease-in-out" />
      </div>

      <p className="p text-gray_red"></p>
    </div>
  );
};

export default Card_Team;
