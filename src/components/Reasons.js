import React from 'react'
import "../css/Reasons.css"

const Reasons = () => {
  return (
    <div className='Reasons'>
    <div className='Head'>Why Participate in <span> AI Challenges?</span></div>
    <div className='box1'>
      <div className='carbonNote'></div>
      <div className='h1'>Prove your skills</div>
      <div className='s1'>Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.</div>
    </div>
    <div className='box2'>
    <div className='vector'></div>
      <div className='h2'>Learn from community</div>
      <div className='s2'>One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.</div>
    </div>
    <div className='box3'>
    <div className='robot'></div>
      <div className='h3'>Challenge yourself</div>
      <div className='s3'>There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.</div>
    </div>
    <div className='box4'>
    <div className='identity'></div>
      <div className='h4'>Earn recognition</div>
      <div className='s4'>You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.</div>
    </div>
    </div>
  )
}

export default Reasons