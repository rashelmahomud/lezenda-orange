import React from 'react';
import Banner from '../Animations/Banner';
import ProductBanner from '../main/ProductBanner';
import Services from '../Pages/Product/Services';
import ServiceOne from '../Pages/ServiceOne';
import ServiceThree from '../Pages/ServiceThree';
import ServiceTwo from '../Pages/ServiceTwo';

const Home = () => {
    return (
        <div>
            <Banner />
            <ServiceOne />
            <ServiceTwo />
            <ServiceThree />
            <Services />
            <ProductBanner />

        </div>
    );
};

export default Home;