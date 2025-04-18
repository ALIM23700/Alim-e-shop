import React from 'react'
import final from '../assets/final.jpg'

const About = () => {
  return (
    <div className=' flex justify-center'>
       
      <div className='border border-gray-700 h-95 w-100 md:h-115 md:w-160 mt-14  rounded-2xl shadow-2xl drop-shadow-2xl transition-all duration-300 hover:scale-[1.02]'>
      <h1 className='text-center text-2xl'>About Us</h1>
      <div className='flex justify-between mt-5 gap-7'>
      <img src={final} className=' md:h-100 md:w-100 h-80  w-80'></img>
      <div className='gap-12'>
      <h1 className='text-2xl'>Md Abdul Alim</h1>
      <h3>CEO of Alims e-Shop</h3>
      <p>Thanks for visiting my website.Hope you are enjoy our website</p>
      </div>
      

      </div>
       
        
      </div>
    </div>
  )
}

export default About