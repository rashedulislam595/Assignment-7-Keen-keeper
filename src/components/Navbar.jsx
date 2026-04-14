'use client'
import { ChartLine, History, House } from 'lucide-react';
import Image from 'next/image';
import logoImg from '../assets/logo.png'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    
    return (
        <div className=' navbar bg-base-100 shadow-sm'>
            <div className=" w-11/12 mx-auto flex items-center gap-5 ">
                <div className="flex-1">
                    <Image src={logoImg} alt='keen-Keeper logo image'/>
                    
                </div>
                <div className="flex-none">
                    <ul className="flex gap-3 md:gap-5 px-1 text-[#64748B] font-medium items-center">
                        <li ><Link href='/' className={`flex gap-0.5 items-center ${pathName === "/"?"bg-[#244D3F]  text-[#FFFFFF] py-2.5 px-4 rounded-md":""}`}><House className='w-5' />Home</Link></li>
                        <li><Link href='/h' className={`flex gap-0.5 items-center ${pathName === "/h"?"bg-[#244D3F] text-[#FFFFFF] py-2.5 px-4 rounded-md":""}`}><History className='w-5' />Timeline</Link></li>
                        <li><Link href='/l' className={`flex gap-0.5 items-center ${pathName === "/l"?"bg-[#244D3F] text-[#FFFFFF] py-2.5 px-4 rounded-md":""}`}><ChartLine className='w-5' />Stats</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;