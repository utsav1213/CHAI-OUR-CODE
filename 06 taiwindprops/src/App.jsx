import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {

  return (
    <>
       <div className='bg-purple-400 px-6 py-2 rounded text-zinc-950 text-xl font-bold'>Tailwindcss</div>
        <Card usename="utsav" price="700"/>
        <Card usename="kavan" price="800"/>
    </>
  )
}

export default App
