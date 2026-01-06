import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import Loader from '../../Loading/Loader';

const MyListings = () => {
    const { user } = use(AuthContext);

    const userEmail = user.email;

    const [userPost, setUserPost] = useState([]);
    const [Post, setPost] = useState([]);
    const [dataLoading, setDataLoading] = useState(true)

    useEffect(() => {
        fetch('https://roommate-finder-server-rho.vercel.app/roommatesAll')
            .then(res => res.json())
            .then(data => {
                setUserPost(data);
                const newData = data.filter(user => user.email === userEmail);
                setPost(newData);
                setDataLoading(false)
            });
    }, [userEmail]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure? ",
            text: "You won't be able to revert this! ",
            icon: "warning ",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it! "
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://roommate-finder-server-rho.vercel.app/roommates/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Deleted successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            const remainingPost = Post.filter(singlePost => singlePost._id !== id);
                            setPost(remainingPost);
                        }
                    });
            }
        });
    };
    if (dataLoading) {
        return <Loader></Loader>
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 py-12 px-4">
            <div className="max-w-6xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden p-6">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">My Listings</h2>

                {Post.length === 0 ? (
                    <div className="text-center text-gray-600 dark:text-gray-400 text-lg py-16">
                        You haven’t created any listings yet.
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table w-full border border-gray-200 dark:border-gray-700">
                            <thead className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                                <tr>
                                    <th className="hidden lg:table-cell px-4 py-2 text-left">Title</th>
                                    <th className="px-4 py-2 text-left">Location </th>
                                    <th className="px-4 py-2 text-left">Rent </th>
                                    <th className="hidden lg:table-cell px-4 py-2 text-left">Email </th>
                                    <th className="px-4 py-2 text-left">Actions </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Post.map(data => (
                                    <tr key={data._id} className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                                        <td className="hidden lg:table-cell px-4 py-2">{data.title}</td>
                                        <td className="px-4 py-2">{data.location}</td>
                                        <td className="px-4 py-2">{data.rentAmount}</td>
                                        <td className="hidden lg:table-cell px-4 py-2">{data.email}</td>
                                        <td className="px-4 py-2 space-x-2">
                                            <Link to={`/update/${data._id}`}>
                                                <button className="btn btn-sm bg-blue-600 text-white hover:bg-blue-700 rounded">Update</button>
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(data._id)}
                                                className="btn btn-sm bg-red-600 text-white hover:bg-red-700 rounded"
                                            >
                                                Delete
                                            </button>
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

export default MyListings;
