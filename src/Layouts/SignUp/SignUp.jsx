import React, { use } from 'react';
import { Link, Navigate, useLocation, useNavigate} from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';

const SignUp = () => {

    const { SignUpUser, setUser, updateUser, SignUpGoogle } = use(AuthContext)
    const location = useLocation()
    const Navigate = useNavigate()


    const handleSignUp = e => {
        e.preventDefault()
        const from = e.target
        const name = from.name.value;
        const photo = from.photo.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name, photo, email, password);


        SignUpUser(email, password)
            .then(result => {
                console.log(result);
                const user = result.user
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                        alert("gmail password signin successfully")
                        Navigate("/login")
                        from.reset()
                        // navigate(`${location.state ? location.state : "/login"}`)
                    }).catch((error) => {
                        // An error occurred
                        // ...
                        console.log(error);
                        setUser(user)
                    });
            })
            .catch(error => {
                console.log(error);
            })

    }


    const handleGoogleSignUp = () => {
        SignUpGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user)

                alert("google SIgn Up successfully")
                // navigate(`${location.state ? location.state : '/login'}`)
                Navigate("/login")
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
            <div className="card-body">
                <h1 className="text-3xl font-bold mx-auto">SignUp</h1>
                <form onSubmit={handleSignUp} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" className="input" name='name' placeholder="Name" />
                    <label className="label">PhotoURL</label>
                    <input type="text" className="input" name='photo' placeholder="PhotoURL" />
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
                    <input className="btn btn-neutral mt-4" type="submit" value="SignUp" />
                    <button className="btn bg-white text-black border-[#e5e5e5] my-3" onClick={handleGoogleSignUp}>
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    <p className='mx-auto'>Already have an account ! please <Link className='underline text-green-600' to="/login">LogIn</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;