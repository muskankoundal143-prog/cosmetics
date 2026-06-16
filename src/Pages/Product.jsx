import React from "react";
import products from "../Components/Data";

const Product = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto p-6">
        
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
           Our Products
        </h1>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

            
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800">
                  {item.name}
                </h3>

                <p className="text-2xl font-bold text-pink-600 mt-2">
                  ₹{item.price}
                </p>

               
                <div className="mt-5 flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-2 rounded-xl font-semibold hover:opacity-90 transition">
                    Add Cart
                  </button>

                  <button className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 rounded-xl font-semibold hover:opacity-90 transition">
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