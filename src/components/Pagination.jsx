import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex items-center gap-4">

        {/* Previous Button */}
        <button
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-3 rounded-full shadow-md bg-white hover:bg-gray-100 
          disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <FaChevronLeft size={18} />
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-3">
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`w-10 h-10 flex items-center justify-center rounded-full shadow-md text-sm font-semibold
                ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={() =>
            currentPage < totalPages && onPageChange(currentPage + 1)
          }
          disabled={currentPage === totalPages}
          className="p-3 rounded-full shadow-md bg-white hover:bg-gray-100 
          disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <FaChevronRight size={18} />
        </button>

      </div>
    </div>
  );
};

export default Pagination;
