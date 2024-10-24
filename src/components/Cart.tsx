import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity <= 0) {
      handleRemove(id);
    } else {
      updateQuantity(id, quantity);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="mb-6">
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between items-center border-b py-4">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">NPR <span className='text-green-400 font-bold'>{item.price}</span></p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button 
                    className="px-2 py-1 bg-gray-300 rounded"
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button 
                    className="px-2 py-1 bg-gray-300 rounded"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <button 
                    className="ml-4 text-red-500"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center">
            <Link to="/checkout" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
              Proceed to Checkout
            </Link>
            <p className="text-xl">
              Total: NPR <span className='text-green-400 font-bold'>{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
