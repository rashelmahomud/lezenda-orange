import React from 'react';


const Cart = ({ cart }) => {


    return (
        <div className='max-w-full mx-auto'>
            {cart?.map(p => <div>
                <div>

                    <ul className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 bg-red-50 border lg:m-10 lg:p-5 m-5 p-3 place-items-center'>
                        <li><img className='w-24' src={p.image} alt='' /></li>
                        <li><h1 className='font-bold text-2xl'>{p.name}</h1></li>
                        <li><h3 className='font-bold'>{p.title}</h3></li>
                        <li><p className='text-center font-bold text-2xl'>Prise: {p.price}</p></li>

                        <div>
                            <button className='bg-blue-400 px-3 py-2 text-white font-bold m-2'>PAYMENT</button>
                            <button className='bg-red-400 px-3 py-2 text-white font-bold'>DELETE</button>
                        </div>

                    </ul>


                </div>
            </div>)}
        </div>
    );
};

export default Cart;