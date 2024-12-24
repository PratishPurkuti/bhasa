import React from 'react';
import { BookOpen, Trophy, Activity, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Interactive Learning Interface',
    description: 'Practice Romanized Nepali typing with real-time feedback'
  },
  {
    icon: Trophy,
    title: 'Built for Everyone',
    description: 'From beginners to experts, learn at your own pace'
  },
  {
    icon: Activity,
    title: 'Progress Tracking',
    description: 'Monitor your growth with detailed progress reports'
  },
  {
    icon: MessageCircle,
    title: 'Fun and Engaging',
    description: 'Gamify your learning experience with streaks and rewards'
  }
];

export function Features() {
  return (
    <section id="features" className="py-12 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#DC143C] mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}