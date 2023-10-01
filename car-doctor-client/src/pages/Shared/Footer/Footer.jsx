import logo from '../../../assets/logo.svg'
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white rounded-xl ">
            <div  >
                <img src={logo} alt="" />
                <p>Edwin Diaz is a software and web technologies <br /> engineer, a life coach <br /> trainer who is also a serial .</p>
                <div className='flex gap-4'>
                    <FaGoogle className='w-6 h-6' />
                    <FaInstagram className='w-6 h-6' />
                    <FaTwitter className='w-6 h-6' />
                    <FaFacebook className='w-6 h-6' />
                </div>

            </div>
            <div>
                <span className="footer-title">About</span>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Contact</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Support</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;