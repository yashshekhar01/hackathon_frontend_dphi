import React from 'react'
import Navbar from "./Navbar"
import "../css/Header.css"
import rocket from "../assets/rocket.png"

const Header = () => {
  return (
    <div className='Header'>
    <Navbar/>
     <div>
        <img className='rocket' src={rocket}/>
     </div>
     <div className='MainHeading'>
      Accelerate Innovation with Global AI Challenges 
     </div>
     <div className='SubHeading'>
     AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions. 
     </div>
     <div>
        <button className='Create'>
        Create Challenge
        </button>
     </div>
    </div>
  )
}

export default Header