import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md">


      <div className="bg-gradient-to-r from-pink-500 to-rose-400 text-center py-3">
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
          ✨ Tiava Beauty
        </h1>
        <p className="text-xs text-pink-100">
          Glow Naturally, Shine Beautifully
        </p>
      </div>


    <nav className="hidden md:block">
  <ul className="flex flex-wrap justify-center gap-6 py-4 text-gray-700 font-medium">

    <li>
    <Link className="hover:text-pink-600 transition" to="/">
     Home</Link></li>
<li>
 <Link className="hover:text-pink-600 transition" to="/about">
  About
 </Link>
 </li>

          <li>
            <Link className="hover:text-pink-600 transition" to="/shop-page">
              Shop
            </Link>
          </li>

          <li>
            <Link className="hover:text-pink-600 transition" to="/product detail">
              Product
            </Link>
          </li>

          <li>
            <Link className="hover:text-pink-600 transition" to="/category pages">
              Category
            </Link>
          </li>

          

          <li>
            <Link className="hover:text-pink-600 transition" to="/contact page">
              Contact
            </Link>
          </li>

          <li>
            <Link className="hover:text-pink-600 transition" to="/user account">
              Account
            </Link>
          </li>

          <li>
            <Link className="hover:text-pink-600 transition" to="/cart-checkout">
              Cart 
            </Link>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Navbar;