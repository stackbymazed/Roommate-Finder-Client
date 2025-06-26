import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { FaHouseUser } from "react-icons/fa";
import { MdLocationPin, MdEventAvailable, MdEmail } from "react-icons/md";
import { TbHomeShare } from "react-icons/tb";
import { GiLoveMystery } from "react-icons/gi";
import image from "../../assets/images (11).jpg";
import { AuthContext } from '../../Contexts/AuthContext';

const PostDetails = () => {
    const { user } = use(AuthContext);
    const initialUser = useLoaderData();
    const [users, setUser] = useState(initialUser);

    const {
        name, title, rentAmount, location, room, _id,
        availability, lifestyle, email, bio, likeCount, photo
    } = users;

    const [like, setLike] = useState(false);
    const [newLikeCount, setNewLikeCount] = useState(likeCount);

    const handleLike = () => {
        const updatedCount = newLikeCount + 1;
        setNewLikeCount(updatedCount);
        setLike(true);

        fetch(`https://roommate-finder-server-rho.vercel.app/roommates/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ likeCount: updatedCount })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setUser(prev => ({ ...prev, likeCount: updatedCount }));
                }
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-6 text-gray-900 dark:text-gray-100">
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-center text-blue-900 dark:text-white mb-6">{title}</h2>

                <div className="flex flex-col items-center gap-4">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={image} alt={name} />
                        </div>
                    </div>

                    <p className="text-xl font-semibold">{name}</p>
                    <p className="text-gray-600 dark:text-gray-300">{newLikeCount} people interested in</p>

                    {like && (
                        <div className="text-sm text-gray-500 dark:text-gray-400">Liked by: {photo}</div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 w-full">
                        <div className="flex items-center gap-2">
                            <FaHouseUser className="text-blue-700 dark:text-blue-400" />
                            <span>Rent: ৳{rentAmount}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdLocationPin className="text-red-600 dark:text-red-400" />
                            <span>{location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <TbHomeShare className="text-purple-600 dark:text-purple-400" />
                            <span>Room Type: {room}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdEventAvailable className="text-green-600 dark:text-green-400" />
                            <span>Status: {availability}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <GiLoveMystery className="text-pink-500" />
                            <span>Lifestyle: {lifestyle}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdEmail className="text-yellow-600 dark:text-yellow-400" />
                            <span>{email}</span>
                        </div>
                    </div>

                    <div className="mt-6 bg-gray-100 dark:bg-gray-800 p-4 rounded-xl w-full text-center">
                        <p className="italic">“{bio}”</p>
                    </div>

                    <button
                        onClick={handleLike}
                        disabled={user.email === email}
                        className={`mt-4 btn px-6 py-2 rounded-md font-semibold transition 
                            ${user.email === email
                                ? 'bg-gray-300 text-gray-600 dark:bg-gray-700 dark:text-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600'}`}
                    >
                        👍 Like
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;
