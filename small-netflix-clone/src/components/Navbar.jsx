import React, { useEffect, useState } from 'react'
import './navbar.css'
import netflix from '../assets/netflix-logo-1.png'
import avatar from '../assets/avatar-logo.png'
const Navbar = () => {
    const [show,handleShow]=useState(false)
    const transitionNavbar=()=>{
        if(window.scrollY>100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",transitionNavbar);
        return ()=>window.removeEventListener("scroll",transitionNavbar)
    },[])
  return (
    <div className={`nav ${show && "nav__bg"}`}>
        <div className="nav__content">
            <img className='nav__content-logo' src={netflix} alt="netflix" />
            <img className='nav__content-avatar' src={avatar} alt="avatar"  />
        </div>
    </div>
  )
}

export default Navbar