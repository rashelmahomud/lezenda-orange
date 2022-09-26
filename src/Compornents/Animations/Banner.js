import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from '../../Assates/banner/df.png'
import img1 from '../../Assates/banner/slid-img-4.webp'
import img2 from '../../Assates/banner/slide-img-3.webp'
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Autoplay, Pagination } from "swiper";


export default function App() {
  
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>


          <div className="hero h-screen bg-yellow-50">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div>
                <h1 className="text-8xl font-bold" data-aos="zoom-in-up"
                  data-aos-duration="3000">Explore</h1>
                <h1 data-aos="zoom-in-left"
                  data-aos-duration="3000" className="text-5xl font-bold">Your Beauty</h1>

                <button className="btn translate-y-6">SHOP-NOW</button>

              </div>

              <img src={img} className="translate-y-6  rounded-lg w-screen transform transition duration-500 hover:scale-150"  />

              {/* data-aos="fade-up"
                data-aos-duration="3000" */}
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="hero h-screen bg-green-50">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div>
                <h1 className="text-8xl font-bold" data-aos="zoom-in-up"
                  data-aos-duration="3000">Explore</h1>
                <h1 className="text-5xl font-bold">Your Beauty</h1>
              </div>
              <img src={img1} className=" rounded-lg w-3/6 w-screen transform transition duration-500 hover:scale-110" />

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero h-screen bg-blue-50">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div>
                <h1 className="text-8xl font-bold" data-aos="zoom-in-up"
                  data-aos-duration="3000">Explore</h1>
                <h1 className="text-5xl font-bold">Your Beauty</h1>
              </div>
              <img  src={img2} className=" rounded-lg w-3/6 w-screen transform transition duration-500 hover:scale-110" />

            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}