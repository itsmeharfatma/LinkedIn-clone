import React from 'react';

const Sidebar = () => {
    const recentItem = (topic) => {
        return (
            <div className='flex text-xs text-[#86888a] font-semibold my-1 mx-1 px-3 py-0.5 rounded-full bg-gray-100 hover:text-black cursor-pointer'>
                <span className='mr-0.5 mt-0.5'>#</span>
                <p>{topic}</p>
            </div>
        );
    };

    const bottomSidebarTitle = (title) => {
        return (
            <p className='text-sm text-[#00a0dc] hover:underline hover:decoration-[#00a0dc] cursor-pointer font-semibold px-4'>{title}</p>
        );
    };

    return (
        <div className='sticky top-20 w-1/5 rounded-lg h-fit'>
            {/* top-sidebar */}
            <div className='flex flex-col items-center border border-gray-200 rounded-t-lg pb-4 bg-white text-center'>
                <img src='/assets/background-pic.jpg' alt='Background-pic'
                    className='w-full object-cover rounded-t-lg h-16' />
                <div className='bg-white rounded-full w-[75px] h-[75px] -mt-10 mb-4 cursor-pointer overflow-hidden'>
                    <img src='/assets/avatar.png' alt='Porfile-pic' className='object-cover w-full h-full rounded-full border-2 border-white' />
                </div>
                <h2 className='font-semibold cursor-pointer hover:underline hover:decoration-[#8d6cab]'>Mehar Fatma</h2>
                <h4 className='text-sm text-[#86888a] font-light'>meharfatma1234@gmail.com</h4>
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
            <div className='flex flex-col border border-gray-200 rounded-t-lg py-4 bg-white mt-2'>
                {bottomSidebarTitle('Recent')}
                <div className='flex flex-wrap px-2 mb-3'>
                    {recentItem('reactjs')}
                    {recentItem('programming')}
                    {recentItem('redux')}
                    {recentItem('coding')}
                    {recentItem('developer')}
                </div>
                <div className='space-y-3'>
                    {bottomSidebarTitle('Groups')}
                    {bottomSidebarTitle('Events')}
                    {bottomSidebarTitle('Followed Hashtags')}
                </div>
            </div>
            <div className='flex border border-gray-200 border-t-0 rounded-b-lg py-4 justify-center bg-white hover:bg-gray-100 cursor-pointer'>
                <p className='text-[#86888a] font-medium text-sm'>Discover more</p>
            </div>
        </div>
    )
}

export default Sidebar;