import React from "react";

const Product = ({
  image,
  name,
  description,
  price,
  oldPrice,
  rating,
  reviews,
}) => {
  const discount = Math.round(((oldPrice - price) / oldPrice) * 100);

  return (
    <div className="w-64 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Product Image */}
      <div className="relative bg-gradient-to-br from-pink-50 to-purple-50 h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />

        <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {discount}% OFF
        </span>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>

        <p className="text-sm text-gray-500 mt-1">{description}</p>

        {/* Rating */}
        <div className="flex items-center mt-2">
          <div className="flex text-yellow-400">★★★★★</div>
          <span className="ml-2 text-sm text-gray-500">
            {rating} ({reviews} Reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center mt-4">
          <span className="text-2xl font-bold text-pink-600">₹{price}</span>

          <span className="ml-2 text-sm text-gray-400 line-through">
            ₹{oldPrice}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-5">
          <button className="flex-1 border border-pink-500 text-pink-500 py-2 rounded-xl font-medium hover:bg-pink-50 transition">
            Add to Cart
          </button>

          <button className="flex-1 bg-pink-500 text-white py-2 rounded-xl font-medium hover:bg-pink-600 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;