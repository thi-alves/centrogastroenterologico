import { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti"

const Faq = ({questions,answers}) => {
    const [expand, setExpand] = useState(false)
    const expandClass = expand ? 'display px-4 py-1 text-sm text-black': 'hidden';
    return (
        
            <div className="px-4 py-2 group">
                <div onClick={() => setExpand(!expand)} className="cursor-pointer select-none flex justify-between text-base font-[500] text-gray_red group-hover:text-secondary ">
                    {questions}
                    {
                        expand ?
                            <TiArrowSortedUp className="text-secondary bg-black/10 text-xl rounded-full" />
                            :
                            <TiArrowSortedDown className="text-secondary bg-black/10 text-xl rounded-full" />
                    }

                </div>
                <div className={expandClass}>
                    {answers}
                </div>
                <div className="w-full h-[1px] bg-black/10 mt-2"/>

            </div>

        
    )
}

export default Faq