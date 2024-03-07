import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';

const Sidebar = () => {
    const user = useSelector(selectUser);

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
        <div className='md:sticky max-md:mb-4 top-[84px] w-[100%] md:w-[30%] lg:w-[25%] sm:rounded-lg h-fit'>
            {/* top-sidebar */}
            <div className='flex flex-col items-center border border-gray-200 sm:rounded-lg md:rounded-none md:rounded-t-lg pb-4 bg-white text-center'>
                <img src='/assets/background-pic.jpg' alt='Background-pic' loading='eager'
                    className='w-full object-cover sm:rounded-t-lg h-16' />
                <div className='bg-[#0a66c2] rounded-full w-[75px] h-[75px] -mt-10 mb-2 cursor-pointer overflow-hidden'>
                    {/* {!user.photoUrl ? (
                        <img src={user.displayName[0]} alt='' />
                    ) : (
                        <img src={user.photoUrl} alt='' className='object-cover w-full h-full rounded-full border-2 border-white' />
                    )} */}
                    {/* <img src={user.photoUrl} alt='' className='object-cover w-full h-full border-2 border-white' />
                    <div className='mt-3.5 text-xl'>
                        {user.displayName[0]}
                    </div> */}
                    <img src={user.photoUrl} alt='' />
                    <div className='flex items-center justify-center text-3xl text-white border-[3px] border-white rounded-full w-[75px] h-[75px]'>
                        {user?.displayName?.charAt(0) || ''}
                    </div>
                </div>
                <h2 className='font-semibold text-[#383838] cursor-pointer hover:underline hover:decoration-[#8d6cab]'>{user.displayName}</h2>
                <h4 className='text-sm text-[#86888a] font-light'>{user.email}</h4>
            </div>
            <div className='flex flex-col border border-gray-200 border-t-0 rounded-b-lg py-3 bg-white max-md:hidden'>
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
            <div className='flex flex-col border border-gray-200 rounded-t-lg py-4 bg-white mt-2 max-md:hidden'>
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
            <div className='flex border border-gray-200 border-t-0 rounded-b-lg py-4 justify-center bg-white hover:bg-gray-100 cursor-pointer max-md:hidden'>
                <p className='text-[#86888a] font-medium text-sm'>Discover more</p>
            </div>
        </div>
    )
}

export default Sidebar;