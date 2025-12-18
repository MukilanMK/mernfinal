export default function Cart({ cart, setCart }) {
  const total = cart.reduce((sum, i) => sum + i.price, 0);

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
                className="text-red-400"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between text-xl font-bold pt-4">
            <span>Total</span>
            <span className="text-green-400">₹ {total}</span>
          </div>
        </div>
      )}
    </div>
  );
}
