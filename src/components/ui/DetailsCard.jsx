import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { CiLock } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { MdCheckCircle, MdExpandMore, MdLanguage, MdOutlineSchedule, MdOutlineSignalCellularAlt, MdOutlineWorkspacePremium, MdPersonOutline } from 'react-icons/md';

const DetailsCard = ({ course }) => {
    const levelName = course.level;
    return (
        <div className='my-20'>

            <div>
                <button className='bg-primary text-white py-1.5 px-4 rounded-full text-sm font-bold'>{course.category}</button>
                <h2 className='text-4xl font-bold my-2'>{course.title}</h2>
                <div className='flex justify-between items-center gap-5'>
                    <p className='flex items-center gap-2  text-[#464646b2] font-bold mt-2'><MdPersonOutline className=' text-[20px]' /> {course.instructor}</p>
                    <p className='flex gap-1.5 items-center font-bold'><FaStar className='text-yellow-500' /> {course.rating}</p>
                </div>
            </div>
            <div className='flex gap-10 mt-5 flex-wrap justify-center '>
                <div className='group overflow-hidden rounded-2xl'>
                    <Image src={course.image} alt={course.title} width={600} height={400} className='  group-hover:scale-105 duration-500 rounded-2xl' />
                </div>

                {/* Enroll Card */}
                <div className=' py-8 px-5 border rounded-lg border-gray-400  '>
                    <div className='flex justify-between gap-28'>
                        <div className='flex gap-2 items-center'>
                            <h2 className='text-3xl font-extrabold'>$499</h2>
                            <p className='line-through font-medium text-gray-500'>$850</p>
                        </div>
                        <button className='bg-gray-400 py-1.5 px-4 rounded-lg font-bold text-sm'>40% OFF</button>
                    </div>
                    <button className='btn btn-primary w-full my-4'>Enroll in Courses</button>
                    <button className='btn btn-primary w-full btn-soft  border-primary'>Schedule a Call</button>

                    <p className='text-sm text-center my-7 text-[#11111190]'>30-Day Money-Back Guarantee</p>
                    <div>
                        <p className='mb-2 '>This course includes:</p>
                        <ul>
                            <li className='flex text-sm items-center gap-2 text-[#11111190]'><MdCheckCircle className='text-[#187c5c]' />Lifetime access to materials</li>
                            <li className='flex text-sm items-center gap-2 text-[#11111190]'><MdCheckCircle className='text-[#187c5c]' />15+ Downloadable templates</li>
                            <li className='flex text-sm items-center gap-2 text-[#11111190]'><MdCheckCircle className='text-[#187c5c]' />Private Slack community</li>
                            <li className='flex text-sm items-center gap-2 text-[#11111190]'><MdCheckCircle className='text-[#187c5c]' />Weekly 1:1 mentorship sessions</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='p-8 rounded-xl hover:shadow-xl border border-gray-300 h-full flex flex-col hover:border-gray-400 mt-10'>
                <h2 className='text-2xl font-bold'>Course Description</h2>
                <p className='text-[#11111190] mt-5'>{course.description}</p>

                {/* Curriculum section */}
                <div className='mt-5 '>
                    <div className='flex justify-between items-center gap-5'>
                        <h2 className='text-2xl font-bold'>Course Curriculum</h2>
                        <p className='text-primary text-sm font-bold'>14 Modules • 82 Lessons</p>
                    </div>

                    {/* curriculum 01 */}
                    <div className='flex justify-between items-center border border-gray-300 hover:border-primary py-4 px-5 rounded-2xl mt-5 group cursor-pointer'>
                        <div className='flex gap-5 items-center'>
                            <h2 className='text-2xl font-bold text-blue-700 opacity-40 group-hover:opacity-100'>01</h2>
                            <div>
                                <h2 className='text-lg font-medium'>Foundations of Strategic Design</h2>
                                <p className='text-[#11111190] '>Principles, mental models, and stakeholder alignment.</p>
                            </div>
                        </div>
                        <MdExpandMore className='text-2xl  group-hover:text-primary' />
                    </div>
                    {/* curriculum 02 */}
                    <div className='flex justify-between items-center border border-gray-300 hover:border-primary py-4 px-5 rounded-2xl mt-5 group cursor-pointer'>
                        <div className='flex gap-5 items-center'>
                            <h2 className='text-2xl font-bold text-blue-700 opacity-40 group-hover:opacity-100'>02</h2>
                            <div>
                                <h2 className='text-lg font-medium'>Advanced Information Architecture</h2>
                                <p className='text-[#11111190] '>Taxonomies, mapping user flows, and complex navigation.</p>
                            </div>
                        </div>
                        <MdExpandMore className='text-2xl  group-hover:text-primary' />
                    </div>
                    {/* curriculum 03 */}
                    <div className='flex justify-between items-center border border-gray-300 hover:border-primary py-4 px-5 rounded-2xl mt-5 group cursor-pointer'>
                        <div className='flex gap-5 items-center'>
                            <h2 className='text-2xl font-bold text-blue-700 opacity-40 group-hover:opacity-100'>03</h2>
                            <div>
                                <h2 className='text-lg font-medium'>Building Scalable Design Systems</h2>
                                <p className='text-[#11111190] '>Tokens, components, and documentation workflows..</p>
                            </div>
                        </div>
                        <CiLock className='text-2xl group-hover:text-primary' />
                    </div>
                    {/* curriculum 04 */}
                    <div className='flex justify-between items-center border border-gray-300 hover:border-primary py-4 px-5 rounded-2xl mt-5 group cursor-pointer'>
                        <div className='flex gap-5 items-center'>
                            <h2 className='text-2xl font-bold text-blue-700 opacity-40 group-hover:opacity-100'>04</h2>
                            <div>
                                <h2 className='text-lg font-medium'>Design Metrics & ROI</h2>
                                <p className='text-[#11111190] '>Quantifying UX success and presenting to leadership.</p>
                            </div>
                        </div>
                        <CiLock className='text-2xl group-hover:text-primary' />
                    </div>
                </div>

                <hr className='my-10 text-[#11111130]' />

                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10'>
                    {/* duration */}
                    <div className=''>
                        <MdOutlineSchedule className='text-primary text-2xl' />
                        <h3 className='text-[#11111195] font-medium my-2'>Duration</h3>
                        <p>{course.duration}</p>
                    </div>
                    {/* level */}
                    <div>
                        <MdOutlineSignalCellularAlt className='text-primary text-2xl' />
                        <h3 className='text-[#11111195] font-medium my-2'>Level</h3>
                        <p>{course.level}</p>
                    </div>
                    {/* Language */}
                    <div>
                        <MdLanguage className='text-primary text-2xl' />
                        <h3 className='text-[#11111195] font-medium my-2'>Language</h3>
                        <p>English</p>
                    </div>
                    {/* Certificate */}
                    <div>
                        <MdOutlineWorkspacePremium className='text-primary text-2xl' />
                        <h3 className='text-[#11111195] font-medium my-2'>Certificate</h3>
                        <p>Yes</p>
                    </div>
                </div>
            </div>
                <div className='text-end mt-4'>
                    <Link href={"/all-courses"}>
                    <button className="btn bg-purple-500 text-white">
                        See other Courses <BsArrowRight />
                    </button>
                </Link>
                </div>
        </div>
    )
};

export default DetailsCard;