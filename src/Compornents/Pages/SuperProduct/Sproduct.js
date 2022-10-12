import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import Product from './Product';

const Sproduct = () => {

    const { data, isLoading } = useQuery(['sproduct'], () => fetch('superData.json').then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='lg:w-8/12 mx-auto grid grid-flow-col grid-rows-2 gap-3 lg:gap-8 my-10 overflow-hidden'>

            {
                data?.slice(0, 4).map(s => <Product key={s.id} s={s}></Product>)
            }
        </div>
    );
};

export default Sproduct;