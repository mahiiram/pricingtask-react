import React from "react"
import { useState } from "react"

function Count(){
    const [count,setcount]=useState(0)
  const[loading,setLoading]=useState(false)
 function handleinput(type){
   if(type==="decrement" && count>=1)
   setcount(count - 1)
   else if(type==="increment")
   setcount(count + 1)
 }
    return(
        <div className='container'>
        <button className='buttondec'onClick={()=>handleinput("decrement")}>-</button>
        <div style={{width:20}}></div>
        <p>{count}</p>
        <div style={{width:20}}></div>
        <button className='buttoninc' onClick={()=>handleinput("increment")}>+</button>
        
      </div>
    )
}

export default Count;