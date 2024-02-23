import React from 'react';

const Sidebar = () => {
    return (
        <div className='sticky top-20 w-1/5 rounded-lg text-center h-fit'>
            {/* top-sidebar */}
            <div className='flex flex-col items-center border border-gray-100 border-b-0 rounded-t-lg pb-3 bg-white'>
                <img src='/assets/background-pic.jpg' alt='Background-picture'
                className='w-full object-cover rounded-t-lg h-20' />
                <img src='/assets/avatar.png' alt='Porfile-picture' className='-mt-10' />
                <h2>Mehar Fatma</h2>
                <h4>mehar.fatma202@gmail.com</h4>
            </div>
            <div className=''>
                <div className=''>
                    <p>Profile viewers</p>
                    <p>23</p>
                </div>
                <div className=''>
                    <p>Post impressions</p>
                    <p>16</p>
                </div>
            </div>
            {/* bottom-sidebar */}
            <div className=''>
                <p>Recent</p>
            </div>
        </div>
    )
}

export default Sidebar;