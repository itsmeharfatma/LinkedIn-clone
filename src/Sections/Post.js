import React, { forwardRef } from 'react';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    
    return (
        <div ref={ref} className='bg-white border border-gray-200 rounded-lg px-4 pt-3 pb-1 mb-2'>
            <div className='flex mb-2 items-center cursor-pointer'>
                {/* <div className='rounded-full overflow-hidden w-[55px] h-[55px] mr-2'>
                    <img src='/assets/avatar.png' alt='' width={55} className='object-cover w-full h-full rounded-full' />
                </div> */}
                <div className='bg-gray-400 rounded-full overflow-hidden mr-2 text-center items-center text-white w-[55px] h-[55px]'>
                    <img src={photoUrl} alt='' width={55} />
                    <div className='mt-3 text-xl'>
                        {name[0]}
                    </div>
                </div>
                <div>
                    <h2 className='font-semibold text-[#424242] hover:text-[#00a0dc] hover:underline hover:decoration-[#00a0dc]'>{name}</h2>
                    <p className='text-sm text-[#86888a]'>{description}</p>
                </div>
            </div>

            <div className='overflow-auto mb-4'>
                <p>{message}</p>
            </div>

            <hr className='h-px mb-1 bg-[#ececec] border-0 rounded-full' />
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
})

export default Post;