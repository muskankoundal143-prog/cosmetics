import React, { useState } from 'react'


const User = () => {
    const [count,setCount]=useState("muskan")
    const handleClick=()=>{
        setCount("muskan developer")
    }
  return (
   <>
   {count}
   <button onClick={handleClick}>inc</button>
   </>
  )
}

export default User