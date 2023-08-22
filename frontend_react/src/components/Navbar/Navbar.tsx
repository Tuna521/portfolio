import React from 'react'
import './Navbar.scss'
import {images} from '../../constants'

const Navbar = () => {
  return (
    <nav>
      <img src={images.logo} alt="logo" />
    </nav>
  )
}

export default Navbar
