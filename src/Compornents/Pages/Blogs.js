import React from 'react';
import blog from '../../Assates/blogs/blogs.webp';
import blog1 from '../../Assates/blogs/banner-s.webp';
import blog2 from '../../Assates/blogs/blog4.webp';
// import blog3 from '../../Assates/blogs/blog3.webp';

const Blogs = () => {

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    return (
        <div className='grid lg:grid-cols-3 gap-4 lg:p-20'>

            <div className='p-2'>
                <div class="p-3">
                    <h1 className='text-xl font-bold'> Archive</h1>
                    <h3 className='font-bold'>December {year}</h3>
                    <h5> Ogranic Beatuty</h5>
                    <p className='font-bold my-2'>{month} {year}</p>
                    May 2019
                    Perfect Perfume & Cologne
                    T-Shirts as Minimalist Style
                    Shirt pent Color Picking Guide.
                </div>
                <div className='p-3'>

                    <input className='border-b-4 py-2' type='text' placeholder='search your content'  />
                    <i class="fa-solid fa-search"></i>
                    

                </div>
                <h2 className='p-3 text-2xl'>Recent Post</h2>

                <div class="my-2 p-3 lg:p-10 flex gap-5 border-b-2">
                    <div >
                        <img className='w-32 h-40 cursor-pointer' src={blog} alt='' />

                    </div>
                    <div className='border-b-2'>
                        <p>Ogranic Beatuty</p>
                        <p className='mt-3'>{month} {day}, {year}</p>
                    </div>

                </div>
                <div class="my-2 p-3 lg:p-10 flex gap-5 border-b-2">
                    <div >
                        <img className='w-32 h-40 cursor-pointer' src={blog1} alt='' />
                    </div>
                    <div className='border-b-2'>
                        <p>Perfect Perfume & Cologne</p>
                        <p className='mt-3'>Dec 25, {year}</p>
                    </div>

                </div>
                <div class="my-2 p-3 lg:p-10 flex gap-5 border-b-2">
                    <div >
                        <img className='w-32 h-40 cursor-pointer' src={blog2} alt='' />
                    </div>
                    <div className='border-b-2'>
                        <p>Shirt pent Color Picking Guide</p>
                        <p className='mt-3'>{month} 25, {year}</p>
                    </div>

                </div>
            </div>

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

                            <span> <i class="fa-solid fa-calendar-days"></i> Jun 05, {year}</span></h1>
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
                <div className='mt-5'><img src={blog2} alt='' /></div>
                <div className='p-3'>
                    <div className='p-3'>
                        <h1> <i class="fa-solid fa-user"></i>  By : Lezada Organic Admin

                            <span> <i class="fa-solid fa-calendar-days"></i> Jun 05, {year}</span></h1>
                    </div>
                    <h3 className='text-2xl'>Shirt pent Color Picking Guide</h3>

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