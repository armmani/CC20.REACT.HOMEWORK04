import React from 'react'
import Card from './Card'

function Product({ products }) {
  return (
    <div className="list bg-base-100 rounded-box shadow-md">
      {products.map((el, index) => (
        <Card key={index} item={el} />
      ))}
    </div>
  )
}

export default Product