import React from 'react';

import img1 from '../../../Assates/service/a.png'
import img2 from '../../../Assates/service/b.png'
import img3 from '../../../Assates/service/megamenu-home_360x.webp'

const ServiceThreeDetails = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:p-24'>
            <div>
                <img src={img1} alt='img' />
                <h1 className='text-3xl font-sans'>Hair Care</h1>
                <p>12 Product</p>
                <button className='btn rounded-none hover:bg-white hover:text-black'>More</button>
            </div>
            <div>
                <img src={img2} alt='img' />
                <h1 className='text-3xl font-sans'>Make Up</h1>
                <p>12 Product</p>
                <button className='btn rounded-none hover:bg-white hover:text-black'>More</button>

            </div>
            <div>
                <img src={img3} alt='img' />
                <h1 className='text-3xl font-sans'>menu-image</h1>
                <p>0 Product</p>
                <button className='btn rounded-none hover:bg-white hover:text-black'>More</button>

            </div>
            <div>
                <img src={img2} alt='img' />
                <h1 className='text-3xl font-sans'>New Arrivals</h1>
                <p>12 Product</p>
                <button className='btn rounded-none hover:bg-white hover:text-black'>More</button>

            </div>
            <div>
                <img src={img2} alt='img' />
                <h1 className='text-3xl font-sans'>Skin Care</h1>
                <p>12 Product</p>
                <button className='btn rounded-none hover:bg-white hover:text-black'>More</button>

            </div>



        </div>
    );
};

export default ServiceThreeDetails;