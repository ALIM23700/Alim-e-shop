import React from 'react'
import Singlecart from './Singlecart'
import { Link } from 'react-router-dom';



const Cart = ({cart,remove}) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
 
  
  const {name,price,im}=cart
  return (
    <div>
      <div className='flex gap-12 justify-center'>
      {
      
  cart.length === 0 
    ? <p >Your cart is empty</p>
    : ''
}
        {
          cart.map(car=> <Singlecart car={car} remove={remove} ></Singlecart>)
        }
          
    </div>
    <div className='mt-5 text-center'>
      <div className='mb-5'>
      <h2 className='text-lg font-bold'>Total Price: {totalPrice} Tk</h2>

      </div>
            
            <Link to="/checkout" className='bg-blue-500 p-2 tex-white rounded' state={{ total: totalPrice }}>Checkout</Link>
          </div>
      

    </div>
    
  )
}

export default Cart