import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { FaHouseUser } from 'react-icons/fa';
import { MdEventAvailable, MdLocationPin } from 'react-icons/md';
import { TbHomeShare } from 'react-icons/tb';
import Loader from '../../Loading/Loader';

const BrowseListing = () => {
    const [allData, setAllData] = useState([]);
    const [dataLoading, setDataLoading] = useState(true)


    useEffect(() => {
        fetch("https://roommate-finder-server-rho.vercel.app/roommatesAll")
            .then(res => res.json())
            .then(data => {
                setAllData(data)
                setDataLoading(false)
            });
    }, []);


    if (dataLoading) {
        return <Loader></Loader>
    }


    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 py-12 px-4">
            <div className="max-w-6xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden p-6">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Browse Listings</h2>

                {allData.length === 0 ? (
                    <div className="text-center text-gray-600 dark:text-gray-400 text-lg py-16">
                        No listings available right now.
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table w-full border border-gray-200 dark:border-gray-700">
                            <thead className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                                <tr>
                                    <th className="hidden lg:table-cell px-4 py-2 text-left">Name</th>
                                    <th className="px-4 py-2 text-left">Location</th>
                                    <th className="hidden lg:table-cell px-4 py-2 text-left">Email</th>
                                    <th className="hidden lg:table-cell px-4 py-2 text-left">Number</th>
                                    <th className="px-4 py-2 text-left">Rent</th>
                                    <th className="px-4 py-2 text-left">More</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allData.map(data => (
                                    <tr
                                        key={data._id}
                                        className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                                    >
                                        <td className="hidden lg:table-cell px-4 py-2">{data.name}</td>
                                        <td className="px-4 py-2">{data.location}</td>
                                        <td className="hidden lg:table-cell px-4 py-2">{data.email}</td>
                                        <td className="hidden lg:table-cell px-4 py-2">{data.photo}</td>
                                        <td className="px-4 py-2">{data.rentAmount}</td>
                                        <td className="px-4 py-2">
                                            <Link to={`/roommates/${data._id}`}>
                                                <button className="btn btn-sm bg-blue-600 text-white hover:bg-blue-700 rounded">
                                                    See More
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BrowseListing;
