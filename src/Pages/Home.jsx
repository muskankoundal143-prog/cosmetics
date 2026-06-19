import React, { useEffect, useState } from "react";
import User from "./User";

const Home = () => {
//   const[count,setCount]=useState(0)
//   const[data,setData]=useState(0)
//   useEffect(()=>{
//     setTimeout(()=>{
//       setCount(count)
     
//     },[data])

//   })
//   const handleClick=()=>{
//   setData(data)
// }
  return (
    <>
    {/* <h1>{count}</h1>
    <h2 >{data}</h2>
    <button onClick={handleClick}>Inc</button> */}
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

        <p className="mt-4 text-sm md:text-base text-gray-600 max-w-md mx-auto md:mx-0">
          Luxurious skincare crafted with premium ingredients to nourish and enhance your natural glow.
        </p>

    
        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
          <div className="bg-white px-3 py-2 rounded-lg shadow text-xs md:text-sm">
            🌿 Natural
          </div>
          <div className="bg-white px-3 py-2 rounded-lg shadow text-xs md:text-sm">
            🧴 Tested
          </div>
          <div className="bg-white px-3 py-2 rounded-lg shadow text-xs md:text-sm">
            💖 Cruelty Free
          </div>
        </div>

 
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <button className="px-6 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition">
            Shop Now
          </button>

          <button className="px-6 py-3 border border-emerald-600 text-emerald-600 rounded-full font-semibold hover:bg-pink-50 transition">
            Explore
          </button>
        </div>

      </div>

    
      <div className="relative flex justify-center">

        <div className="absolute -top-4 -left-4 w-full h-full bg-emerald-700 rounded-3xl rotate-3"></div>

        <div className="relative bg-white p-3 rounded-3xl shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1598528738936-c50861cc75a9?w=900"
            alt="Beauty Product"
            className="w-full max-w-sm md:max-w-md h-[320px] md:h-[420px] object-cover rounded-2xl"
          />
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
            <p className="text-gray-600 mt-4">
              Discover our most loved skincare and beauty essentials.
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
   <button className="mt-4 bg-emerald-700 text-white px-5 py-2 rounded-full hover:bg-emerald-800">
                  View Product
                </button>
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
      <button className="mt-4 bg-emerald-700 text-white px-5 py-2 rounded-full hover:bg-emerald-800">
                  View Product
                </button>
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
                <button className="mt-4 bg-emerald-700 text-white px-5 py-2 rounded-full hover:bg-emerald-800">
                  View Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-pink-50 py-20">
  <div className="max-w-6xl mx-auto px-6">
    
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-emerald-700">
        Why Choose Tiava?
      </h2>
      <p className="text-gray-600 mt-4">
        We combine nature, innovation, and luxury to bring out your best glow.
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-8">
      
      <div className="bg-white p-6 rounded-xl shadow text-center">
        <div className="text-4xl mb-4">🌿</div>
        <h3 className="text-xl font-semibold text-gray-800">
          Natural Ingredients
        </h3>
        <p className="text-gray-600 mt-2">
          Carefully selected ingredients that are gentle on your skin.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow text-center">
        <div className="text-4xl mb-4">✨</div>
        <h3 className="text-xl font-semibold text-gray-800">
          Premium Quality
        </h3>
        <p className="text-gray-600 mt-2">
          Luxury skincare products crafted with excellence.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow text-center">
        <div className="text-4xl mb-4">🧴</div>
        <h3 className="text-xl font-semibold text-gray-800">
          All Skin Types
        </h3>
        <p className="text-gray-600 mt-2">
          Suitable for dry, oily, sensitive, and combination skin.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow text-center">
        <div className="text-4xl mb-4">💖</div>
        <h3 className="text-xl font-semibold text-gray-800">
          Customer Loved
        </h3>
        <p className="text-gray-600 mt-2">
          Trusted by thousands for radiant and healthy skin.
        </p>
      </div>

    </div>
  </div>
</section>
<section className="bg-pink-50 py-20">
  <div className="max-w-4xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-bold text-emerald-700">
      Join Tiava Community
    </h2>

    <p className="text-gray-600 mt-4">
      Get skincare tips, beauty secrets & exclusive offers directly in your inbox.
    </p>

    <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
      
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full md:w-2/3 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-emerald-600"
      />

      <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition">
        Subscribe
      </button>

    </div>

    <p className="text-gray-500 text-sm mt-4">
      No spam, only beauty updates 💖
    </p>

  </div>
</section>
    </>
  );
};

export default Home;