import './App.css'
import React from 'react'
import Navbar from './Components/navbar'
import { Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div>
    <Navbar/>

    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/product' element={ <Product /> } />
      <Route path='/contact' element={ <Contact /> } />

    </Routes>

    <Footer/>
    </div>
  )
};

export default App
