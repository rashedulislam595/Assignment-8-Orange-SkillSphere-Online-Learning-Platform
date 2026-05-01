import React from 'react';
import { IoMdTrendingUp } from 'react-icons/io';

const TrendingSection = () => {
    return (
        <div className='w-11/12 mx-auto py-14'>
            <h2 className='text-4xl font-bold'>Trending Right Now</h2>

            {/* trending course 01 */}
            <div className='flex justify-between items-center border border-gray-300 hover:border-primary py-7 px-5 rounded-2xl mt-10 group cursor-pointer'>
                <div className='flex gap-5 items-center'>
                    <h2 className='text-2xl font-extrabold text-blue-700 opacity-40 group-hover:opacity-100'>01</h2>
                    <div>
                        <h2 className='text-xl font-medium'>Complete Web Development Bootcamp</h2>
                        <p className='text-[#11111196] font-medium'>12,400+ students this week</p>
                    </div>
                </div>
                <IoMdTrendingUp className='text-2xl text-blue-700 opacity-10 group-hover:opacity-100' />
            </div>
            {/* trending course 02 */}
            <div className='flex justify-between items-center border border-gray-300 hover:border-primary py-7 px-5 rounded-2xl mt-5 group cursor-pointer'>
                <div className='flex gap-5 items-center'>
                    <h2 className='text-2xl font-extrabold text-blue-700 opacity-40 group-hover:opacity-100'>02</h2>
                    <div>
                        <h2 className='text-xl font-medium'>AI & Machine Learning for Business</h2>
                        <p className='text-[#11111196] font-medium'>8,900+ students this week</p>
                    </div>
                </div>
                <IoMdTrendingUp className='text-2xl text-blue-700 opacity-10 group-hover:opacity-100' />
            </div>
            {/* trending course 03 */}
            <div className='flex justify-between items-center border border-gray-300 hover:border-primary py-7 px-5 rounded-2xl mt-5 group cursor-pointer'>
                <div className='flex gap-5 items-center'>
                    <h2 className='text-2xl font-extrabold text-blue-700 opacity-40 group-hover:opacity-100'>03</h2>
                    <div>
                        <h2 className='text-xl font-medium'>Python for Data Science</h2>
                        <p className='text-[#11111196] font-medium'>6,200+ students this week</p>
                    </div>
                </div>
                <IoMdTrendingUp className='text-2xl text-blue-700 opacity-10 group-hover:opacity-100' />
            </div>
        </div>
    );
};

export default TrendingSection;