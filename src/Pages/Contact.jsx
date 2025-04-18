import React from 'react'

const Contact = () => {
  const handleform=(e)=>{
    e.preventDefault();

  }
  return (
   <div className=' flex justify-center '>
          
         <div className='border border-gray-700 h-95  w-100 md:h-115 md:w-160 mt-14  rounded-2xl shadow-2xl drop-shadow-2xl transition-all duration-300 hover:scale-[1.02]'>
         <h1 className='text-center text-4xl'>Contact Us</h1>
         <div className='text-2xl flex justify-center  flex-col mt-28 gap-7 md:ml-28'>
             <h1>Phone:01791723700</h1>
             <h1>Email:abdulalim23700@gmail.com</h1>
             <p>
              <form onSubmit={handleform}>
              <label>Messege:</label>
              <input type='text' className='border-black bg-gray-500 rounded p-2'></input>
              <p> <button type='submit' className='bg-gray-900 text-white p-2 rounded ml-32 mt-5'>Submit</button></p>
             

              </form>
              

             </p>
             
         </div>
        
          
           
         </div>
       </div>
  )
}

export default Contact