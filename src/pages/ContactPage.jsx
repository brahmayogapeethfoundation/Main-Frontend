import React from "react";
import ContactUs from "../components/ContactUs";

const ContactPage = ({ darkMode }) => {

   return (
      <div className={`w-full overflow-x-hidden transition-colors duration-500 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}>
        <ContactUs darkMode={darkMode} />
      </div>
    );
 
};

export default ContactPage;
