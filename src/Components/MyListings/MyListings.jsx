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
        <div className="overflow-x-auto my-10">
            <table className="table table-zebra border-2">
                {/* head */}
                <thead className=''>
                    <tr>
                        <th className='text-xl font-bold'>Title</th>
                        <th className='text-xl font-bold'>Location</th>
                        <th className='text-xl font-bold'>Rent</th>
                        <th className='text-xl font-bold'>Email</th>
                        <th className='text-xl font-bold'>Actions</th>
                    </tr>
                </thead>
                {
                    Post.map(data => <tbody key={data._id} className='border-2'>
                        {/* row 1 */}
                        <tr>
                            <th>{data.title}</th>
                            <td>{data.location}</td>
                            <td>{data.rentAmount}</td>
                            <td>{data.email}</td>
                            <td className='gap-3'>
                                <Link to={`/update/${data._id}`} ><button className='btn'>update</button></Link>
                                <button className='btn' onClick={() => handleDelete(data._id)}>delete</button>
                            </td>
                        </tr>
                    </tbody>)
                }

            </table>
        </div>
    );
};

export default MyListings;