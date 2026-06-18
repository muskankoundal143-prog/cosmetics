import React from "react";

const Account = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6">

  
        <div className="flex items-center gap-4 border-b pb-5">
          <img
            src="https://images.unsplash.com/photo-1555820585-c5ae44394b79?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXR5fGVufDB8fDB8fHww"
            alt="profile"
            className="w-16 h-16 rounded-full object-cover"
          />

          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Tiava
            </h2>
            <p className="text-gray-500">tiava@gmail.com</p>
          </div>
        </div>

            <div className="mt-6 space-y-3">

          <div className="p-3 rounded-lg bg-pink-50 hover:bg-pink-100 cursor-pointer">
            My Orders
          </div>

          <div className="p-3 rounded-lg bg-purple-50 hover:bg-purple-100 cursor-pointer">
            My Wishlist
          </div>

          <div className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer">
            Settings
          </div>

          <div className="p-3 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 cursor-pointer">
            Logout
          </div>

        </div>

      </div>
    </div>
  );
};

export default Account;