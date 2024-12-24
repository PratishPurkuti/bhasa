import React from 'react';
import { WelcomeBanner } from '../components/welcome/WelcomeBanner';
import { ProgressStats } from '../components/welcome/ProgressStats';
import { CoursesGrid } from '../components/welcome/CoursesGrid';

export function Welcome() {
  return (
    <div className="min-h-screen bg-gray-50">
      <WelcomeBanner username="Sarah" />
      <main className="container mx-auto px-4 sm:px-6 py-8">
        <ProgressStats />
        <h2 className="text-2xl font-bold mb-6">Your Courses</h2>
        <CoursesGrid />
      </main>
    </div>
  );
}