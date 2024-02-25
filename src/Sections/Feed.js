import React from 'react';

const Feed = () => {
    return (
        <div className='flex flex-col w-1/2 mx-6'>
            <div className='flex flex-col justify-between bg-white pt-4 pb-2 px-4 mb-5 border border-gray-200 rounded-lg'>
                <div className='flex justify-between mb-2'>
                    <div className='bg-white rounded-full overflow-hidden mr-2 w-[55px] h-[55px]'>
                        <img src='/assets/avatar.png' alt='Porfile-pic' width={55} className='object-cover w-full h-full rounded-full' />
                    </div>
                    <div className='w-11/12 border border-gray-400 rounded-full py-3 px-6'>
                        <form className='flex justify-between'>
                            <input type='text' placeholder='Start a post, try writing with AI' className='w-full outline-none border-none' />
                            <button type='submit' className='hidden'>Post</button>
                        </form>
                    </div>
                </div>

                <div className='flex justify-around font-medium text-sm text-[#86888a]'>
                    <button className='hover:bg-slate-100 py-3 px-3 rounded-md'>
                        <i class="fa-regular fa-image fa-lg mr-2" style={{ color: "#00a0dc" }}></i>
                        Media
                    </button>
                    <button className='hover:bg-slate-100 py-3 px-3 rounded-md'>
                        <i class="fa-solid fa-calendar-days fa-lg mr-2" style={{ color: "#e68523" }}></i>
                        Event
                    </button>
                    <button className='hover:bg-slate-100 py-3 px-3 rounded-md'>
                        <i class="fa-solid fa-newspaper fa-lg mr-2" style={{ color: "#dd5143" }}></i>
                        Write article
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Feed;