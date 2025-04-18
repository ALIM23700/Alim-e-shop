import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <div className='h-40 w-full bg-gray-700 text-white text-center'>
        <div className='flex justify-center mt-20 gap-8'>

      
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
    </div>
   
    <div className='flex justify-center gap-12 text-4xl mt-3'>
     
      <FaFacebook />
      <FaTwitter />
      <IoLogoWhatsapp />
      <MdEmail />

    </div>
    <h1 className='mt-3'>©Alims e-Shop</h1>

      </div>
      
    </div>
  )
}

export default Footer