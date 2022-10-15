import React from 'react'
import "../css/Explore.css"

const Explore = () => {
  return (
    <div className='Exp'>
    <div className='Heading'>
    Explore Challenges
    </div>
    <input className='search' placeholder='Search'></input>
    <select className='filter'>
    <option value="0" className='filterValue'>filter</option>
    </select>
    </div>
  )
}

export default Explore