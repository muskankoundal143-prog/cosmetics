import React from "react";
import shop from "../Components/Data";

const Shop = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">

    
      <section className="max-w-7xl mx-auto px-4 pt-10">

        <div className="bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-600 rounded-3xl p-8 md:p-14 text-white flex flex-col md:flex-row items-center justify-between overflow-hidden">

          <div className="md:w-1/2">
            <p className="uppercase tracking-widest text-emerald-200 text-sm">
              Premium Skincare Collection
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mt-3 leading-tight">
              Glow Naturally
              <br />
              With Tiava Beauty
            </h1>

            <p className="mt-5 text-emerald-100 leading-7">
              Discover luxurious skincare products made with natural
              ingredients for healthy and radiant skin.
            </p>

            <button className="mt-6 bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition">
              Explore Collection
            </button>
          </div>


          <div className="mt-8 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=700"
              alt="skincare"
              className="w-72 md:w-96 rounded-3xl shadow-2xl"
            />
          </div>

        </div>

      </section>



      <section className="max-w-7xl mx-auto px-4 mt-12">

        <div className="flex gap-3 overflow-x-auto">

          {
            ["All","Face Care","Serum","Creams","Natural","Best Sellers"].map((cat)=>(
              <button
              key={cat}
              className="px-6 py-2 bg-white rounded-full shadow text-sm font-medium hover:bg-emerald-600 hover:text-white transition whitespace-nowrap"
              >
                {cat}
              </button>
            ))
          }

        </div>

      </section>



      <section className="max-w-7xl mx-auto px-4 py-12">


        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold text-gray-800">
            Our Products
          </h2>


          <select className="border rounded-lg px-4 py-2 text-sm">
            <option>Sort By</option>
            <option>Price Low</option>
            <option>Price High</option>
          </select>


        </div>



        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">


        {shop.map((item)=>(


          <div
          key={item.id}
          className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 group"
          >




            <div className="relative overflow-hidden">


              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full z-10">
                20% OFF
              </span>


              <button className="absolute right-3 top-3 bg-white rounded-full w-9 h-9 shadow z-10 hover:text-red-500">
                ♡
              </button>


              <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
              />


            </div>




            <div className="p-5">


              <p className="text-xs text-gray-400">
                Premium Skincare
              </p>


              <h3 className="font-semibold text-gray-800 mt-1 truncate">
                {item.name}
              </h3>



              <div className="flex items-center mt-2">

                <span className="text-yellow-400">
                  ★★★★★
                </span>

                <span className="text-xs text-gray-500 ml-2">
                  4.8 (120)
                </span>

              </div>



              <div className="flex items-center gap-2 mt-3">

                <span className="text-xl font-bold text-emerald-700">
                  ₹{item.price}
                </span>

                <span className="text-sm text-gray-400 line-through">
                  ₹{Math.floor(item.price*1.25)}
                </span>

              </div>




              
<div className="flex gap-3 mt-5">

  <button 
    className="flex-1 bg-emerald-100 text-emerald-800 py-3 rounded-xl font-semibold hover:bg-emerald-700 hover:text-white transition"
  >
    Add Cart
  </button>


  <button 
    className="flex-1 bg-teal-600 text-white py-3 rounded-xl font-semibold hover:bg-teal-700 transition"
  >
    Buy Now
  </button>

</div>



            </div>


          </div>


        ))}


        </div>


      </section>





      <section className="bg-white py-10">

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 px-4 text-center">


          <div>
            🚚
            <h3 className="font-semibold mt-2">Free Shipping</h3>
            <p className="text-xs text-gray-500">Above ₹999</p>
          </div>


          <div>
            🔒
            <h3 className="font-semibold mt-2">Secure Payment</h3>
            <p className="text-xs text-gray-500">100% Safe</p>
          </div>


          <div>
            🌿
            <h3 className="font-semibold mt-2">Natural Products</h3>
            <p className="text-xs text-gray-500">Skin Friendly</p>
          </div>


          <div>
            ⭐
            <h3 className="font-semibold mt-2">Trusted Brand</h3>
            <p className="text-xs text-gray-500">10K+ Customers</p>
          </div>


        </div>

      </section>


    </div>
  );
};

export default Shop;
