import React from 'react'
import './sponsor.css'
import sponsor from '../../assets/sponsor.png'
const Sponsor = () => {
  return (
    <div className='sponsor'>
        <img src={sponsor} alt="sponsor-logo" />
        <p>official sponsor</p>
    </div>
  )
}

export default Sponsor