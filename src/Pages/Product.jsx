import React from "react";
import products from "../Components/Data";

const Product = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
          Our Products
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
            
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-36 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

            
              <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-800 truncate">
                  {item.name}
                </h3>

                <p className="text-lg font-bold text-emerald-700 mt-1">
                  ₹{item.price}
                </p>

               
  <div className="mt-4 flex gap-2">
<button className="flex-1 bg-emerald-100 text-emerald-800 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-600 transition duration-300">
   Add Cart
  </button>

  <button className="flex-1 bg-teal-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 transition duration-300">
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

export default Product;