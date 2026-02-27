import React , { useState , useCallback , useEffect , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [length , setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()-+_=[]{}~`"

    for(let i= 1 ; i <= length ; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length , numberAllowed , charAllowed , setPassword])

  const copyPasswordToClipBoard = useCallback(() => {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,21)
      // we can directly access window in react but if we use next.js like framework than we can use window directly because next.js have server side rendering
      window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
      passwordGenerator()
  } , [length , numberAllowed , charAllowed , passwordGenerator])
  return (
    <>

        <div  className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
          <h1 className='text-4xl text-center text-red-500'>
              Password Generator
          </h1>

          <div className = "flex shadow rounded-lg overflow-hidden mb-4">
            <input type="text"
              value = {password}
              className="outline-none w-full py-1 px-3"
              placeholder = "password"
              readOnly
              ref = {passwordRef}
            />

            <button 
            onClick={copyPasswordToClipBoard}
            className='outline-none bg-blue-700  px-3 py-0.5 shrink-0'>Copy</button>
          </div>

          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
                  type="range" 
                  min = {6}
                  max = {20}
                  value = {length}
                  className= 'cursor-grab'
                  onChange={(e) => {setLength(e.target.value)}}
              
              />
              <label>Length : {length}</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input 
                type="checkbox" 
                defaultChecked = {numberAllowed}
                id = "numberInput"
                onChange = {(e) => {setNumberAllowed((prev) => !prev)}}
              />
              
              <label htmlFor="numberInput">Numbers</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input 
                type="checkbox" 
                defaultChecked = {numberAllowed}
                id = "charInput"
                onChange = {(e) => {setCharAllowed((prev) => !prev)}}
              />
              
              <label htmlFor="charInput">Characters</label>
            </div>
            
          </div>
        </div>

    </>
  )
}

export default App
