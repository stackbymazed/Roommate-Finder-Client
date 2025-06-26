import React from 'react';
import { FaHouseUser } from 'react-icons/fa';
import { MdEventAvailable, MdLocationPin } from 'react-icons/md';
import { TbHomeShare } from 'react-icons/tb';
import { Link } from 'react-router';
import { Slide } from "react-awesome-reveal";

const SinglePostData = ({ singlePostData }) => {
  const { availability, bio, location, rentAmount, room, title, _id } = singlePostData;

  return (
    <Slide triggerOnce>
      <div
        className="
          w-full max-w-xs md:max-w-sm lg:max-w-md
          h-[300px]
          my-5 rounded-2xl
          shadow-lg border border-gray-200 dark:border-gray-700
          transition-transform duration-300 hover:scale-105 hover:shadow-xl
          bg-gradient-to-br from-white via-blue-50 to-blue-100
          dark:from-gray-800 dark:via-gray-900 dark:to-gray-950
          text-gray-800 dark:text-gray-100
          mx-auto
        "
      >
        <div className="card-body flex flex-col justify-between p-5 h-full overflow-hidden">
          <div className="space-y-3 flex-grow overflow-hidden">
            {/* Title with line clamp */}
            <h2 
              className="card-title text-xl font-bold line-clamp-3"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {title}
            </h2>

            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <FaHouseUser className="text-blue-500" size={20} />
              <p>{rentAmount}</p>
            </div>

            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <MdLocationPin className="text-red-500" size={20} />
              <p>{location}</p>
            </div>

            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <TbHomeShare className="text-purple-500" size={20} />
              <p>{room}</p>
            </div>

            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <MdEventAvailable className="text-green-500" size={20} />
              <p>{availability}</p>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{bio}</p>
          </div>

          <div className="mt-4">
            <Link to={`/roommates/${_id}`}>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-300">
                See More...
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default SinglePostData;
