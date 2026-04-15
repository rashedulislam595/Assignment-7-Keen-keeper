import CheckInThreeBtn from '@/quick-check-in-btn/CheckInThreeBtn';

import Image from 'next/image';
import React from 'react';
import { PiArchiveBold } from 'react-icons/pi';
import { RiDeleteBin5Line, RiNotificationSnoozeLine } from 'react-icons/ri';

const FriendDetailsPage = async ({ params }) => {
    const { friendId } = await params;

    const res = await fetch("http://localhost:3000//data.json");
    const friends = await res.json();

    const friend = friends.find(friend => friend.id === parseInt(friendId))

    const statusStyles = {
        "Almost Due": "bg-[#EFAD44]",
        "On-Track": "bg-[#244D3F]",
        "Overdue": "bg-[#EF4444]"
    }
    const style = statusStyles[friend.status]

    const tag = friend.tags.map((tag, ind) =>
        <button key={ind} className='text-[#244D3F] font-medium text-sm bg-[#CBFADB] py-1.5 px-3 my-2 rounded-full mr-2'>{tag}</button>
    )
    console.log(friend)


    return (
        <div className='my-20 w-11/12 mx-auto inline md:flex gap-6 justify-center'>
            {/* friend info left column */}
            <div>
                <div className='p-6 text-center space-y-3 shadow-md mb-4'>
                    <Image src={friend.picture} alt={friend.name} width={100} height={100} className='rounded-full mx-auto' />

                    <div>
                        <h2 className='text-xl font-semibold text-[#1F2937] mb-2'>{friend.name}</h2>
                        <button className={`text-sm font-medium text-[#FFFFFF]  py-1.5 px-3.5 rounded-full ${style} mb-2`}>{friend.status}</button>
                        <div>
                            {tag}
                        </div>
                    </div>

                    <div>
                        <p className='text-[#64748B] font-medium italic mb-2'>{`"${friend.bio}"`}</p>
                        <p className='text-[#64748B] text-sm'>{friend.email}</p>
                    </div>

                </div>
                {/* 3 button */}
                <div>
                    <button className='btn text-[#1F2937]  w-full'><RiNotificationSnoozeLine />Snooze 2 weeks</button>
                    <button className='btn text-[#1F2937]  w-full my-2'><PiArchiveBold />Archive</button>
                    <button className='btn text-[#EF4444]  w-full'><RiDeleteBin5Line />Delete</button>
                </div>
            </div>
            {/* friend info right column */}
            <div className='space-y-6 mt-10 md:mt-0  '>
                <div className='flex gap-6'>
                    <div className='py-8 px-4 text-center shadow-sm'>
                        <h2 className='text-[#244D3F] text-3xl font-semibold'>{friend.days_since_contact}</h2>
                        <p className='text-lg text-[#64748B]'>Days Since Contact</p>
                    </div>
                    <div className='py-8 px-4 text-center shadow-sm'>
                        <h2 className='text-[#244D3F] text-3xl font-semibold'>{friend.goal}</h2>
                        <p className='text-lg text-[#64748B]'>Goal (Days)</p>
                    </div>
                    <div className='py-8 px-4 text-center shadow-sm'>
                        <h2 className='text-[#244D3F] text-3xl font-semibold'>{friend.next_due_date}</h2>
                        <p className='text-lg text-[#64748B]'>Next Due</p>
                    </div>
                </div>
                <div className='p-6 shadow-sm'>
                    <div className='flex justify-between'>
                        <h2 className='text-xl font-medium text-[#244D3F]'>Relationship Goal</h2>
                        <button className='btn text-[#1F2937]'>Edit</button>
                    </div>
                    <h2 className='text-lg text-[#64748B]'>Connect every <span className='text-[#1F2937] font-bold mt-4'>{friend.goal} days</span></h2>
                </div>
                {/* quick check in btn */}
                <div className='p-6 shadow-sm'>
                    <h2 className='text-xl font-medium text-[#244D3F]'>Quick Check-In</h2>

                    <div >
                        <CheckInThreeBtn friend={friend}/>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetailsPage;