import Image from 'next/image';
import React from 'react';
import JohnDoeImage from '@/assets/john.png'
import SophiaImage from '@/assets/Sophia.png'
import JamesImage from '@/assets/James.png'

const TopInstructors = () => {
    return (
        <div className='bg-base-300'>
            <div className='py-10 w-11/12 mx-auto '>
                <h2 className='text-4xl font-bold text-center'>Top Instructors</h2>
                <div className='grid sm:grid-cols-2  md:grid-cols-3 gap-6 my-10'>
                    {/* instructor john doe */}
                    <div className='px-4 py-8 bg-[#FFFFFF] shadow-sm border border-gray-300 rounded-xl hover:shadow-2xl hover:border-purple-300'>
                        <Image src={JohnDoeImage} alt='John Doe Image' width={100} height={100} className='rounded-full mx-auto hover:border-4 hover:border-blue-600 ' />
                        <div className='text-center my-5 space-y-2'>
                            <h2 className='text-xl font-bold'>John Doe</h2>
                            <p className='text-blue-600 font-bold'>Senior Web Developer</p>
                            <p className=''>10+ years of experience at leading tech companies in Silicon Valley.</p>
                        </div>
                    </div>
                    {/* instructor Sophia Davis */}
                    <div className='px-4 py-8 bg-[#FFFFFF] shadow-sm border border-gray-300 rounded-xl hover:shadow-2xl hover:border-purple-300'>
                        <Image src={SophiaImage} alt='John Doe Image' width={100} height={100} className='rounded-full mx-auto hover:border-4 hover:border-blue-600' />
                        <div className='text-center my-5 space-y-2'>
                            <h2 className='text-xl font-bold'>Sophia Davis</h2>
                            <p className='text-blue-600 font-bold'>Machine Learning Specialist</p>
                            <p className=''>Seasoned Machine Learning Specialist with 10+ years in advanced AI solutions.</p>
                        </div>
                    </div>
                    {/* instructor Sophia Davis */}
                    <div className='px-4 py-8 bg-[#FFFFFF] shadow-sm border border-gray-300 rounded-xl hover:shadow-2xl hover:border-purple-300'>
                        <Image src={JamesImage} alt='John Doe Image' width={100} height={100} className='rounded-full mx-auto hover:border-4 hover:border-blue-600' />
                        <div className='text-center my-5 space-y-2'>
                            <h2 className='text-xl font-bold'>James Wilson</h2>
                            <p className='text-blue-600 font-bold'>Flutter App Development Specialist</p>
                            <p className=''>Flutter Developer with 8+ years of experience building high-performance mobile apps.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopInstructors;