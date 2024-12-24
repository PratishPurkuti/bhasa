import React from 'react';

export function WelcomeBanner({ username = 'User' }) {
  return (
    <div className="bg-[#DC143C] text-white py-8 px-4 sm:px-6">
      <div className="container mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Welcome back, {username}!</h1>
        <p className="text-lg text-blue-50">Continue your journey in Nepali typing mastery.</p>
      </div>
    </div>
  );
}