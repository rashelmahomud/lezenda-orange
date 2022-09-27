import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./Details.css";

// import required modules
import { EffectCube, Pagination } from "swiper";

const Service = () => {
  const { detailsId } = useParams();
  const [isZoomed, setIsZoomed] = useState(false)

  const handleZoomChange = useCallback(shouldZoom => {
    setIsZoomed(shouldZoom)
  }, [])


  const [details, setDetails] = useState([]);
  useEffect(() => {

    fetch('/services.json')
      .then(res => res.json())
      .then(data => setDetails(data))

  }, [])

  const newResult = details?.find((s) => s.id === detailsId)


  console.log(newResult?.name);


  return (
    <div className='flex'>

      <div className='pt-20 mx-auto text-center'>
        <h1>hello{newResult?.name}</h1>
        <h1 className='text-3xl'>CHOSES YOUR PRODCUT COLOR</h1>

      </div>

      <div>
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper products-detail"
        >
          <SwiperSlide className='produt-details'>
            <TransformWrapper>
              <TransformComponent>
                <img src={newResult?.image} alt='image' />
              </TransformComponent>
            </TransformWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <TransformWrapper>
              <TransformComponent>
                <img src={newResult?.image} alt='image' />
              </TransformComponent>
            </TransformWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <TransformWrapper>
              <TransformComponent>
                <img src={newResult?.image} alt='image' />
              </TransformComponent>
            </TransformWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <TransformWrapper>
              <TransformComponent>
                <img src={newResult?.image} alt='image' />
              </TransformComponent>
            </TransformWrapper>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
};

export default Service;