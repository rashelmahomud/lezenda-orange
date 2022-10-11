import React from 'react';
import { useQuery } from 'react-query';
import Product from './Product';

const Sproduct = () => {

    const { data,id} = useQuery(['sproduct'], () => fetch('services.json').then(res => res.json()))


    return (
        <div className='grid grid-cols-3 gap-4 my-10'>

            {
                data?.map(s => <Product key={s.id} s={s}></Product>)
            }
        </div>
    );
};

export default Sproduct;