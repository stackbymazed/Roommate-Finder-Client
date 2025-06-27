import React from 'react';
import { NavLink, Outlet } from 'react-router';
import Logo from '../../../Logo/Logo';
import { FaHome } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md';

const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            {/* Main content */}
            <div className="drawer-content flex flex-col bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800 transition-colors duration-500 min-h-screen">
                {/* Top Navbar */}
                <div className="navbar bg-gradient-to-r from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:to-gray-800 w-full lg:hidden shadow">
                    <div className="flex-none">
                        <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2">
                        <NavLink to='/'><Logo /></NavLink>
                    </div>
                </div>

                {/* Route Outlet */}
                <Outlet />
            </div>

            {/* Sidebar */}
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                <ul className="menu bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100 min-h-full w-72 p-4 shadow-xl space-y-4">

                    {/* Logo Section */}
                    <div className="mb-10">
                        <NavLink to='/'>
                            <div className="flex items-center gap-2 ml-8">
                                <div className="relative">
                                    <FaHome className="text-4xl text-indigo-600 dark:text-white" />
                                    <MdPerson className="absolute top-1 left-2 text-xl text-indigo-300 dark:text-gray-300" />
                                </div>
                                <div className="text-center">
                                    <h1 className="text-sm font-bold tracking-wider">ROOMMATE</h1>
                                    <p className="text-xs tracking-wide">FINDER</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>

                    {/* Sidebar Links */}
                    {[
                        { path: "/dashboard", label: "Dashboard", exact: true },
                        { path: "/dashboard/myPost", label: "My Post" },
                        { path: "/dashboard/post", label: "Create Post" },
                    ].map(({ path, label, exact }) => (
                        <NavLink key={path} to={path} end={exact}>
                            {({ isActive }) => (
                                <div
                                    className={`rounded-lg px-6 py-3 font-semibold transition-colors duration-300 border border-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900 ${isActive
                                            ? "bg-indigo-600 text-white"
                                            : "bg-white dark:bg-gray-800 text-gray-700 dark:text-white"
                                        }`}
                                >
                                    {label}
                                </div>
                            )}
                        </NavLink>
                    ))}

                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;
