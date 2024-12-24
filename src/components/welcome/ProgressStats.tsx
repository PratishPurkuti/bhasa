import React from 'react';
import { Trophy, Clock, Target } from 'lucide-react';

export function ProgressStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
        <Trophy className="w-8 h-8 text-[#DC143C]" />
        <div>
          <p className="text-sm text-gray-600">Current Streak</p>
          <p className="text-xl font-bold">7 Days</p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
        <Clock className="w-8 h-8 text-[#DC143C]" />
        <div>
          <p className="text-sm text-gray-600">Time Spent</p>
          <p className="text-xl font-bold">12.5 Hours</p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
        <Target className="w-8 h-8 text-[#DC143C]" />
        <div>
          <p className="text-sm text-gray-600">Accuracy</p>
          <p className="text-xl font-bold">92%</p>
        </div>
      </div>
    </div>
  );
}