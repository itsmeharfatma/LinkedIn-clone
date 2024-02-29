import React from 'react';

const Login = () => {
    return (
        <div className='flex flex-col items-center gap-6 bg-slate-50 h-[100vh]'>
            <img src='assets/linkedin-main-logo.png' alt='logo' width={250} />

            <form className='flex flex-col bg-white border border-gray-200 shadow-md rounded-lg py-10 px-6 space-y-8 w-96'>
                <input type='text' placeholder='Full name ( required if registering )' className='border border-gray-200 w-full outline-none rounded-md py-1 px-2' />
                <input type='text' placeholder='Profile Picture URL ( optional )' className='border border-gray-200 w-full outline-none rounded-md py-1 px-2' />
                <input type='email' placeholder='Email id' className='border border-gray-200 w-full outline-none rounded-md py-1 px-2' />
                <input type='password' placeholder='Password' className='border border-gray-200 w-full outline-none rounded-md py-1 px-2' />
                <button type='submit' className='rounded-md py-1 px-2 w-full bg-[#00a0dc] text-white' >Sign In</button>
            </form>
            <p>Not a member? <span>Register Now</span>
            </p>
        </div>
    )
}

export default Login;