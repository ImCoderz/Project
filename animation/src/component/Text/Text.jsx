import React, { useEffect } from 'react'
import './text.css'
import gsap from 'gsap'
import { Power3 } from 'gsap/gsap-core'

const Text = () => {
  useEffect(()=>{
    gsap.from('.text h1 .hidetext',{
      duration:1.5,
      delay:1,
      y:'100%',
      ease:Power3.easeInOut
    });
  },[])
  return (
    <div className='text'>
        <h1><span className="hidetext">toni&guy</span></h1>
        <h2>duality</h2>
        <h3><span className='hidetext'>collection 2017<br></br>duality</span></h3>
        <p><span className="hidetext">
          lorem ipsum sit amet consecteur, adipiscing elit. Undequis, delectus facere neque sunt commodi quae culpa dolores doloribus magnam?
        </span></p>
    </div>
  )
}

export default Text