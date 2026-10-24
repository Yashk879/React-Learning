import React from 'react'
import { useState } from 'react'
//useState Practice
const UseState = () => {
    const [Num,setNum]=useState(0)
    const [Dnum,setDnum]=useState(0);
    function incNum(){
        setNum(Num+1)
    }
    function decNum(){
        setDnum(Dnum-1);
    }
  return (
    <div>
      <h1>Number:- {Num}</h1>
      <button onClick={incNum}>Increase</button>
      <br />
      <h1>Number:- {Dnum}</h1>
      <button onMouseDown={decNum}>Decrease</button>
    </div>
  )
}

export default ExState
