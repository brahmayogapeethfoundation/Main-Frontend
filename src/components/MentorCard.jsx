import { Link } from "react-router-dom";
import { memo } from "react";

const MentorCard = ({ mentor, darkMode }) => {
  return (
    <div
      className={`border rounded-2xl shadow-lg transition-all flex flex-col h-full w-full
        max-w-[340px] md:max-w-full
        ${darkMode ? "border-indigo-400 bg-gray-800 text-gray-200" : "border-orange-400 bg-white text-gray-900"}
        hover:scale-105 hover:shadow-2xl`}
    >
      <div className="w-full aspect-square overflow-hidden rounded-t-2xl">
        <img
          src={mentor.image}
          alt={mentor.name}
          className="w-full h-full object-cover transition-transform duration-500"
        />
      </div>

      <div className="p-4 md:p-6 flex flex-col flex-grow text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold line-clamp-2">
          {mentor.name}
        </h2>
        <p className={`mt-1 text-sm sm:text-base md:text-lg line-clamp-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          {mentor.speciality}
        </p>

        <div className="mt-auto pt-4">
          <Link
            to={`/about/mentors/${mentor.id}`}
            className={`text-sm sm:text-base md:text-lg font-medium hover:underline ${
              darkMode ? "text-indigo-400" : "text-orange-500"
            }`}
          >
            View Profile →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(MentorCard);
