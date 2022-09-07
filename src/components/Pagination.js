import React, {useState} from 'react'
import '../styles/Pagination.css'

export default function Pagination({limit, setLimit, setSkip}) {
    let [n,setN] = useState(1)
    const skip =[]

    for (let i = 0; i < 100; i += 100/(100/limit)){ //calculate pagination skip
        skip.push(i)
    }

  return (
    <div className='paginationCont'>
        <p>page {n} of {(100/limit)}</p>

        <div className="pageButtons">
            {skip.map((skipper,index) =>(
                <button onClick={() => {setSkip(skipper); setN(index+1);}} key={index}>{index+1}</button>
            ))}
        </div>

        <div className="pageLimitCont">
            <p>items in page:</p>
            <button onClick={() => {setLimit(20); setSkip(0); setN(1)}}>20</button>
            <button onClick={() => {setLimit(50); setSkip(0); setN(1)}}>50</button>
            <button onClick={() => {setLimit(100); setSkip(0); setN(1)}}>100</button>
        </div>
    </div>
  )
}
