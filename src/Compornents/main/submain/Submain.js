import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../Assates/Home-img/dd-removebg-preview.png'

import './sub.css'
const Submain = () => {
    return (
        <div className='subBanner mt-10'>
            <div className='lg:px-20 border'>
                <div className='border lg:flex md:flex'>
                    <img className='w-96' src={img} alt='img' />
                    <div className='mt-20 border outline-double lg:block md:block hidden'>
                        <h1 className='text-5xl font-sans p-2'>Super Product</h1>
                        <h1 className='text-4xl font-sans p-2'>Best SELL</h1>
                        <Link to='/shop'><button className='btn btn-outline rounded-sm btn-secondary ml-2'>SEE ALL PRODUCT</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Submain;