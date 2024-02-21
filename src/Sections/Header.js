import React from 'react';

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

      </div>
    </header>
  )
}

export default Header;