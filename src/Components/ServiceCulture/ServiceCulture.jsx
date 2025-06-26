import React from 'react';
import image from "../../assets/images (12).jpg";
import { FaUserFriends, FaShieldAlt, FaComments, FaMapMarkedAlt } from 'react-icons/fa';

const ServiceCulture = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-10 rounded-xl shadow-inner">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={image}
            alt="Roommate Finder Service"
            className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 w-full max-w-md"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h3 className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
            Why Choose Us
          </h3>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
            Find your perfect roommate easily, safely, and stress-free.
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300">
            We make finding the perfect roommate easier and more secure —
            helping you focus on enjoying your shared living experience.
          </p>

          {/* Features */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaUserFriends size={22} className="text-green-600 mt-1" />
              <p className="text-lg text-gray-800 dark:text-gray-200">
                Smart Matchmaking Based on Preferences
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaShieldAlt size={22} className="text-green-600 mt-1" />
              <p className="text-lg text-gray-800 dark:text-gray-200">
                Verified Profiles & Secure Interactions
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaComments size={22} className="text-green-600 mt-1" />
              <p className="text-lg text-gray-800 dark:text-gray-200">
                Real-Time Chat with Potential Roommates
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkedAlt size={22} className="text-green-600 mt-1" />
              <p className="text-lg text-gray-800 dark:text-gray-200">
                Find Rooms Nearby with Location Filters
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCulture;
