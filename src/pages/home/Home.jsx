import React, { useContext } from "react";
import Footer from "../../components/Footer";
import {
    XMarkIcon,

} from "@heroicons/react/24/outline";
import { SliderContext } from "../../context/MyContext";
const Home = () => {
    const{openSlider,enableVideo,videoRef} = useContext(SliderContext)
    return (
        <div className="h-screen">
            <section className={`h-[90%] p-5 flex gap-2 `}>
                <div className={ `${openSlider?"basis-3/4":"w-full"}   rounded-lg`}>
                    <div className="flex max-w-5xl mx-auto justify-center items-center  h-full">
                            {!enableVideo ?(
                                <video ref={videoRef} 
                                 autoPlay className="w-full h-full"
                                 style={{
                                    width: '100%',
                                    height: '100%',
                                    
                                   
                                  }}
                                   />
                                
                            ):(
                                <h1 className="bg-[#efcdcb] text-whte h-[150px] w-[150px] rounded-full flex items-center justify-center text-white">
                                    <span className="text-5xl">J</span>
                                </h1>
                            )
                        }
                           
                    </div>
                </div>
                <div className={`${openSlider?"basis-1/4 translate-x-2 delay-1000 duration-1000 ease-in ":"hidden"} rounded-lg bg-white py-5 px-5`}>
                    <div className="flex justify-between">
                        <h1 className="text-base">Meeting details</h1>
                        <span>
                            <XMarkIcon className="w-6 h-6 text-gray-800 cursor-pointer" />
                        </span>
                    </div>

                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home