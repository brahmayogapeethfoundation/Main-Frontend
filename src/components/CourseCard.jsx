import { memo } from "react";

const CourseCard = ({ course, darkMode, onEnroll, onDetails }) => {
  return (
    <div
      className={`border rounded-2xl shadow-lg transition-all flex flex-col
        h-[520px] w-full max-w-[340px]
        ${
          darkMode
            ? "border-indigo-400 bg-gray-800 text-gray-200"
            : "border-orange-400 bg-white text-gray-900"
        }
        hover:scale-105 hover:shadow-2xl`}
    >
      <div className="h-56 w-full overflow-hidden rounded-t-2xl">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500"
        />
      </div>

      <div className="p-4 md:p-5 flex flex-col flex-grow">

        <h3 className="text-lg md:text-xl font-bold line-clamp-2">
          {course.title}
        </h3>

        <p
          className={`mt-1 text-sm ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {course.category || "Yoga Course"}
        </p>

        <p
          className={`mt-2 text-sm line-clamp-3 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {course.longDescription}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-orange-500 text-lg">
            ₹{course.price}
          </span>
          <span className="text-sm font-medium">⭐ {course.rating}</span>
        </div>

        <div className="mt-auto pt-5 flex gap-2">
          <button
            onClick={() => onEnroll(course)}
            className="flex-1 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition"
          >
            Enroll
          </button>
          <button
            onClick={() => onDetails(course)}
            className="flex-1 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700 transition"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(CourseCard);
