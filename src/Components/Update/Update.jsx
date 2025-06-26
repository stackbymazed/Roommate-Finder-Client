import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Update = () => {
    const updateData = useLoaderData();
    const {
        _id, title, room, photo, name, rentAmount, location,
        lifestyle, email, bio, availability
    } = updateData;

    const navigate = useNavigate();

    const handleUpdate = e => {
        e.preventDefault();
        const from = e.target;
        const formData = new FormData(from);
        const newFromData = Object.fromEntries(formData.entries());

        fetch(`https://roommate-finder-server-rho.vercel.app/roommates/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newFromData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Post Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    navigate("/myListings");
                }
            });
    };

    return (
        <div className="p-8 md:p-16 my-10 rounded-3xl shadow-lg bg-gradient-to-br from-pink-100 to-pink-200 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100">
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold">Update Your Roommate Post</h1>
            </div>

            <form onSubmit={handleUpdate}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Title */}
                    <div>
                        <label className="font-semibold">Title</label>
                        <input type="text" name="title" defaultValue={title}
                            className="w-full mt-1 p-2 rounded-md border bg-white dark:bg-gray-100 text-black border-gray-300"
                            placeholder="Enter the Title"
                            required />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="font-semibold">Location</label>
                        <input type="text" name="location" defaultValue={location}
                            className="w-full mt-1 p-2 rounded-md border bg-white dark:bg-gray-100 text-black border-gray-300"
                            placeholder="Enter your Location"
                            required />
                    </div>

                    {/* Rent Amount */}
                    <div>
                        <label className="font-semibold">Rent Amount</label>
                        <input type="text" name="rentAmount" defaultValue={rentAmount}
                            className="w-full mt-1 p-2 rounded-md border bg-white dark:bg-gray-100 text-black border-gray-300"
                            placeholder="Enter Rent Amount"
                            required />
                    </div>

                    {/* Room Type */}
                    <div>
                        <label className="font-semibold">Room Type</label>
                        <select name="room" defaultValue={room}
                            className="w-full mt-1 p-2 rounded-md border bg-white dark:bg-gray-100 text-black border-gray-300"
                            required>
                            <option disabled>Room Type</option>
                            <option>Single</option>
                            <option>Share</option>
                        </select>
                    </div>

                    {/* Lifestyle Preferences */}
                    <div>
                        <label className="font-semibold">Lifestyle Preferences</label>
                        <select name="lifestyle" defaultValue={lifestyle}
                            className="w-full mt-1 p-2 rounded-md border bg-white dark:bg-gray-100 text-black border-gray-300"
                            required>
                            <option disabled>Lifestyle Preferences</option>
                            <option>Pets</option>
                            <option>Smoking</option>
                            <option>Night Owl</option>
                            <option>etc</option>
                        </select>
                    </div>

                    {/* Availability */}
                    <div>
                        <label className="font-semibold">Availability</label>
                        <select name="availability" defaultValue={availability}
                            className="w-full mt-1 p-2 rounded-md border bg-white dark:bg-gray-100 text-black border-gray-300"
                            required>
                            <option disabled>Select Availability</option>
                            <option>available</option>
                            <option>Not available</option>
                        </select>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="font-semibold">Email</label>
                        <input type="text" name="email" value={email} readOnly
                            className="w-full mt-1 p-2 rounded-md border bg-gray-100 text-gray-600 border-gray-300"
                            required />
                    </div>

                    {/* Name */}
                    <div>
                        <label className="font-semibold">Name</label>
                        <input type="text" name="name" value={name} readOnly
                            className="w-full mt-1 p-2 rounded-md border bg-gray-100 text-gray-600 border-gray-300"
                            required />
                    </div>
                </div>

                {/* Contact Info */}
                <div className="mt-6">
                    <label className="font-semibold">Contact Info</label>
                    <input type="text" name="photo" defaultValue={photo}
                        className="w-full mt-1 p-2 rounded-md border bg-white dark:bg-gray-100 text-black border-gray-300"
                        placeholder="Enter Contact Info"
                        required />
                </div>

                {/* Bio */}
                <div className="mt-6">
                    <label className="font-semibold">Your Bio</label>
                    <textarea name="bio" defaultValue={bio}
                        className="w-full mt-1 p-2 h-28 rounded-md border bg-white dark:bg-gray-100 text-black border-gray-300"
                        placeholder="Tell more about yourself"
                        required />
                </div>

                {/* Submit Button */}
                <div className="mt-10">
                    <input type="submit"
                        className="btn w-full bg-gradient-to-r from-pink-500 to-pink-700 border-none text-white hover:from-pink-600 hover:to-pink-800 shadow-lg transform hover:scale-[1.01] transition-transform"
                        value="Update Post" />
                </div>
            </form>
        </div>
    );
};

export default Update;
