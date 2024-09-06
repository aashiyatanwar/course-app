import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  markCourseCompleted,
  removeFirstTwoCourses,
} from "../features/courseSlice";

const Dashboard = () => {
  const enrolledCourses = useSelector((state) => state.courses.enrolledCourses);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Enrolled Courses Updated:", enrolledCourses);
  }, [enrolledCourses]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">
        Your Enrolled Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrolledCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-lg rounded-lg p-6 transition duration-300 transform hover:scale-105"
          >
            <img
              src={course.thumbnail}
              alt={course.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800">{course.name}</h2>
            <p className="text-gray-600">Instructor: {course.instructor}</p>
            <p className="text-gray-600">Duration: {course.duration}</p>
            <p className="text-gray-600">
              Progress: {course.completed ? "Completed" : "In Progress"}
            </p>
            <button
              onClick={() => dispatch(markCourseCompleted(course.id))}
              className={`mt-4 py-2 px-4 rounded-lg text-white ${
                course.completed
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600"
              } transition duration-300 ease-in-out`}
              disabled={course.completed}
            >
              {course.completed ? "Course Completed" : "Mark as Completed"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
