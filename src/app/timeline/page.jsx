'use client'
import { FriendContext } from '@/context/FriendContextProvider';
import Image from 'next/image';
import React, { useContext } from 'react';
import callImage from '../../assets/call.png'
import massageImage from '../../assets/text.png'
import videoImage from '../../assets/video.png'

const TimelinePage = () => {
    const { contactStatus } = useContext(FriendContext)

    console.log(contactStatus)

    return (
        <div className='bg-[#F8FAFC]'>
            <div className='w-11/12 mx-auto my-20'>
                <h2 className='text-5xl font-bold text-[#1F2937]'>Timeline </h2>

                <div>
                    {
                        contactStatus.length === 0 ? <div className='py-20 bg-[#161212] text-center my-5 rounded-2xl'>
                            <h2 className='text-gray-400 text-3xl font-extrabold mb-1.5'>No interactions yet.</h2>
                            <p className='text-gray-500'>Go to friend details page and tap Call, Text, or Video.</p>
                        </div> :
                            contactStatus.map((friend, ind) => <div key={ind} className='my-6 bg-white p-4 rounded-lg border border-[#E9E9E9] flex gap-4 items-center'>
                                <div>
                                    {friend.status === "Call" ? <Image  src={callImage} alt={`${friend.name} image`} width={40} height={40} /> : friend.status === "Text"?<Image src={massageImage} alt={`${friend.name} image`} width={40} height={40} />:friend.status === "Video"?<Image src={videoImage} alt={`${friend.name} image`} width={40} height={40} />:""}
                                </div>
                                <div>
                                    <h2 className='text-[#244D3F] text-xl font-medium'>{friend.status} <span className='text-[#64748B] text-lg font-normal'>with {friend.name}</span></h2>
                                    <p className='text-[#64748B] font-medium'>{friend.currentDate}</p>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TimelinePage;