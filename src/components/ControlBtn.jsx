import React, { useContext, useState } from "react";
import { Switch } from '@headlessui/react'
import {
    BoltIcon,
    FaceSmileIcon,
    ArrowUpOnSquareIcon,
    HandRaisedIcon,
    EllipsisVerticalIcon,
    PhoneXMarkIcon,
    SpeakerXMarkIcon,
    SpeakerWaveIcon,
    VideoCameraIcon,
    VideoCameraSlashIcon
} from "@heroicons/react/24/outline";
import { SliderContext } from "../context/MyContext";
const ControlBtn = () => {
    const {enableVideo,setVideoEnable,openCamera} = useContext(SliderContext)
    const [enableAudio, setAudioEnable] = useState(true)
    
    return (
        <div className="flex gap-x-3 justify-center">
            <Switch
                checked={enableAudio}
                onChange={setAudioEnable}
                className={`${enableAudio ? 'bg-[#601410] rounded-lg' : 'bg-[#333537] rounded-full  '
                    } relative inline-flex h-12 w-[5rem] items-center `}
            >
                <span className="sr-only">Enable notifications</span>
                <span className={`${enableAudio ? 'translate-x-9 rounded-2xl bg-[#f9dedc]' : 'translate-x-9 rounded-full bg-[#565757]'
                    }  items-center h-12 w-12 transform   transition flex justify-center `}>
                        {
                            enableAudio?
                            <SpeakerXMarkIcon className="h-7 w-7 text-[#601410]"/>:
                            <SpeakerWaveIcon className="h-7 w-7 text-white"/>
                        }
                   
                </span>

            </Switch>
            <Switch
                checked={enableVideo}
                onChange={()=>{
                    setVideoEnable(prev=>!prev);
                    openCamera()
                }}
                
                className={`${enableVideo ? 'bg-[#601410] rounded-lg' : 'bg-[#333537] rounded-full'
                    } relative inline-flex h-12 w-[5rem]  `}
            >
                <span className="sr-only">Enable notifications</span>
                <span className={`${enableVideo ? 'translate-x-9 rounded-2xl bg-[#f9dedc]' : 'translate-x-9 rounded-full bg-[#565757]'
                    }  items-center h-12 w-12 transform   transition flex justify-center cursor-pointer`}>
                        {
                            enableVideo?
                            <VideoCameraSlashIcon className="h-7 w-7 text-[#601410]"/>:
                            <VideoCameraIcon className="h-7 w-7 text-white"/>
                        }
                   
                </span>
            </Switch>
           {/* a8c7fa */}
            <div className="flex rounded-3xl px-5 items-center bg-[#333537] cursor-pointer"
            
             >
                <BoltIcon className="h-6 w-6 text-white" />
            </div>
            <div className="flex rounded-3xl px-5 items-center bg-[#333537] cursor-pointer">
                <FaceSmileIcon className="h-6 w-6 text-white" />
            </div>
            <div className="flex rounded-3xl px-5 items-center bg-[#333537] cursor-pointer">
                <ArrowUpOnSquareIcon className="h-6 w-6 text-white" />
            </div>
            <div className="flex rounded-3xl px-5 items-center bg-[#333537] cursor-pointer">
                <HandRaisedIcon className="h-6 w-6 text-white" />
            </div>
            <div className="flex rounded-3xl px-1 items-center bg-[#333537] cursor-pointer">
                <EllipsisVerticalIcon className="h-6 w-6 text-white" />
            </div>
            <div className="flex rounded-3xl px-6 items-center bg-red-500 cursor-pointer">
                <PhoneXMarkIcon className="h-6 w-6 text-white" />
            </div>

        </div>
    )
}

export default ControlBtn