import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { API } from "../utils/Api";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${API}/api/getProduct`)
      .then(res => res.json())
      .then(data => setProduct(data.find(p => p._id === id)));
  }, [id]);

  if (!product) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 text-white">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-2xl w-full object-cover"
        />

        <div>
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-2xl text-purple-400 mt-2">₹ {product.price}</p>
          <p className="mt-4 text-gray-300">{product.description}</p>

          <div className="mt-6 flex gap-4">
            <Link
              to={`/buynow/${product._id}`}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
            >
              Buy Now
            </Link>
            <Link
              to="/products"
              className="px-6 py-2 rounded-full border border-white/30"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
