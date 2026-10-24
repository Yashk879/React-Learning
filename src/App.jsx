// import React from 'react'
// import Card from './components/card'
// const App = () => {
//   return (
//     <div>
//      <Card image="https://tse4.mm.bing.net/th/id/OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl?r=0&pid=Api&h=220&P=0" 
//      name="Google" 
//      days="2 days ago" 
//      job="SDE" 
//      tag1="DSA" 
//      tag2="FSD" 
//      salary="$500/hr" 
//      state="Bengaluru" 
//      country="India" />

//      <Card image="https://tse4.mm.bing.net/th/id/OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl?r=0&pid=Api&h=220&P=0" 
//      name="Google" 
//      days="2 days ago" 
//      job="SDE" 
//      tag1="DSA" 
//      tag2="FSD" 
//      salary="$500/hr" 
//      state="Bengaluru" 
//      country="India" />
//     </div>
//   )
// }
  
// export default App

// Working with funtions
// import React from 'react'

// const App = () => {
//    function btnclick(){
//         console.log("Button is Clicked")
//       }
//   return (
//     <div>
//       <button onClick={()=>{
//         console.log("Button Clicked")
//       }}>Click me</button>
//       <div>
//       <input onChange={()=>{
//         console.log("User is Typing")
//       }} type="text" placeholder='Write Something'/>
//       </div>
//     </div>
//   )
// }

// export default App
import React from 'react'
import { useState } from 'react'

const App = () => {
  const [Num,setNum]=useState(20);
  const [Name,setName]=useState("Yash")
  function changeNumber(){
    setNum(39)
  }
  function changeNAME(){
    setName("KUMAR")
  }
  return (
    <div>
      <h1>This is the current number {Num}</h1>
      <br />
      <h2 onClick={changeNAME}>My Name is {Name}</h2>
      <br />
      <button onClick={changeNumber}>Click Me</button>
    </div>
  )
}

export default App
