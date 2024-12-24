import React from 'react';
import { CourseCard } from './CourseCard';

const courses = [
  {
    title: 'Basic Nepali Typing',
    description: 'Learn the fundamentals of Romanized Nepali typing with basic words and phrases.',
    level: 'Beginner',
    progress: 75,
    lessons: 12
  },
  {
    title: 'Intermediate Conversations',
    description: 'Practice typing common conversations and expand your vocabulary.',
    level: 'Intermediate',
    progress: 30,
    lessons: 15
  },
  {
    title: 'Professional Writing',
    description: 'Master complex sentences and professional communication in Nepali.',
    level: 'Pro',
    progress: 0,
    lessons: 20
  }
] as const;

export function CoursesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.title} {...course} />
      ))}
    </div>
  );
}