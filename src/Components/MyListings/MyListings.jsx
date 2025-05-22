import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { Link } from 'react-router';

const MyListings = () => {
    const { user } = use(AuthContext)
    const userEmail = user.email
    const [userPost, setUserPost] = useState([])
    const [Post, setPost] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/roommates')
            .then(res => res.json())
            .then(data => setUserPost(data))


    }, [])


    useEffect(() => {
        const newData = userPost.filter(user => user.email == userEmail)
        console.log(newData);
        setPost(newData)

    }, [userEmail, userPost])


    return (
            <div className="overflow-x-auto my-10">
                <table className="table table-zebra border-4">
                    {/* head */}
                    <thead className='border-2'>
                        <tr>
                            <th className='text-xl font-bold'>Title</th>
                            <th className='text-xl font-bold'>Location</th>
                            <th className='text-xl font-bold'>Rent</th>
                            <th className='text-xl font-bold'>Email</th>
                            <th className='text-xl font-bold'>Actions</th>
                        </tr>
                    </thead>
                    {
                        Post.map(data =>  <tbody className='border-2'>
                        {/* row 1 */}
                        <tr>
                            <th>{data.title}</th>
                            <td>{data.location}</td>
                            <td>{data.rentAmount}</td>
                            <td>{data.email}</td>
                            <td className='gap-3'>
                                <Link to="/update"><button className='btn '>update</button></Link>
                                <button className='btn'>delete</button>
                            </td>
                        </tr>
                    </tbody>)
                    }
                   
                </table>
            </div>
    );
};

export default MyListings;