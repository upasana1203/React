import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(1)

  // let counter = 1

  const min = 0;
  const max = 10;


  const addValue = () => {
    setCounter(prev => Math.min(prev + 1, max));
    
  }
  
  const removeValue = () => {
      setCounter(prev => Math.max(prev - 1, min));
  }

  return (
    <div className='container'>
         <h1>React Counter</h1>
         <h4>learning to make counter in react</h4>

         <button onClick = {addValue} disabled={counter === min -1} >Add Value {counter} </button>

         <button onClick = {removeValue}  disabled={counter === max + 1}>Remove Value {counter}</button>

         <footer className='foot'>{counter}</footer>
    </ div>
  )
}

export default App
