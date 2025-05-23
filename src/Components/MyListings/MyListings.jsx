import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyListings = () => {
    const { user } = use(AuthContext)
    const userEmail = user.email
    const [userPost, setUserPost] = useState([])
    console.log(userPost);
    const [Post, setPost] = useState([])
    // useEffect(() => {



    // }, [])


    useEffect(() => {

        fetch('http://localhost:3000/roommatesAll')
            .then(res => res.json())
            .then(data => setUserPost(data))

        const newData = userPost.filter(user => user.email == userEmail)
        console.log(newData);
        setPost(newData)

    }, [userEmail, userPost])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/roommates/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your work has been saved",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            const remainingPost = Post.filter(singlePost => singlePost._id !== id);
                            setPost(remainingPost)
                        }
                    })
            }
        });

    }


    return (
        <div className="overflow-x-auto my-10 mx-3">
            <table className="table table-zebra border-2">
                {/* head */}
                <thead className=''>
                    <tr>
                        <th className='text-xl font-bold hidden lg:block'>Title</th>
                        <th className='text-xl font-bold'>Location</th>
                        <th className='text-xl font-bold'>Rent</th>
                        <th className='text-xl font-bold hidden lg:block'>Email</th>
                        <th className='text-xl font-bold'>Actions</th>
                    </tr>
                </thead>
                {
                    Post.map(data => <tbody key={data._id} className='border-2'>
                        {/* row 1 */}
                        <tr>
                            <th className=' hidden lg:block'>{data.title}</th>
                            <td>{data.location}</td>
                            <td>{data.rentAmount}</td>
                            <td className=' hidden lg:block'>{data.email}</td>
                            <td className=''>
                                <Link to={`/update/${data._id}`} >   
                                 <button className="relative inline-block px-4 py-2 font-medium group">
                                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                    <span className="relative text-black group-hover:text-white">Update</span>
                                </button>
                                </Link>
                                 <button onClick={() => handleDelete(data._id)} className="relative inline-block px-4 py-2 font-medium group">
                                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                    <span className="relative text-black group-hover:text-white">Delete .</span>
                                </button>
                            </td>
                        </tr>
                    </tbody>)
                }

            </table>
        </div>
    );
};

export default MyListings;