import React, { useState } from "react";
import { Link } from "react-router-dom";
const categories = [
  "All",
  "Skincare",
  "Makeup",
  "Hair Care",
  "Organic",
  "Bestseller",
];

const products = [
  { id: 1, name: "Face Wash", category: "Skincare" },
  { id: 2, name: "Moisturizer", category: "Skincare" },
  { id: 3, name: "Lipstick", category: "Makeup" },
  { id: 4, name: "Eyeliner", category: "Makeup" },
  { id: 5, name: "Shampoo", category: "Hair Care" },
  { id: 6, name: "Hair Oil", category: "Hair Care" },
  { id: 7, name: "Herbal Cream", category: "Organic" },
  { id: 8, name: "Glow Serum", category: "Bestseller" },
];

const CategoryPage = () => {
  const [selected, setSelected] = useState("All");

  const filteredProducts =
    selected === "All"
      ? products
      : products.filter((p) => p.category === selected);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-rose-50 px-4 py-12">

     
      <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900">
        Shop by <span className="text-emerald-700">Category</span>
      </h1>

      <p className="text-center text-gray-500 mt-3">
        Discover skincare & beauty products made for you ✨
      </p>

     
      <div className="flex flex-wrap justify-center gap-3 mt-8">

        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setSelected(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border shadow-sm
              ${
                selected === cat
                  ? "bg-emerald-700 text-white scale-105 shadow-md"
                  : "bg-white text-gray-700 hover:bg-emerald-50"
              }`}
          >
            {cat}
          </button>
        ))}

      </div>

   
      <p className="text-center text-sm text-gray-500 mt-6">
        {filteredProducts.length} products found
      </p>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-10 max-w-6xl mx-auto">

        {filteredProducts.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">
            No products found 😢
          </div>
        ) : (
          filteredProducts.map((item) => (
            <div
              key={item.id}
              className="group bg-white/70 backdrop-blur-md border border-white shadow-md rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
     
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center group-hover:scale-110 transition">
                ✨
              </div>

              <h2 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h2>

              <p className="text-emerald-700 mt-2 text-sm font-medium">
                {item.category}
              </p>
<Link to={`/product-detail/${item.id}`}>
  <button className="mt-4 text-sm text-white bg-emerald-700 px-5 py-2 rounded-full opacity-90 group-hover:opacity-100">
    View Product
  </button>
</Link>

            </div>
          ))
        )}

      </div>
    </div>
  );
};

export default CategoryPage;