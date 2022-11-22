import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import lginImg from '../../assets/images/login/login.svg';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import facebook from '../../assets/icons/fa.svg';
import linkdin from '../../assets/icons/link.svg';
import gmail from '../../assets/icons/gmail.svg';
import SocialLogIn from '../Shered/SocialLogIn/SocialLogIn';
const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then((result) => {
            const user = result.user;
            alert('Create User Successfully');
          })
          .catch(error => {
            console.error(error);
          });
    
        console.log(form);
    }
    return (
        <div>
            <div className="">
                <div className="flex-row flex py-8 mb-24 items-center">
                    <div className="text-center w-1/2 lg:text-left">
                       <img className='w-3/4 ml-auto pr-20' src={lginImg} alt="" srcset="" />
                    </div>
                    <div className="card w-1/2 max-w-md shadow-2xl bg-base-100 py-8">
                     <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                        <form onSubmit={handleSignUp} className="card-body px-12">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Your password" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required/>
                            </div>
                            <div className="form-control mt-5">
                                <input className='btn bg-orange-500 border-0' type="submit" value='Sign Up'/>
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
                            <p className='text-center '>Already have an account? <Link className='text-orange-500 font-bold' to='/login'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;