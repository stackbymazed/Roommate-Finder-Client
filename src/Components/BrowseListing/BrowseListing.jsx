import React, { useEffect, useState } from 'react';
import { FaHouseUser } from 'react-icons/fa';
import { MdEventAvailable, MdLocationPin } from 'react-icons/md';
import { TbHomeShare } from 'react-icons/tb';
import { Link } from 'react-router';


const BrowseListing = () => {
    const [allData, setAllData] = useState([])
   useEffect(()=>{
    fetch("https://roommate-finder-server-rho.vercel.app/roommatesAll")
        .then(res => res.json())
        .then(Data => {
            // console.log(Data);
            setAllData(Data)
        })
   },[])
    // console.log(allData);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th className='w-1/6 text-xl hidden lg:flex'>Name</th>
                            <th className='w-1/6 text-xl'>location</th>
                            <th className='w-1/6 text-xl hidden lg:flex'>Email</th>
                            <th className='w-1/6 text-xl hidden lg:inline'> Number</th>
                            <th className='w-1/6 text-xl '>Rent</th>
                            <th className='w-1/6 text-xl'>More</th>
                        </tr>

                    </thead>
                    {
                        allData.map((data) => <tbody key={data._id}>
                            <tr>

                                <td className='hidden lg:block'> {data.name}</td>
                                <td>{data.location}</td>
                                <td className='hidden lg:block'>{data.email}</td>
                                <td className='hidden lg:block'>{data.photo}</td>
                                <td>{data.rentAmount}</td>
                                <td>
                                    <Link to={`/roommates/${data._id}`}>
                                        <button className="relative inline-block px-4 py-2 font-medium group">
                                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                            <span className="relative text-black group-hover:text-white">See more</span>
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default BrowseListing;




