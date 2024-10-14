import React,{createContext,useState,useRef} from "react";

const SliderContext = createContext();

export const MyContext = ({children})=>{
    const [openSlider,setOpenSlider] = useState(false);
    const [activeButton, setActiveButton] = useState(null);
    const [enableAudio, setAudioEnable] = useState(true);
    const [enableVideo, setVideoEnable] = useState(true);
    const videoRef = useRef(null);
    const handleSlider = (type)=>{
       if(type===activeButton){
        
        setOpenSlider(prev=>!prev)
       }else{
       
        setOpenSlider(true)
       }

       setActiveButton(type)
    };

    const openCamera = async()=>{
        if(enableVideo){
            try {
                const stream = await navigator.mediaDevices.getUserMedia({video:true});
               
                videoRef.current.srcObject = stream;
                setVideoEnable(false)
            } catch (error) {
                console.error("Error accessing webcam: ", error);
            }
        }else{
            let stream = videoRef.current.srcObject;
            let tracks = stream.getTracks();
            console.log("stream",stream);
            tracks.forEach(track => track.stop());
            videoRef.current.srcObject = null;
            setVideoEnable(true);
        }
    }
     

    return(
        <SliderContext.Provider value={{openSlider,handleSlider,enableVideo,setVideoEnable,videoRef,openCamera}}>
            {children}
        </SliderContext.Provider>
    )
}

export {SliderContext}