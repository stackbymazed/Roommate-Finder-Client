// import React, { use, useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router';
// import { FaHouseUser, FaHeart } from "react-icons/fa";
// import { MdLocationPin, MdEventAvailable, MdEmail } from "react-icons/md";
// import { TbHomeShare } from "react-icons/tb";
// import { GiLoveMystery } from "react-icons/gi";
// import image from "../../assets/images (11).jpg";
// import { AuthContext } from '../../Contexts/AuthContext';

// const PostDetails = () => {
//     const { user } = use(AuthContext)
//     const initialUser = useLoaderData();
//     const [users, setUser] = useState(initialUser)
//     const {
//         name, title, rentAmount, location, room, _id,
//         availability, lifestyle, email, bio, likeCount, photo
//     } = users;

//     const [like, setLike] = useState(false)
//     const [newLikeCount, setNewLikeCount] = useState(likeCount)
//     // console.log(newLikeCount);


//     const handleLike = () => {
//         if (!like) {
//             const updatedCount = newLikeCount + 1;
//             setNewLikeCount(updatedCount);
//             setLike(true);

//             fetch(`https://roommate-finder-server-rho.vercel.app/roommates/${_id}`, {
//                 method: "PATCH",
//                 headers: {
//                     "content-type": "application/json"
//                 },
//                 body: JSON.stringify({ likeCount: updatedCount })
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     // console.log(data);
//                     if (data.modifiedCount) {
//                         setUser(prev => ({ ...prev, likeCount: updatedCount }));
//                     }
//                 });
//         }
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

//                 <p>{likeCount} people interested in</p>
//                 {
//                     like ? <p>{photo}</p> : ""
//                 }


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

//                 {/* 👍 Like Button just shows an alert */}
//                 <button onClick={handleLike} disabled={user.email == email ? true : like} className="btn btn-primary">
//                     {/* <FaHeart className="mr-2 text-error" /> */}
//                     👍
//                     {like ? "Liked" : "Like"}
//                 </button>

//             </div>
//         </div>
//     );
// };

// export default PostDetails;



import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { FaHouseUser, FaHeart } from "react-icons/fa";
import { MdLocationPin, MdEventAvailable, MdEmail } from "react-icons/md";
import { TbHomeShare } from "react-icons/tb";
import { GiLoveMystery } from "react-icons/gi";
import image from "../../assets/images (11).jpg";
import { AuthContext } from '../../Contexts/AuthContext';

const PostDetails = () => {
    const { user } = use(AuthContext)
    const initialUser = useLoaderData();
    const [users, setUser] = useState(initialUser)
    const {
        name, title, rentAmount, location, room, _id,
        availability, lifestyle, email, bio, likeCount, photo
    } = users;

    const [like, setLike] = useState(false)
    const [newLikeCount, setNewLikeCount] = useState(likeCount)
    // console.log(newLikeCount);


    const handleLike = () => {
        const updatedCount = newLikeCount + 1;
        setNewLikeCount(updatedCount);
        setLike(true)

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
        <div className="max-w-2xl mx-auto my-10 p-6 bg-base-100 shadow-xl rounded-2xl border border-base-300">
            <h2 className="text-3xl font-bold text-center text-primary mb-6">{title}</h2>

            <div className="flex flex-col items-center gap-4">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} alt={name} />
                    </div>
                </div>

                <p className="text-xl font-semibold">{name}</p>

                <p>{likeCount} people interested in</p>
                {
                    like ? <p>{photo}</p> : ""
                }


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

                {/* 👍 Like Button just shows an alert */}
                <button
                    onClick={handleLike}
                    disabled={user.email === email} // nijer post hole disable
                    className="btn btn-primary"
                >
                    👍 Like
                </button>


            </div>
        </div>
    );
};

export default PostDetails;



