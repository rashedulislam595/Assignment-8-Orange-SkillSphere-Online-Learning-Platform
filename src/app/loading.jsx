import React from 'react';

const loading = () => {
    return (
        <div className='h-screen  border flex justify-center items-center'>
            <span className="loading loading-infinity loading-xl"></span>
            <h1>loading..</h1>
        </div>
    );
};

export default loading;