import React from 'react';
import SinglePostData from '../SinglePostData/SinglePostData';

const PostSection = ({ postData }) => {
    return (
        <div className='bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-gray-800 min-h-screen py-10 px-4'>
            <h1 className='lg:text-2xl text-xl mx-auto font-bold text-center my-3 text-blue-800 dark:text-white'>
                Find Your Ideal Roommate
            </h1>
            <p className='text-center text-blue-800 mx-5 dark:text-white'>
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