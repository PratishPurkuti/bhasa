import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-[#DC143C] text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              Bridging the Gap Between Languages
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-blue-50">
              Master Nepali Romanized Typing with Bhasa. Learn to type Romanized Nepali words effortlessly and connect with your world in your language.
            </p>
            <button className="w-full sm:w-auto bg-white text-[#DC143C] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition flex items-center justify-center sm:justify-start gap-2">
              Start Learning Today <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?auto=format&fit=crop&w=800&q=80"
              alt="Person typing on laptop"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}