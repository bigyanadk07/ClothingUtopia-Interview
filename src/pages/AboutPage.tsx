import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">About Clothing Utopia</h1>
      <p className="text-lg mb-4">
        Welcome to Clothing Utopia, your gateway to fashion wonderland. Here you will find clothing-ware of all kind and of all tradition, From hippie clothing to the modern walkway clothing range.
        Visit us on our physical store in kathmandu or order from our website.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
      <p className="text-lg mb-4">
        We are currently located in Kathmanu, Civil Mall Shop 121 where you can find all the variety of clothing ware with hundreds of variety and also at a fair price.
      </p>
      <p className="text-lg text-center">
        Thank you for choosing Clothing Utopia! We look forward to being a part of your fashion journey.
      </p>
    </div>
  );
};

export default About;
