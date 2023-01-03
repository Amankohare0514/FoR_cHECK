import React, { useState } from "react"
import "./App.css"
export default function App() {
const [data, setData]=useState(0);

  return (
    <div className="aman">

      <h1 className="data1">This is simle project for incerement and decrement</h1>
     <h1 className="data">{data}</h1>
      <h2><span><button className="button1" onClick={()=>setData(data+1)}>increment</button></span></h2>
      <h2><span><button className="button2" onClick={()=>setData(data-1)}>decrement</button></span></h2>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    </div>
  )
}

