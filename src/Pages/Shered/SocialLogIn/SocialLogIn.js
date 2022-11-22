import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import gmail from '../../../assets/icons/gmail.svg';
import { setAuthToken } from '../../../api/api';

const SocialLogIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    

    const { signInWithGmailPopup } = useContext(AuthContext);
    
    const handleSignInWithPopUp = () => {
        signInWithGmailPopup()
        .then( result => {
            const user = result.user;
            setAuthToken(user);
            navigate(from, {replace: true})
            alert('User Log In Succesfully');
        })
        .catch(err => {
            alert(err.message)
            console.log(err);
        })
    }
    return (
        <>
            <button onClick={handleSignInWithPopUp} class="bg-gray-100 rounded-[100%]  w-10 h-10 font-semibold text-white justify-center items-center flex space-x-2">
                <img src={gmail} alt="" srcset="" />
            </button>
        </>
    );
};

export default SocialLogIn;