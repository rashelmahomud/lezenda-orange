import React from 'react';
import img from '../../Assates/Home-img/Offer_2.webp'

const ServiceOne = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <h1 className="text-5xl font-bold font-oswald font-mon font-mon">Fragrance Touch</h1>
                    <p className="py-6 font-smallFont">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form And innovation that honors tradition. No fillers, no fluff, no falseness.</p>                    

                </div>
                <img src={img} className=" rounded-lg" />

            </div>
        </div>
    );
};

export default ServiceOne;