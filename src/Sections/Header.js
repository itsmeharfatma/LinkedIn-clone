import React from 'react';
import HeaderOptions from '../Components/HeaderOptions';

const Header = () => {
  return (
    <header className='sticky flex'>
      {/* header-left */}
      <div className='flex items-center'>
        <img
          src='/assets/linkedin-logo-48.png'
          alt='LinkedIn Logo'
          className='object-contain'
        />

        {/* search bar */}
        <div className='flex items-center px-4 py-[18px] h-6 gap-2 bg-[#eef3f8] rounded'>
          <i class="fa-solid fa-magnifying-glass" style={{ color: "#808080" }}></i>
          <input type='text' placeholder='Search' className='outline-none border-none bg-[#eef3f8]' />
        </div>
      </div>

      {/* header-right */}
      <div className=''>
        <HeaderOptions icon={<i class="fa-solid fa-house" style={{ color: "#808080" }}></i>} title="Home" />
        <HeaderOptions icon={<i class="fa-solid fa-user-group" style={{ color: "#808080" }}></i>} title="My Networks" />
        <HeaderOptions icon={<i class="fa-solid fa-briefcase" style={{ color: "#808080" }}></i>} title="Jobs" />
        <HeaderOptions icon={<i class="fa-solid fa-comment-dots" style={{ color: "#808080" }}></i>} title="Messaging" />
        <HeaderOptions icon={<i class="fa-solid fa-bell" style={{ color: "#808080" }}></i>} title="Notifications" />
      </div>
    </header>
  )
}

export default Header;