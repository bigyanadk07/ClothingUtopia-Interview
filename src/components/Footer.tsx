import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <ul className="list-none flex justify-center gap-10 mb-4">
          <li>
            <Link to="/" className="cursor-pointer hover:text-gray-300 transition duration-200">Home</Link>
          </li>
          <li>
            <Link to="/product" className="cursor-pointer hover:text-gray-300 transition duration-200">Products</Link>
          </li>
          <li>
            <Link to="/about" className="cursor-pointer hover:text-gray-300 transition duration-200">About</Link>
          </li>
        </ul>
        <hr className="border-gray-600 mb-4" />
        <h1 className="text-center text-lg">Created by Bigyan Adhikari</h1>
      </div>
    </div>
  );
}

export default Footer;
