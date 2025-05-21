import React from 'react';
import SinglePostData from '../SinglePostData/SinglePostData';

const PostSection = ({ postData }) => {
    return (
        <div className='border-2 space-y-5 bg-base-300 rounded-3xl my-10'>
            <h1 className='text-2xl mx-auto font-bold text-center my-3 text-blue-800'>Find Your Ideal Roommate</h1>
            <p className='text-center text-blue-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Necessitatibus ipsum delectus, maiores mollitia aliquam consectetur corporis <br /> exercitationem omnis fuga, repudiandae obcaecati ad dolor maxime, iure tempora <br /> officiis incidunt dolores pariatur?</p>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 m-5'>
                {
                    postData.map(singlePostData => <SinglePostData key={singlePostData._id} singlePostData={singlePostData}></SinglePostData>)
                }


            </div>
        </div>
    );
};

export default PostSection;