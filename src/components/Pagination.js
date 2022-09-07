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
        <p>page 1 of {n}</p>

        <div className="pageButtons">
            {skip.map((skipper,index) =>(
                <button onClick={() => {setSkip(skipper); setN(index+1);}} key={index}>{index+1}</button>
            ))}
        </div>

        <div className="pageLimitCont">
            <p># of items </p>
            <button onClick={() => {setLimit(20); setN(1)}}>20</button>
            <button onClick={() => {setLimit(50); setN(1)}}>50</button>
            <button onClick={() => {setLimit(100); setN(1)}}>100</button>
        </div>
    </div>
  )
}
