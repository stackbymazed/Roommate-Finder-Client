import React from 'react';
import { Link } from 'react-router';
import image1 from "../../assets//images (10).jpg"
import image2 from "../../assets/download (9).jpg"
import image3 from "../../assets/images (11).jpg"
import image4 from "../../assets/images (12).jpg"

const Banner = () => {
    return (
        <section className="border-2 border-gray-100 rounded-3xl my-5 bg-gray-100">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-6 lg:py-6 lg:flex-row lg:justify-between">
                {/* Text Section */}
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-none">
                        Find Your <span className="dark:text-violet-600">Ideal Roommate</span>
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">
                        Discover compatible roommates based on preferences, lifestyle, and location.Make shared living easy, safe, and affordable—start your roommate journey today.
                        <br className="hidden md:inline lg:hidden" />
                        No more waiting in line. Pay anytime, from anywhere.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link to="/bills" className="relative inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                            <span className="relative text-black group-hover:text-white"> Find Now</span>
                        </Link>
                        <a className="relative inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                            <span className="relative text-black group-hover:text-white">Explore Features</span>
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex items-center justify-center lg:p-30 mt-8 lg:mt-0 lg:w-[700px]  lg:h-[400px] ">
                    <div className="carousel w-full ">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img
                                src={image1}
                                className=" h-[300px] rounded-xl" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide4" className="">❮</a>
                                <a href="#slide2" className="">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img
                                src={image2}
                                className=" h-[300px] rounded-xl" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide1" className="">❮</a>
                                <a href="#slide3" className="">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img
                                src={image3}
                                className=" h-[300px] rounded-xl" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide2" className="">❮</a>
                                <a href="#slide4" className="">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img
                                src={image4}
                                className=" h-[300px] rounded-xl" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide3" className="">❮</a>
                                <a href="#slide1" className="">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;