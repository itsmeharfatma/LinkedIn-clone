import React from 'react';

const Post = ({ name, description, message, photoURL }) => {
    return (
        <div className='bg-white border border-gray-200 rounded-lg px-4 py-3 mb-1'>
            <div className='flex mb-2 items-center'>
                <div className='rounded-full overflow-hidden w-[55px] h-[55px] mr-2'>
                    <img src='/assets/avatar.png' alt='Porfile-pic' width={55} className='object-cover w-full h-full rounded-full' />
                </div>
                <div>
                    <h2 className='font-semibold text-[#424242]'>{name}</h2>
                    <p className='text-sm text-[#86888a]'>{description}</p>
                </div>
            </div>

            <div className='overflow-auto'>
                <p>{message}</p>
            </div>

            <div className='flex justify-around font-medium text-sm text-[#86888a]'>
                <button className='hover:bg-slate-100 py-3 px-3 rounded-md'>
                    <i class="fa-regular fa-thumbs-up fa-xl mr-2"></i>
                    Like
                </button>
                <button className='hover:bg-slate-100 py-3 px-3 rounded-md'>
                    <i class="fa-regular fa-comment-dots fa-xl mr-2"></i>
                    Comment
                </button>
                <button className='hover:bg-slate-100 py-3 px-3 rounded-md'>
                    <i class="fa-solid fa-repeat fa-lg mr-2"></i>
                    Repost
                </button>
                <button className='hover:bg-slate-100 py-3 px-3 rounded-md'>
                    <i class="fa-solid fa-paper-plane fa-lg mr-2"></i>
                    Send
                </button>
            </div>
        </div>
    )
}

export default Post;