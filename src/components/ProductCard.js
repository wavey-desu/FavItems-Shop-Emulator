import React from 'react'
import '../styles/ProductCard.css'

export default function ProductCard({item, id, name, description, img, handleFavClick}) {
  return (
    <div className='card'>
        <button className='favBtn' onClick={() => handleFavClick(item)}><i class="fa-solid fa-heart"></i></button>
        <img src={img} alt="" />
        <h1>{name}</h1>
        <p>{description}</p>
    </div>
  )
}
