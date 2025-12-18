import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import BuyNow from "./components/BuyNow";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import Home from "./components/Home";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(localStorage.getItem("user"));

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null); // 🔥 re-render UI
  };

  return (
    <div className="min-h-screen bg-[#0b0b1a] text-white flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/home" className="text-2xl font-bold text-purple-400">
            MUMU•Store
          </Link>

          <nav className="flex gap-6 items-center text-sm">
            <Link to="/home" className="hover:text-purple-400">Home</Link>
            <Link to="/products" className="hover:text-purple-400">Products</Link>
            <Link to="/addproduct" className="hover:text-purple-400">Add</Link>
            <Link to="/cart" className="hover:text-purple-400">
              Cart ({cart.length})
            </Link>

            {user ? (
              <button
                onClick={logout}
                className="px-4 py-1.5 rounded-full bg-red-500/80 hover:bg-red-600 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="px-4 py-1.5 rounded-full bg-purple-600 hover:bg-purple-700 transition"
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </header>

      {/* Routes */}
      <main className="flex-1">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/products"
            element={<Products cart={cart} setCart={setCart} />}
          />
          <Route path="/product/:id" element={<Product />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart cart={cart} setCart={setCart} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/buynow/:id"
            element={
              <ProtectedRoute>
                <BuyNow />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={<Login setUser={setUser} />}
          />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 text-center py-4 text-gray-400 text-sm">
        © 2025 MUMU Store • Designed By Mukilan
      </footer>
    </div>
  );
}

export default App;
