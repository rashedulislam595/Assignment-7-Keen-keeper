'use client'
import { FriendContext } from '@/context/FriendContextProvider';
import { MessageSquareMore, PhoneCall, Video } from 'lucide-react';
import React, { useContext } from 'react';



const CheckInThreeBtn = ({friend}) => {

    const {handleVideoBtn,handleMassageBtn,handleCallBtn} = useContext(FriendContext)


    

    return (
        <div className='grid grid-cols-3 gap-3 sm:gap-6 md:gap-4 w-full mt-4'>
            <button onClick={()=>handleCallBtn(friend)} className="btn h-fit grid items-center justify-center rounded-lg p-4 space-y-1 w-full  text-lg" >
                <PhoneCall size={30} />Call
            </button>
            <button onClick={()=> handleMassageBtn(friend)} className="btn h-fit grid items-center justify-center rounded-lg p-4 space-y-1 w-full  text-lg">
                <MessageSquareMore size={30} /> Text
            </button>
            <button onClick={()=>handleVideoBtn(friend)} className="w-full btn h-fit grid items-center justify-center rounded-lg p-4 space-y-1  text-lg ">
                <Video size={30} /> Video
            </button>
        </div>
    );
};

export default CheckInThreeBtn;