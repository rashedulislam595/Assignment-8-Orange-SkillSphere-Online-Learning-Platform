import Image from 'next/image';
import React from 'react';
import learningImage from '@/assets/learning-image.png'
import Link from 'next/link';

const HeroSection = () => {
    return (
        <div className="bg-base-200  w-11/12 mx-auto md:my-20 my-14">
            <div className="hero-content flex-col lg:flex-row-reverse gap-8">
                <Image src={learningImage} alt='hero-image' width={500} height={300} className='rounded-2xl' />
                <div className='mt-5 '>
                    <h1 className="text-3xl md:text-5xl font-bold">Upgrade Your Skills Today</h1>
                    <p className="py-6 text-gray-500">
                        Learn from Industry Experts with curated paths designed to accelerate your career growth in the modern digital economy.
                    </p>
                    <div className='flex gap-4'>
                        <Link href={'/all-courses'}>
                            <button className="btn btn-primary">Explore Courses</button>
                        </Link>
                        <button className='btn border border-gray-400'>Success Stories</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;