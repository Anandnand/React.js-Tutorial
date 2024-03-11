import { useState } from 'react'

import './Index.css'

function App() {
//let counter=15
const [counter,setCounter]=useState(15)

 function addCount(){
  while(counter<=20){
   setCounter(counter+1)
  }
}

function removeCount(){
  while(counter>=0){
 setCounter(counter-1)
  }
}

  return (
       <div id="box">
        <h1 id='header'>Incrementing And Decrementing Numbers</h1>
        <h2 id='heading'>Counter value = {counter}</h2>
        <button class="button" onClick={addCount}>AddNumber {counter}</button>
        <br/>
        <button class="button" onClick={removeCount}>RemoveNumber {counter}</button>
        <h5>Number is = {counter}</h5>
      </div>

  )
}

export default App
