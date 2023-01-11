import React from 'react';


const Cart = ({ cart }) => {


    return (
        <div className='max-w-full mx-auto'>
            {cart?.map(p => <div>
                <div>

                    <ul className='grid grid-cols-4 bg-red-50 border m-10 p-5'>
                        <li><img className='w-24' src={p.image} alt='' /></li>
                        <li><h1 className='font-bold text-2xl'>{p.name}</h1></li>
                        <li><h3 className='font-bold'>{p.title}</h3></li>
                        <li><p className='text-center font-bold'>Prise: {p.price}</p></li>
                    </ul>
                    

                </div>
            </div>)}
        </div>
    );
};

export default Cart;