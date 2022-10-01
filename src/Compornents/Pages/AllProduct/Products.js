import React from 'react';

const Products = ({ pdc }) => {

    const { name, image, price, discount } = pdc;
    return (
        <div className='mx-auto hover:scale-110 duration-100'>
            <img src={image} alt='' />
            <div className='p-3 font-roboto hover:bg-red-200'>
                <h1 className='text-3xl'>{name}</h1>
                <p>Price: <del>${discount}</del> ${price}</p>
            </div>

        </div>
    );
};

export default Products;