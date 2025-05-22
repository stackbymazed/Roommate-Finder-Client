import React from 'react';
import { FaHouseUser } from 'react-icons/fa';
import { MdEventAvailable, MdLocationPin } from 'react-icons/md';
import { TbHomeShare } from 'react-icons/tb';
import { Link } from 'react-router';

const SinglePostData = ({ singlePostData }) => {
    const {availability,bio,location,rentAmount,room,title,_id} = singlePostData
    // console.log(singlePostData);
    const handleSeeMore = (id) => {
        console.log("click see more",id);

        // fetch(`http://localhost:3000/roommates/${id}`)
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        // })
    }
    return (
        <div className="card shadow-2xl my-5  bg-base-100 w-64 lg:w-96 border-2">
            <div className="card-body">
                <h2 className="card-title text-2xl">{title}</h2>
                <div className='flex gap-3'>
                    <FaHouseUser className='text-blue-600' size={20} />
                    <p>{rentAmount}</p>
                </div>
                <div className='flex gap-3'>
                    <MdLocationPin className='text-blue-600' size={20} />
                    <p> {location}</p>
                </div>
                <div className='flex gap-3'>
                    <TbHomeShare className='text-blue-400' size={20} />
                    <p>{room}</p>
                </div>
                <div className='flex gap-3'>
                    <MdEventAvailable className='text-green-600' size={20} />
                    <p>{availability}</p>
                </div>
                <div >
                    <p>{bio}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/roommates/${_id}`}><button className="btn btn-primary" onClick={()=>handleSeeMore(_id)}>See More...</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SinglePostData;