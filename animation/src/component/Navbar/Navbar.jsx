import React from 'react'
import './navbar.css'
import{FaBars,FaSearch} from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='menu'><FaBars/></div>
        <div className='lang'>eng</div>
        <div className='search'><FaSearch/></div>   
    </nav>
  )
}

export default Navbar