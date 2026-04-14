import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendCard = ({friend}) => {

    const tag = friend.tags.map((tag,ind) => 
    <button key={ind} className='text-[#244D3F] font-medium text-sm bg-[#CBFADB] py-1.5 px-3 my-2 rounded-full mr-2'>{tag}</button>
    )

    const statusStyles = {
        "Almost Due": "bg-[#EFAD44]",
        "On-Track" : "bg-[#244D3F]",
        "Overdue" : "bg-[#EF4444]"
    }
    const style = statusStyles[friend.status]

    return (
        <Link href={`/friend-details/${friend.id}`} className='p-6 text-center  shadow-md  rounded-lg'>
            <div className='mb-3'>
                <Image src={friend.picture} alt={friend.name} width={100} height={100} className='rounded-full mx-auto'/>
            </div>
            <div>
                <h2 className='text-xl font-semibold text-[#1F2937] mb-2'>{friend.name}</h2>
                <p className='text-[#64748B] text-sm'>{friend.days_since_contact}d ago</p>
                <div>
                    {tag}
                </div>
                <button className={`text-sm font-medium text-[#FFFFFF]  py-1.5 px-3.5 rounded-full ${style}`}>{friend.status}</button>
            </div>
            
        </Link>
    );
};

export default FriendCard;