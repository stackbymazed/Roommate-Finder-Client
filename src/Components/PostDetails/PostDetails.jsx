// import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router';
// import { FaHouseUser, FaHeart } from "react-icons/fa";
// import { MdLocationPin, MdEventAvailable, MdEmail } from "react-icons/md";
// import { TbHomeShare } from "react-icons/tb";
// import { GiLoveMystery } from "react-icons/gi";
// import image from "../../assets/images (11).jpg";

// const PostDetails = () => {
//     const user = useLoaderData();
//     const {
//         _id, name, title, rentAmount, location, room,
//         availability, lifestyle, email, bio
//     } = user;

//     const storageKey = `roommate-like-${_id}`;
//     const [liked, setLiked] = useState(false);
//     const [likeCount, setLikeCount] = useState(0);

//     useEffect(() => {
//         const saved = JSON.parse(localStorage.getItem(storageKey)) || {
//             liked: false,
//             likeCount: 0
//         };
//         setLiked(saved.liked);
//         setLikeCount(saved.likeCount);
//     }, [_id]);

//     const handleLike = () => {
//         const newLiked = !liked;
//         const newCount = newLiked ? likeCount + 1 : Math.max(likeCount - 1, 0);
//         setLiked(newLiked);
//         setLikeCount(newCount);
//         localStorage.setItem(storageKey, JSON.stringify({
//             liked: newLiked,
//             likeCount: newCount
//         }));
//     };

//     return (
//         <div className="max-w-2xl mx-auto my-10 p-6 bg-base-100 shadow-xl rounded-2xl border border-base-300">
//             <h2 className="text-3xl font-bold text-center text-primary mb-6">{title}</h2>

//             <div className="flex flex-col items-center gap-4">
//                 <div className="avatar">
//                     <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
//                         <img src={image} alt={name} />
//                     </div>
//                 </div>

//                 <p className="text-xl font-semibold">{name}</p>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 w-full">
//                     <div className="flex items-center gap-2 text-base-content">
//                         <FaHouseUser className="text-primary" />
//                         <span>Rent: ৳{rentAmount}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-base-content">
//                         <MdLocationPin className="text-error" />
//                         <span>{location}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-base-content">
//                         <TbHomeShare className="text-purple-500" />
//                         <span>Room Type: {room}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-base-content">
//                         <MdEventAvailable className="text-success" />
//                         <span>Status: {availability}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-base-content">
//                         <GiLoveMystery className="text-pink-500" />
//                         <span>Lifestyle: {lifestyle}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-base-content">
//                         <MdEmail className="text-warning" />
//                         <span>{email}</span>
//                     </div>
//                 </div>

//                 <div className="mt-6 bg-base-200 p-4 rounded-xl w-full text-center">
//                     <p className="text-base-content italic">“{bio}”</p>
//                 </div>

//                 {/* 👍 Like Button with Count */}
//                 <button
//                     onClick={handleLike}
//                     className={`btn mt-4 ${liked ? 'btn-error text-white' : 'btn-outline'}`}
//                 >
//                     <FaHeart className={`mr-2 ${liked ? 'text-white' : 'text-error'}`} />
//                     {liked ? 'Liked' : 'Like'} ({likeCount})
//                 </button>

//                 <button className="btn btn-primary mt-4">Contact Now</button>
//             </div>
//         </div>
//     );
// };

// export default PostDetails;


import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { FaHouseUser, FaHeart } from "react-icons/fa";
import { MdLocationPin, MdEventAvailable, MdEmail } from "react-icons/md";
import { TbHomeShare } from "react-icons/tb";
import { GiLoveMystery } from "react-icons/gi";
import image from "../../assets/images (11).jpg";

const PostDetails = () => {
    const user = useLoaderData();
    const {
        _id, name, title, rentAmount, location, room,
        availability, lifestyle, email, bio
    } = user;

    const storageKey = `roommate-like-${_id}`;
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem(storageKey)) || {
            liked: false,
            likeCount: 0
        };
        setLiked(saved.liked);
        setLikeCount(saved.likeCount);
    }, [_id]);

    const handleLike = () => {
        const newLiked = !liked;
        const newCount = newLiked ? likeCount + 1 : Math.max(likeCount - 1, 0);
        setLiked(newLiked);
        setLikeCount(newCount);
        localStorage.setItem(storageKey, JSON.stringify({
            liked: newLiked,
            likeCount: newCount
        }));
    };

    return (
        <div className="max-w-2xl mx-auto my-10 p-6 bg-base-100 shadow-xl rounded-2xl border border-base-300">
            {/* Top text showing number of people interested */}
            <p className="text-center text-lg font-semibold text-primary mb-4">
                {likeCount} people interested in
            </p>

            <h2 className="text-3xl font-bold text-center text-primary mb-6">{title}</h2>

            <div className="flex flex-col items-center gap-4">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} alt={name} />
                    </div>
                </div>

                <p className="text-xl font-semibold">{name}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 w-full">
                    <div className="flex items-center gap-2 text-base-content">
                        <FaHouseUser className="text-primary" />
                        <span>Rent: ৳{rentAmount}</span>
                    </div>
                    <div className="flex items-center gap-2 text-base-content">
                        <MdLocationPin className="text-error" />
                        <span>{location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-base-content">
                        <TbHomeShare className="text-purple-500" />
                        <span>Room Type: {room}</span>
                    </div>
                    <div className="flex items-center gap-2 text-base-content">
                        <MdEventAvailable className="text-success" />
                        <span>Status: {availability}</span>
                    </div>
                    <div className="flex items-center gap-2 text-base-content">
                        <GiLoveMystery className="text-pink-500" />
                        <span>Lifestyle: {lifestyle}</span>
                    </div>
                    <div className="flex items-center gap-2 text-base-content">
                        <MdEmail className="text-warning" />
                        <span>{email}</span>
                    </div>
                </div>

                <div className="mt-6 bg-base-200 p-4 rounded-xl w-full text-center">
                    <p className="text-base-content italic">“{bio}”</p>
                </div>

                {/* 👍 Like Button with Count */}
                <button
                    onClick={handleLike}
                    className={`btn mt-4 ${liked ? 'btn-error text-white' : 'btn-outline'}`}
                >
                    <FaHeart className={`mr-2 ${liked ? 'text-white' : 'text-error'}`} />
                    {liked ? 'Liked' : 'Like'} ({likeCount})
                </button>

                {/* Show Contact Number only if liked */}
                {liked && (
                    <div className="mt-4 p-4 bg-base-200 rounded-lg w-full text-center text-lg font-semibold">
                        Contact Number: <span className="text-primary">+880123456789</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostDetails;
