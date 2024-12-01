import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import toast from 'react-hot-toast';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-mono mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/shop')}
            className="font-mono px-6 py-3 border-3 border-black hover:bg-black hover:text-white"
          >
            RETURN TO SHOP
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!product.inStock) {
      toast.error('This item is currently out of stock');
      return;
    }
    addItem(product);
    toast.success('Added to cart');
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate('/shop')}
          className="font-mono mb-8 hover:underline"
        >
          ← BACK TO SHOP
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-w-1 aspect-h-1 border-3 border-black">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-w-1 aspect-h-1 border-3 ${
                      selectedImage === index
                        ? 'border-black'
                        : 'border-gray-200 hover:border-black'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-mono font-bold mb-4">{product.name}</h1>
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-mono">${product.price}</span>
                <span className={`font-mono ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {product.inStock ? 'IN STOCK' : 'OUT OF STOCK'}
                </span>
              </div>
              <p className="font-mono whitespace-pre-line">{product.description}</p>
            </div>

            <div className="border-t-3 border-b-3 border-black py-6 space-y-4">
              <div className="flex justify-between">
                <span className="font-mono">DIMENSIONS</span>
                <span className="font-mono">
                  {product.dimensions.width}" × {product.dimensions.height}"
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-mono">CATEGORY</span>
                <span className="font-mono uppercase">{product.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-mono">CREATED</span>
                <span className="font-mono">
                  {new Date(product.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`w-full font-mono py-4 border-3 border-black ${
                product.inStock
                  ? 'hover:bg-black hover:text-white'
                  : 'opacity-50 cursor-not-allowed'
              }`}
            >
              {product.inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
            </button>

            <div className="space-y-4">
              <div className="border-3 border-black p-6">
                <h3 className="font-mono font-bold mb-2">SHIPPING</h3>
                <p className="font-mono text-sm">
                  All pieces are carefully packaged and shipped within 3-5 business days.
                  International shipping available.
                </p>
              </div>
              <div className="border-3 border-black p-6">
                <h3 className="font-mono font-bold mb-2">CARE INSTRUCTIONS</h3>
                <p className="font-mono text-sm">
                  Each piece comes with care instructions. Keep away from direct sunlight
                  and handle with clean, dry hands. Professional cleaning recommended.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
