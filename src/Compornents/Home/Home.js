import React from 'react';
import Banner from '../Animations/Banner';
import ServiceOne from '../Pages/ServiceOne';
import ServiceThree from '../Pages/ServiceThree';
import ServiceTwo from '../Pages/ServiceTwo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceOne />
            <ServiceTwo />
            <ServiceThree />
        </div>
    );
};

export default Home;