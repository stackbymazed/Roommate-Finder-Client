import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import {toast} from 'react-toastify';

const LogIn = () => {

    const { SignInUser, setUser, SignUpGoogle } = use(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogIn = e => {
        e.preventDefault()
        e.preventDefault()
        const from = e.target
        const email = from.email.value;
        const password = from.password.value;
        // console.log(email, password);


        SignInUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                from.reset()
                navigate(`${location.state ? location?.state : "/"}`)
                // ...
                toast('LogIn successfully');
            })
            .catch((error) => {
                const errorMessage = error.message;
                // console.log(errorMessage);
                toast(`${errorMessage}`);
            });
    }

    const handleGoogleSignin = () => {
        SignUpGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user)
                // alert("google SIgn log in successfully")
                navigate(`${location.state ? location?.state : "/"}`)
                toast('LogIn successfully');
            }).catch((error) => {
                const errorMessage = error.message;
                // console.log(errorMessage);
                toast(`${errorMessage}`);
            });
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
            <div className="card-body">
                <h1 className="text-3xl font-bold mx-auto">LogIn</h1>
                <form onSubmit={handleLogIn} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />
                    <label className="label">Password</label>
                    <input
                        type="password"
                        className="input"
                        name='password'
                        required
                        placeholder="Password"
                        minLength="6"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                        title="Must be more than 6 characters, including number, lowercase letter, uppercase letter" />
                    <input className="btn btn-neutral mt-4" type="submit" value="LogIn" />
                    <button className="btn bg-white text-black border-[#e5e5e5] my-3" onClick={handleGoogleSignin}>
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    <p className='mx-auto'>Don't have an account ! please <Link className='underline text-green-600' to="/signup">SignUp</Link></p>
                </form>
            </div>
        </div>
    );
};

export default LogIn;