'use client'
import { ChartLine, History, House } from 'lucide-react';
import Image from 'next/image';
import logoImg from '../assets/logo.png'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();

    const link = <>
        <li ><Link href='/' className={`flex gap-0.5 items-center ${pathName === "/" ? "bg-[#244D3F]  text-[#FFFFFF] py-2.5 px-4 rounded-md" : ""}`}><House className='w-5' />Home</Link></li>
        <li><Link href='/timeline' className={`flex gap-0.5 items-center ${pathName === "/timeline" ? "bg-[#244D3F] text-[#FFFFFF] py-2.5 px-4 rounded-md" : ""}`}><History className='w-5' />Timeline</Link></li>
        <li><Link href='/stats' className={`flex gap-0.5 items-center ${pathName === "/stats" ? "bg-[#244D3F] text-[#FFFFFF] py-2.5 px-4 rounded-md" : ""}`}><ChartLine className='w-5' />Stats</Link></li>
    </>

    return (
        <div className=' navbar bg-base-100 shadow-sm sticky top-0 z-10'>
            <div className='w-11/12 mx-auto flex justify-between items-center'>
                <div className=" navbar-start mx-auto flex items-center  ">
                    <div className="flex-1">
                        <Image src={logoImg} alt='keen-Keeper logo image' />

                    </div>

                </div>
                <div className='navbar-end'>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-100 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>

                    <div className="hidden sm:flex">
                        <ul className="flex gap-3 md:gap-5 px-1 text-[#64748B] font-medium items-center">
                            {link}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;