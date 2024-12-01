import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { CartItem } from '../types';

const Cart: React.FC = () => {
  const { items, total, removeItem, updateQuantity } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-gothic mb-4">Your Cart is Empty</h2>
          <p className="font-pixel mb-8">Add some magical embroidered pieces to your cart!</p>
          <Link to="/shop" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-gothic mb-8 glitter-text">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map((item: CartItem) => (
              <motion.div
                key={item.id}
                layout
                className="card flex items-center"
              >
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-24 h-24 object-cover"
                />
                <div className="ml-6 flex-grow">
                  <h3 className="font-gothic text-xl">{item.name}</h3>
                  <p className="font-pixel text-sm text-gray-600">${item.price}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="btn-secondary px-3 py-1"
                  >
                    -
                  </button>
                  <span className="font-pixel">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="btn-secondary px-3 py-1"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="btn-primary px-3 py-1"
                  >
                    Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="card">
            <h2 className="font-gothic text-2xl mb-4">Order Summary</h2>
            <div className="font-pixel space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="retro-divider my-4"></div>
              <div className="flex justify-between text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="btn-primary w-full mt-6">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
