import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products = ({ pdc }) => {

    const { name, image, price, discount,id } = pdc;

    const navigate = useNavigate();

    const handelDetails = id => {
        navigate(`/productDetails/${id}`);
    }


    return (
        <div onClick={ () => handelDetails(id)} className='mx-auto hover:scale-110 duration-100'>
            <img src={image} alt='' />
            <div className='p-3 font-roboto hover:bg-red-200'>
                <h1 className='text-3xl'>{name}</h1>
                <p>Price: <del>${discount}</del> ${price}</p>
            </div>

        </div>
    );
};

export default Products;