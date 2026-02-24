import { useParams, Link } from "react-router-dom";
import { mentors } from "../data/mentors";

const MentorDetails = ({ darkMode }) => {
  const { id } = useParams();
  const mentor = mentors.find((m) => m.id === id);

  if (!mentor) {
    return (
      <h1 className="text-center mt-20 text-xl md:text-2xl font-semibold
        transition-colors duration-500
        text-gray-700 dark:text-gray-200">
        Mentor Not Found
      </h1>
    );
  }

  return (
    <section
      className={`w-full overflow-x-hidden px-4 md:px-16 py-16 md:py-24 transition-colors duration-500
        ${darkMode ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-gray-200"
                   : "bg-gradient-to-br from-blue-50 via-white to-purple-100 text-gray-900"}`}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 md:gap-8">

        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold">{mentor.name}</h1>
          <p className={`text-base md:text-lg font-medium mt-1
            ${darkMode ? "text-indigo-300" : "text-blue-600"}`}>
            {mentor.speciality}
          </p>
        </div>

        <div className="w-48 h-48 md:w-64 md:h-64">
          <img
            src={mentor.image}
            alt={mentor.name}
            className="w-full h-full object-cover rounded-full shadow-xl border-4 border-white"
          />
        </div>

        <div className="text-center space-y-3 text-sm md:text-base max-w-3xl">
          {mentor.desc.map((para, idx) => (
            <p key={idx} className={`${darkMode ? "text-gray-300 opacity-90" : "text-gray-700 opacity-90"}`}>
              {para}
            </p>
          ))}
        </div>

        <div className="flex gap-4 md:gap-6 text-2xl md:text-3xl mt-4">
          {mentor.instagram && (
            <a
              href={mentor.instagram}
              target="_blank"
              rel="noreferrer"
              className={`hover:scale-110 transition ${
                darkMode ? "text-indigo-300" : "text-orange-500"
              }`}
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          )}
          {mentor.youtube && (
            <a
              href={mentor.youtube}
              target="_blank"
              rel="noreferrer"
              className={`hover:scale-110 transition ${
                darkMode ? "text-indigo-300" : "text-orange-500"
              }`}
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          )}
        </div>

        <div className="mt-6 md:mt-8">
          <Link
            to="/about/mentors"
            className={`px-6 md:px-8 py-2 md:py-3 rounded-md font-medium shadow-md transition
              ${darkMode ? "bg-indigo-400 text-white hover:bg-indigo-500" : "bg-blue-600 text-white hover:bg-blue-700"}`}
          >
            ← Back to Mentors
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MentorDetails;
