import React from 'react';
import Banner from '../Animations/Banner';
import Services from '../Pages/Product/Services';
import ServiceOne from '../Pages/ServiceOne';
import ServiceThree from '../Pages/ServiceThree';
import ServiceTwo from '../Pages/ServiceTwo';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div>
            <Banner />
            <ServiceOne />
            <ServiceTwo />
            <ServiceThree />
            <Services />

            <Footer></Footer>
        </div>
    );
};

export default Home;