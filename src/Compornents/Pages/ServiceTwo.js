import React from 'react';
import img from '../../Assates/Home-img/Group_989.webp'


const ServiceTwo = () => {
    return (
        <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} className="rounded-lg" />
          <div>
            <h1 className="text-5xl font-bold font-mon">Beauty Special</h1>
            <p className="py-6">Formulas drawn from earth’s natural phenomena. Ingredients that have been used for centuries..</p>
          </div>
        </div>
      </div>
    );
};

export default ServiceTwo;