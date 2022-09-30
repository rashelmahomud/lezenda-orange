import React, { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

const Service = () => {
  const { detailsId } = useParams();
  const [isZoomed, setIsZoomed] = useState(false)

  const [count, setCount] = useState(0);

  const handelPlus = () => {
    setCount(count => count + 1);
  }
  const handelMinus = () => {
    setCount(count => count - 1);
  }


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
    <div className='grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:p-20'>
      <div className='mt-20 mx-auto text-center'>
        <TransformWrapper>
          <TransformComponent>
            <img className='' src={newResult?.image} alt='' />

          </TransformComponent>
        </TransformWrapper>

      </div>

      <div className='mt-20 text-center text-justify p-3'>
        <h1 className='text-3xl font-bold font-sans text-slate-700'>{newResult?.name}</h1>
        <h1 className='text-2xl font-bold font-mono text-slate-700'>{newResult?.title}</h1>
        <div>
          <div className=' my-3 flex gap-4 text-slate-700'>
            <div className="rating">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />

            </div>
            <h1 className=''>7 reviews</h1>
          </div>

          <div className=' my-3 flex gap-4 text-slate-700'>
            <div>
              <del>$21.00</del>
              <span className='mx-2 font-bold text-2xl'>${newResult?.price}</span>

            </div>
            <button className="btn btn-sm rounded-full">Save-10%</button>
          </div>

          <div className=' my-3 flex gap-4 text-slate-700'>
            <div>

              <span className='mx-2 font-bold hover:text-red-700'> Shipping</span>

            </div>
            <h2 className='hover:text-red-700 '>Ask About This Product</h2>
          </div>

          <div className=' mt-10 flex gap-4 '>
            <div>
              <span className='mx-2 text-2xl font-bold text-slate-700'> Color :</span>
            </div>

            <div>
              <div className="tooltip" data-tip="red">
                <button className="btn btn-sm border-none rounded-full w-8 bg-red-600"></button>
              </div>
              <div className="tooltip mx-2" data-tip="yellow">
                <button className="btn btn-sm border-none rounded-full w-8 bg-yellow-700"></button>
              </div>
              <div className="tooltip mx-2" data-tip="green">
                <button className="btn btn-sm border-none rounded-full w-8 bg-green-700"></button>
              </div>
              <div className="tooltip" data-tip="black">
                <button className="btn btn-sm border-none rounded-full w-8 bg-black-700"></button>
              </div>

            </div>
          </div>

          <div className=' my-3 flex gap-4 text-2xl text-slate-700'>
            <div>
              <h1>Quantity:</h1>
            </div>


            <div>
              <button onClick={handelPlus}> + </button>
              <span className='mx-5'>{count} </span>
              <button onClick={handelMinus}> - </button>

            </div>
          </div>

          <div className=' my-3 flex gap-4 text-slate-700'>
            <div>
              <button className="btn rounded-none hover:bg-white hover:text-black">ADD TO CARD</button>
            </div>


            <div className="rating gap-1 btn hover:bg-white bg-blue-200">
              <input type="radio" name="rating-3" className="mask mask-heart btn" />

            </div>
          </div>


          <div>
            <button className='btn w-full bg-yellow-200 text-black border-none hover:text-white my-3'>BUY IT NOW</button>
          </div>
        </div>

      </div>



    </div>
  );
};

export default Service;