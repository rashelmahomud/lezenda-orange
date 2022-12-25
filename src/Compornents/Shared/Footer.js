import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import BackToTop from "react-back-to-top";
import BackToTop from 'react-back-to-top-button'
import { Link } from 'react-router-dom';
import logo from '../../Assates/logo (2).png'

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <div>

            <BackToTop
                showOnScrollUp
                showAt={100}
                speed={1500}
                easing="easeInOutQuint"
            >
                <div className='fixed bottom-10 right-10 text-info text-2xl'>
                    <a href='#top' className='z-50' ><FontAwesomeIcon icon={faArrowCircleUp} /></a>
                </div>
            </BackToTop>


            <footer className="footer mt-10 p-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <img className='w-8' src={logo} />
                    <p>Lezenda Orange <br />2022-{year} Copyright &copy; Lezanda Orange.All rights resurve</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <Link to='/'><i className="fa-brands fa-facebook "></i></Link>
                        <Link to='/'><i className="fa-brands fa-linkedin"></i></Link>
                        <Link to='/'><i className="fa-brands fa-instagram"></i></Link>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;