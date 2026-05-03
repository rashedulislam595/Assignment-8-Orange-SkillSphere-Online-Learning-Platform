import Link from 'next/link';
import React from 'react';
import { ImFileEmpty } from 'react-icons/im';

const NotFoundPage = () => {
    return (
        <div className='h-[50vh] my-20 flex justify-center items-center flex-col  gap-5 md:w-3xl rounded-2xl bg-gray-200 mx-5 md:mx-auto'>
            <ImFileEmpty className='text-3xl text-gray-600' />
            <h2 className='text-4xl font-bold text-gray-500'>Page is Not found</h2>
            <Link href={"/"}>
                <button className='btn btn-primary btn-soft'>Back to Home</button>
            </Link>
        </div>
    );
}

export default NotFoundPage;