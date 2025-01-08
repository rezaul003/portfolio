import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa'; // Import the icons from react-icons
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-white py-6 mt-12">
            <div className="container mx-auto text-center px-4">
                <h1 className="text-5xl font-bold mb-4">Follow me</h1>
                
                {/* Social Media Icons */}
                <div className="flex justify-center items-center space-x-6 mb-4 flex-wrap justify-center">
                    {/* Website Icon */}
                    <Link to="https://rkarim.netlify.app/" aria-label="Website">
                        <FaGlobe className="w-8 h-8 mb-4 sm:mb-0" />
                    </Link>

                    {/* GitHub Icon */}
                    <Link to="https://github.com/rezaul003" aria-label="GitHub">
                        <FaGithub className="w-8 h-8 mb-4 sm:mb-0" />
                    </Link>

                    {/* LinkedIn Icon */}
                    <Link to="https://www.linkedin.com/in/rezaul003/" aria-label="LinkedIn">
                        <FaLinkedin className="w-8 h-8 mb-4 sm:mb-0" />
                    </Link>
                </div>
                
                {/* Copyright text */}
                <p className="text-md text-gray-500 mt-12">
                    &copy; 2024 Rezaul Karim. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
