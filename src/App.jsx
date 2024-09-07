import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios'
import Hero from './components/Hero'
import Catalogo from './pages/catalogo'
import Laptops from './pages/laptops'

const App = () => {
  return (
    

    
    <BrowserRouter>
        <Header/>
        <Hero/>
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/Servicios" element={<Servicios/>} />
            <Route path="/catalogo" element={<Catalogo/>} />
            <Route path="/laptops" element={<Laptops/>} />
            <Route path="*" element={<Inicio/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
    
  )
}

export default App