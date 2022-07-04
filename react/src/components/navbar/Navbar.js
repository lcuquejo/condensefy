import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaSearch} from 'react-icons/fa'



import './Navbar.css'

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div className='navbar'>
        <div className='container'>
        <a href='../../Hero.js'><img className='logo' src={require('../../img/logo.png')} alt="logo" /></a>
            <div className='links'>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href='http://localhost:3000/#'>Solutions</a></li>
                    <li><a href='http://localhost:3000/#'>Industries</a></li>
                    <li><a href='http://localhost:3000/#'>Resources</a></li>
                    <li><a href='http://localhost:3000/#'>About Us</a></li>
                    <li><a href='http://localhost:3000/#'>Contact Us</a></li>
                </ul>
            </div>
            <div className='social'>
               <a href='https://www.facebook.com/'><FaFacebookSquare className='icon' /></a>
               <a href='https://www.facebook.com/'><FaInstagramSquare className='icon' /></a>
               <a href='https://www.facebook.com/'><FaTwitterSquare className='icon' /></a>
               <a href='https://www.facebook.com/'><FaLinkedin className='icon' /></a>
           </div>
           {/* <div className="search">
                <input type="text" placeholder="Search.." />
                <button className="searchButton" href="#">
                <FaSearch className='icon' />
            </button>
            </div> */}
            <div id='cover'>
                <form method="get" action="">
                    <div className="tb">
                    <div className="td"><input type="text" placeholder="Search" required /></div>
                    <FaSearch className='search-icon' href='#' />
                    </div>
                </form>
            </div>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
            </div>
        </div>

    </div>
  )
}

export default Navbar