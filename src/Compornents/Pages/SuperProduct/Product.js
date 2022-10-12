import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ s }) => {
    const { image, imageType, name } = s;
    return (

        <div className={`border relative ${imageType === 'Img-1' ? 'lg:col-span-2 lg:row-span-2' : ''} ${imageType === 'Img-4' ? 'lg:row-span-2' : ''} `}>
            <Link to='/shop'>
                <img className='h-full transform transition duration-500 hover:scale-110' src={image} alt='' />
            </Link>

            <button className='absolute left-2 bottom-2 bg-white text-black hover:bg-gray-600 px-5 py-2 rounded-md hover:text-white border-0 hover:border-0'>{name}</button>

        </div>
    );
};

export default Product;