import React from "react";
import ControlBtn from "./ControlBtn"
import SlideBtn from "./SlideBtn";

const Footer = () => {
    return (
        <section className="px-5 flex justify-between items-center  ">
            <div className="basis-3/12 ">
                <h2 className="text-white">9:45 | prn-xexf-vff </h2>
            </div>
            <div className="basis-3/6">
            <ControlBtn />
            </div>
            
            <div className="basis-3/12">
                <SlideBtn/>
            </div>
        </section>
    )
}

export default Footer