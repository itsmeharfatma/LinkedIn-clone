import React from 'react'

const HeaderOptions = ({icon, title}) => {
  return (
    <div className=''>
        {icon}
        <h4 className=''>{title}</h4>
    </div>
  )
}

export default HeaderOptions