```jsx
import React, { useState } from "react";

export default function Cart() {

  const [qty, setQty] = useState(1);

  const price = 499;

  return (
    <div className="min-h-screen bg-pink-50 p-6">

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6">

        <h1 className="text-3xl font-bold text-pink-600 text-center mb-6">
          💄 Cosmetic Cart
        </h1>

        <div className="flex items-center gap-5 border-b pb-5">

          <img
            src="https://via.placeholder.com/100"
            alt="product"
            className="w-24 h-24 rounded-lg"
          />

          <div className="flex-1">
            <h2 className="text-xl font-semibold">
              Matte Lipstick
            </h2>

            <p className="text-gray-500">
              Shade: Rose Pink
            </p>

            <p className="text-pink-600 font-bold">
              ₹{price}
            </p>
          </div>


          <div className="flex items-center gap-3">

            <button
              onClick={() => qty > 1 && setQty(qty - 1)}
              className="bg-pink-600 text-white px-3 py-1 rounded"
            >
              -
            </button>

            <span className="font-bold">
              {qty}
            </span>

            <button
              onClick={() => setQty(qty + 1)}
              className="bg-pink-600 text-white px-3 py-1 rounded"
            >
              +
            </button>

          </div>


          <button className="text-red-500">
            Remove
          </button>

        </div>


        <div className="text-right mt-6">

          <h2 className="text-xl font-bold">
            Total: ₹{price * qty}
          </h2>

          <button className="mt-4 bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700">
            Checkout
          </button>

        </div>

      </div>

    </div>
  );
}
```
