import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Nav from './Component/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='fixed top-0 z-[999] w-full'><Nav></Nav></div>
    <Outlet></Outlet>
    </>
  )
}

export default App
