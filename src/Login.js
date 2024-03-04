import React, { useState } from 'react';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/counter/userSlice';

const Login = () => {
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,
            }));
        }).catch((error) => alert(error));
    };

    const register = () => {
        if (!name) {
            return alert('Please enter your Full Name!')
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic,
                }));
            });
        }).catch((error) => alert(error));
    };

    return (
        <div className='flex flex-col items-center bg-slate-50 h-[100vh]'>
            <div className='text-center my-auto flex flex-col space-y-6'>
                <div className='flex items-center justify-center '>
                    <h1 className='text-5xl text-[#0a66c2] font-bold mr-1'>Linked</h1>
                    <img src='assets/linked_in_logo_64.png' alt='logo' className='object-contain' />
                </div>

                <form className='flex flex-col bg-white border border-gray-200 shadow-md rounded-lg py-12 px-8 space-y-7 w-96'>
                    <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Full name ( required if registering )' className='border border-gray-200 w-full outline-none rounded-md py-1 px-2' />
                    {/* <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} type='text' placeholder='Profile Picture URL ( optional )' className='border border-gray-200 w-full outline-none rounded-md py-1 px-2' /> */}
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email id' className='border border-gray-200 w-full outline-none rounded-md py-1 px-2' />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' className='border border-gray-200 w-full outline-none rounded-md py-1 px-2' />
                    <button type='submit' onClick={loginToApp} className='rounded-md py-1.5 px-2 w-full bg-[#0a66c2] text-white' >Sign In</button>
                </form>
                <p>Not a member? <span className='text-[#0a66c2] cursor-pointer' onClick={register}>Register Now</span>
                </p>
            </div>
        </div>
    )
}

export default Login;