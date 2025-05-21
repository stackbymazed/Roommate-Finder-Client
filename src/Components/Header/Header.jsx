import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logo from "../../assets/website-logo.png"
import { AuthContext } from '../../Contexts/AuthContext';

const Header = () => {

    const { user, SignOut } = use(AuthContext)
    const links = <>
        <NavLink className={({ isActive }) =>
            isActive ? "underline text-blue-600" : "text-gray-600"
        } to='/'><li>Home</li></NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "underline text-blue-600" : "text-gray-600"
        } to="/findRoommate"><li>Add to Find Roommate</li></NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "underline text-blue-600" : "text-gray-600"
        } to='/browseListing'><li>Browse Listing</li></NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "underline text-blue-600" : "text-gray-600"
        } to="/myListings"><li>My Listings</li></NavLink>
    </>


    const handleLogOut = () => {
        SignOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
                console.log(error);
            });
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-5">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl hidden lg:block">
                    <img className='w-[80px] h-[40px] bg-none' src={logo} alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end gap-3 mr-10">
                {
                    user ?
                        <div className="dropdown dropdown-hover mr-10">
                            <div tabIndex={0} >
                                <img className='w-[40px] h-[40px] rounded-full' src={user?.photoURL} alt="" />
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu  rounded-box z-1 w-30 p-2 shadow-sm">
                                <li className=' font-extrabold my-2'>{user?.displayName}</li>
                                <li>
                                    <Link to="/login">
                                        <button onClick={handleLogOut} className="relative inline-block px-4 py-2 font-medium group">
                                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                            <span className="relative text-black group-hover:text-white">LOGOUT</span>
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        :
                        <>
                            <Link to="/login">
                                <button className="relative inline-block px-4 py-2 font-medium group">
                                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                    <span className="relative text-black group-hover:text-white">LogIn</span>
                                </button>
                            </Link>
                            <Link to="/signup">
                                <button className="relative inline-block px-4 py-2 font-medium group">
                                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                    <span className="relative text-black group-hover:text-white">SignUp</span>
                                </button>
                            </Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;