import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">Bhasa</h3>
            <p className="text-gray-400">Master Nepali Romanized Typing</p>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Instagram className="w-6 h-6" /></a>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg sm:rounded-r-none w-full"
              />
              <button className="bg-[#DC143C] px-4 py-2 rounded-lg sm:rounded-l-none hover:bg-red-700 transition whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bhasa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}