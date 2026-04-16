import React from 'react';
import logoxl from "../../assets/logo-xl.png"
import facebook from "../../assets/facebook.png"
import insta from "../../assets/instagram.png"
import x from "../../assets/twitter.png"

const Footer = () => {
    return (
        <section className='bg-[#244D3F] pt-11 pb-6  text-white space-y-3.5'>
            <div className='text-center space-y-6 border-b-2 px-2 pb-3.5'>
                <div className=''>
                    <div className='flex justify-center'>
                        <img src={logoxl} alt="" />
                    </div>
                    <p className='opacity-75 text-lg'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                </div>

                <div className='space-y-4 text-2xl font-bold'>
                    <h1>Social Links</h1>
                    <div className=' flex justify-center gap-8'>
                        <a href=""><img src={facebook} alt="" /></a>
                        <a href=""><img src={insta} alt="" /></a>
                        <a href=""><img src={x} alt="" /></a>
                    </div>

                </div>
            </div>

            <div className='flex justify-between px-3 pt-2.5 opacity-75'> 
                <p>© 2026 KeenKeeper. All rights reserved.</p>
                <div className='flex gap-4'>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Service</a>
                    <a href="">Cookies</a>
                </div>

            </div>

        </section>
    );
};

export default Footer;