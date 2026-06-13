import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false);

const closeMenu = () => {
setMenuOpen(false);
};

return ( <div className="bg-white shadow-md">
 <div className="bg-gradient-to-r from-pink-500 to-rose-400 text-center py-3"> <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
✨ Tiava Beauty </h1> <p className="text-xs text-pink-100">
Glow Naturally, Shine Beautifully </p> </div>


 
  <div className="md:hidden flex justify-end px-4 py-3">
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="text-3xl text-pink-600"
    >
      {menuOpen ? "✕" : "☰"}
    </button>
  </div>


  <nav className="hidden md:block">
    <ul className="flex justify-center gap-6 py-4 text-gray-700 font-medium">
      <li><Link className="hover:text-pink-600" to="/">Home</Link></li>
      <li><Link className="hover:text-pink-600" to="/about">About</Link></li>
      <li><Link className="hover:text-pink-600" to="/shop-page">Shop</Link></li>
      <li><Link className="hover:text-pink-600" to="/product-detail">Product</Link></li>
      <li><Link className="hover:text-pink-600" to="/category-pages">Category</Link></li>
      <li><Link className="hover:text-pink-600" to="/contact-page">Contact</Link></li>
      <li><Link className="hover:text-pink-600" to="/user-account">Account</Link></li>
      <li><Link className="hover:text-pink-600" to="/cart-checkout">Cart </Link></li>
    </ul>
  </nav>

  {menuOpen && (
    <nav className="md:hidden bg-pink-50 border-t">
      <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium">

        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>

        <li>
          <Link to="/shop-page" onClick={closeMenu}>
            Shop
          </Link>
        </li>

        <li>
          <Link to="/product-detail" onClick={closeMenu}>
            Product
          </Link>
        </li>

        <li>
          <Link to="/category-pages" onClick={closeMenu}>
            Category
          </Link>
        </li>

        <li>
          <Link to="/contact-page" onClick={closeMenu}>
            Contact
          </Link>
        </li>

        <li>
          <Link to="/user-account" onClick={closeMenu}>
            Account
          </Link>
        </li>

        <li>
          <Link to="/cart-checkout" onClick={closeMenu}>
            Cart 
          </Link>
        </li>

      </ul>
    </nav>
  )}
</div>


);
};

export default Navbar;
