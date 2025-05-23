import React from 'react';
import { FaUsers, FaMapMarkerAlt, FaHandshake, FaBuilding, FaStar } from 'react-icons/fa';

const stats = [
    { icon: <FaUsers size={40} />, label: 'Active Roommates', value: '2,500+' },
    { icon: <FaMapMarkerAlt size={40} />, label: 'Cities Covered', value: '35+' },
    { icon: <FaHandshake size={40} />, label: 'Successful Matches', value: '1,200+' },
    { icon: <FaBuilding size={40} />, label: 'Available Rooms', value: '900+' },
    { icon: <FaStar size={40} />, label: 'Average Rating', value: '4.8 / 5' },
];

const Success = () => {
    return (
        <section className="my-20 px-4 max-w-6xl mx-auto">
            <div className="mb-10 text-center">
                <h2 className="text-4xl font-bold mb-4 dark:text-white">Find Your Perfect Roommate</h2>
                <p className="text-gray-600 max-w-xl mx-auto dark:text-white">
                    Join thousands of users who have found their ideal living partners through our trusted roommate finder platform. Safe, easy, and tailored to your needs.
                </p>
            </div>
            <div className="flex flex-wrap justify-between gap-6 dark:text-white">
                {stats.map((stat, index) => (
                    <div key={index} className="flex gap-3 text-center items-center flex-col sm:flex-row sm:text-left">
                        <div className="text-blue-600">{stat.icon}</div>
                        <div>
                            <p className="font-semibold text-lg dark:text-white">{stat.label}</p>
                            <p className="text-gray-700 dark:text-white">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Success;
