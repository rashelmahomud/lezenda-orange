import React from 'react';
import { Link } from 'react-router-dom';

const Forbiden = () => {
    return (
        <div className='grid h-screen place-items-center text-3xl'>
            <p className='lg:text-8xl'>Ooops!< br/>
                Page not found!</p>

            <p className='border-b-4 hover:border-none text-red-500'> <Link to='/'>Click For Back </Link></p>
        </div>
    );
};

export default Forbiden;