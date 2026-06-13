import React from "react";

const About = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-pink-50 via-white to-rose-50">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

  
        <div className="text-center md:text-left">

          <span className="text-pink-600 font-semibold tracking-widest uppercase text-xs md:text-sm">
            Our Story
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight text-gray-900">
            Beauty that
            <span className="text-pink-600"> Feels Natural</span>
          </h2>

          <p className="text-gray-600 mt-4 text-sm md:text-base leading-6 md:leading-7">
            We believe real beauty comes from care, not coverage. Our skincare
            is designed to enhance your natural glow using safe ingredients.
          </p>

          <p className="text-gray-600 mt-3 text-sm md:text-base leading-6 md:leading-7">
            Lightweight, non-toxic formulas suitable for all skin types.
          </p>

       
          <div className="mt-6 space-y-3 text-sm md:text-base">

            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
              Clean & Natural Ingredients
            </div>

            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
              Dermatologist Approved
            </div>

            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
              Gentle for Daily Use
            </div>

            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
              Cruelty-Free Beauty
            </div>

          </div>

          <div className="grid grid-cols-3 gap-3 mt-8 text-center">

            <div className="bg-white p-3 md:p-5 rounded-xl shadow">
              <h3 className="text-xl md:text-2xl font-bold text-pink-600">10K+</h3>
              <p className="text-xs md:text-sm text-gray-500">Clients</p>
            </div>

            <div className="bg-white p-3 md:p-5 rounded-xl shadow">
              <h3 className="text-xl md:text-2xl font-bold text-pink-600">50+</h3>
              <p className="text-xs md:text-sm text-gray-500">Products</p>
            </div>

            <div className="bg-white p-3 md:p-5 rounded-xl shadow">
              <h3 className="text-xl md:text-2xl font-bold text-pink-600">4.9★</h3>
              <p className="text-xs md:text-sm text-gray-500">Rating</p>
            </div>

          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">

            <button className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition">
              Explore Products
            </button>

            <button className="border border-pink-600 text-pink-600 px-6 py-3 rounded-full hover:bg-pink-50 transition">
              Learn More
            </button>

          </div>

        </div>

        <div className="relative flex justify-center">

     
          <div className="absolute w-56 h-56 md:w-[420px] md:h-[420px] bg-pink-200 rounded-full blur-3xl opacity-40"></div>

          <div className="relative bg-white p-3 md:p-6 rounded-3xl shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1598528738936-c50861cc75a9?w=900"
              alt="Beauty Model"
              className="w-72 md:w-[420px] h-[320px] md:h-[520px] object-cover rounded-2xl"
            />

            <div className="absolute -bottom-3 -right-3 bg-pink-600 text-white px-3 md:px-5 py-2 md:py-3 rounded-xl shadow text-xs md:text-sm">
              Glow • Care • Confidence
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;