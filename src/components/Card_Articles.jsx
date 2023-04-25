
const Card_Articles = ({id,photo,title,sTitle,content,date,link}) => {
  return (
    <div id={id} className="w-full sm:w-1/3 shadow-b overflow-hidden rounded-xl border border-1 border-gray group hover:border hover:border-1 hover:border-secondary">
      <div className="relative overflow-hidden">
        <div className="px-4 py-3 bg-primary text-white rounded-xl text-base font-bold absolute right-[32px] bottom-[21px] z-[1]">
          {sTitle}
        </div>
        <img
          src={photo}
          alt=""
          className="w-full h-full group-hover:scale-110 ease-in-out duration-300"
        />
      </div>
      <div className="px-6 py-4 flex flex-col">
        <div className="flex flex-col gap-2 mb-5">
          <h3 className="font-bold text-2xl text-primary group-hover:text-secondary transition-colors duration-200">
            {title}
          </h3>
          <p className="font-normal text-lg text-gray_red">
            {" "}
            {content}
          </p>
        </div>
        <hr className="text-gray w-full self-center  mb-8" />
        <div className="card-wrapper-footer-inf flex justify-between items-center">
          <p className="font-bold text-base text-primary">{date}</p>
          <div>
            <a href={link} className="font-bold text-base text-secondary">
              Saber Mais
            </a>
            <div className="w-[0%] bg-secondary group-hover:w-[100%] h-[2px] transition-all duration-300 ease-in-out"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card_Articles;
