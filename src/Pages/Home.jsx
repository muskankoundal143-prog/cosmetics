import React, { useEffect, useRef, useState } from "react";
import User from "./User";
import { Link } from "react-router-dom";
const Home = () => {
  
  
  return ( 
    <>
  
 
      
 <section className="relative overflow-hidden bg-gradient-to-r from-emerald-50 via-white to-teal-50 py-16 md:py-20">

 <div className="absolute top-0 left-0 w-56 md:w-72 h-56 md:h-72 bg-emerald-200 rounded-full blur-3xl opacity-30"></div>

 <div className="absolute bottom-0 right-0 w-56 md:w-72 h-56 md:h-72 bg-teal-200 rounded-full blur-3xl opacity-30"></div>

 <div className="relative max-w-6xl mx-auto px-5">
<div className="grid md:grid-cols-2 gap-10 items-center">

 <div className="text-center md:text-left">

  <span className="inline-block px-4 py-2 bg-pink-50 text-emerald-600 rounded-full text-xs md:text-sm font-semibold">
   Premium Beauty Collection
    </span>

 <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
 Reveal Your
  <span className="block text-emerald-700">
   Natural Beauty
   </span>
    </h1>
<p className="mt-4 text-sm md:text-base text-gray-600 max-w-md mx-auto md:mx-0 leading-7">
  Luxurious skincare crafted with premium ingredients to nourish, hydrate and
  enhance your natural glow. At Tiava Beauty, we combine the power of nature
  with advanced skincare innovation to create gentle yet effective formulas
  that care for every skin type. Our carefully designed products help restore
  moisture, improve skin texture and bring out a healthy, radiant complexion.
  Experience a premium beauty ritual made to boost your confidence and reveal
  your skin's true beauty every day.
</p>
  <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
  <div className="bg-white px-3 py-2 rounded-lg shadow text-xs md:text-sm">
  Natural
 </div>
 <div className="bg-white px-3 py-2 rounded-lg shadow text-xs md:text-sm">
Tested
</div>
<div className="bg-white px-3 py-2 rounded-lg shadow text-xs md:text-sm">
 Cruelty Free
 </div>
 </div>


<div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">

  <Link to="/shop-page">
    <button className="px-6 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition">
      Shop Now
    </button>
  </Link>

  <Link to="/category-pages">
    <button className="px-6 py-3 border border-emerald-600 text-emerald-600 rounded-full font-semibold hover:bg-pink-50 transition">
      Explore
    </button>
  </Link>

</div>
  </div>

 <div className="relative flex justify-center">
<div className="absolute -top-4 -left-4 w-full h-full bg-emerald-700 rounded-3xl rotate-3"></div>

  <div className="relative bg-white p-3 rounded-3xl shadow-2xl">
  <img
  src="https://images.unsplash.com/photo-1598528738936-c50861cc75a9?w=900"
 alt="Beauty Product"
 className="w-full max-w-sm md:max-w-md h-[320px] md:h-[420px] object-cover rounded-2xl"/>
    </div>
<div className="absolute bottom-4 -left-2 bg-white px-3 py-2 rounded-xl shadow text-xs md:text-sm">
     <span className="text-gray-500">Trusted</span>
       <p className="font-bold">50K+ Customers</p>
 </div>

</div>

</div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-emerald-700">
              Our Best Sellers
            </h2>
           <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-7">
  Discover our most loved skincare and beauty essentials, carefully crafted
  with premium ingredients to nourish, hydrate and enhance your natural glow.
  From brightening serums to deeply moisturizing formulas, each product is
  designed to support healthy-looking skin and create a luxurious everyday
  skincare experience. Explore the favorites trusted by our customers and
  bring the beauty of nature into your daily routine.
</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-pink-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1612817288484-6f916006741a"
                alt="Face Serum"
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  Vitamin C Serum
                </h3>
                <p className="text-gray-600 mt-2">
                  Brightens skin and reduces dark spots naturally.
                </p>
                <Link to="/product-detail">
  <button className="mt-4 bg-emerald-700 text-white px-5 py-2 rounded-full hover:bg-emerald-800">
    View Product
  </button>
</Link>
              </div>
            </div>

            <div className="bg-pink-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be"
                alt="Moisturizer"
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  Hydrating Moisturizer
                </h3>
                <p className="text-gray-600 mt-2">
                  Deep nourishment for soft and glowing skin.
                </p>
                <Link to="/product-detail">
  <button className="mt-4 bg-emerald-700 text-white px-5 py-2 rounded-full hover:bg-emerald-800">
    View Product
  </button>
</Link>
              </div>
            </div>


            <div className="bg-pink-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
                alt="Face Wash"
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  Gentle Face Wash
                </h3>
                <p className="text-gray-600 mt-2">
                  Cleanses impurities while maintaining moisture.
                </p>
                <Link to="/product-detail">
  <button className="mt-4 bg-emerald-700 text-white px-5 py-2 rounded-full hover:bg-emerald-800">
    View Product
  </button>
</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
     <section className="bg-gradient-to-b from-pink-50 via-white to-emerald-50 py-20">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center mb-14">
      <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
        Why Tiava?
      </span>

      <h2 className="mt-4 text-4xl font-extrabold text-gray-900">
        Beauty Inspired By Nature
      </h2>

      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        We combine natural ingredients, advanced skincare science and luxury
        formulas to give your skin a healthy glow.
      </p>
    </div>


    <div className="grid md:grid-cols-4 gap-8">

      <div className="bg-white p-7 rounded-3xl shadow-lg hover:-translate-y-2 transition text-center">
        <div className="text-xl mb-4">
          🌿
        </div>

        <h3 className="text-2xl font-bold text-gray-800">
          Natural Formula
        </h3>

        <p className="text-gray-600 mt-3">
          Carefully selected botanical ingredients that love your skin.
        </p>
      </div>


      <div className="bg-white p-7 rounded-3xl shadow-lg hover:-translate-y-2 transition text-center">
        <div className="text-xl mb-4">
          ✨
        </div>

        <h3 className="text-2xl font-bold text-gray-800">
          Premium Quality
        </h3>

        <p className="text-gray-600 mt-3">
          Luxury skincare created with high-quality ingredients.
        </p>
      </div>


      <div className="bg-white p-7 rounded-3xl shadow-lg hover:-translate-y-2 transition text-center">
        <div className="text-xl mb-4">
          💧
        </div>

        <h3 className="text-2xl font-bold text-gray-800">
          Every Skin Type
        </h3>

        <p className="text-gray-600 mt-3">
          Products designed for dry, oily and sensitive skin.
        </p>
      </div>


      <div className="bg-white p-7 rounded-3xl shadow-lg hover:-translate-y-2 transition text-center">
        <div className="text-xl mb-4">
          💖
        </div>

        <h3 className="text-2xl font-bold text-gray-800">
          Loved By Customers
        </h3>

        <p className="text-gray-600 mt-3">
          Thousands of customers trust our beauty solutions.
        </p>
      </div>

    </div>



    <div className="mt-16 bg-emerald-700 rounded-3xl p-8 text-white grid md:grid-cols-3 gap-8 text-center">

      <div>
        <h3 className="text-4xl font-bold">
          50K+
        </h3>
        <p className="mt-2 text-emerald-100">
          Happy Customers
        </p>
      </div>


      <div>
        <h3 className="text-4xl font-bold">
          100%
        </h3>
        <p className="mt-2 text-emerald-100">
          Quality Tested
        </p>
      </div>


      <div>
        <h3 className="text-4xl font-bold">
          24/7
        </h3>
        <p className="mt-2 text-emerald-100">
          Customer Support
        </p>
      </div>

    </div>




    <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">

      <h2 className="text-3xl font-bold text-emerald-700">
        Join Tiava Beauty Club 
      </h2>

      <p className="text-gray-600 mt-3">
        Get skincare tips, beauty secrets and exclusive offers.
      </p>


      <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">

        <input
          type="email"
          placeholder="Enter your email"
          className="px-6 py-4 rounded-full border w-full md:w-96 focus:outline-none focus:border-emerald-600"
        />


        <button className="px-8 py-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition">
          Subscribe
        </button>

      </div>


      <p className="text-sm text-gray-500 mt-4">
        No spam. Only beauty updates ✨
      </p>

    </div>


  </div>
</section>

<footer className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white pt-16 pb-6">

  <div className="max-w-6xl mx-auto px-6">

    <div className="grid md:grid-cols-4 gap-10">

      <div>

        <h2 className="text-3xl font-bold text-emerald-300">
          Tiava Beauty
        </h2>

        <p className="mt-4 text-emerald-100 leading-7 text-sm">
          Tiava Beauty brings luxurious skincare inspired by nature and
          powered by modern beauty science. Our premium formulas are created
          with carefully selected ingredients to nourish your skin, enhance
          your natural glow and make every beauty routine feel special.
        </p>

      </div>

      <div>

        <h3 className="text-xl font-semibold mb-5 text-white">
          Quick Links
        </h3>


        <ul className="space-y-3 text-emerald-100">

          <li>
            <Link 
            to="/"
            className="hover:text-teal-300 transition">
              Home
            </Link>
          </li>


          <li>
            <Link 
            to="/shop-page"
            className="hover:text-teal-300 transition">
              Shop
            </Link>
          </li>


          <li>
            <Link 
            to="/about"
            className="hover:text-teal-300 transition">
              About Us
            </Link>
          </li>


          <li>
            <Link 
            to="/contact-page"
            className="hover:text-teal-300 transition">
              Contact
            </Link>
          </li>

        </ul>

      </div>

      <div>

        <h3 className="text-xl font-semibold mb-5 text-white">
          Customer Care
        </h3>


        <ul className="space-y-3 text-emerald-100">

          <li className="hover:text-teal-300 cursor-pointer transition">
            Skin Care Guide
          </li>

          <li className="hover:text-teal-300 cursor-pointer transition">
            Shipping & Delivery
          </li>

          <li className="hover:text-teal-300 cursor-pointer transition">
            Return Policy
          </li>

          <li className="hover:text-teal-300 cursor-pointer transition">
            Privacy Policy
          </li>

        </ul>

      </div>

      <div>

        <h3 className="text-xl font-semibold mb-5 text-white">
          Beauty Club
        </h3>


        <p className="text-emerald-100 text-sm leading-6">
          Subscribe for skincare tips, beauty secrets, new product launches
          and exclusive offers from Tiava Beauty.
        </p>

<div className="mt-5 flex">
 <input type="email"  placeholder="Your email" className="w-full px-4 py-3 rounded-l-full text-gray-900 outline-none"/>
<button className="bg-teal-600 px-5 rounded-r-full hover:bg-teal-700 transition font-semibold">
 Join</button>
  </div>
   </div>
 </div>

<div className="border-t border-emerald-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-emerald-100" >
 <p>© 2026 Tiava Beauty. All Rights Reserved.</p>

 <div className="flex gap-5">
<span className="hover:text-teal-300 cursor-pointer transition">
  Instagram
</span>

 <span className="hover:text-teal-300 cursor-pointer transition">
   Facebook
 </span>

 <span className="hover:text-teal-300 cursor-pointer transition">
  Pinterest
</span>
 </div>
</div> 
</div>
</footer>
    </>
  );
}

export default Home;