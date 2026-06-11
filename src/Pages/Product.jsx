import React from "react";
import products from "../Components/Data";

const Product = () => {
  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-8">
        Our Products
      </h1>

   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
 {products.map((item) => (
  <div key={item.id}className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300" >
 <img
 src={item.image}
alt={item.name}
className="w-full h-56 object-cover"/>
<div className="p-4">
<h3 className="text-lg font-semibold">{item.name}</h3>
 <p className="text-pink-600 font-bold mt-2">₹{item.price}</p>
 <button className="mt-4 w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600">Add to Cart</button>
  </div>
 </div>
 ))}
  </div>
  </div>
  );
};

export default Product;