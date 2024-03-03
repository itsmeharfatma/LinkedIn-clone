import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';


const HeaderOptions = ({ icon, title, onClick }) => {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className='flex flex-col items-center cursor-pointer'>
      <div className='mb-1'>
        {user ? icon : null}
      </div>
      <h4 className='text-sm text-gray-600 overRide'>{title}</h4>
    </div>
  )
}

export default HeaderOptions;


