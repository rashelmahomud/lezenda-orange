import React from 'react';
import blog from '../../Assates/blogs/blogs.webp'
import blog1 from '../../Assates/blogs/banner-s.webp'

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

                    <div tabIndex={0} className="collapse">
                        <div >
                            <p>To say sequins and sparkles will be a big deal next summer is an understatement. In every fashion capital, glitter prevailed, starting with Tom Ford and Marc Jacobs right through...< br /><span className="collapse-title text-xl hover:text-green-500"><i class="fa-solid fa-plus"></i> READ MORE</span></p>
                        </div>
                        <div className="collapse-content">
                            {/* <p>tabIndex={0} attribute is necessary to make the div focusable</p> */}
                            <h1 className='text-2xl my-5'>Pastels</h1>
                            <p>
                                Whether lilac, pink, lemon or duck egg blue, expect to see an array of fashion’s prettiest shades next season. But as Victoria Beckham (pictured) said “delicacy can be strong”; saccharine these colours are not – consider tailoring in ice cream hues or wearing them in unexpected ways like at Celine.
                            </p>
                            <h1 className='text-2xl my-5'>Checkes</h1>
                            <p>
                            It looks as if heritage checks are going nowhere for the season ahead. Balenciaga’s came via voluminous coats as seen here, while Victoria Beckham’s had a more traditional appeal. Anyone looking for floaty feminine styles should turn to Sonia Rykiel where they were bright and summer-ready. Burberry’s homage was perhaps the most overt – expect to see its check caps everywhere next season.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mt-5'><img src={blog1} alt='' /></div>
                <div className='p-3'>
                    <div className='p-3'>
                        <h1> <i class="fa-solid fa-user"></i>  By : Lezada Organic Admin

                            <span> <i class="fa-solid fa-calendar-days"></i> Dec 25, {year}</span></h1>
                    </div>
                    <h3 className='text-2xl'>Perfect Perfume & Cologne</h3>

                    <div tabIndex={0} className="collapse">
                        <div >
                            <p>To say sequins and sparkles will be a big deal next summer is an understatement. In every fashion capital, glitter prevailed, starting with Tom Ford and Marc Jacobs right through...< br /><span className="collapse-title text-xl hover:text-green-500"><i class="fa-solid fa-plus"></i> READ MORE</span></p>
                        </div>
                        <div className="collapse-content">
                            {/* <p>tabIndex={0} attribute is necessary to make the div focusable</p> */}
                            <h1 className='text-2xl my-5'>Pastels</h1>
                            <p>
                                Whether lilac, pink, lemon or duck egg blue, expect to see an array of fashion’s prettiest shades next season. But as Victoria Beckham (pictured) said “delicacy can be strong”; saccharine these colours are not – consider tailoring in ice cream hues or wearing them in unexpected ways like at Celine.
                            </p>
                            <h1 className='text-2xl my-5'>Checkes</h1>
                            <p>
                            It looks as if heritage checks are going nowhere for the season ahead. Balenciaga’s came via voluminous coats as seen here, while Victoria Beckham’s had a more traditional appeal. Anyone looking for floaty feminine styles should turn to Sonia Rykiel where they were bright and summer-ready. Burberry’s homage was perhaps the most overt – expect to see its check caps everywhere next season.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;