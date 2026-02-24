import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { sendEnquiry } from "../api/api";

const ContactUs = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef(null);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);
      setSuccessMessage("");
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      try {
        await sendEnquiry(formData);
        setSuccessMessage(
          "Thank you! Your message has been sent successfully."
        );
        setFormData({ name: "", email: "", phone: "", message: "" });

        timeoutRef.current = setTimeout(() => setSuccessMessage(""), 3000);
      } catch (err) {
        alert(
          err?.response?.data?.message || "Something went wrong. Please try again."
        );
      } finally {
        setLoading(false);
      }
    },
    [formData]
  );

  useEffect(() => {
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  return (
    <section
      id="contact"
      className={`relative w-full min-h-screen flex justify-center items-center pt-24 transition-colors duration-500
        ${darkMode
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700"
          : "bg-gradient-to-r from-blue-50 via-white to-blue-100"}`}
    >
      {/* Decorative blobs */}
      <div
        className={`absolute top-0 -left-20 w-72 h-72 rounded-full blur-3xl animate-pulse-slow
          ${darkMode ? "bg-purple-500/30" : "bg-purple-200/30"}`}
      />
      <div
        className={`absolute bottom-0 -right-24 w-96 h-96 rounded-full blur-3xl animate-pulse-slow
          ${darkMode ? "bg-pink-500/20" : "bg-pink-200/20"}`}
      />

      {/* Container */}
      <div className="relative max-w-7xl w-full px-6 md:px-16 py-16 sm:py-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center z-10">

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className={`relative overflow-hidden rounded-3xl p-8 sm:p-10 space-y-5 w-full max-w-md mx-auto shadow-2xl backdrop-blur-xl
            ${darkMode ? "bg-gray-900/70 border border-white/10" : "bg-white/80 border border-white/40"} 
            order-1 md:order-2`}
        >
          <div
            className={`absolute inset-0 pointer-events-none bg-gradient-to-tr
              ${darkMode
                ? "from-indigo-500/10 via-purple-500/10 to-pink-500/10"
                : "from-blue-500/10 via-purple-500/10 to-pink-500/10"}`}
          />

          <div className="relative z-10 space-y-4">
            {successMessage && (
              <div className="bg-green-100 text-green-900 p-3 rounded-md text-center shadow">
                {successMessage}
              </div>
            )}

            <h2
              className={`text-3xl font-extrabold text-center bg-clip-text text-transparent
                ${darkMode
                  ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
                  : "bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500"}`}
            >
              Contact Us
            </h2>

            {["name", "email", "phone"].map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : "text"}
                name={field}
                required
                value={formData[field]}
                onChange={handleChange}
                placeholder={`Your ${field}`}
                className={`w-full p-3 rounded-xl border outline-none transition
                  ${darkMode
                    ? "bg-gray-800 text-gray-100 border-gray-700 focus:ring-indigo-400"
                    : "bg-white border-gray-300 focus:ring-blue-500"} focus:ring-2`}
              />
            ))}

            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className={`w-full p-3 h-28 sm:h-32 rounded-xl resize-none border outline-none transition
                ${darkMode
                  ? "bg-gray-800 text-gray-100 border-gray-700 focus:ring-indigo-400"
                  : "bg-white border-gray-300 focus:ring-blue-500"} focus:ring-2`}
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-300
                ${darkMode
                  ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 hover:opacity-90"
                  : "bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 hover:opacity-90"} disabled:opacity-60 disabled:cursor-not-allowed`}
            >
              {loading ? "Sending..." : "Send Message 📨"}
            </button>
          </div>
        </form>

        {/* MAP */}
        <div
          className={`w-full h-80 sm:h-[360px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl border
            ${darkMode ? "border-white/10" : "border-white/30"} order-2 md:order-1`}
        >
          <iframe
            title="Yoga Peeth Location"
            loading="lazy"
            className="w-full h-full filter grayscale hover:grayscale-0 transition duration-500"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.452716430075!2d77.29825207513756!3d30.08619708186578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909039cb567f8cd%3A0x9f37b0f0d2f43228!2sRishikesh%2C%20Uttarakhand%2C%20India!5e0!3m2!1sen!2sin!4v1702273813620!5m2!1sen!2sin"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default memo(ContactUs);
