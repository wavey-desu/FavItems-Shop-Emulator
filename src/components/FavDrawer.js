import React from 'react'
import '../styles/FavDrawer.css'

export default function FavDrawer({items, handleFavDelete}) {
  return (
    <div className='favDrawer'>
        <h1>Favorite Items</h1>

        {items && items.map(item => (
            <div key={items.id} className="favItemsCont">
                <h1>{item.title}</h1>
                <button onClick={() => handleFavDelete(item)}>Remove</button>
            </div>
        ))}
    </div>
  )
}
