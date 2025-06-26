// import React, { use } from 'react';
// import { AuthContext } from '../../Contexts/AuthContext';
// import Swal from 'sweetalert2';

// const FindRoommate = () => {

//     const { user } = use(AuthContext)

//     const handleAddData = e => {
//         e.preventDefault()
//         // console.log("hey mama");
//         const from = e.target;
//         const fromData = new FormData(from)
//         const newFromData = Object.fromEntries(fromData.entries())
//         // console.log(newFromData);
//         const likeCount = 0
//         const newFromDataWithLike = {...newFromData,likeCount}
//         // console.log(newFromDataWithLike);


//         fetch("https://roommate-finder-server-rho.vercel.app/roommates", {
//             method: "POST",
//             headers: {
//                 "content-type": "application/json",
//             },
//             body: JSON.stringify(newFromDataWithLike)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 // console.log("after sent data db", data);
//                 Swal.fire({
//                     position: "top-end",
//                     icon: "success",
//                     title: "Your post create successfully",
//                     showConfirmButton: false,
//                     timer: 1500
//                 });
//                 from.reset()
//             })





//     }
//     return (
//         <div className='p-16 bg-pink-50 dark:text-black my-10 rounded-4xl'>
//             <div className='text-center px-8'>
//                 <h1 className='text-3xl'>Add To Find RoomMate</h1>
//             </div>
//             <form onSubmit={handleAddData}>
//                 <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
//                     <fieldset className="fieldset  rounded-box p-4">
//                         <label className="label font-bold">Title </label>
//                         <input required type="text" name='title' className="border pl-5 bg-white border-gray-300 h-8" placeholder="Enter the Title " />
//                     </fieldset>
//                     <fieldset className="fieldset  rounded-box p-4">
//                         <label className="label font-bold">Location</label>
//                         <input required type="text" name='location' className="border pl-5 bg-white border-gray-300 h-8" placeholder="Enter your Location" />
//                     </fieldset>
//                     <fieldset className="fieldset  rounded-box p-4">
//                         <label className="label font-bold">Rent Amount</label>
//                         <input required type="text" name='rentAmount' className="border pl-5 bg-white border-gray-300 h-8" placeholder="Enter your Rent Amount" />
//                     </fieldset>
//                     <fieldset className="fieldset rounded-box p-4">
//                         <label className="label font-bold">Room Type</label>
//                         <select defaultValue="Pick a color" name='room' className="select border pl-5  w-full bg-white border-gray-300 h-8">
//                             <option disabled={true}>Room Type</option>
//                             <option>Single</option>
//                             <option>Share</option>
//                         </select>
//                     </fieldset>
//                     <fieldset className="fieldset rounded-box p-4">
//                         <label className="label font-bold">Lifestyle Preferences</label>
//                         <select required defaultValue="Pick a color" name='lifestyle' className="select border pl-5  w-full bg-white border-gray-300 h-8">
//                             <option disabled={true}>Lifestyle Preferences Type</option>
//                             <option>Pets</option>
//                             <option>Smoking</option>
//                             <option>Night Owl</option>
//                             <option>etc</option>
//                         </select>
//                     </fieldset>
//                     <fieldset className="fieldset rounded-box p-4">
//                         <label className="label font-bold">Availability</label>
//                         <select required defaultValue="Pick a color" name='availability' className="select border pl-5  w-full bg-white border-gray-300 h-8">
//                             <option disabled={true}>Select Availability</option>
//                             <option>available</option>
//                             <option>Not available</option>
//                         </select>
//                     </fieldset>
//                     <fieldset className="fieldset  rounded-box p-4">
//                         <label className="label font-bold">Email </label>
//                         <input required type="text" name='email' value={user.email} readOnly className="border pl-5 bg-white border-gray-300 h-8" placeholder="Enter Email " />
//                     </fieldset>
//                     <fieldset className="fieldset  rounded-box p-4">
//                         <label className="label font-bold">Name  </label>
//                         <input required type="text" name='name' value={user.displayName} readOnly className="border pl-5 bg-white border-gray-300 h-8" placeholder="Enter Name" />
//                     </fieldset>
//                 </div>
//                 <fieldset className="fieldset w-full rounded-box p-4">
//                     <label className="label font-bold">Contact Info </label>
//                     <input required type="text" name='photo' className="border bg-white pl-5 border-gray-300 h-8" placeholder="Enter Contact Info " />
//                 </fieldset>
//                 <fieldset className="fieldset  rounded-box p-4">
//                     <legend className="fieldset-legend font-bold dark:text-black">Your bio</legend>
//                     <textarea required className="textarea h-24 w-full  bg-white dark:text-black border-gray-300" name='bio' placeholder="Enter the Description" ></textarea>
//                 </fieldset>
//                 <input type="submit" className='btn w-full bg-white dark:text-black border-gray-300' value="Add" />
//             </form>
//         </div>
//     );
// };

