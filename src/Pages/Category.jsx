import React, { useState } from "react";

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
    <div className="bg-pink-50 min-h-screen px-4 py-10">

      <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800">
        Shop by Category 
      </h1>

      
      <div className="flex flex-wrap justify-center gap-3 mt-8">

        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setSelected(cat)}
            className={`px-5 py-2 rounded-full border transition ${
              selected === cat
                ? "bg-pink-600 text-white"
                : "bg-white text-gray-700 hover:bg-pink-100"
            }`}
          >
            {cat}
          </button>
        ))}

      </div>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">

        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {item.name}
            </h2>
            <p className="text-pink-600 mt-2 text-sm">
              {item.category}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default CategoryPage;