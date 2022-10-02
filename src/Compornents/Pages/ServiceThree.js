import React from 'react';
import { Link } from 'react-router-dom';
import banner2 from '../../Assates/Home-img/banne1_900x.webp';
import banner1 from '../../Assates/Home-img/banner2_900x.webp';

const ServiceThree = () => {

    return (
        <div className="hero mt-10 ">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                <Link to='/serviceThree/serviceThreeDetails' className="lg:w-2/4  rounded-lg transform transition duration-500 hover:scale-110 hover:shadow-xl"> <img src={banner2} /></Link>

                <Link to='/serviceThree/serviceThreeDetails' className="lg:w-2/4  rounded-lg transform transition duration-500 hover:scale-110 hover:shadow-xl"> <img src={banner1} /></Link>

            </div>

        </div>
    );
};

export default ServiceThree;