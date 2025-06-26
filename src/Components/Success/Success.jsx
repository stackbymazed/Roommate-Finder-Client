import React from 'react';
import { FaUsers, FaMapMarkerAlt, FaHandshake, FaBuilding, FaStar, FaHeart } from 'react-icons/fa';

const stats = [
  { icon: <FaUsers size={40} />, label: 'Active Roommates', value: '2,500+' },
  { icon: <FaMapMarkerAlt size={40} />, label: 'Cities Covered', value: '35+' },
  { icon: <FaHandshake size={40} />, label: 'Successful Matches', value: '1,200+' },
  { icon: <FaBuilding size={40} />, label: 'Available Rooms', value: '900+' },
  { icon: <FaStar size={40} />, label: 'Average Rating', value: '4.8 / 5' },
  { icon: <FaHeart size={40} />, label: 'Happy Users', value: '3,000+' },
];

const Success = () => {
  return (
    <section
      className="
        my-20 px-6
        max-w-[1366px] mx-auto
        bg-gradient-to-r from-blue-50 via-white to-blue-50
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        rounded-xl shadow-inner
        transition-colors duration-500
      "
    >
      <div className="mb-10 text-center px-4">
        <h2 className="text-4xl font-bold pt-10 mb-4 text-gray-900 dark:text-white">
          Find Your Perfect Roommate
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Join thousands of users who have found their ideal living partners through our trusted roommate finder platform. Safe, easy, and tailored to your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="
              flex flex-col items-center sm:flex-row sm:items-center sm:text-left
              gap-4 p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800
              transition
            "
          >
            <div className="text-blue-600 dark:text-blue-400">
              {stat.icon}
            </div>
            <div>
              <p className="font-semibold text-lg text-gray-900 dark:text-white">
                {stat.label}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Success;
