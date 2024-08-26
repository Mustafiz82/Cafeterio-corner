import React from 'react';

const Footer = () => {
    return (
        <div className=''>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#303947" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
           <div className="bg-[#303947]">
           <footer className="footer max-w-screen-2xl mx-auto  bg-[#303947] text-white p-10">
                <nav>
                    <h6 className="footer-title">About Us</h6>
                    <a className="link link-hover">Our Story</a>
                    <a className="link link-hover">Meet the Team</a>
                    <a className="link link-hover">Careers</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Customer Service</h6>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Reservations</a>
                    <a className="link link-hover">Menu</a>
                    <a className="link link-hover">FAQs</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Connect</h6>
                    <a className="link link-hover">Social Media</a>
                    <a className="link link-hover">Newsletter Signup</a>
                    <a className="link link-hover">Gift Cards</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Accessibility</a>
                </nav>
            </footer>
           </div>

        </div>
    );
};

export default Footer;