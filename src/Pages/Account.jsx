import React from "react";

const Account = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6 flex items-center justify-center">

      <div className="max-w-3xl w-full bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-emerald-100">

        <div className="flex items-center gap-5 border-b pb-6">

          <div className="relative">
            <img
              src="https://plus.unsplash.com/premium_photo-1668319914124-57301e0a1850?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
              alt="profile"
              className="w-20 h-20 rounded-full object-cover ring-4 ring-emerald-200"
            />
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></span>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Tiava
            </h2>
            <p className="text-gray-500 text-sm">tiava123@gmail.com</p>

            <span className="inline-block mt-2 px-3 py-1 text-xs bg-emerald-100 text-emerald-700 rounded-full">
              Premium Member
            </span>
          </div>

        </div>

   
        <div className="mt-8 space-y-3">

          <div className="p-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 cursor-pointer transition flex justify-between items-center">
            <span className="font-medium text-gray-700">My Orders</span>
          
          </div>

          <div className="p-4 rounded-xl bg-teal-50 hover:bg-teal-100 cursor-pointer transition flex justify-between items-center">
            <span className="font-medium text-gray-700">My Wishlist</span>
       
          </div>

          <div className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer transition flex justify-between items-center">
            <span className="font-medium text-gray-700">Settings</span>
       
          </div>

          <div className="p-4 rounded-xl bg-red-50 hover:bg-red-100 cursor-pointer transition flex justify-between items-center">
            <span className="font-medium text-red-600">Logout</span>
         
          </div>

        </div>

      </div>
    </div>
  );
};

export default Account;