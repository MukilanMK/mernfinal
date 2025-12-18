import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../utils/Api";

export default function Products({ setCart, cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/getProduct`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-6">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Explore Products
      </h2>

      {/* Reduced container size */}
      <div className="space-y-8 max-w-4xl mx-auto">
        {products.map((p) => (
          <div
            key={p._id}
            className="
              flex flex-col md:flex-row
              bg-white/10 backdrop-blur-xl
              border border-white/20
              rounded-3xl shadow-xl
              hover:shadow-purple-500/30
              transition-all duration-300
              overflow-hidden
            "
          >
            {/* Image */}
            <div className="md:w-1/3">
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="md:w-2/3 p-6 text-white flex flex-col justify-between">
              {/* Title + Price */}
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold">
                  {p.name}
                </h3>

                <span className="text-lg font-bold text-pink-400">
                  ₹ {p.price}
                </span>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-4">
                <Link
                  to={`/product/${p._id}`}
                  className="
                    flex-1 text-center py-2 rounded-full
                    bg-white/20 hover:bg-white/30
                    font-medium transition
                  "
                >
                  View
                </Link>

                <button
                  onClick={() => addToCart(p)}
                  className="
                    flex-1 py-2 rounded-full
                    bg-gradient-to-r from-purple-500 to-indigo-500
                    text-white font-semibold
                    shadow-lg shadow-indigo-500/40
                    hover:scale-105 hover:shadow-indigo-500/70
                    transition-all duration-300
                  "
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
