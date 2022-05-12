import React from 'react'

import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin} from 'react-icons/fa'

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
       <div className='contact'> 
        <h2 className='title1'>Contact</h2>
        <p className='text-footer'>+000 00 000 0000 email@domain.com Adress: 00000000000000, fsdgdfhfg, gfhggh, fgfhjgjkh.
        </p>
       </div>
       <div>
           <h2 className='title2'>Stay Connected</h2>
           <div className='social'>
               <a href='https://www.facebook.com/'><FaFacebookSquare className='icon' /></a>
               <a href='https://www.facebook.com/'><FaInstagramSquare className='icon' /></a>
               <a href='https://www.facebook.com/'><FaTwitterSquare className='icon' /></a>
               <a href='https://www.facebook.com/'><FaLinkedin className='icon' /></a>
           </div>

       </div>

    </div>
  )
}

export default Footer