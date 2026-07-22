import React from "react";
import products from "../Components/Data";
import { useNavigate } from "react-router-dom";

const Product = () => {

const navigate = useNavigate();

return (

<div className="min-h-screen bg-[#fcf8f7]">


<div className="max-w-7xl mx-auto px-6 pt-10 pb-6">

<div className="text-center">

<p className="text-emerald-700 text-xs tracking-[5px] uppercase">
Tiava Beauty
</p>


<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
Luxury Skin Care
<span className="text-emerald-700"> Collection</span>
</h1>


<p className="text-gray-500 mt-3 max-w-xl mx-auto">
Discover premium skincare products crafted with natural ingredients
for healthy glowing skin.
</p>


</div>

</div>
<div className="max-w-7xl mx-auto px-6 pb-16">


<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">


{
products.map((item)=>(


<div
key={item.id}
className="group bg-white rounded-[25px] overflow-hidden shadow-sm hover:shadow-2xl transition duration-500"
>

<div className="relative overflow-hidden bg-pink-50">

<img
src={item.image}
alt={item.name}
className="w-full h-52 object-cover group-hover:scale-110 transition duration-700"
/>


<span className="absolute top-3 left-3 bg-emerald-700 text-white text-xs px-3 py-1 rounded-full">
Best Seller
</span>


<button className="absolute top-3 right-3 bg-white w-9 h-9 rounded-full shadow hover:text-red-500">
♡
</button>


</div>





<div className="p-4">


<p className="text-xs text-gray-400">
Premium Skincare
</p>



<h3 className="font-semibold text-gray-800 mt-1 truncate">
{item.name}
</h3>



<div className="flex items-center gap-1 mt-2">

<span className="text-yellow-400 text-sm">
★★★★★
</span>

<span className="text-xs text-gray-400">
(4.9)
</span>

</div>




<div className="flex items-center gap-2 mt-3">


<h2 className="text-xl font-bold text-emerald-700">
₹{item.price}
</h2>


<span className="text-sm text-gray-400 line-through">
₹{item.price+300}
</span>


</div>





<div className="flex gap-2 mt-5">


<button
className="flex-1 border border-emerald-700 text-emerald-700 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700 hover:text-white transition"
>
Cart
</button>




<button
onClick={()=>navigate(`/buy/${item.id}`)}
className="flex-1 bg-emerald-700 text-white py-2 rounded-full text-sm font-semibold hover:bg-emerald-800 transition"
>
Buy Now
</button>


</div>


</div>



</div>


))
}


</div>


</div>



<div className="bg-white py-8">

<div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 text-center px-6">


<div>
🌿
<p className="font-semibold mt-2">
Natural
</p>
</div>


<div>
✨
<p className="font-semibold mt-2">
Premium
</p>
</div>


<div>
🚚
<p className="font-semibold mt-2">
Fast Delivery
</p>
</div>


<div>
💚
<p className="font-semibold mt-2">
Cruelty Free
</p>
</div>


</div>

</div>



</div>

)

};

export default Product;
