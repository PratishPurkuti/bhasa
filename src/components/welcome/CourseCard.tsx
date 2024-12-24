import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Pro';
  progress?: number;
  lessons: number;
}

export function CourseCard({ title, description, level, progress = 0, lessons }: CourseCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-blue-100 text-blue-800';
      case 'Pro': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(level)}`}>
              {level}
            </span>
          </div>
          {level === 'Pro' && <Star className="w-6 h-6 text-yellow-400" />}
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-[#DC143C] h-2 rounded-full transition-all duration-300" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">{lessons} Lessons</span>
          <button className="flex items-center gap-2 text-[#DC143C] hover:text-red-700 transition">
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}