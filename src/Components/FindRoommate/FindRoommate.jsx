import React, { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import Swal from 'sweetalert2';

const FindRoommate = () => {

    const { user } = use(AuthContext)

    const handleAddData = e => {
        e.preventDefault()
        console.log("hey mama");
        const from = e.target;
        const fromData = new FormData(from)
        const newFromData = Object.fromEntries(fromData.entries())
        console.log(newFromData);


        fetch("http://localhost:3000/roommates", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newFromData)
        })
            .then(res => res.json())
            .then(data => {
                console.log("after sent data db", data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your post create successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                from.reset()
            })





    }
    return (
        <div className='p-16 bg-pink-100'>
            <div className='text-center p-8'>
                <h1 className='text-3xl'>Add To Find RoomMate</h1>
            </div>
            <form onSubmit={handleAddData}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <fieldset className="fieldset  rounded-box p-4">
                        <label className="label font-bold">Title </label>
                        <input type="text" name='title' className="border pl-5 bg-white border-gray-300 h-8" placeholder="Enter the Title " />
                    </fieldset>
                    <fieldset className="fieldset  rounded-box p-4">
                        <label className="label font-bold">Location</label>
                        <input type="text" name='location' className="border pl-5 bg-white border-gray-300 h-8" placeholder="Enter your Location" />
                    </fieldset>
                    <fieldset className="fieldset  rounded-box p-4">
                        <label className="label font-bold">Rent Amount</label>
                        <input type="text" name='rentAmount' className="border pl-5 bg-white border-gray-300 h-8" placeholder="Enter your Rent Amount" />
                    </fieldset>
                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label font-bold">Room Type</label>
                        <select defaultValue="Pick a color" name='room' className="select border pl-5  w-full bg-white border-gray-300 h-8">
                            <option disabled={true}>Room Type</option>
                            <option>Single</option>
                            <option>Share</option>
                        </select>
                    </fieldset>
                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label font-bold">Lifestyle Preferences</label>
                        <select defaultValue="Pick a color" name='lifestyle' className="select border pl-5  w-full bg-white border-gray-300 h-8">
                            <option disabled={true}>Lifestyle Preferences Type</option>
                            <option>Pets</option>
                            <option>Smoking</option>
                            <option>Night Owl</option>
                            <option>etc</option>
                        </select>
                    </fieldset>
                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label font-bold">Availability</label>
                        <select defaultValue="Pick a color" name='availability' className="select border pl-5  w-full bg-white border-gray-300 h-8">
                            <option disabled={true}>Select Availability</option>
                            <option>available</option>
                            <option>Not available</option>
                        </select>
                    </fieldset>
                    <fieldset className="fieldset  rounded-box p-4">
                        <label className="label font-bold">Email </label>
                        <input type="text" name='email' value={user.email} className="border pl-5 bg-white border-gray-300 h-8" placeholder="Enter Email " />
                    </fieldset>
                    <fieldset className="fieldset  rounded-box p-4">
                        <label className="label font-bold">Name  </label>
                        <input type="text" name='name' value={user.displayName} className="border pl-5 bg-white border-gray-300 h-8" placeholder="Enter Name" />
                    </fieldset>
                </div>
                <fieldset className="fieldset w-full rounded-box p-4">
                    <label className="label font-bold">Contact Info </label>
                    <input type="text" name='photo' className="border bg-white pl-5 border-gray-300 h-8" placeholder="Enter Contact Info " />
                </fieldset>
                <fieldset className="fieldset  rounded-box p-4">
                    <legend className="fieldset-legend font-bold">Your bio</legend>
                    <textarea className="textarea h-24 w-full" name='bio' placeholder="Enter the Description" ></textarea>
                </fieldset>
                <input type="submit" className='btn w-full ' value="Add" />
            </form>
        </div>
    );
};

export default FindRoommate;