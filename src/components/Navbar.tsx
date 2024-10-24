import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { cartQuantity } = useCart();

  return (
    <nav className='flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow'>
      <ul className='flex flex-col md:flex-row list-none gap-4 font-semibold'>
        <li>
          <Link to="/" className='cursor-pointer hover:text-gray-700'>Home</Link>
        </li>
        <li>
          <Link to="/product" className='cursor-pointer hover:text-gray-700'>Product</Link>
        </li>
        <li>
          <Link to="/about" className='cursor-pointer hover:text-gray-700'>About</Link>
        </li>
      </ul>
      <div className="relative">
        <Link to="/cart" className="flex items-center">
          <FaShoppingCart size={24} />
          {cartQuantity > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {cartQuantity}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
