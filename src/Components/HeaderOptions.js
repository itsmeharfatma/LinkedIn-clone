import React from 'react';

const HeaderOptions = ({ icon, title }) => {
  return (
    <div className='flex flex-col items-center cursor-pointer'>
      <div className='mb-1'>{icon}</div>
      <h4 className='text-sm text-gray-600 overRide'>{title}</h4>
    </div>
  )
}

export default HeaderOptions;