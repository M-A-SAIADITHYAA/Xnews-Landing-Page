


import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import { ThemeProvider } from "@/components/theme-provider"
import Pricing from './components/Pricing'
import { Analytics } from '@vercel/analytics/react';

function App() {
  

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Analytics />
      <Header/>
      <Hero/>
      <Features/>
      <Pricing/>
      </ThemeProvider>
    </>
  )
}

export default App
