import React from "react";

const About = () => {
  return (
    <section className="py-16 px-6 bg-pink-100">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-pink-600 font-semibold uppercase tracking-wider">
          About Our Brand
        </span>

        <h2 className="text-4xl font-bold mt-3 mb-6">
          Beauty That Inspires Confidence
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto leading-7">
          We create skincare and beauty products with carefully selected
          ingredients to help you achieve healthy, glowing skin. Our goal
          is to bring confidence, self-care, and natural beauty into your
          daily routine.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold text-pink-600">10K+</h3>
            <p className="text-gray-500 mt-1">Happy Customers</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold text-pink-600">50+</h3>
            <p className="text-gray-500 mt-1">Beauty Products</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold text-pink-600">100%</h3>
            <p className="text-gray-500 mt-1">Natural Care</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold text-pink-600">24/7</h3>
            <p className="text-gray-500 mt-1">Support</p>
          </div>
        </div>

        <button className="mt-10 bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition">
          Explore Collection
        </button>
      </div>
    </section>
  );
};

export default About;