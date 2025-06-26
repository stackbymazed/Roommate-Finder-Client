import React from 'react';
import Logo from '../../Logo/Logo';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-blue-950 via-gray-900 to-gray-800 text-white py-12 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Logo Section */}
                <div>
                    <Logo />
                    <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                        RoomMatch is your trusted companion for finding compatible roommates across Bangladesh.
                    </p>
                </div>

                {/* Contact */}
                <div>
                    <h6 className="text-lg font-semibold mb-3">Contact</h6>
                    <ul className="text-gray-300 space-y-2 text-sm">
                        <li>Email: <a href="mailto:majedulislam223311@gmail.com" className="hover:text-white">majedulislam223311@gmail.com</a></li>
                        <li>Phone: +880 123-456-7890</li>
                        <li>Address: Dhaka, Bangladesh</li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h6 className="text-lg font-semibold mb-3">Company</h6>
                    <ul className="text-gray-300 space-y-2 text-sm">
                        <li><a className="hover:text-white" href="#">About RoomMatch</a></li>
                        <li><a className="hover:text-white" href="#">How It Works</a></li>
                        <li><a className="hover:text-white" href="#">FAQs</a></li>
                        <li><a className="hover:text-white" href="#">Blog</a></li>
                    </ul>
                </div>

                {/* Social Links */}


                <div className="flex gap-4 mt-3">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition text-white"
                    >
                        <FaFacebookF size={18} />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="p-3 rounded-full bg-sky-500 hover:bg-sky-600 transition text-white"
                    >
                        <FaTwitter size={18} />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="p-3 rounded-full bg-pink-500 hover:bg-pink-600 transition text-white"
                    >
                        <FaInstagram size={18} />
                    </a>
                </div>

            </div>

            <div className="text-center mt-10 text-sm text-gray-500 border-t border-gray-700 pt-6">
                &copy; {new Date().getFullYear()} RoomMatch. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
