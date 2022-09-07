import React from 'react'
import '../styles/FavDrawer.css'

export default function FavDrawer({items, handleFavDelete, setFavItems}) {
  return (
    <div className='favDrawer'>
        <h1>Favorite Items</h1>
        <button onClick={() => setFavItems([])} className='clearFavs'>Clear all</button>

        <div className="favItems">
            {items && items.map(item => (
                <div key={items.id} className="favItemsCont">
                    <img src={item.images[item.images.length - 1]} alt="product thumb" />
                    <h3>{item.title}</h3>
                    <button onClick={() => handleFavDelete(item)}>Remove</button>
                </div>
            ))}

        </div>

    </div>
  )
}
