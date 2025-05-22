import React from 'react';
import SinglePostData from '../SinglePostData/SinglePostData';

const PostSection = ({ postData }) => {
    return (
        <div className=' space-y-5 bg-base-300 rounded-3xl my-10 py-10'>
            <h1 className='lg:text-2xl text-xl mx-auto font-bold text-center my-3 text-blue-800'>
                Find Your Ideal Roommate
            </h1>
            <p className='text-center text-blue-800 mx-5'>
                Discover like-minded individuals to share your space with. 
                Whether you're looking for a quiet study partner or a social roommate, 
                our platform helps you connect with the perfect match based on lifestyle, preferences, and location. 
                Start your journey to comfortable and compatible co-living today!
            </p>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center mx-14'>
                {
                    postData.map(singlePostData => <SinglePostData key={singlePostData._id} singlePostData={singlePostData}></SinglePostData>)
                }


            </div>
        </div>
    );
};

export default PostSection;