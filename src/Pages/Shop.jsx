import React from 'react'
import ProductData from './ProductDataa'
import { useParams } from 'react-router-dom'
import Singleshop from './Singleshop'

const Shop = ({addtocart}) => {
  const { category } = useParams()
  const FilterData = category ? ProductData.filter(product => product.category === category) : ProductData

  return (
    <div>
      <h1 className='text-2xl font-bold text-center my-4'>Feel free to shop here</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 p-4">
        {
          FilterData.map(product => (
            <Singleshop key={product.id} product={product} addtocart={addtocart} />
          ))
        }
      </div>
    </div>
  )
}

export default Shop
