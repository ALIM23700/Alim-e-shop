import React from 'react'

const Card = ({ product, addtocart}) => {
  const {name,price,img}= product
  return (
    <div>
        <div className='h-96 w-80 border ml-5 mt-5 rounded-2xl shadow-2xl drop-shadow-2xl transition-all duration-300 hover:scale-[1.02]'>
        <img src={img} className='w-full h-60 object-cover rounded-t-2xl'></img>
            <h1 className='text-black text-2xl'>{name}</h1>
            <h1 className='text-black text-xl'>price:{price}</h1>
            <button
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-800 transition"
        onClick={() => addtocart(product)}
      >
        Add to Cart
      </button>
        </div>
    </div>
  )
}

export default Card