import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { MdOutlineSchedule, MdPersonOutline } from 'react-icons/md';

const PopularCard = ({ course }) => {
    const levelName = course.level;
    return (
        <div className=' rounded-xl hover:shadow-xl border border-gray-300 h-full flex flex-col hover:border-gray-400 group'>
            <div className='overflow-hidden rounded-t-xl '>
                <Image src={course.image} alt={course.title} width={400} height={200} className='w-full h-56 group-hover:scale-105 duration-500' />
            </div>
            <div className='mt-5 grow flex flex-col space-y-4 p-4'>
                <div className='grow flex items-center gap-6 '>
                    <button className={`px-3 ${levelName === "Beginner"?"bg-[#005338] text-white":levelName ==="Intermediate"?"bg-blue-200 text-blue-600":levelName === "Advanced"?"text-white bg-blue-600":""} text-sm font-bold rounded-full py-0.5 `}>{levelName}</button>
                    <p className='flex gap-1.5 items-center font-bold'><FaStar className='text-yellow-500' /> {course.rating}</p>
                </div>
                <div className='grow'>
                    <h2 className='text-xl font-bold'>{course.title}</h2>
                    <p className='flex items-center gap-2  text-[#464646b2] font-bold mt-2'><MdPersonOutline className=' text-[20px]' /> {course.instructor}</p>
                </div>
                <hr className='mt-2 mb-4 text-gray-300 font-bold' />
                <div className='grow flex justify-between items-center'>
                    <p className='flex items-center gap-1.5 text-[#c48670] '><MdOutlineSchedule className='text-lg' /> {`${course.duration} content`}</p>
                    <Link href={`course-details/${course.id}`} className='text-blue-600 text-sm font-bold'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default PopularCard;