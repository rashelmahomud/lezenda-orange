import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './Service.css';
import { Pagination } from "swiper";
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
const Services = () => {
    const { isLoading, error, data: service } = useQuery(['service'], () =>
        fetch('services.json').then(res =>
            res.json()
        )
    )


    const navigate = useNavigate();

    const handelDetails = id => {
        navigate(`/detailsService/${id}`);
    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className='text-center my-10'>
                <h1 className='text-5xl font-mon '>New Arrivals</h1>
                <h1 className='font-bold'>Section Title Description</h1>
            </div>
            <>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        "@0.75": {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        "@1.00": {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        "@1.50": {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >

                    {
                        service?.map(s => <>

                            <SwiperSlide className='swiperSlides'>

                                <div className="card w-96 bg-base-100">
                                    <div onClick={() => handelDetails(s?.id)} className="card-body hover:shadow-xl hover:-translate-y-5  transform transition duration-300">

                                        <div className="hello relative">
                                            <img className='hover:outline-dashed outline-2 outline-offset-2' src={s?.image} />
                                        </div>
                                        <div className="rating absolute ml-10 z-10 mt-5 imgout">

                                            <input type="radio" name="rating-3" className="mask mask-heart bg-red-300 " />

                                        </div>

                                        <h2 className="card-title mx-auto">{s?.name}</h2>
                                        <p><del>$21.00</del> Price: ${s?.price}</p>

                                    </div>
                                </div>
                            </SwiperSlide>


                        </>)
                    }

                </Swiper>
            </>

        </div>
    );
};

export default Services;