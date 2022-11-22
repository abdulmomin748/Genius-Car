import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import lginImg from '../../assets/images/login/login.svg';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import facebook from '../../assets/icons/fa.svg';
import linkdin from '../../assets/icons/link.svg';

import SocialLogIn from '../Shered/SocialLogIn/SocialLogIn';
import { setAuthToken } from '../../api/api';
const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    console.log(location);
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email, password)
        .then((result) => {
            const user = result.user;

            setAuthToken(user);
            
            console.log(user);
            alert('User LogIn Successfully');
            // form.reset();    
            navigate(from, {replace: true})
          })
          .catch(error => {
            console.error(error);
            alert(error.message)
          });

    }
    return (
        <div>
            <div className="">
                <div className="flex-row flex py-8 mb-24 items-center" >
                    <div className="text-center w-1/2 lg:text-left">
                       <img className='w-3/4 ml-auto pr-20' src={lginImg} alt="" srcset="" />
                    </div>
                    <div className="card w-1/2 max-w-md shadow-2xl bg-base-100 py-8">
                     <h1 className="text-5xl font-bold text-center">Login </h1>
                        <form onSubmit={handleLogin} className="card-body p-12 pb-4">
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Your email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="Your password" name='password' className="input input-bordered" />
                            <label className="label">
                                <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                            </div>
                            <div className="form-control">
                                <input className='btn bg-orange-500 border-0' type="submit" value='Sign In'/>
                            </div>
                        </form>
                        <div className='text-center '>
                            <span className='font-semibold'>Or Sign In with</span>
                            <div className='pt-4 mb-5'>
                                    <div class="flex items-center justify-center">
                                        <button class="bg-gray-100 rounded-[100%]  w-10 h-10 font-semibold text-white justify-center items-center flex space-x-2">
                                            <img src={facebook} alt="" srcset="" />
                                        </button>
                                        <button class="bg-gray-100 rounded-[100%] ml-4 mr-4 w-10 h-10 font-semibold text-white justify-center items-center flex space-x-2">
                                            <img src={linkdin} alt="" srcset="" />
                                        </button>
                                        <SocialLogIn />
                                    </div>
                            </div>
                            <p className='text-center '>New in Genius Car? <Link className='text-orange-500 font-bold' to='/signup'>Sign Up</Link></p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;