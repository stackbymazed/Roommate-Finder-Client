import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import { toast } from 'react-toastify';

const LogIn = () => {
    const { SignInUser, setUser, SignUpGoogle } = React.useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        SignInUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                form.reset();
                navigate(location.state ? location.state : "/");
                toast.success('Logged in successfully!');
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const handleGoogleSignin = () => {
        SignUpGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(location.state ? location.state : "/");
                toast.success('Logged in with Google!');
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-pink-100 to-green-100 animate-gradient-x bg-[length:300%_300%] z-0"></div>

            <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-10">
                <h2 className="text-3xl font-bold text-center text-blue-700 dark:text-white mb-6">Log In</h2>

                <form onSubmit={handleLogIn} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 dark:text-gray-200 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 dark:text-gray-200 mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            required
                            minLength="6"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                            title="At least 6 characters with a number, uppercase and lowercase letter"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition duration-300"
                    >
                        Log In
                    </button>
                </form>

                <div className="my-4 text-center text-gray-600 dark:text-gray-400">OR</div>

                <button
                    onClick={handleGoogleSignin}
                    className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 hover:bg-gray-100 transition"
                >
                    <svg width="20" height="20" viewBox="0 0 48 48">
                        <path fill="#EA4335" d="M24 9.5c3.13 0 5.53 1.3 7.2 2.4l5.3-5.3C33.07 3.7 28.8 2 24 2 14.3 2 6.2 8.7 3.4 17.2l6.8 5.3C11.6 15 17.2 9.5 24 9.5z" />
                        <path fill="#34A853" d="M24 44c6.3 0 11.6-2.1 15.4-5.6l-6.8-5.6c-2 1.3-4.6 2-8.6 2-6.8 0-12.5-4.6-14.6-10.8l-7 5.4C6.1 38.2 14.2 44 24 44z" />
                        <path fill="#4A90E2" d="M43.6 20H24v8.5h11.2q-1.5 4-5.2 6.5t-11.2 2q-6.8 0-14.6-10.8l-7 5.4C6.1 38.2 14.2 44 24 44c8.8 0 16.1-5.8 18.3-13.6.5-1.8.7-3.8.7-5.8 0-.6 0-1.2-.1-1.6z" />
                    </svg>
                    Log in with Google
                </button>

                <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
                    Don’t have an account?{' '}
                    <Link to="/signup" className="text-blue-600 hover:underline font-semibold">
                        Sign Up
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default LogIn;