// export default FindRoommate;




import React, { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import Swal from 'sweetalert2';

const FindRoommate = () => {
    const { user } = use(AuthContext);

    const handleAddData = e => {
        e.preventDefault();
        const from = e.target;
        const fromData = new FormData(from);
        const newFromData = Object.fromEntries(fromData.entries());
        const likeCount = 0;
        const newFromDataWithLike = { ...newFromData, likeCount };

        fetch("https://roommate-finder-server-rho.vercel.app/roommates", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newFromDataWithLike)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your post created successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                from.reset();
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-pink-300 py-12 px-6">
            <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-10">
                <div className='text-center mb-10'>
                    <h1 className='text-4xl font-bold text-gray-800'>Add To Find Roommate</h1>
                    <p className='text-gray-600'>Fill out the form below to create your roommate search post.</p>
                </div>

                <form onSubmit={handleAddData} className="space-y-6">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {/* Title */}
                        <fieldset className="rounded-box p-4 bg-white shadow-sm">
                            <label className="label font-semibold">Title</label>
                            <input required type="text" name='title' className="input w-full border-gray-300 bg-white" placeholder="Enter the Title" />
                        </fieldset>

                        {/* Location */}
                        <fieldset className="rounded-box p-4 bg-white shadow-sm">
                            <label className="label font-semibold">Location</label>
                            <input required type="text" name='location' className="input w-full border-gray-300 bg-white" placeholder="Enter your Location" />
                        </fieldset>

                        {/* Rent Amount */}
                        <fieldset className="rounded-box p-4 bg-white shadow-sm">
                            <label className="label font-semibold">Rent Amount</label>
                            <input required type="text" name='rentAmount' className="input w-full border-gray-300 bg-white" placeholder="Enter Rent Amount" />
                        </fieldset>

                        {/* Room Type */}
                        <fieldset className="rounded-box p-4 bg-white shadow-sm">
                            <label className="label font-semibold">Room Type</label>
                            <select name='room' defaultValue="" required className="select w-full border-gray-300 bg-white">
                                <option disabled value="">Room Type</option>
                                <option>Single</option>
                                <option>Share</option>
                            </select>
                        </fieldset>

                        {/* Lifestyle */}
                        <fieldset className="rounded-box p-4 bg-white shadow-sm">
                            <label className="label font-semibold">Lifestyle Preferences</label>
                            <select name='lifestyle' defaultValue="" required className="select w-full border-gray-300 bg-white">
                                <option disabled value="">Select Preference</option>
                                <option>Pets</option>
                                <option>Smoking</option>
                                <option>Night Owl</option>
                                <option>etc</option>
                            </select>
                        </fieldset>

                        {/* Availability */}
                        <fieldset className="rounded-box p-4 bg-white shadow-sm">
                            <label className="label font-semibold">Availability</label>
                            <select name='availability' defaultValue="" required className="select w-full border-gray-300 bg-white">
                                <option disabled value="">Select Availability</option>
                                <option>Available</option>
                                <option>Not Available</option>
                            </select>
                        </fieldset>

                        {/* Email */}
                        <fieldset className="rounded-box p-4 bg-white shadow-sm">
                            <label className="label font-semibold">Email</label>
                            <input type="text" name='email' value={user.email} readOnly className="input w-full border-gray-300 bg-gray-100 text-gray-600" />
                        </fieldset>

                        {/* Name */}
                        <fieldset className="rounded-box p-4 bg-white shadow-sm">
                            <label className="label font-semibold">Name</label>
                            <input type="text" name='name' value={user.displayName} readOnly className="input w-full border-gray-300 bg-gray-100 text-gray-600" />
                        </fieldset>
                    </div>

                    {/* Contact Info */}
                    <fieldset className="rounded-box p-4 bg-white shadow-sm">
                        <label className="label font-semibold">Contact Info</label>
                        <input required type="text" name='photo' className="input w-full border-gray-300 bg-white" placeholder="Phone number or other contact" />
                    </fieldset>

                    {/* Bio */}
                    <fieldset className="rounded-box p-4 bg-white shadow-sm">
                        <label className="label font-semibold">Your Bio</label>
                        <textarea required name='bio' className="textarea w-full h-28 border-gray-300 bg-white" placeholder="Tell potential roommates about yourself..."></textarea>
                    </fieldset>

                    {/* Submit Button */}
                    <div>
                        <button type="submit" className='btn w-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-bold border-none hover:from-indigo-700 hover:to-pink-700 shadow-md transition duration-300'>
                            Submit Roommate Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FindRoommate;
