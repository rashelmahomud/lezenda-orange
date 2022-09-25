import React from 'react';
import banner2 from '../../Assates/Home-img/banne1_900x.webp'
import banner1 from '../../Assates/Home-img/banner2_900x.webp'

const ServiceThree = () => {
    return (
        <div className="hero mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                <img src={banner2} className="lg:w-2/4 w-96 rounded-lg transform transition duration-500 hover:scale-110 hover:shadow-xl" />

                <img src={banner1} className="lg:w-2/4 w-96 rounded-lg transform transition duration-500 hover:scale-110 hover:shadow-xl" />
            </div>
        </div>
    );
};

export default ServiceThree;