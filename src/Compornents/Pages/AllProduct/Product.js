import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import Products from './Products';

const Product = () => {
    const [query, setQuery] = useState('');
    const [searchProduct, setSearchProduct] = useState([]);

    const { data: product, isLoading } = useQuery(['product'], () => fetch('/product.json').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    const searchText = (e) => {
        // event.prevenDefault();
        setQuery(e.target.value);
        const searchProduct = product.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
        setSearchProduct(searchProduct);
    }

    console.log(query);

    return (
        <div>
            <div className='p-10 text-center'>

                <input type="text" placeholder="Find Your Product" className="input input-bordered input-primary w-full max-w-xs" value={query} onChange={searchText} />
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>

                {
                    searchProduct.length ? searchProduct.map(pdc => <Products key={pdc.id} pdc={pdc}></Products>) : product.map(pdc => <Products key={pdc.id} pdc={pdc}></Products>)
                }

            </div>
        </div>
    );
};

export default Product;