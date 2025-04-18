import React, { useState } from 'react'
import watch1 from '../assets/watch1.jpg'
import Card from '../Components/Card'
import ProductData from './ProductDataa'
import { Link, useParams } from 'react-router-dom'
import beautiful1 from '../assets/Beautiful1.jpg'
import beautiful4 from '../assets/beautiful4.jpg'


const Home = ({addtocart}) => {
  return (
    <div>
      <div className='md:flex justify-around'>
      <div className='bg-gray-100  w-96 h-96 mt-12 text-center rounded-2xl shadow-2xl drop-shadow-2xl transition-all duration-300 hover:scale-[1.02]'>
      <h1 className='text-2xl mb-5'>Catagories</h1>
       
        <div className='flex flex-col'>
        
        <Link className='hover:text-red-500 mt-5' to="/shop/watch">watch</Link>
        <Link className='hover:text-red-500 mt-5' to="/shop/sunglass">Sunglass</Link>
        <Link className='hover:text-red-500 mt-5' to="/shop/cap">Cap</Link>
        <Link className='hover:text-red-500 mt-5' to="/shop/bag">Bag</Link>
        <Link className='hover:text-red-500 mt-5' to="/shop">All Product</Link>
        </div>
       
      </div>
      <div className='md:flex mt-12'>
        <div className='text-2xl mr-5 text-red-500'>
        <h1 className='mt-12'>Watch v-23</h1>
        <h1 className='mt-7'>Shop our best Product</h1>
       
        <div className='mt-12'>
        <Link className=' border rounded-xl text-white p-2 bg-black hover:bg-blue-500 hover:text-white ' to="/shop">See All Product</Link>
        </div>
       
        </div>
       
        
        <img src={ watch1} className='h-96 w-96 rounded-md'></img>

      </div>
    </div>
    <div >
      <h1 className='text-2xl mt-12'>Our Watch Collection</h1>
      <div className='md:flex gap-10'>
      {
        
        
          ProductData.filter(product => product.category === "watch") // just in case someone comes from another category route
            .slice(0, 4)
            .map((product) => (
              <Card key={product.id} product={product} addtocart={addtocart} />
            ))
        
        

      }
      </div>
      <Link className='hover:text-red-500 mt-5 text-2xl bold flex justify-center bg-black text-white h-12 w-48 p-2 rounded ml-5 md:ml-96 lg:ml-[650px]' to="/shop/watch ">See All Watch</Link>
      
     
    
    </div>
    <div>
      <h1 className='text-2xl mt-12'>Our Best Selling Collection</h1>
      <div className='md:flex gap-10'>
      {
        
        
          ProductData.filter(product => product.sp === "best") // just in case someone comes from another category route
            .slice(0, 4)
            .map((product) => (
              <Card key={product.id} product={product} addtocart={addtocart} />
            ))
        
        

      }
      </div>
      <Link className='hover:text-red-500 mt-5 text-2xl bold flex justify-center bg-black text-white h-12 w-48 p-2 rounded ml-5 md:ml-96 lg:ml-[650px]' to="/shop">All Product</Link>
     
    
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 mx-5">
  <div className="bg-white border rounded-xl p-6 text-center shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gray-50">
    <h2 className="text-xl font-semibold text-gray-800 mb-3">24/7 Customer Support</h2>
    <p className="text-gray-600">We’re always here to help you anytime, any day.</p>
  </div>

  <div className="bg-white border rounded-xl p-6 text-center shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gray-50">
    <h2 className="text-xl font-semibold text-gray-800 mb-3">Free Shipping</h2>
    <p className="text-gray-600">Enjoy free delivery on all orders above Tk499.</p>
  </div>

  <div className="bg-white border rounded-xl p-6 text-center shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gray-50">
    <h2 className="text-xl font-semibold text-gray-800 mb-3">Secure Payments</h2>
    <p className="text-gray-600">Your payment information is processed securely.</p>
  </div>

  <div className="bg-white border rounded-xl p-6 text-center shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gray-50">
    <h2 className="text-xl font-semibold text-gray-800 mb-3">Easy Returns</h2>
    <p className="text-gray-600">Not satisfied? Return within 7 days, no questions asked.</p>
  </div>
</div>
<div className='mt-12'>
  {/* Top row with two centered images */}
  <div className="md:flex justify-center gap-6">
    <img src={beautiful1} alt="Product 1" className="rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 object-cover w-full md:w-[300px] lg:w-[800px] h-96" />
    <img src={beautiful4} alt="Product 2" className="rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 object-cover w-full md:w-[300px] lg:w-[800px] h-96" />
  </div>

  
</div>





    </div>
    
  )
}

export default Home