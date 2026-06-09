import React from 'react'
import Navbar from './Components/Layout/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './Pages/Shop'
import Category from './Pages/Category'
import Contact from './Pages/Contact'
import Account from './Pages/Account'
import Cart from './Pages/Cart'
import Product from './Pages/Product'



const App = () => {
  return (
    <>
  <Navbar />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path='/shop-page' element={<Shop />}/>
<Route path='product detail' element={<Product />}/>
    <Route path="/category pages" element={<Category />} />
    <Route path="/contact page" element={<Contact />} />
     <Route path="/user account" element={<Account />} />
      <Route path="/cart-checkout" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App