import React, { useState } from "react";

const ContactPage = () => {
  const [data,setData]=useState({})

  const handleChange=(e)=>{
  const  name=e.target.name;
  const value=e.target.value;
  setData(val=>({...value,[name]:value}))
  console.log(data)

    

  }
  const handleSubmit=(ev)=>{
    ev.preventDefault();
    alert(name)
  }
  return (
<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
<div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden grid md:grid-cols-2">
<div className="bg-emerald-700 text-white p-10 flex flex-col justify-center">
<h1 className="text-4xl font-bold mb-4">Contact Us</h1>
<p className="text-lg mb-6">
 We'd love to hear from you. Send us a message and we’ll respond as soon as possible.
</p>
<div className="space-y-4">
  <p> Delhi, India</p>
<p> +91 98765 43210</p>
<p>✉️ support@Tiava123.com</p>
</div>
</div>
 <div className="p-10">
<form className="space-y-6" onSubmit={handleSubmit}>
<div>
<label className="block text-gray-700 font-medium mb-2">
Full Name
</label>
<input
type="text"
placeholder="Enter your name"
name="firstName"
value={data.firstName}
onChange={handleChange}
className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-700"
/>
</div>
<div>
<label className="block text-gray-700 font-medium mb-2">
Email Address
</label>

<input
type="email"
name="email"
value={data.email}
onChange={handleChange}
placeholder="Enter your email"
className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-700"
/>
</div>
<div>
<label className="block text-gray-700 font-medium mb-2">Message</label>
<textarea
rows="5"
placeholder="Write your message..."
name="textarea"
value={data.textarea}
onChange={handleChange}
className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-700"
></textarea>
</div>
<button
type="submit"
className="w-full bg-emerald-700 text-white py-3 rounded-lg hover:bg-emerald-800 transition duration-300"
>
Send Message
</button>
</form>
</div>
</div>
</div>
  );
};

export default ContactPage;