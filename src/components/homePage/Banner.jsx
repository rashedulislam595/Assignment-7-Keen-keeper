import { Plus } from 'lucide-react';
import React from 'react';

const Banner = () => {
    return (
        <div className="w-11/12 mx-auto bg-base-200 my-20">
            <div className="hero-content text-center mb-10">
                <div className="">
                    <h1 className="text-5xl font-bold text-[#1F2937]">Friends to keep close in your life</h1>
                    <p className="py-6 text-[#64748B]">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.
                    </p>
                    <button className="btn bg-[#244D3F]  text-[#FFFFFF]"><Plus className='w-4 h-4' />Add a Friend</button>
                </div>
            </div>
            {/* summary card */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                <div className='p-8 shadow-sm text-center'>
                    <h3 className='text-[#244D3F] font-semibold text-3xl'>10</h3>
                    <p className='text-lg text-[#64748B]'>Total Friends</p>
                </div>
                <div className='p-8 shadow-sm text-center'>
                    <h3 className='text-[#244D3F] font-semibold text-3xl'>3</h3>
                    <p className='text-lg text-[#64748B]'>On Track</p>
                </div>
                <div className='p-8 shadow-sm text-center'>
                    <h3 className='text-[#244D3F] font-semibold text-3xl'>6</h3>
                    <p className='text-lg text-[#64748B]'>Need Attention</p>
                </div>
                <div className='p-8 shadow-sm text-center'>
                    <h3 className='text-[#244D3F] font-semibold text-3xl'>12</h3>
                    <p className='text-lg text-[#64748B]'>Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;