import React from 'react';
import image from "../../assets/images (12).jpg";
import { FaUserFriends, FaShieldAlt, FaComments, FaMapMarkedAlt } from 'react-icons/fa';


const ServiceCulture = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto my-10 items-center px-4'>
            <div>
                <img src={image} alt="Roommate Finder Service" className='rounded-xl shadow-md' />
            </div>
            <div className='space-y-5 my-5'>
                <h1 className='text-xl font-semibold text-blue-600'>WHY CHOOSE US</h1>

                <p className='text-xl font-semibold text-gray-800 dark:text-white'>
                    We make finding the perfect roommate easier, safer, and stress-free — helping you focus on enjoying your shared living experience.
                </p>

                <div className='space-y-4 ml-6'>
                    <div className='flex gap-3 items-center'>
                        <FaUserFriends size={20} className='text-green-600 ' />
                        <p className='text-lg font-medium text-gray-700 dark:text-white'>Smart Matchmaking Based on Preferences</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <FaShieldAlt size={20} className='text-green-600' />
                        <p className='text-lg font-medium text-gray-700 dark:text-white'>Verified Profiles & Secure Interactions</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <FaComments size={20} className='text-green-600' />
                        <p className='text-lg font-medium text-gray-700 dark:text-white'>Real-Time Chat with Potential Roommates</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <FaMapMarkedAlt size={20} className='text-green-600' />
                        <p className='text-lg font-medium dark:text-white text-gray-700'>Find Rooms Nearby with Location Filters</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCulture;
