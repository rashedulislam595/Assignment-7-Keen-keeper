import React from 'react';
import FriendCard from './FriendCard';

const AllFriend = async() => {
    const res = await fetch("https://assignment-7-kin-keeper.vercel.app/data.json",{cache:"no-store"});
    const friends = await res.json();
    
    return (
        <div className='py-20 w-11/12 mx-auto'>
            <h2 className='text-2xl font-semibold text-[#1F2937] mb-4'>Your Friends</h2>
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
              {friends.map(friend => <FriendCard key={friend.id} friend={friend}/>)}  
            </div>
        </div>
    );
};

export default AllFriend;