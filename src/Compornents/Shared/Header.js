import { faBaby, faBlog, faCircleInfo, faContactBook, faHatCowboySide, faMoon, faSatelliteDish, faShop, faShoppingCart, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ handleThemeChange, theme }) => {

    return (
        <div className="navbar fixed top-0 w-full font-roboto z-50 lg:px-10 bg-opacity-30 backdrop-filter backdrop-blur-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/shop'>Shop</Link></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Catagory
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><Link to='/shop'><FontAwesomeIcon className='text-green-500' icon={faShop} /> Shop</Link></li>
                                <li><Link to='/shop'><FontAwesomeIcon className='text-yellow-500' icon={faHatCowboySide} /> Jeans</Link></li>
                                <li><Link to='/shop'><FontAwesomeIcon className='text-blue-500' icon={faSatelliteDish} /> Beauty</Link></li>
                                <li><Link to='/shop'><FontAwesomeIcon className='text-red-500' icon={faBaby} /> Babys</Link></li>
                                <li><Link to='/blog'><FontAwesomeIcon className='text-black-400' icon={faBlog} /> Blogs</Link></li>
                            </ul>
                        </li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li tabIndex={0}>
                            <a>
                                Pages
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><Link to='/'><FontAwesomeIcon className='text-green-500' icon={faCircleInfo} /> About</Link></li>
                                <li><Link to='/'><FontAwesomeIcon className='text-red-500' icon={faContactBook} />Contact US</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                {/* <a className="btn btn-ghost normal-case text-xl">Lezanda</a> */}
                <Link to='/' className="btn btn-ghost normal-case text-xl">Lezanda</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/shop'>Shop</Link></li>
                    <li tabIndex={0}>
                        <a>
                            Catagory
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2">
                            <li><Link to='/shop'><FontAwesomeIcon className='text-green-500' icon={faShop} /> Shop</Link></li>
                            <li><Link to='/shop'><FontAwesomeIcon className='text-yellow-500' icon={faHatCowboySide} /> Jeans</Link></li>
                            <li><Link to='/shop'><FontAwesomeIcon className='text-blue-500' icon={faSatelliteDish} /> Beauty</Link></li>
                            <li><Link to='/shop'><FontAwesomeIcon className='text-red-500' icon={faBaby} /> Babys</Link></li>
                            <li><Link to='/blog'><FontAwesomeIcon className='text-black-400' icon={faBlog} /> Blogs</Link></li>
                        </ul>
                    </li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li tabIndex={0}>
                        <a>
                            Pages
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2">

                            <li><Link to='/'><FontAwesomeIcon className='text-green-500' icon={faCircleInfo} /> About</Link></li>
                            <li><Link to='/'><FontAwesomeIcon className='text-red-500' icon={faContactBook} />Contact US</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="navbar-end gap-2">
                {/* theme icon started here  */}
                <button
                    onClick={handleThemeChange}
                    className="rounded-full lg:mx-2 font-bold pr-2">
                    {theme ? <FontAwesomeIcon className='text-green-500' icon={faSun} /> : <FontAwesomeIcon className='text-red-500' icon={faMoon} />}
                </button>
                {/* theme icon Ends here  */}
                <Link to='/'><FontAwesomeIcon icon={faShoppingCart} /> MY CART</Link>
            </div>
        </div>
    );
};

export default Header;