import React from 'react'
import "../css/Navbar.css"
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <>
    <div className='Navbar'>
    <div>
     <img className='logo' src={logo} alt="logo" />
    </div>
    </div>
    </>
  )
}

export default Navbar