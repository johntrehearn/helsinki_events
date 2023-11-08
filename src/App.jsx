import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CategorySection from './CategorySection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CategorySection />
    </>
  )
}

export default App
