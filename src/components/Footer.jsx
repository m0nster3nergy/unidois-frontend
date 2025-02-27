import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h1 className="text-2xl font-bold">MyWebsite</h1>
                </div>
                <div className="flex space-x-6 mb-4 md:mb-0">
                    <a href="#" className="hover:text-gray-400">Home</a>
                    <a href="#" className="hover:text-gray-400">About</a>
                    <a href="#" className="hover:text-gray-400">Services</a>
                    <a href="#" className="hover:text-gray-400">Contact</a>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="text-xl hover:text-gray-400"><FaFacebook /></a>
                    <a href="#" className="text-xl hover:text-gray-400"><FaTwitter /></a>
                    <a href="#" className="text-xl hover:text-gray-400"><FaInstagram /></a>
                    <a href="#" className="text-xl hover:text-gray-400"><FaLinkedin /></a>
                </div>
            </div>
            <div className="text-center mt-8 text-gray-500">
                © {new Date().getFullYear()} MyWebsite. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
