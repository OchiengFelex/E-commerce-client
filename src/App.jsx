

import { useState } from 'react'
import{BrowserRouter, Route, Routes} from 'react-router-dom' 

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Collections from './pages/Collection Items/Collections'
import Women from './pages/Collection Items/Women'
import Men from './pages/Collection Items/Men'
import Kids from './pages/Collection Items/Kids'
import Cart from './pages/Cart'
import HelpCenter from './pages/HelpCenter'
import PlaceOrder from './pages/PlaceOrder'
import OrderCancellation from './pages/OrderCancellation'
import Register from './pages/Register'
import Login from './pages/Login'
import AdminLogin from './pages/ADMIN/AdminLogin'



function App() {
  

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     
     <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path='/collections' element={<Collections/>}/>
         <Route path='/women' element={<Women/>}/>
         <Route path="/men" element={<Men/>}/>
         <Route path="/kids" element={<Kids/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/helpcenter" element={<HelpCenter/>}/>
        <Route path="/place order" element={<PlaceOrder/>}/>
        <Route path="/ordercancellation" element={<OrderCancellation/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        


    
    </Routes>
     <Footer/>
      </BrowserRouter> 
       
    </>
  )
}

export default App