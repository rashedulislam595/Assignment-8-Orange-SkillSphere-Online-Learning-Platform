"use client"
import AllCourseCard from '@/components/ui/AllCourseCard';
import { GetAllCourses } from '@/lib/data';
import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const AllCoursesPage = () => {
    const [allCourses, setAllCourses] = useState([])
    const [searchingValue, setSearchingValue] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadCourses = async () => {
            const courses = await GetAllCourses();
            setAllCourses(courses);
            setLoading(false)
        };

        loadCourses();
    }, []);

    const handleSearch = () => {
        const exceptedCourse = allCourses.filter(course => course.title.toLowerCase().includes(searchingValue.toLowerCase()))
        setAllCourses(exceptedCourse)
        setSearchingValue("")
    }
    console.log(searchingValue)

    return (
        <div className='w-11/12 mx-auto my-14'>
            <h2 className='text-4xl font-bold'>Explore All Courses</h2>
            <div className='mt-2.5 text-center sm:flex justify-between gap-2'>
                <p className='text-left text-[#11111180]'>Elevate your expertise with industry-leading <br className='hidden sm:inline md:hidden' /> modules  designed by professionals.</p>

                {/* search field */}
                <div className='join mt-8 sm:mt-0'>
                    <label className="input rounded-l-lg">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" value={searchingValue} onChange={(e) => setSearchingValue(e.target.value)} required placeholder="Search courses by tittle" />
                    </label>
                    <button onClick={handleSearch} className="btn btn-primary join-item">Search</button>
                </div>

            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10 '>
                {
                    loading ? 
                    <div className='flex justify-center items-center sm:py-44 py-20 col-span-full '>
                        <span className="loading text-center loading-infinity loading-xl"></span>
                    </div> :
                        allCourses.length === 0 ? <div className='flex flex-col justify-center items-center py-20 sm:col-span-2 lg:col-span-3 border bg-base-300 rounded-2xl border-gray-300 shadow-sm p-5'>
                            <BiSearch className='text-4xl text-[#11111170]' />
                            <h3 className="text-3xl font-semibold text-[#11111190]">
                                No courses found
                            </h3>
                            <p className="text-gray-400 mt-2 max-w-md text-center">
                                We could not find any courses matching your search.
                                Try different keywords or explore all available courses.
                            </p>
                        </div> :
                            allCourses.map(course => <AllCourseCard key={course.id} course={course} />)
                }
            </div>
        </div>
    );
};

export default AllCoursesPage;