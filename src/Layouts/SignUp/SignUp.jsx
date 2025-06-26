import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import { toast } from 'react-toastify';

const SignUp = () => {
    const { SignUpUser, setUser, updateUser, SignUpGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        SignUpUser(email, password)
            .then((result) => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        form.reset();
                        navigate(location.state ? location.state : "/login");
                        toast.success("Signed up successfully!");
                    })
                    .catch((error) => {
                        setUser(user);
                        toast.error(error.message);
                    });
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const handleGoogleSignUp = () => {
        SignUpGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(location.state ? location.state : "/");
                toast.success("Signed up with Google!");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-pink-100 to-green-100 animate-gradient-x bg-[length:300%_300%] z-0"></div>
            <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-10">
                <h1 className="text-3xl font-bold text-center text-blue-700 dark:text-white mb-2">
                    Sign Up
                </h1>
                <form onSubmit={handleSignUp} className="space-y-2">
                    <div>
                        <label className="label font-semibold text-blue-900 dark:text-blue-200">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your full name"
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div>
                        <label className="label font-semibold text-blue-900 dark:text-blue-200">Photo URL</label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Profile photo URL"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div>
                        <label className="label font-semibold text-blue-900 dark:text-blue-200">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div>
                        <label className="label font-semibold text-blue-900 dark:text-blue-200">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            minLength={6}
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                            title="Must be more than 6 characters, including number, lowercase and uppercase letter"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-neutral w-full mt-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition"
                    >
                        Sign Up
                    </button>
                </form>

                <button
                    onClick={handleGoogleSignUp}
                    className="btn btn-outline w-full mt-2 flex items-center justify-center gap-2 border-blue-600 text-blue-700 hover:bg-blue-100 dark:text-blue-300 dark:hover:bg-gray-700 transition"
                    type="button"
                >
                    <svg
                        aria-label="Google logo"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <g>
                            <path d="m0 0H512V512H0" fill="#fff"></path>
                            <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                            <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                            <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                            <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                        </g>
                    </svg>
                    Sign up with Google
                </button>

                <p className="mt-2 text-center text-sm text-blue-900 dark:text-blue-300">
                    Already have an account?{' '}
                    <Link to="/login" className="underline text-green-600 font-semibold">
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
