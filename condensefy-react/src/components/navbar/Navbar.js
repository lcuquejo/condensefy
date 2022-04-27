import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'

import './Navbar.css'

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div className='navbar'>
        <div className='container'>
        <img className='logo' src={require('../../img/logo.png')} alt="logo" />
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><a href='http://localhost:3000/#'>Solutions</a></li>
                <li><a href='http://localhost:3000/#'>Industries</a></li>
                <li><a href='http://localhost:3000/#'>Resources</a></li>
                <li><a href='http://localhost:3000/#'>About Us</a></li>
                <li><a href='http://localhost:3000/#'>Contact Us</a></li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
            </div>
        </div>

    </div>
  )
}

export default Navbar