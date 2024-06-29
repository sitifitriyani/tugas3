import React from "react";

const CartModal = ({ cart, toggleCart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <button className="bg-red-500 text-white px-4 py-2 rounded mb-4" onClick={toggleCart}>Close</button>
        <div>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="flex items-center mb-4">
                <img src={item.image} alt={item.product} className="w-16 h-16 object-cover mr-4" />
                <div>
                  <p className="font-bold">{item.product}</p>
                  <p>{item.brand}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default CartModal;
