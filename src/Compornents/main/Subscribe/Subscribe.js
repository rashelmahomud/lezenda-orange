import React from 'react';
import './subStyles.css'
const Subscribe = () => {
    return (
        <div className='subBanner2'>

            <div className='flex h-screen justify-center items-center'>
                <div className='bg-opacity-30 backdrop-filter backdrop-blur-lg h-auto text-black p-5 lg:p-10 '>
                    <h1 className='text-4xl font-sans'>Subscribe To Our Newsletter</h1>
                    <p className='lg:text-2xl'>Sign up for the weekly newsletter and build better ecommerce stores.</p>
                    <div className='my-3'>
                        <input type='text' placeholder="Enter email" className="input outline-none bg-white w-full max-w-xs " />
                        <label><button className="btn text-orange-600 ">SUBSCRIBE</button></label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Subscribe;