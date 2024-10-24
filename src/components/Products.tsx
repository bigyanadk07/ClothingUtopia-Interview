import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const products = [
  { id: 1, name: 'T-Shirt', price: 500, image: 'https://cdn.pixabay.com/photo/2024/02/06/18/10/ai-generated-8557635_640.jpg' },
  { id: 2, name: 'Jeans', price: 1600, image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 3, name: 'Sweater', price: 2300, image: 'https://imgs.search.brave.com/geNFBsftGNOjHGhTbEMaPBSTrBHqecqs_kGRP-LQIlI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzFPcEVMdW5xZkwu/anBn' },
  { id: 4, name: 'Jacket', price: 3500, image: 'https://lykdat.com/sub-cat-images/unisex/outerwear.jpeg' },
  { id: 5, name: 'Shorts', price: 900, image: 'https://imgs.search.brave.com/JBgGZc4wOZhNiHMFunFt8cVvQX2X5WUqBUAJCgbFpfA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxNzhBR1phajdM/LmpwZw' },
  { id: 6, name: 'Cap', price: 400, image: 'https://imgs.search.brave.com/vvk-BoPaPfvC2vVcnvLuISJSNELK3z6USyrxH4U401E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmV3ZXJhY2FwLmNv/LnVrL2Nkbi9zaG9w/L2ZpbGVzL1NpemVH/dWlkZS0zOVRISVJU/WS1UZWNoLU55bG9u/LVdoaXRlLVNveC1T/dW0yNC0yNDAweDI0/MDAud2VicD92PTE3/MjA2OTIwMzMmd2lk/dGg9MjQwMA' },
  { id: 7, name: 'Dress', price: 1200, image: 'https://imgs.search.brave.com/06T3SOVssyJwiFUhOpo7AzO0GxDM5GZMTD6GfK3ploQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzY5LzMwLzk2/LzM2MF9GXzc2OTMw/OTY1M19LOUZKaFlh/YW8yM056dnR6TGtK/THJneGlsTGc4aXla/Si5qcGc' },
  { id: 8, name: 'Scarf', price: 600, image: 'https://imgs.search.brave.com/skFwGkabQqinqC9edaLFuGZrw50lccdxs8bZlwcu7G4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/ZS5tZXRtdXNldW0u/b3JnL21lZGlhL2Nh/dGFsb2cvcHJvZHVj/dC9jL28tMjAyMzE4/LTkxNjQ5L2NvbmNv/dXJzZS1vZi10aGUt/YmlyZHMtb2Jsb25n/LXNjYXJmLmpwZz9v/cHRpbWl6ZT1tZWRp/dW0mYmctY29sb3I9/MjU1LDI1NSwyNTUm/Zml0PWJvdW5kcyZo/ZWlnaHQ9NDQ4Jndp/ZHRoPTQ0OCZjYW52/YXM9NDQ4OjQ0OA' },
];

const Products: React.FC = () => {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Products at Clothing Utopia</h2>
      
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded px-4 py-2 w-full"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">NPR <span className='text-green-400 font-bold'>{product.price}</span></p>
            </div>
            <div className='flex justify-center pb-5'>
              <button 
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
