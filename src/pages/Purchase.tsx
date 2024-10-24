import React, { useState } from 'react';

const Checkout: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckout = () => {
    // Simulate a successful purchase
    setIsSuccess(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {!isSuccess ? (
        <button 
          onClick={handleCheckout} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
          Checkout
        </button>
      ) : (
        <h2 className="text-xl font-semibold text-green-600">Congrats on your successful purchase!</h2>
      )}
    </div>
  );
};

export default Checkout;
