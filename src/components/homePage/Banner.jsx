import { Plus } from 'lucide-react';
import React from 'react';

const Banner = () => {
    return (
        <div className="bg-base-200 mt-20 mb-10">
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="text-5xl font-bold text-[#1F2937]">Friends to keep close in your life</h1>
                    <p className="py-6 text-[#64748B]">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.
                    </p>
                    <button className="btn bg-[#244D3F]  text-[#FFFFFF]"><Plus className='w-4 h-4' />Add a Friend</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;