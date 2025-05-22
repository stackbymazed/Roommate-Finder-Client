import React, { useState } from 'react';
import { FaHouseUser } from 'react-icons/fa';
import { MdEventAvailable, MdLocationPin } from 'react-icons/md';
import { TbHomeShare } from 'react-icons/tb';
import { Link } from 'react-router';


const BrowseListing = () => {
    const [allData,setAllData] = useState([])
    fetch("http://localhost:3000/roommatesAll")
    .then(res => res.json())
    .then(Data => {
        // console.log(Data);
        setAllData(Data)
    })
    // console.log(allData);
    return (
        <div>
            {
                allData.map(data =>  <div key={data._id} className="card shadow-2xl my-auto  bg-base-100 w-64 lg:w-96 border-2">
            <div className="card-body">
                <h2 className="card-title text-2xl">{data.title}</h2>
                <div className='flex gap-3'>
                    <FaHouseUser className='text-blue-600' size={20} />
                    <p>{data.rentAmount}</p>
                </div>
                <div className='flex gap-3'>
                    <MdLocationPin className='text-blue-600' size={20} />
                    <p> {data.location}</p>
                </div>
                <div className='flex gap-3'>
                    <TbHomeShare className='text-blue-400' size={20} />
                    <p>{data.room}</p>
                </div>
                <div className='flex gap-3'>
                    <MdEventAvailable className='text-green-600' size={20} />
                    <p>{data.availability}</p>
                </div>
                <div >
                    <p>{data.bio}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/roommates/${data._id}`}><button className="btn btn-primary">See More...</button></Link>
                </div>
            </div>
        </div>)
            }
        </div>
    );
};

export default BrowseListing;