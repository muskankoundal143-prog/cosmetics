import React from "react";
import shop from "../Components/Data";

const Shop = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
     
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
          Shop Now
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {shop.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
          
              <div className="relative overflow-hidden">
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-10">
                  SALE
                </span>

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-44 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

           
              <div className="p-4">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 truncate">
                  {item.name}
                </h3>

            
                <div className="flex items-center mt-1 text-yellow-500 text-sm">
                  ★★★★★
                  <span className="text-gray-500 ml-1">(4.8)</span>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg md:text-xl font-bold text-pink-600">
                    ₹{item.price}
                  </p>

                  <span className="text-sm text-gray-400 line-through">
                    ₹{Math.floor(item.price * 1.2)}
                  </span>
                </div>
<div className="mt-4 flex gap-2">
  <button className="flex-1 bg-pink-100 text-pink-700 py-2 rounded-lg text-sm font-semibold hover:bg-pink-200 transition duration-300">
    Add Cart
  </button>

  <button className="flex-1 bg-pink-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-pink-700 transition duration-300">
    Buy Now
  </button>
</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;