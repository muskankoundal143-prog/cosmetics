import React from "react";

const About = () => {
  return (
    <section className="py-28 px-6 bg-gradient-to-br from-pink-50 via-white to-rose-50">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>

          <span className="text-pink-600 font-semibold tracking-widest uppercase">
            Our Story
          </span>

          <h2 className="text-5xl font-bold mt-4 leading-tight text-gray-900">
            Beauty that
            <span className="text-pink-600"> Feels Natural</span>
          </h2>

          <p className="text-gray-600 mt-6 leading-7">
            We believe real beauty comes from care, not coverage. Our skincare
            is designed to enhance your natural glow using safe, effective and
            dermatologist-tested ingredients.
          </p>

          <p className="text-gray-600 mt-4 leading-7">
            Every formula is lightweight, non-toxic and suitable for all skin
            types — giving you confidence in every moment.
          </p>

          {/* KEY POINTS */}
          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-pink-600 rounded-full"></span>
              <p className="text-gray-700">Clean & Natural Ingredients</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-pink-600 rounded-full"></span>
              <p className="text-gray-700">Dermatologist Approved Formulas</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-pink-600 rounded-full"></span>
              <p className="text-gray-700">Gentle for Daily Use</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-pink-600 rounded-full"></span>
              <p className="text-gray-700">Cruelty-Free Beauty Promise</p>
            </div>

          </div>

          {/* STATS CARDS */}
          <div className="grid grid-cols-3 gap-4 mt-10">

            <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition text-center">
              <h3 className="text-2xl font-bold text-pink-600">10K+</h3>
              <p className="text-gray-500 text-sm mt-1">Happy Clients</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition text-center">
              <h3 className="text-2xl font-bold text-pink-600">50+</h3>
              <p className="text-gray-500 text-sm mt-1">Products</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition text-center">
              <h3 className="text-2xl font-bold text-pink-600">4.9★</h3>
              <p className="text-gray-500 text-sm mt-1">Rating</p>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="mt-10 flex gap-4">

            <button className="bg-pink-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-pink-700 hover:scale-105 transition">
              Explore Products
            </button>

            <button className="border border-pink-600 text-pink-600 px-8 py-3 rounded-full hover:bg-pink-50 transition">
              Learn More
            </button>

          </div>

        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex justify-center">

          {/* soft glow */}
          <div className="absolute w-[420px] h-[420px] bg-pink-200 rounded-full blur-3xl opacity-40"></div>

          {/* image card */}
          <div className="relative bg-white p-6 rounded-[40px] shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1598528738936-c50861cc75a9?w=900"
              alt="Beauty Model"
              className="w-[420px] h-[520px] object-cover rounded-[30px]"
            />

            {/* floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-pink-600 text-white px-5 py-3 rounded-2xl shadow-xl text-sm font-medium">
              Glow • Care • Confidence
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;