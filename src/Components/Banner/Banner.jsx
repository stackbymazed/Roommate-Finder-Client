import React from 'react';
import { Link } from 'react-router';
import image1 from '../../assets/images (10).jpg';
import image2 from '../../assets/download (9).jpg';
import image3 from '../../assets/images (11).jpg';
import image4 from '../../assets/images (12).jpg';
import { Typewriter } from 'react-simple-typewriter';
import { Fade, Slide } from 'react-awesome-reveal';

const Banner = () => {
  return (
    <section className="border-2 border-gray-100 dark:border-gray-700 rounded-3xl my-5 bg-gray-50 dark:bg-gray-900 transition duration-300">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center p-6 lg:p-10">
        {/* Text Section */}
        <div className="flex flex-col justify-center text-center lg:text-left max-w-xl">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-gray-800 dark:text-white">
            Find Your{' '}
            <span className="text-blue-500">
              <Typewriter
                words={['Ideal', 'Best', 'Friendly', 'Good']}
                loop={10000}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
              />
              {' '}Roommate
            </span>
          </h1>

          <Slide triggerOnce>
            <Fade>
              <p className="mt-6 mb-8 text-base sm:text-lg text-gray-700 dark:text-gray-300">
                Discover compatible roommates based on preferences, lifestyle, and location.
                Make shared living easy, safe, and affordable—start your roommate journey today.
                <br className="hidden md:inline lg:hidden" />
                No more waiting in line. Pay anytime, from anywhere.
              </p>
            </Fade>
          </Slide>

          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-3 sm:gap-0">
            <Link to="/findRoommate">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition duration-300">
                Find Now
              </button>
            </Link>
            <Link to="/login">
              <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-lg transition duration-300">
                Explore Features
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-2xl mt-10 lg:mt-0">
          <div className="carousel w-full rounded-xl overflow-hidden border dark:border-gray-700">
            {[image1, image2, image3, image4].map((img, index) => (
              <div key={index} id={`slide${index + 1}`} className="carousel-item relative w-full">
                <img src={img} className="w-full h-[300px] object-cover" alt={`Roommate ${index + 1}`} />
                <div className="absolute inset-y-1/2 left-0 right-0 flex justify-between px-5 text-2xl text-black dark:text-white">
                  <a href={`#slide${(index + 3) % 4 + 1}`}>❮</a>
                  <a href={`#slide${(index + 1) % 4 + 1}`}>❯</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
