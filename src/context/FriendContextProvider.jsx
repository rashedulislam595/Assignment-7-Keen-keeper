'use client'
import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendContext = createContext();

const FriendContextProvider = ({children}) => {

    const [contactStatus,setContactStatus] = useState([])

    const handleCallBtn = (friend)=>{
        const {name} = friend
        const today = new Date().toDateString()
        const currentDate = today.slice(4)
        // console.log(currentDate)
        
        const contact = {name,currentDate,status:"Call"}
        
        setContactStatus([...contactStatus,contact])
        toast.success(`Call with ${name}`,{theme: "dark",position: "top-center",})
    }
    const handleMassageBtn = (friend)=>{
        const {name} = friend
        const today = new Date().toDateString()
        const currentDate = today.slice(4)
        // console.log(currentDate)
        
        const contact = {name,currentDate,status:"Text"}
        
        setContactStatus([...contactStatus,contact])
        toast.success(`Massage with ${name}`,{theme: "dark",position: "top-center",})
    }
    const handleVideoBtn =(friend)=>{
        const {name} = friend
        const today = new Date().toDateString()
        const currentDate = today.slice(4)
        
        
        const contact = {name,currentDate,status:"Video"}
        
        setContactStatus([...contactStatus,contact])
        toast.success(`Video with ${name}`,{theme: "dark",position: "top-center",})
    }
    
    const data = {
        handleCallBtn,
        handleMassageBtn,
        handleVideoBtn,
        contactStatus
    }

    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendContextProvider;