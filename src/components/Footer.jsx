import Image from 'next/image';
import React from 'react';
import LogoFooter from '../assets/logo-xl.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'


const Footer = () => {
    return (
        <div className='bg-[#244D3F] pt-20 pb-8'>
            <div className='text-center w-11/12 mx-auto'>
                <Image src={LogoFooter} alt='Keen-keeper footer image' className='mx-auto mb-4' />
                <p className='text-[#FFFFFF]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <div className='mt-6'>
                    <h5 className='text-[#FFFFFF] text-xl font-medium'>Social Links</h5>
                    <ul className='flex justify-center mt-4 gap-3'>
                        <li><a href=""><Image src={instagram} alt='instagram image' /></a></li>
                        <li><a href=""><Image src={facebook} alt='facebook image' /></a></li>
                        <li><a href=""><Image src={twitter} alt='twitter image' /></a></li>
                    </ul>
                </div>
            </div>
            <div className='w-11/12 mx-auto flex justify-between mt-10 border-t border-[#FAFAFA30] pt-8'>
                <p className='text-[#FAFAFA80]'><small>© 2026 KeenKeeper. All rights reserved.</small></p>
                <ul className='text-[#FAFAFA80] flex gap-4'>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms of Service</a></li>
                    <li><a href="">Cookies</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;