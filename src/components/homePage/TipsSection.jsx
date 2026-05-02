import React from 'react';
import { MdEditNote, MdGroups, MdOutlinePsychology } from 'react-icons/md';
import { TfiTimer } from 'react-icons/tfi';

const TipsSection = () => {
    return (
        <div className='bg-base-300 py-14 '>
            <div className='w-11/12 mx-auto'>
                <h2 className='text-4xl font-bold mb-8'>Learning Tips & Strategies</h2>
                
                <div className='grid md:grid-cols-2 gap-5'>
                    {/* right side */}
                    <div className="p-8 rounded-2xl bg-[#3525cd]">
                        <TfiTimer className='text-white text-3xl ' />
                        <h3 className='text-2xl font-medium my-3 text-white'>Master Your Time</h3>
                        <p className='text-[#FFFFFF90] my-3'>Master your time. Boost focus and retention with proven techniques like  Pomodoro and structured time-blocking—used by top-performing learners worldwide.</p>

                        <button className='btn bg-white text-blue-600 rounded-full'>Read Guide</button>

                    </div>
                    {/* left side */}
                    <div className='grid grid-cols-2 gap-6'>
                        {/* Active Recall */}
                        <div className='flex gap-3 items-center bg-[#FFFFFF] py-16 px-7 rounded-2xl border border-gray-300 col-span-2'>
                            <div className='bg-[#006e4b] p-5 rounded-xl'>
                                <MdOutlinePsychology className='text-white text-5xl -rotate-y-180 ' />
                            </div>
                            <div>
                                <h2 className='text-2xl font-bold'>Active Recall</h2>
                                <p className='mt-2'>Test yourself constantly rather than re-reading notes to cement knowledge.</p>
                            </div>
                        </div>
                        {/* Study Groups */}
                        <div className='bg-[#FFFFFF] py-16 px-7 rounded-2xl border border-gray-300 col-span-2 sm:col-span-1'>
                            <div className='flex justify-center'>
                                <MdGroups className='text-blue-600 text-4xl' />
                            </div>
                            <div className='text-center'>
                                <h2 className='text-2xl font-bold'>Study Groups</h2>
                                <p className='mt-2 text-sm'>Collaborate with peers, share resources, and stay motivated through active learning communities.</p>
                            </div>
                        </div>
                        {/* Cornell Method */}
                        <div className='bg-[#2a313d] py-16 px-7 rounded-2xl border border-gray-300 col-span-2 sm:col-span-1'>
                            <div className='flex justify-center'>
                                <MdEditNote className='text-white text-4xl' />
                            </div>
                            <div className='text-center'>
                                <h2 className='text-2xl font-bold text-white'>Cornell Method</h2>
                                <p className='mt-2 text-[#FFFFFF90]'>Structured note-taking for clarity..</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TipsSection;