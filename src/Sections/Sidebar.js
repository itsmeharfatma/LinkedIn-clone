import React from 'react';

const Sidebar = () => {
    const recentItem = (topic) => {
        return (
            <div className='flex'>
                <span>#</span>
                <p>{topic}</p>
            </div>
        );
    };

    return (
        <div className='sticky top-20 w-1/5 rounded-lg h-fit'>
            {/* top-sidebar */}
            <div className='flex flex-col items-center border border-gray-200 rounded-t-lg pb-4 bg-white text-center'>
                <img src='/assets/background-pic.jpg' alt='Background-picture'
                    className='w-full object-cover rounded-t-lg h-16' />
                <div className='bg-white rounded-full w-[75px] h-[75px] -mt-10 mb-4 cursor-pointer'>
                    <img src='/assets/avatar.png' alt='Porfile-picture' width={70} className='mt-0.5 ml-0.5' />
                </div>
                <h2 className='font-semibold cursor-pointer hover:underline hover:decoration-[#8d6cab]'>Mehar Fatma</h2>
                <h4 className='text-sm text-[#86888a] font-light'>mehar.fatma202@gmail.com</h4>
            </div>
            <div className='flex flex-col border border-gray-200 border-t-0 rounded-b-lg py-3 bg-white'>
                <div className='flex justify-between hover:bg-gray-100 cursor-pointer py-1.5 px-4'>
                    <p className='text-xs text-[#86888a] font-medium'>Profile viewers</p>
                    <p className='text-xs text-[#00a0dc] font-bold'>23</p>
                </div>
                <div className='flex justify-between hover:bg-gray-100 cursor-pointer py-1.5 px-4'>
                    <p className='text-xs text-[#86888a] font-medium'>Post impressions</p>
                    <p className='text-xs text-[#00a0dc] font-bold'>18</p>
                </div>
            </div>
            {/* bottom-sidebar */}
            <div className='flex flex-col border border-gray-200 rounded-lg pb-4 bg-white mt-2'>
                <p className=''>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('redux')}
                {recentItem('coding')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar;