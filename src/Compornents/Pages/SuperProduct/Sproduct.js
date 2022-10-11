import React from 'react';
import { useQuery } from 'react-query';
import Product from './Product';

const Sproduct = () => {

    const { data } = useQuery(['sproduct'], () => fetch('superData.json').then(res => res.json()))


    return (
        <div className='w-8/12 mx-auto grid grid-flow-col grid-rows-2 gap-8 my-10 overflow-hidden'>
        
            {
                data?.slice(0, 4).map(s => <Product key={s.id} s={s}></Product>)
            }
        </div>
    );
};

export default Sproduct;