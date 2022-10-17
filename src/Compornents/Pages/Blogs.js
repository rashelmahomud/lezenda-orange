import React from 'react';
import blog from '../../Assates/blogs/blogs.webp'

const Blogs = () => {

    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='grid lg:grid-cols-3 gap-4 lg:p-20'>

            <div class="...">
               <h1 className='text-2xl'> Archive</h1>
                <h3>December 2019</h3>
               <h5> Ogranic Beatuty</h5>
                May 2019
                Perfect Perfume & Cologne
                T-Shirts as Minimalist Style
                Shirt pent Color Picking Guide.</div>
            <div class="col-span-2 ...">
                <div><img src={blog} alt='' /></div>
                <div className='p-3'>
                    <div className='p-3'>
                        <h1> <i class="fa-solid fa-user"></i>  By : Lezada Organic Admin

                            <span> <i class="fa-solid fa-calendar-days"></i> Dec 25, {year}</span></h1>
                    </div>
                    <h3 className='text-2xl'>Ogranic Beatuty</h3>
                    <p>To say sequins and sparkles will be a big deal next summer is an understatement. In every fashion capital, glitter prevailed, starting with Tom Ford and Marc Jacobs right through...</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;