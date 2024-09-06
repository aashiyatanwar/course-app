// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { enrollCourse } from "../features/courseSlice";
// import { useParams } from "react-router-dom";

// const CourseDetails = () => {
//   const { courseId } = useParams();
//   const dispatch = useDispatch();
//   const course = useSelector((state) =>
//     state.courses.courses.find((c) => c.id === parseInt(courseId))
//   );
//   console.log("course", course);

//   if (!course) {
//     return <div className="p-4 text-center text-red-600">Course not found.</div>;
//   }

//   const handleEnroll = () => {
//     console.log("id", course.id);
//     dispatch(enrollCourse(course.id));
//   };

//   return (
//     <div className="p-6 mt-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
//       <h1 className="text-4xl font-bold mb-4">{course.name}</h1>
//       <div className="flex items-center mb-4">
//         <img
//           src={course.thumbnail || "https://via.placeholder.com/150"}
//           alt={course.name}
//           className="w-32 h-32 object-cover rounded-full mr-4"
//         />
//         <div>
//           <p className="text-xl font-semibold text-gray-800">Instructor: {course.instructor}</p>
//           <p className="text-lg text-gray-600">Location: {course.location}</p>
//         </div>
//       </div>
//       <p className="text-gray-700 mb-4">Description: {course.description}</p>
//       <p className="text-gray-700 mb-4">Duration: {course.duration}</p>
//       <p className="text-gray-700 mb-4">Schedule: {course.schedule}</p>
//       <p className="text-gray-700 mb-4">Enrollment Status: {course.enrollmentStatus}</p>
//       <h2 className="text-2xl font-semibold mt-6 mb-4">Syllabus</h2>
//       <ul className="list-disc pl-6 space-y-2">
//         {course.syllabus.map((item, index) => (
//           <li key={index} className="text-gray-600">
//             Week {item.week}: {item.topic}
//           </li>
//         ))}
//       </ul>
//       <button
//         onClick={handleEnroll}
//         className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
//       >
//         Enroll in Course
//       </button>
//     </div>
//   );
// };

// export default CourseDetails;
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { enrollCourse } from "../features/courseSlice";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) =>
    state.courses.courses.find((c) => c.id === parseInt(courseId))
  );
  console.log("course", course);

  const [isEnrolled, setIsEnrolled] = useState(false);

  if (!course) {
    return <div className="p-4 text-center text-red-600">Course not found.</div>;
  }

  const handleEnroll = () => {
    dispatch(enrollCourse(course.id));
    setIsEnrolled(true);
  };

  return (
    <div className="p-6 mt-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4">{course.name}</h1>
      <div className="flex items-center mb-4">
        <img
          src={course.thumbnail || "https://via.placeholder.com/150"}
          alt={course.name}
          className="w-32 h-32 object-cover rounded-full mr-4"
        />
        <div>
          <p className="text-xl font-semibold text-gray-800">Instructor: {course.instructor}</p>
          <p className="text-lg text-gray-600">Location: {course.location}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">Description: {course.description}</p>
      <p className="text-gray-700 mb-4">Duration: {course.duration}</p>
      <p className="text-gray-700 mb-4">Schedule: {course.schedule}</p>
      <p className="text-gray-700 mb-4">Enrollment Status: {course.enrollmentStatus}</p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Syllabus</h2>
      <ul className="list-disc pl-6 space-y-2">
        {course.syllabus.map((item, index) => (
          <li key={index} className="text-gray-600">
            Week {item.week}: {item.topic}
          </li>
        ))}
      </ul>
      <button
        onClick={handleEnroll}
        className={`mt-6 py-2 px-6 rounded-lg transition duration-300 ease-in-out ${
          isEnrolled ? "bg-green-600" : "bg-blue-600"
        } text-white hover:bg-blue-700`}
        disabled={isEnrolled}
      >
        {isEnrolled ? "Enrolled" : "Enroll in Course"}
      </button>
    </div>
  );
};

export default CourseDetails;

