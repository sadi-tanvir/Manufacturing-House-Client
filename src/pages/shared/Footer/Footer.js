import React from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <>
            <footer className="bg-slate-200">
                <div className="footer flex justify-between items-center py-5 px-10">
                    <div>
                        <span className="footer-title">Services</span>
                        <Link to="#" className="link link-hover">Branding</Link>
                        <Link to="#" className="link link-hover">Design</Link>
                        <Link to="#" className="link link-hover">Marketing</Link>
                        <Link to="#" className="link link-hover">Advertisement</Link>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <Link to="#" className="link link-hover">About us</Link>
                        <Link to="#" className="link link-hover">Contact</Link>
                        <Link to="#" className="link link-hover">Jobs</Link>
                        <Link to="#" className="link link-hover">Press kit</Link>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <Link to="#" className="link link-hover">Terms of use</Link>
                        <Link to="#" className="link link-hover">Privacy policy</Link>
                        <Link to="#" className="link link-hover">Cookie policy</Link>
                    </div>
                </div>

                <p className="mt-7 text-center pb-5">Copyright 2022 All Rights Reserved</p>
            </footer>
        </>
    );
};

export default Footer;