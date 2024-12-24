import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#DC143C] text-white">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold">Bhasa</h1>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-blue-100 transition">Features</a>
            <a href="#about" className="hover:text-blue-100 transition">About</a>
            <button className="bg-white text-[#DC143C] px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#features" className="block hover:text-blue-100 transition py-2">Features</a>
            <a href="#about" className="block hover:text-blue-100 transition py-2">About</a>
            <button className="w-full bg-white text-[#DC143C] px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
              Sign Up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}