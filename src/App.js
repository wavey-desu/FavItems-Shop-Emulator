import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
// Components
import {useFetch} from './components/useFetch'
import ProductCard from './components/ProductCard';
import FavDrawer from './components/FavDrawer';
import Pagination from './components/Pagination';
//Styles
import './App.css';

function App() {
  const [limit, setLimit] = useState(20)
  const [skip, setSkip] = useState(0)
  let url =(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,images,description`)
  const {data, isPending, error} = useFetch(url); //deconstructed fetched data 
  const [items, setItems] = useState([]) //queried items
  const [favItems, setFavItems] = useState([])
  const [showFav,setShowFav] = useState(false) // show/hide favorites menu

  useEffect(() => { //set items to view
    if (data){
      setItems(prevItems => {return data.products})
    }
  },[data,limit,skip])

  const handleFavClick = (i) => { //handle favorite icon product click
    const favItemsTemp = [...favItems,i] 
    const nodupes = [...new Set(favItemsTemp)] //remove duplicates from temp array
    setFavItems(nodupes)
  }

  const handleFavDelete = (i) => { //handle favorite item delete click
    const favItemsTemp = favItems.filter( fitem => {return fitem.title !== i.title}) //set tem favitems array and remove matching item
    setFavItems(favItemsTemp)
  }

  // console.log(favItems)
  return (
    <div  className="App">
      <header >
        <h1>Products</h1> 
        <button onClick={() => setShowFav(!showFav)}><FontAwesomeIcon icon={ faHeart } /><span>{favItems.length}</span></button>
      </header>
      
      <div onClick={() => setShowFav(false)} className="results">
        {items && !isPending && !error && items.map(item => (
          <ProductCard
            handleFavClick = {handleFavClick}
            item={item}
            key={item.id}
            id={item.id}
            name={item.title}
            description={item.description}
            img={item.images[item.images.length - 1]}
           />
        ))}
      </div>

      <div className={showFav ? "favSection showFav": "favSection"}>
          <FavDrawer
            items = {favItems}
            setFavItems = {setFavItems}
            handleFavDelete = {handleFavDelete}
           />
      </div>

      <Pagination
        limit = {limit}
        setLimit = {setLimit}
        setSkip = {setSkip}
       />

    </div>
  );
}

export default App;
