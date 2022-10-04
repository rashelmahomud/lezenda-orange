// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from '../../Assates/Home-img/dd-removebg-preview.png'
import img1 from '../../Assates/banner/slid-img-4.webp'
import img2 from '../../Assates/banner/slide-img-3.webp'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";


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
          <div className="hero h-screen bg-image">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div>
                <h1 className="text-8xl font-bold" data-aos="zoom-in-up"
                  data-aos-duration="3000 font-roboto font-mon">Explore</h1>
                <h1 className="text-5xl font-bold font-mon">Your Beauty</h1>
                <Link to='/shop'>  <button className="btn translate-y-6 btn rounded-none hover:bg-white hover:text-black">SHOP-NOW</button></Link>

              </div>
              <img src={img} className="rounded-lg w-auto w-screen transform transition duration-500 hover:scale-150" />

            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div>
                <h1 className="text-8xl font-bold" data-aos="zoom-in-up"
                  data-aos-duration="3000 font-roboto font-mon">Explore</h1>
                <h1 className="text-5xl font-bold font-mon">Your Beauty</h1>
                <Link to='/shop'>  <button className="btn translate-y-6 btn rounded-none hover:bg-white hover:text-black">SHOP-NOW</button></Link>

              </div>
              <img src={img1} className=" rounded-lg w-2/5 w-screen transform transition duration-500 hover:scale-110" />

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div>
                <h1 className="text-8xl font-bold" data-aos="zoom-in-up"
                  data-aos-duration="3000 font-mon">Explore</h1>
                <h1 className="text-5xl font-bold">Your Beauty</h1>
                <Link to='/shop'>  <button className="btn translate-y-6 btn rounded-none hover:bg-white hover:text-black">SHOP-NOW</button></Link>


              </div>
              <img src={img2} className=" rounded-lg w-2/5 w-screen transform transition duration-500 hover:scale-110" />

            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}