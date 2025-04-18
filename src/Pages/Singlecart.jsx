import React from 'react'

const Singlecart = ({car,remove}) => {

    const {name,price,img,id}=car
  return (
   
      
     <div>
       <div className='h-96 w-80 border ml-5 mt-5 rounded-2xl shadow-2xl drop-shadow-2xl transition-all duration-300 hover:scale-[1.02]'>
  
  <img src={img} className='w-full h-60 object-cover rounded-t-2xl'></img>
  <h1 className='text-black text-2xl'>{name}</h1>
  <p className='text-black '>{price}</p>
  <button className='bg-red-500 text-white p-2 ml-24 mt-5 rounded hover:bg-black hover:text-white' onClick={()=>remove(id)}>Remove</button>

  
      
    </div>
  

     </div>
     
    
  )
}

export default Singlecart