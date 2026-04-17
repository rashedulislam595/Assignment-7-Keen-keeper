'use client'
import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendContext = createContext();

const FriendContextProvider = ({ children }) => {

    

    const [contactStatus, setContactStatus] = useState([])

    // status page control use State 
    const [callFriend, setCallFriend] = useState([]);
    const [textFriend, setTextFriend] = useState([]);
    const [videoFriend, setVideoFriend] = useState([]);

    const [sorting, setSorting] = useState("");

    useEffect(() => {
        if(sorting){
            if (sorting === "Call") {
            setContactStatus([...callFriend]);
        } else if (sorting === "Text") {
            setContactStatus([...textFriend]);
        } else if (sorting === "Video") {
            setContactStatus([...videoFriend]);
        }
        }
    }, [sorting]);

    const handleCallBtn = (friend) => {
        const { name } = friend
        const today = new Date().toDateString()
        const currentDate = today.slice(4)

        const contact = { name, currentDate, status: "Call" }

        setContactStatus([...contactStatus, contact]);
        setCallFriend([...callFriend, contact])
        toast.success(`Call with ${name}`, { theme: "dark", position: "top-center", })
    }
    const handleMassageBtn = (friend) => {
        const { name } = friend
        const today = new Date().toDateString()
        const currentDate = today.slice(4)

        const contact = { name, currentDate, status: "Text" }

        setContactStatus([...contactStatus, contact]);
        setTextFriend([...textFriend, contact])
        toast.success(`Massage with ${name}`, { theme: "dark", position: "top-center", })
    }
    const handleVideoBtn = (friend) => {
        const { name } = friend
        const today = new Date().toDateString()
        const currentDate = today.slice(4)

        const contact = { name, currentDate, status: "Video" }

        setContactStatus([...contactStatus, contact]);
        setVideoFriend([...videoFriend, contact])
        toast.success(`Video with ${name}`, { theme: "dark", position: "top-center", })
    }


    const data = {
        handleCallBtn,
        handleMassageBtn,
        handleVideoBtn,
        setContactStatus,
        contactStatus,
        callFriend,
        textFriend,
        videoFriend,
        setSorting,
    }

    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendContextProvider;