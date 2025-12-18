import React, { useState } from "react";
import { API } from "../utils/Api";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = { name, price, rating, image, description };

    const res = await fetch(`${API}/api/postProduct`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    if (res.ok) {
      alert("Product added successfully");
      setName("");
      setPrice("");
      setRating("");
      setImage("");
      setDescription("");
    } else {
      alert("Failed to add product");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-white shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Add New Product
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-black/40 outline-none"
          />

          <input
            type="number"
            placeholder="Price (₹)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-black/40 outline-none"
          />

          <input
            type="number"
            min="1"
            max="5"
            placeholder="Rating (1–5)"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-black/40 outline-none"
          />

          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-black/40 outline-none"
          />

          <textarea
            rows="4"
            placeholder="Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-black/40 outline-none"
          />

          <button className="w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 font-semibold text-lg hover:scale-105 transition">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}
