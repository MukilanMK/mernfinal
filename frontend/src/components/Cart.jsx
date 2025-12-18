import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart({ cart, setCart }) {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const total = cart.reduce((sum, i) => sum + i.price, 0);

  const handleCheckout = () => {
    setOrderPlaced(true);
    setCart([]); 
  };

  
  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-[#0b0b1a] flex items-center justify-center text-white">
        <div className="bg-white/10 backdrop-blur p-8 rounded-xl text-center space-y-6">
          <h2 className="text-3xl font-bold text-green-400">
            ✅ Order Placed Successfully
          </h2>

          <p className="text-gray-300">
            Thank you for your purchase!
          </p>

          <button
            onClick={() => navigate("/home")}
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  
  return (
    <div className="min-h-screen bg-[#0b0b1a] p-6 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-400">Cart is empty</p>
      ) : (
        <div className="max-w-3xl mx-auto space-y-4">
          {cart.map(item => (
            <div
              key={item._id}
              className="flex justify-between items-center bg-white/10 backdrop-blur rounded-xl p-4"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-purple-400">₹ {item.price}</p>
              </div>

              <button
                onClick={() =>
                  setCart(cart.filter(i => i._id !== item._id))
                }
                className="text-red-400 hover:text-red-500"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between text-xl font-bold pt-4">
            <span>Total</span>
            <span className="text-green-400">₹ {total}</span>
          </div>

          
          <button
            onClick={handleCheckout}
            className="w-full mt-4 py-3 rounded-xl bg-green-600 hover:bg-green-700 transition text-lg font-semibold"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
