import React, { useContext } from "react";
import {
    ExclamationCircleIcon,
    UsersIcon,
    ChatBubbleLeftEllipsisIcon,
    RectangleGroupIcon,
    LockClosedIcon
    
} from "@heroicons/react/24/outline";
import { SliderContext } from "../context/MyContext";
const SlideBtn = ()=>{

    const {openSlider,handleSlider} = useContext(SliderContext)
    return(
        <div className="flex  justify-end">
             <div className="flex rounded-full p-3 items-center  hover:bg-[#333537]"
                onClick={()=>{
                    handleSlider("exclamation")
                }}
             >
                <ExclamationCircleIcon className="h-7 w-7 text-white font-bold" />
            </div>
            <div className="flex rounded-full p-3 items-center  hover:bg-[#333537]"
             onClick={()=>{
                handleSlider("users")
            }}
            >
                <UsersIcon className="h-7 w-7 text-white font-bold" />
            </div>
            <div className="flex rounded-full p-3 items-center  hover:bg-[#333537]"
             onClick={()=>{
                handleSlider("chat")
            }}
            >
                <ChatBubbleLeftEllipsisIcon className="h-7 w-7 text-white font-bold" />
            </div>
            <div className="flex rounded-full p-3 items-center  hover:bg-[#333537]"
                 onClick={()=>{
                    handleSlider("rectangle")
                }}
            >
                <RectangleGroupIcon className="h-7 w-7 text-white font-bold" />
            </div>
            <div className="flex rounded-full p-3 items-center  hover:bg-[#333537]"
             onClick={()=>{
                handleSlider("lock")
            }}
            >
                <LockClosedIcon className="h-7 w-7 text-white font-bold" />
            </div>
        </div>
    )
}

export default SlideBtn