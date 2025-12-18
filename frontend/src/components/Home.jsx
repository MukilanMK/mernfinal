import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-indigo-900 flex items-center justify-center text-white">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-extrabold mb-6">
          Modern MERN Store
        </h1>
        <p className="text-gray-300 mb-8">
          Premium gadgets. Clean design. Smooth experience.
        </p>

        <Link
          to="/products"
          className="px-10 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold"
        >
          Start Shopping
        </Link>
      </div>
    </div>
  );
}
