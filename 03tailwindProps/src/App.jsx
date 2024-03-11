import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'


function App() {
  return (
    <>
      <h1 className='bg-blue-400 text-black p-4 rounded-xl'>Tailwind CSS || Props</h1>
      <Card LaptopName='HP'/>
    </>
  )
}

export default App
