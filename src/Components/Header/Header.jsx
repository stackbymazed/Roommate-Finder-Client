import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import { FaHome } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md';

const Header = () => {
    const { user, SignOut } = useContext(AuthContext);
    const [theme, setTheme] = useState('light');

    // Load saved theme or system preference
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme) setTheme(savedTheme);
        else if (prefersDark) setTheme('dark');
    }, []);

    // Apply theme to HTML
    useEffect(() => {
        const html = document.documentElement;
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Toggle theme
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const links = (
        <>
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-500 underline' : 'text-gray-700 dark:text-white'}>
                <li>Home</li>
            </NavLink>
            {/* <NavLink to="/findRoommate" className={({ isActive }) => isActive ? 'text-blue-500 underline' : 'text-gray-700 dark:text-white'}>
                <li>Add to Find Roommate</li>
            </NavLink> */}
            <NavLink to="/browseListing" className={({ isActive }) => isActive ? 'text-blue-500 underline' : 'text-gray-700 dark:text-white'}>
                <li>Browse Listing</li>
            </NavLink>
            {/* <NavLink to="/myListings" className={({ isActive }) => isActive ? 'text-blue-500 underline' : 'text-gray-700 dark:text-white'}>
                <li>My Listings</li>
            </NavLink> */}
            <NavLink to="/aboutUs" className={({ isActive }) => isActive ? 'text-blue-500 underline' : 'text-gray-700 dark:text-white'}>
                <li>About Us</li>
            </NavLink>
            <NavLink to="/contactUs" className={({ isActive }) => isActive ? 'text-blue-500 underline' : 'text-gray-700 dark:text-white'}>
                <li>Contact Us</li>
            </NavLink>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-blue-500 underline' : 'text-gray-700 dark:text-white'}>
                <li>Dashboard</li>
            </NavLink>
        </>
    );

    const handleLogOut = () => {
        SignOut().catch((error) => console.error(error));
    };

    return (
        <div className="navbar sticky top-0 z-50 px-4 shadow-md border-b
  bg-gradient-to-r 
  from-blue-400 
  via-orange-200  
  to-indigo-400
  dark:from-gray-900 dark:via-gray-800 dark:to-black 
  text-white transition-colors duration-500">

            <div className="navbar-start">
                {/* Mobile Dropdown */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white dark:bg-gray-800 rounded-box w-52 space-y-2">
                        {links}
                    </ul>
                </div>

                {/* Logo & Text */}
                <Link to="/" className="hidden lg:flex items-center gap-2">
                    <div className="relative">
                        <FaHome className="text-3xl" />
                        <MdPerson className="absolute top-1 left-2 text-xl" />
                    </div>
                    <div className="text-left">
                        <h1 className="text-sm font-bold">ROOMMATE</h1>
                        <p className="text-sm tracking-wider font-medium">FINDER</p>
                    </div>
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-6">{links}</ul>
            </div>

            {/* Right Side */}
            <div className="navbar-end gap-3">
                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                    {theme === 'dark' ? (
                        <FiSun className="text-yellow-300 text-xl" />
                    ) : (
                        <FiMoon className="text-gray-700 text-xl" />
                    )}
                </button>

                {/* Auth Buttons */}
                {user ? (
                    <div className="dropdown dropdown-hover relative">
                        <div tabIndex={0} className="cursor-pointer">
                            <img src={user?.photoURL} alt="user" className="w-10 h-10 rounded-full" />
                        </div>

                        <ul
                            tabIndex={0}
                            className="dropdown-content menu shadow rounded-box w-44 p-2 bg-black dark:bg-gray-800 absolute right-0 mt-2 z-50"
                        >
                            <li className="font-bold ">{user?.displayName}</li>
                            <li>
                                <button onClick={handleLogOut} className="text-left text-sm hover:text-red-500 hover:bg-white">
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>

                ) : (
                    <>
                        <Link to="/login">
                            <button className="px-4 py-1 rounded-md border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition">
                                LogIn
                            </button>
                        </Link>
                        <Link to="/signup">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md transition">
                                SignUp
                            </button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
