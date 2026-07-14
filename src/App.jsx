import React from 'react'
import Navbar from './Components/Layout/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './Pages/Shop'
import Category from './Pages/Category'
import Contact from './Pages/Contact'
import Account from './Pages/Account'
import Product from './Pages/Product'
import BuyNow from "./Pages/BuyNow";
import Orders from './Pages/Order'

const App = () => {
  return (
    <>
  <Navbar />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path='/shop-page' element={<Shop />}/>
 <Route path='/product-detail' element={<Product />} />
    <Route path="/buy/:id" element={<BuyNow />} />
    <Route path="/category-pages" element={<Category />} />
    <Route path="/contact-page" element={<Contact />} />
     <Route path="/user-account" element={<Account />} />
     
      </Routes>
    </>
  )
}

export default App