import React from 'react';


const Cart = ({ cart }) => {


    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:p-20 '>
            {cart?.map(p => <div>
                <div>
                    <img src={p.image} alt='' />
                    <h1>{p.name}</h1>
                    <h3>{p.title}</h3>
                    <p>Prise: {p.price}</p>
                </div>
            </div>)}
        </div>
    );
};

export default Cart;