import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { API } from "../utils/Api";

export default function BuyNow() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${API}/api/getProduct`)
      .then((res) => res.json())
      .then((data) => setProduct(data.find((p) => p._id === id)));
  }, [id]);

  if (!product) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-black to-emerald-900 p-6">
      <div className="max-w-lg w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center text-white shadow-xl">
        <img
          src={product.image}
          alt={product.name}
          className="h-44 w-44 mx-auto rounded-2xl object-cover mb-4"
        />

        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-xl text-green-400 mt-2">₹ {product.price}</p>

        <p className="text-gray-300 mt-4">{product.description}</p>

        <div className="mt-6 bg-green-500/20 text-green-400 py-3 rounded-xl font-semibold">
          ✔ Order Placed Successfully
        </div>

        <div className="mt-6 flex gap-4 justify-center">
          <Link
            to="/products"
            className="px-6 py-2 rounded-full bg-white/20 hover:bg-white/30"
          >
            Shop More
          </Link>

          <Link
            to="/cart"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-black"
          >
            View Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
