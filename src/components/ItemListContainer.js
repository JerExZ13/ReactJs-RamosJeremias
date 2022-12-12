import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import CardItem from './CardItem'
const ItemListContainer = ({ items }) => {
  const { categoryId } = useParams()

  let category = categoryId ? categoryId : null
  return (
    <>
      <div className='flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 md:px-20 py-10'>
        
        {
        category 
          ? items.filter(i => i.category == categoryId).map((item, index) => <CardItem item={item} key={index} />)
          : items.map((item, index) => <CardItem item={item} key={index} />)
      }
      </div>
    </>
  )
}

export default ItemListContainer