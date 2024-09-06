import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <img src={course.thumbnail} alt={course.name} className="w-full h-56 object-cover rounded-md" />
      <h2 className="text-lg font-bold mt-2">{course.name}</h2>
      <p className="text-sm text-gray-600">Instructor: {course.instructor}</p>
      <p className="text-sm text-gray-600">Duration: {course.duration}</p>
      <p className="text-sm text-gray-600">Status: {course.enrollmentStatus}</p>
      <Link to={`/course/${course.id}`} className="text-blue-500 hover:underline mt-4 inline-block">
        View Details
      </Link>
    </div>
  );
};

export default CourseCard;



