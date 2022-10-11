import React from 'react';
import Banner from '../Animations/Banner';
import ProductBanner from '../main/ProductBanner';
import Submain from '../main/submain/Submain';
import Subscribe from '../main/Subscribe/Subscribe';
import Services from '../Pages/Product/Services';
import ServiceOne from '../Pages/ServiceOne';
import ServiceThree from '../Pages/ServiceThree';
import ServiceTwo from '../Pages/ServiceTwo';
import Sproduct from '../Pages/SuperProduct/Sproduct';

const Home = () => {
    return (
        <div>
            <Banner />
            <ServiceOne />
            <ServiceTwo />
            <ServiceThree />
            <Sproduct />
            <Services />
            <Submain />
            <ProductBanner />
            <Subscribe />

        </div>
    );
};

export default Home;