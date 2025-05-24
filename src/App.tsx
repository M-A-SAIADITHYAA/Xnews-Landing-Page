import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header/>
      <Hero/>
      <Features/>
      </ThemeProvider>
    </>
  )
}

export default App
