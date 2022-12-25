import React from 'react';
import { Link } from 'react-router-dom';

const Forbiden = () => {
    return (
        <div className='grid h-screen place-items-center text-3xl'>
            404 Forbiden This page...

            <p className='border-b-4'> <Link to='/'>Click For Back </Link></p>
        </div>
    );
};

export default Forbiden;