import React from 'react';
import HeaderOptions from '../Components/HeaderOptions';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/counter/userSlice';
import { auth } from '../firebase';

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  };

  return (
    <header className='sticky top-0 w-full overflow-hidden z-10 shadow-sm bg-white'>
      <nav className='container mx-auto pt-4 pb-3 px-6 flex items-center justify-between'>
        {/* header-left */}
        <div className='flex items-center'>
          <img
            src='/assets/linkedin-logo-48.png'
            alt='LinkedIn Logo'
            className='object-contain'
          />

          {/* search bar */}
          <div className='flex items-center px-4 py-1 h-[38px] gap-2 bg-[#eef3f8] rounded'>
            <i class="fa-solid fa-magnifying-glass" style={{ color: "#696969" }}></i>
            <input type='text' placeholder='Search' className='outline-none border-none bg-[#eef3f8]' />
          </div>
        </div>

        {/* header-right */}
        <div className='flex gap-7 items-center'>
          <HeaderOptions icon={<i class="fa-solid fa-house fa-lg overRide" style={{ color: "#696969" }}></i>} title="Home" />
          <HeaderOptions icon={<i class="fa-solid fa-user-group fa-lg overRide" style={{ color: "#696969" }}></i>} title="My Network" />
          <HeaderOptions icon={<i class="fa-solid fa-briefcase fa-lg overRide" style={{ color: "#696969" }}></i>} title="Jobs" />
          <HeaderOptions icon={<i class="fa-solid fa-message fa-lg overRide" style={{ color: "#696969" }}></i>} title="Messaging" />
          <HeaderOptions icon={<i class="fa-solid fa-bell fa-lg overRide" style={{ color: "#696969" }}></i>} title="Notifications" />
          <HeaderOptions icon={
            user.photoUrl ? (
              <div className='rounded-full overflow-hidden w-[28px] h-[28px]'>
                <img src={user.photoUrl} alt='' width={25} className='object-cover w-full h-full rounded-full border-2 border-white' />
              </div>
            ) : (<div className='rounded-full w-[25px] h-[25px] overflow-hidden text-center text-white bg-[#696969]'>{user.displayName[0]}</div>)
          } title="Me" onClick={logoutOfApp} />
        </div>
      </nav>
    </header>
  )
}

export default Header;