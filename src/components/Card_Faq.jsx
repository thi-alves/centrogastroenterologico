import { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const Faq = ({ questions, answers }) => {
  const [expand, setExpand] = useState(false);
  const expandClass = expand
    ? "display px-4 py-1 text-sm text-black"
    : "hidden";
  return (
    <div
      onClick={() => setExpand(!expand)}
      className="px-4 py-2 group cursor-pointer select-none z-[2]"
    >
      <div className="flex justify-between text-base font-[500] text-gray_red group-hover:text-secondary ">
        {questions}
        {expand ? (
          <div className="bg-black/10 text-xl rounded-full object-contain flex justify-center items-center w-max h-max">
            <TiArrowSortedUp className="text-secondary text-[1.5rem]" />
          </div>
        ) : (
          <div className="bg-black/10 text-xl rounded-full object-contain flex justify-center items-center w-max h-max">
            <TiArrowSortedDown className="text-secondary text-[1.5rem]" />
          </div>
        )}
      </div>
      <div className={expandClass}>{answers}</div>
      <div className="w-full h-[1px] bg-black/10 mt-2" />
    </div>
  );
};

export default Faq;
