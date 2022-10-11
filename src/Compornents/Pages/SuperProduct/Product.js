import React from 'react';

const Product = ({ s }) => {
    const { name, id, title, image, price } = s;
    return (

        <div className='border mx-auto transform transition duration-500 hover:scale-110'>
            <img src={image} alt='' />
         
        </div>
    );
};

export default Product;