import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-pink-50 via-white to-rose-50">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

  
        <div className="text-center md:text-left">

          <span className="text-emerald-700 font-semibold tracking-widest uppercase text-xs md:text-sm">
            Our Story
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight text-gray-900">
            Beauty that
            <span className="text-emerald-700"> Feels Natural</span>
          </h2>
<p className="text-gray-600 mt-4 text-sm md:text-base leading-7">
  We carefully select premium ingredients known for their nourishing and
  revitalizing properties. From botanical extracts and natural antioxidants to
  advanced skincare solutions, every ingredient is chosen with purpose to
  support healthier, smoother and more radiant-looking skin. Our products are
  designed to deliver hydration, improve skin texture and help restore your
  natural glow with consistent use.
</p>

          <p className="text-gray-600 mt-3 text-sm md:text-base leading-6 md:leading-7">
            Lightweight, non-toxic formulas suitable for all skin types.
          </p>

       
          <div className="mt-6 space-y-3 text-sm md:text-base">

            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="w-2 h-2 bg-emerald-700 rounded-full"></span>
              Clean & Natural Ingredients
            </div>

            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="w-2 h-2 bg-emerald-700 rounded-full"></span>
              Dermatologist Approved
            </div>

            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="w-2 h-2 bg-emerald-700 rounded-full"></span>
              Gentle for Daily Use
            </div>

           <div className="flex items-center gap-2 justify-center md:justify-start">
  <span className="w-2 h-2 bg-emerald-700 rounded-full"></span>
  Cruelty-Free Beauty
</div>

          </div>

          <div className="grid grid-cols-3 gap-3 mt-8 text-center">

            <div className="bg-white p-3 md:p-5 rounded-xl shadow">
              <h3 className="text-xl md:text-2xl font-bold text-emerald-700">10K+</h3>
              <p className="text-xs md:text-sm text-gray-500">Clients</p>
            </div>

            <div className="bg-white p-3 md:p-5 rounded-xl shadow">
              <h3 className="text-xl md:text-2xl font-bold text-emerald-700">50+</h3>
              <p className="text-xs md:text-sm text-gray-500">Products</p>
            </div>

            <div className="bg-white p-3 md:p-5 rounded-xl shadow">
              <h3 className="text-xl md:text-2xl font-bold text-emerald-700">4.9★</h3>
              <p className="text-xs md:text-sm text-gray-500">Rating</p>
            </div>

          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">

            <Link
  to="/shop-page"
  className="bg-emerald-700 text-white px-6 py-3 rounded-full hover:bg-emerald-800 transition text-center"
>
  Explore Products
</Link>
<Link
  to="/contact-page"
  className="border border-emerald-700 text-emerald-700 px-6 py-3 rounded-full hover:bg-pink-50 transition text-center"
>
  Learn More
</Link>

          </div>

        </div>

        <div className="relative flex justify-center">

     
        <div className="absolute w-56 h-56 md:w-[420px] md:h-[420px] bg-gradient-to-r from-emerald-700 to-teal-500 rounded-full blur-3xl opacity-30"></div>
          <div className="relative bg-white p-3 md:p-6 rounded-3xl shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1598528738936-c50861cc75a9?w=900"
              alt="Beauty Model"
              className="w-72 md:w-[420px] h-[320px] md:h-[520px] object-cover rounded-2xl"
            />

            <div className="absolute -bottom-3 -right-3 bg-emerald-700 text-white px-3 md:px-5 py-2 md:py-3 rounded-xl shadow text-xs md:text-sm">
              Glow • Care • Confidence
            </div>

          </div>

        </div>

      </div>
    </section>
 {/* Customer Reviews Section */}
<section className="py-16 px-4 bg-gradient-to-br from-rose-50 via-white to-pink-50">

  <div className="max-w-6xl mx-auto text-center">

    <span className="text-emerald-700 font-semibold tracking-widest uppercase text-sm">
      Customer Love
    </span>

    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">
      Loved by Thousands of 
      <span className="text-emerald-700"> Beauty Lovers</span>
    </h2>

    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
      Real experiences from customers who made Tiava Beauty a part of their
      everyday skincare routine.
    </p>


    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">


      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <div className="text-yellow-400 text-xl">
          ★★★★★
        </div>

        <p className="text-gray-600 mt-4 leading-7">
          "My skin feels softer and more hydrated after using Tiava products.
          The quality is amazing."
        </p>

        <h3 className="font-bold text-gray-900 mt-5">
          — Ananya Sharma
        </h3>
      </div>



      <div className="bg-white p-6 rounded-2xl shadow-lg">

        <div className="text-yellow-400 text-xl">
          ★★★★★
        </div>

        <p className="text-gray-600 mt-4 leading-7">
          "Beautiful packaging and gentle formulas. Perfect for my daily
          skincare routine."
        </p>

        <h3 className="font-bold text-gray-900 mt-5">
          — Priya Mehta
        </h3>

      </div>



      <div className="bg-white p-6 rounded-2xl shadow-lg">

        <div className="text-yellow-400 text-xl">
          ★★★★★
        </div>

        <p className="text-gray-600 mt-4 leading-7">
          "I love the natural feel of these products. My skin looks fresh
          and glowing."
        </p>

        <h3 className="font-bold text-gray-900 mt-5">
          — Riya Kapoor
        </h3>

      </div>


    </div>

  </div>

</section>

<footer className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white pt-16 pb-6">

  <div className="max-w-6xl mx-auto px-6">

    <div className="grid md:grid-cols-4 gap-10">


   

      <div>

        <h2 className="text-3xl font-bold text-emerald-200">
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

          <input
          type="email"  placeholder="Your email" className="w-full px-4 py-3 rounded-l-full text-gray-800
          outline-none"/>
 <button className="bg-teal-600 px-5 rounded-r-full hover:bg-teal-700 transition font-semibold ">
            Join</button>

</div>
  </div>
   </div>

<div className="border-t border-emerald-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-emerald-100">
<p>© 2026 Tiava Beauty. All Rights Reserved.</p>
      <div className="flex gap-5">
  <span className="hover:text-teal-300 cursor-pointer transition"> Instagram
        </span>
<span className="hover:text-teal-300 cursor-pointer transition">  Facebook
        </span>

<span className="hover:text-teal-300 cursor-pointer transition"> Pinterest
     </span>
  </div>
    </div>
  </div>
  </footer>
  </>
  );

};

export default About;