import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import '../styles/ProductCard.css'

export default function ProductCard({item, id, name, description, img, handleFavClick}) {
  return (
    <div className='card'>
        <button className='favBtn' onClick={() => handleFavClick(item)}><FontAwesomeIcon icon={ faHeart } /></button>
        <img src={img} alt="" />
        <h1>{name}</h1>
        <p>{description}</p>
    </div>
  )
}
