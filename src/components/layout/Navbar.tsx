import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useCart } from '../../context/CartContext';

const Navbar: React.FC = () => {
  const { items } = useCart();

  return (
    <nav className="bg-canvas border-b border-subtle sticky top-0 z-50 backdrop-blur-sm bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="font-display text-xl text-ink">
              Magpie Embroidery
            </Link>
          </div>
          
          <div className="hidden sm:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              Shop
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            <Link 
              to="/cart" 
              className="relative group"
            >
              <ShoppingBagIcon className="h-5 w-5 text-muted group-hover:text-ink transition-colors duration-300" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white 
                               rounded-full h-4 w-4 flex items-center justify-center text-xs
                               animate-fade-in">
                  {items.length}
                </span>
              )}
            </Link>
          </div>

          <div className="sm:hidden">
            <Link 
              to="/cart" 
              className="relative group p-2"
            >
              <ShoppingBagIcon className="h-5 w-5 text-muted group-hover:text-ink transition-colors duration-300" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white 
                               rounded-full h-4 w-4 flex items-center justify-center text-xs
                               animate-fade-in">
                  {items.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
