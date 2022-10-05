import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    const {pdId} = useParams();

    const {data: productData} = useQuery(['productDetails'], () => fetch('/product.json').then(res => res.json()));


    const newProduct = productData?.find((pd) => pd.id === pdId);

    return (
        <div>
            <h1>hello {newProduct?.id}</h1>
            <h1>hello {newProduct?.name}</h1>
        </div>
    );
};

export default ProductDetails;