import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

const Service = () => {
  const { detailsId } = useParams();


  const [details, setDetails] = useState([]);
  useEffect(() => {

    fetch('/services.json')
      .then(res => res.json())
      .then(data => setDetails(data))

  }, [])

  const newResult = details?.find((s) => s.id === detailsId)


  console.log(newResult?.name);

  return (
    <div className='pt-20'>
      <h1>hello{newResult?.name}</h1>
      {/* <img src={newResult?.image} alt='image' /> */}
      <TransformWrapper>
        <TransformComponent>
        <img src={newResult?.image} alt='image' />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default Service;