"use client"
import { FriendContext } from '@/context/FriendContextProvider';
import React, { useContext } from 'react';
import { BiError, BiSolidError } from 'react-icons/bi';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const StatsPage = () => {
    const { videoFriend, textFriend, callFriend, contactStatus } = useContext(FriendContext);
    // console.log(callFriend ,"call friend")

    const data = [
        { name: "Text", value: textFriend.length, fill: "#7f37f5" },
        { name: "Call", value: callFriend.length, fill: "#244d3f" },
        { name: "Video", value: videoFriend.length, fill: "#37a163" },

    ]
    return (
        <div className=' bg-[#F8FAFC] '>
            <div className='w-11/12  sm:w-9/12 mx-auto my-20'>
                <h2 className='text-5xl font-bold text-[#1F2937] mb-6'>Friendship Analytics</h2>
                {
                    contactStatus.length === 0 ?
                        <div className='border py-20 text-center rounded-2xl bg-[#111111cb]'>
                            <BiError className='w-44 h-28 text-yellow-400 mx-auto' />
                            
                            <p className='mb-10 font-medium text-[#b9b9bbcc]'>No interactions available. Please add interactions to see the data on the chart.</p>
                        </div> :
                        <div className='border p-8 bg-[#FFFFFF] rounded-lg border-[#FFFFFF] drop-shadow-lg'>
                            <h3 className='text-xl font-medium text-[#244D3F] mb-6'>By Interaction Type</h3>
                            <PieChart style={{ width: '100%', maxWidth: '300px', maxHeight: '80vh', margin: 'auto', aspectRatio: 1 }} responsive>
                                <Pie
                                    data={data}
                                    innerRadius="80%"
                                    outerRadius="100%"
                                    // Corner radius is the rounded edge of each pie slice
                                    cornerRadius="50%"
                                    fill="#8884d8"
                                    // padding angle is the gap between each pie slice
                                    paddingAngle={5}
                                    dataKey="value"
                                    isAnimationActive={true}
                                />
                                <Legend />
                                <Tooltip />
                            </PieChart>
                        </div>
                }

            </div>
        </div>
    );
};

export default StatsPage;