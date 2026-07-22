import React from "react";
import products from "../Components/Data";
import { useNavigate } from "react-router-dom";

const Product = () => {

const navigate = useNavigate();

return (

<div className="min-h-screen bg-[#faf7f5]">


{/* Unique Top Section */}

<div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 items-center">


<div className="md:col-span-1">

<p className="text-emerald-700 uppercase tracking-[4px] text-xs">
Tiava Collection
</p>

<h1 className="text-4xl font-bold text-gray-900 mt-4 leading-tight">
Discover Your
<br/>
Perfect Skin
</h1>


<p className="text-gray-500 mt-4 text-sm leading-6">
Luxury skincare crafted with natural ingredients
for a healthy and radiant glow.
</p>


<button className="mt-6 bg-emerald-700 text-white px-7 py-3 rounded-full">
Explore Beauty
</button>


</div>



<div className="md:col-span-2">

<div className="grid grid-cols-2 gap-4">


<div className="bg-pink-100 rounded-3xl h-44 flex items-center justify-center">

<span className="text-5xl">
🌸
</span>

</div>


<div className="bg-emerald-100 rounded-3xl h-44 flex items-center justify-center">

<span className="text-5xl">
✨
</span>

</div>


</div>

</div>


</div>





{/* Products */}

<div className="max-w-7xl mx-auto px-6 pb-12">


<h2 className="text-2xl font-bold mb-6">
Trending Beauty Picks
</h2>



<div className="grid grid-cols-2 md:grid-cols-4 gap-6">


{
products.map((item,index)=>(


<div
key={item.id}
className={`
bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition group
${index===0 ? "md:translate-y-8":""}
`}
>


<div className="relative bg-gray-100">


<img
src={item.image}
alt={item.name}
className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
/>



<div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs shadow">
Best Seller
</div>



<button className="absolute right-3 top-3 bg-white w-9 h-9 rounded-full shadow">
♡
</button>


</div>




<div className="p-4">


<h3 className="font-semibold text-gray-800 truncate">
{item.name}
</h3>



<div className="flex justify-between items-center mt-3">

<p className="text-lg font-bold text-emerald-700">
₹{item.price}
</p>


<span className="text-yellow-400 text-sm">
★★★★★
</span>

</div>




<div className="flex gap-2 mt-4">


<button className="flex-1 border border-emerald-700 text-emerald-700 rounded-full py-2 text-sm">
Cart
</button>



<button
onClick={()=>navigate(`/buy/${item.id}`)}
className="flex-1 bg-emerald-700 text-white rounded-full py-2 text-sm"
>
Buy
</button>


</div>



</div>



</div>


))
}


</div>


</div>




</div>

)

}

export default Product;
