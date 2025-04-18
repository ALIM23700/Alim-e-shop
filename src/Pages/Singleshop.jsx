import React from 'react'

const Singleshop = ({product,addtocart}) => {
    const {id,name,img,price}=product
  return (
    <div>
       
        <div className='h-96 w-80 border ml-24 md:ml-5 mt-5 rounded-2xl shadow-2xl drop-shadow-2xl transition-all duration-300 hover:scale-[1.02]'>
        <img src={img} className='w-full h-60 object-cover rounded-t-2xl'></img>
            <h1 className='text-black text-2xl'>{name}</h1>
            <h1 className='text-black text-xl'>price:{price}</h1>
            <button className='bg-blue-900 p-2 text-white mt-5 ml-24 rounded hover:bg-black hover:text-white' onClick={()=>addtocart(product)}>add to cart</button>
             
        </div>
    </div>
  )
}

export default Singleshop