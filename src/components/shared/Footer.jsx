import Link from 'next/link';
import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { RiFacebookBoxFill, RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-[#101727] text-neutral-content pt-28 pb-7">
                <div className='w-11/12 md:w-10/12 mx-auto '>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-12 mb-20'>
                        <div className='mr-5'>
                            <h2 className='text-3xl text-[#FFFFFF] font-bold mb-6'>SkillSphere</h2>
                            <p className='text-[#FFFFFF80]'>Premium learning platform for creators, developers, and professionals. Build skills smarter with expert-led courses.</p>
                        </div>
                        {/* Quick Links*/}
                        <div className=''>
                            <h2 className='text-xl text-[#FFFFFF] mb-6 font-medium'>Quick Links</h2>
                            <ul className='text-[#FFFFFF80] space-y-4'>
                                <li><Link href="/all-courses">Courses</Link></li>
                                <li><Link href="/">Instructors </Link></li>
                                <li><Link href="/">Certifications </Link></li>
                            </ul>
                        </div>
                        {/* Support */}
                        <div>
                            <h2 className='text-xl text-[#FFFFFF] mb-6 font-medium'>Support</h2>
                            <ul className='text-[#FFFFFF80] space-y-4'>
                                <li><Link href="/">Contact Us</Link></li>
                                <li><Link href="/">FAQ </Link></li>
                                <li><Link href="/">Help Center </Link></li>
                            </ul>
                        </div>
                        
                        {/* Social Links */}
                        <div>
                            <h2 className='text-xl text-[#FFFFFF] mb-6 font-medium'>Social Links</h2>
                            <ul className='text-[#FFFFFF80] space-y-4 flex gap-4'>
                                <li className='border w-8 h-8 bg-[#FFFFFF] flex justify-center items-center rounded-full'><a href=""> <AiFillInstagram className='text-black w-5 h-5' /> </a></li>
                                <li className='border w-8 h-8 bg-[#FFFFFF] flex justify-center items-center rounded-full'><a href=""> <RiFacebookBoxFill className='text-black w-5 h-5' /> </a></li>
                                <li className='border w-8 h-8 bg-[#FFFFFF] flex justify-center items-center rounded-full'><a href=""> <RiTwitterXFill className='text-black w-5 h-5' /> </a></li>


                            </ul>
                        </div>
                    </div>

                    <div className='pt-8 border-t border-t-[#FFFFFF20] flex justify-between w-full gap-10 sm:gap-0 '>
                        <p className='text-[#FFFFFF70]'>© 2026 SkillSphere. All rights reserved.</p>
                        <ul className='text-[#FFFFFF70] flex gap-5'>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms of Service</a></li>
                            <li><a href="">Cookies</a></li>
                        </ul>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Footer;