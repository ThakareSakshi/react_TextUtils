import React from 'react'
import Dark_mode from './Dark_mode'

const Header = () => {
  return (
    <div className='Header'>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
      </ul>
      <div>
        <Dark_mode/>
      </div>
    </div>
  )
}

export default Header
