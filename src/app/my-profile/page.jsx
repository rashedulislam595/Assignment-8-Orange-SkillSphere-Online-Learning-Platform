'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';
import userImage from '@/assets/user.png'
import { MdOutlineWorkspacePremium } from 'react-icons/md';
import { FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa';
import { CiSettings } from 'react-icons/ci';
import UpdateUser from '@/components/ui/UpdateUser';

const MyProfilePage = () => {
    const { data: session, isPending } = authClient.useSession()
    if (isPending) {
        return <p>loading...</p>
    }
    const users = session?.user;
    // console.log(users)

    return (
        <div className='bg-base-300'>
            <div className='py-10 w-11/12 mx-auto'>
                <div className='bg-[#FFFFFF] p-4 rounded-lg flex justify-between items-center flex-wrap gap-8'>
                    <div className='flex gap-3 items-center sm:gap-4 '>
                        <Image src={users?.image || userImage} alt='profile image' width={100} height={100} className='rounded-2xl' />
                        <div>
                            <h2 className='text-xl sm:text-2xl md:text-3xl font-bold'>{users?.name}</h2>
                            <p className='mt-1.5 font-medium text-[#11111190]'>{users?.email}</p>
                            <div className='mt-1.5 flex gap-4 items-center flex-wrap'>
                                <button className='text-primary bg-blue-200 py-1.5 px-3 rounded-full font-bold text-xs flex gap-1.5 items-center'><MdOutlineWorkspacePremium className='text-[16px]' /> PRO MEMBER</button>
                                <button className='text-[#2c5d3880] bg-[#2c5d3830] py-1.5 px-3 rounded-full font-bold text-xs flex gap-1.5 items-center'>{users?.emailVerified ? <><FaRegCheckCircle className='text-[16px] ' /> VERIFIED</> : <><FaRegTimesCircle className='text-[16px]' /> UNVERIFIED</>}</button>
                            </div>
                        </div>
                    </div>
                    {/* update info */}
                    <div className='mx-auto md:mx-0'>
                        <UpdateUser />
                    </div>
                </div>
                {/* static design */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 md:gap-10 gap-5 my-5'>
                    <div className='rounded-xl text-center py-5 bg-[#11111130] shadow-sm'>
                        <p className='font-extrabold text-xl text-primary opacity-70'>3</p>
                        <p className='text-[#11111190] font-medium'>Enrolled</p>
                    </div>

                    <div className='rounded-xl text-center py-5 bg-[#11111130] shadow-sm'>
                        <p className='font-extrabold text-xl text-primary opacity-70'>1</p>
                        <p className='text-[#11111190] font-medium'>Completed</p>
                    </div>

                    <div className='rounded-xl text-center py-5 bg-[#11111130] shadow-sm'>
                        <p className='font-extrabold text-xl text-primary opacity-70'>45h</p>
                        <p className='text-[#11111190] font-medium'>Learning time</p>
                    </div>
                </div>

                <div className='mt-5 '>
                    <h2 className='text-2xl font-bold'>My Courses</h2>

                    {/* curriculum 01 */}
                    <div className='sm:flex justify-between items-center border border-gray-300 hover:border-primary py-4 px-5 rounded-2xl mt-5 group cursor-pointer'>
                        <div className='flex gap-5 items-center'>
                            <Image src={'https://images.unsplash.com/photo-1498050108023-c5249f4df085'} alt='course image' width={80} height={80} className='rounded-xl'/>
                            <div>
                                <h2 className='text-lg font-medium'>Complete Web Development</h2>
                                <p className='text-[#11111190] '>Build modern, responsive websites and web apps.</p>
                            </div>
                        </div>
                        <div className='text-center sm:text-left mt-5 sm:mt-0'>
                            <button className='btn btn-neutral btn-soft'>Resume</button>
                        </div>
                    </div>

                    <div className='sm:flex justify-between items-center border border-gray-300 hover:border-primary py-4 px-5 rounded-2xl mt-5 group cursor-pointer'>
                        <div className='flex gap-5 items-center'>
                            <Image src={'https://images.unsplash.com/photo-1545235617-9465d2a55698'} alt='course image' width={80} height={80} className='rounded-xl'/>
                            <div>
                                <h2 className='text-lg font-medium'>UI/UX Design Fundamentals</h2>
                                <p className='text-[#11111190] '>Build a strong foundation in UI/UX design and usability.</p>
                            </div>
                        </div>
                        <div className='text-center sm:text-left mt-5 sm:mt-0'>
                            <button className='btn btn-neutral btn-soft'>Resume</button>
                        </div>
                    </div>
                    {/* 03 */}
                    <div className='sm:flex justify-between items-center border border-gray-300 hover:border-primary py-4 px-5 rounded-2xl mt-5 group cursor-pointer'>
                        <div className='flex gap-5 items-center'>
                            <Image src={'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c'} alt='course image' width={80} height={80} className='rounded-xl'/>
                            <div>
                                <h2 className='text-lg font-medium'>Flutter App Development</h2>
                                <p className='text-[#11111190] '>Master Flutter to build fast, scalable mobile apps.</p>
                            </div>
                        </div>
                        <div className='text-center sm:text-left mt-5 sm:mt-0'>
                            <button className='btn btn-neutral btn-soft'>Resume</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default MyProfilePage;