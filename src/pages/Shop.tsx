import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import { products, categories } from '../data/products';
import toast from 'react-hot-toast';

const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'newest' | 'price-asc' | 'price-desc'>('newest');
  const { addItem } = useCart();

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = selectedCategory === 'all'
      ? products
      : products.filter(product => product.category === selectedCategory);

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'newest':
        default:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });
  }, [selectedCategory, sortBy]);

  const handleAddToCart = (product: Product) => {
    if (!product.inStock) {
      toast.error('This item is currently out of stock');
      return;
    }
    addItem(product);
  };

  return (
    <div className="min-h-screen">
      <div className="border-b-3 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-mono font-bold mb-8">SHOP</h1>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`px-4 py-2 font-mono border-3 border-black ${
                    selectedCategory === category.slug
                      ? 'bg-black text-white'
                      : 'bg-white text-black hover:bg-black hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Sort options */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'newest' | 'price-asc' | 'price-desc')}
              className="px-4 py-2 font-mono border-3 border-black bg-white cursor-pointer hover:bg-black hover:text-white"
            >
              <option value="newest">NEWEST</option>
              <option value="price-asc">PRICE: LOW TO HIGH</option>
              <option value="price-desc">PRICE: HIGH TO LOW</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedProducts.map(product => (
            <div
              key={product.id}
              className="border-3 border-black group"
            >
              <Link to={`/shop/${product.id}`} className="block relative">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-mono">VIEW DETAILS →</span>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="p-6 border-t-3 border-black">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-mono font-bold">{product.name}</h3>
                  <span className="font-mono">${product.price}</span>
                </div>

                <p className="font-mono text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm">
                    {product.dimensions.width}" × {product.dimensions.height}"
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className={`font-mono px-4 py-2 border-3 border-black ${
                      product.inStock
                        ? 'hover:bg-black hover:text-white'
                        : 'opacity-50 cursor-not-allowed'
                    }`}
                  >
                    {product.inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
