import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false);

const closeMenu = () => {
setMenuOpen(false);
};

return ( <div className="bg-white shadow-md">
 <div className="bg-gradient-to-r from-stone-700 via-emerald-700 to-teal-700 py-6 shadow-xl">
  <div className="text-center">

<h1 className="text-3xl md:text-5xl font-bold text-white tracking-[4px]">
  TIAVA BEAUTY
</h1>                            

<div className="w-24 h-1 bg-amber-400 mx-auto mt-3 rounded-full"></div>

<p className="mt-3 text-emerald-100 text-sm md:text-base tracking-widest uppercase">
  Natural • Luxury • Skincare
</p>


  </div>
</div>


 
  <div className="md:hidden flex justify-end px-4 py-3">
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="text-3xl text-emerald-700"
    >
      {menuOpen ? "✕" : "☰"}
    </button>
  </div>


  <nav className="hidden md:block">
    <ul className="flex justify-center gap-6 py-4 text-gray-700 font-medium">
      <li><Link className="hover:text-emerald-700" to="/">Home</Link></li>
      <li><Link className="hover:text-emerald-700" to="/about">About</Link></li>
      <li><Link className="hover:text-emerald-700" to="/shop-page">Shop</Link></li>
      <li><Link className="hover:text-emerald-700" to="/product-detail">Product</Link></li>
      <li><Link className="hover:text-emerald-700" to="/category-pages">Category</Link></li>
      <li><Link className="hover:text-emerald-700" to="/contact-page">Contact</Link></li>
      <li><Link className="hover:text-emerald-700" to="/user-account">Account</Link></li>
    
    </ul>
  </nav>

  {menuOpen && (
    <nav className="md:hidden bg-emerald-100 border-t">
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

      </ul>
    </nav>
  )}
</div>


);
};

export default Navbar;
