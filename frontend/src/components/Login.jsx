import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("user", email);
    setUser(email); // 🔥 tells App to re-render
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-black">
      <form
        onSubmit={handleLogin}
        className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl w-96 text-white"
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Welcome Back
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-3 rounded-full bg-black/40 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}
