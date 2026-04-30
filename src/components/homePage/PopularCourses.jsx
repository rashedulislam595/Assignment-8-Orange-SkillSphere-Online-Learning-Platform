import { GetAllCourses } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { MdOutlineSchedule, MdPersonOutline } from 'react-icons/md';
import PopularCard from '../ui/PopularCard';

const PopularCourses = async () => {
    const AllCourses = await GetAllCourses();
    const sorted = [...AllCourses].sort((a, b) => b.rating - a.rating);
    const courses = sorted.splice(0, 3)

    console.log(courses, "most popular")

    return (
        <div className=' w-11/12 mx-auto mb-20'>
            <div className='my-7 flex justify-between items-center'>
                <h2 className='text-4xl font-bold'>Popular Courses</h2>
                <Link href={'/all-courses'} className='flex gap-2 items-center text-blue-600 font-bold hover:text-blue-800'>View all courses <FaArrowRight /></Link>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3  md:justify-between items-center gap-5 '>
                {
                    courses.map(course => <PopularCard key={course.id} course={course}/>)
                }
            </div>
        </div>
    );
};

export default PopularCourses;