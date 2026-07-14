import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../Components/Data";

const BuyNow = () => {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6">

      <div className="max-w-5xl mx-auto">


        {!showForm ? (

  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-100 p-6">
  <div className="grid md:grid-cols-2 gap-10 items-center">

   <div className="relative">
   <span className="absolute top-4 left-4 bg-emerald-600 text-white px-4 py rounded-full text-sm font-semibold">Best Seller</span>
  <img src={product.image}
      alt={product.name}
      className="w-full h-96 object-cover rounded-3xl shadow-xl"/>
 </div>
 <div>
<h1 className="text-4xl font-extrabold text-gray-800">
{product.name}</h1>

<div className="flex items-center gap-3 mt-5 ">
 <p className="text-4xl font-bold text-emerald-600">
  ₹{product.price} </p>
 <span className=" bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">40% OFF</span>
  </div>

 <div className="mt-6 space-y-3">
<div className=" bg-emerald-50 p-3 rounded-xl text-gray-700"> 🚚 Free Delivery </div>
 <div className=" bg-teal-50 p-3 rounded-xl text-gray-700">🔄 Easy Returns
 </div>
 <div className=" bg-green-50 p-3  rounded-xl text-gray-700">💵 Cash On Delivery Available</div>
 </div>
  <button onClick={()=>setShowForm(true)}
 className=" mt-8 w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-2xl text-lg  font-bold shadow-lg hover:scale-105 transition">Continue To Buy </button>
 </div>
 </div>
</div>
  ) : (
 <div className=" max-w-xl mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-emerald-100">
<h2 className=" text-3xl font-bold text-gray-800 mb-8">Delivery Details 📦</h2>
 <form className="space-y-5">
{[
  ["Full Name","text","Enter your full name"],
  ["Phone Number","tel","Enter mobile number"],
  ["Email Address","email","Enter email address"]
  ].map((item,index)=>(
<div key={index}>
<label className=" font-semibold text-gray-700">
  {item[0]}</label>
 <input type={item[1]}
placeholder={item[2]} className=" w-full mt-2 p-3 rounded-xl border cursor-pointer hover:border-emerald-500 transition"/>
 </div>
 ))}

 <div>
 <label className=" font-semibold  text-gray-700">Delivery Address </label>
<textarea
 rows="4"
 placeholder="Enter complete address"
 className=" w-full mt-2 p-3 rounded-xl border cursor-pointer hover:border-emerald-500 transition"/>
 </div>

 <div className=" bg-gradient-to-r from-emerald-50 to-teal-50 p-5 rounded-2xl">

 <h3 className=" text-xl font-bold mb-4">Payment Method 💳 </h3>
{
  ["Cash On Delivery",
  "UPI Payment",
  "Debit / Credit Card"]
   .map((pay,index)=>(

 <label key={index}
 className="flex gap-3 items-center bg-white p-4 rounded-xl mb-3 border cursor-pointer hover:border-emerald-500 transition">
<input type="radio" name="payment"/>
<span className="font-medium">{pay}</span>
</label>
  ))}
</div>

 <button className=" w-full bg-gradient-to-r from-teal-600 to-emerald-600  text-white py-4 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition">🛍️ Place Order</button>
</form>
 </div>
         )}
</div>
    </div>
  );
};


export default BuyNow;