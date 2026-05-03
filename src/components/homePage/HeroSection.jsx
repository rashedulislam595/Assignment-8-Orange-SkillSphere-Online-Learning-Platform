"use client"
import Image from 'next/image';
import React from 'react';
import learningImage from '@/assets/learning-image.png'
import Link from 'next/link';
import { motion } from "framer-motion";

const HeroSection = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };
    return (
        <motion.div variants={container} initial="hidden" animate="show"
        >
            <div className="bg-base-200  w-11/12 mx-auto md:my-20 my-14">
                <div className="hero-content flex-col lg:flex-row-reverse gap-8">
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                        <Image src={learningImage} alt='hero-image' width={500} height={300} className='rounded-2xl' />
                    </motion.div>

                    <div className='mt-5 '>
                        <h1 className="text-3xl md:text-5xl font-bold">Upgrade Your Skills Today</h1>
                        <p className="py-6 text-gray-500">
                            Learn from Industry Experts with curated paths designed to accelerate your career growth in the modern digital economy.
                        </p>
                        <div className='flex gap-4'>
                            <Link href={'/all-courses'}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-primary"
                                >
                                    Explore Courses
                                </motion.button>
                            </Link>

                            <button className='btn border border-gray-400'>Success Stories</button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

    );
};

export default HeroSection;