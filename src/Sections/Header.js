import React from 'react';
import HeaderOptions from '../Components/HeaderOptions';

const Header = () => {
  return (
    <header className='fixed top-0 w-full overflow-hidden z-10 shadow-sm'>
      <nav className='container mx-auto py-4 px-6 flex items-center justify-between'>
        {/* header-left */}
        <div className='flex items-center'>
          <img
            src='/assets/linkedin-logo-48.png'
            alt='LinkedIn Logo'
            className='object-contain'
          />

          {/* search bar */}
          <div className='flex items-center px-4 py-1 h-[38px] gap-2 bg-[#eef3f8] rounded'>
            <i class="fa-solid fa-magnifying-glass" style={{ color: "#808080" }}></i>
            <input type='text' placeholder='Search' className='outline-none border-none bg-[#eef3f8]' />
          </div>
        </div>

        {/* header-right */}
        <div className='flex gap-8'>
          <HeaderOptions icon={<i class="fa-solid fa-house fa-lg" style={{ color: "#808080" }}></i>} title="Home" />
          <HeaderOptions icon={<i class="fa-solid fa-user-group fa-lg" style={{ color: "#808080" }}></i>} title="My Network" />
          <HeaderOptions icon={<i class="fa-solid fa-briefcase fa-lg" style={{ color: "#808080" }}></i>} title="Jobs" />
          <HeaderOptions icon={<i class="fa-solid fa-comment-dots fa-lg" style={{ color: "#808080" }}></i>} title="Messaging" />
          <HeaderOptions icon={<i class="fa-solid fa-bell fa-lg" style={{ color: "#808080" }}></i>} title="Notifications" />
        </div>
      </nav>
    </header>
  )
}

export default Header;