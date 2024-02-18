import React from 'react';

const Header = () => {
  return (
    <div className='header'>
      {/* header-left */}
      <div className=''>
        <img
          src='/assets/linkedin-logo-48.png' alt='LinkedIn Logo'
          // width={65}
        />

        {/* search bar */}
        <div className='search'>
          <i class="fa-solid fa-magnifying-glass" style={{ color: "#000000" }}></i>
          <input type='text' className='border-2' />
        </div>
      </div>

      {/* header-right */}
      <div className=''>

      </div>
    </div>
  )
}

export default Header;