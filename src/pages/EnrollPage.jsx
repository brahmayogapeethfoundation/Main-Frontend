import React, { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { enrollCourse } from "../api/api";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { PAYPAL_CLIENT_ID } from "../config/env"; 

const EnrollPage = ({ darkMode }) => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const course = state?.course;
  const selectedAccommodation = state?.selectedAccommodation;

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    country: "",
  });

  const [errors, setErrors] = useState({});
  const [paymentMode, setPaymentMode] = useState("PAY_NOW");

  if (!course)
    return (
      <p className="pt-40 text-center text-red-600">Course not selected.</p>
    );

  const durationDays = useMemo(() => {
    if (!course?.duration) return 0;
    const text = course.duration.toLowerCase();
    const num = parseInt(text.replace(/\D/g, "")) || 0;
    if (text.includes("week")) return num * 7;
    if (text.includes("month")) return num * 30;
    return num;
  }, [course.duration]);

  const coursePrice = Number(course.price || 0);
  const accommodationCost = useMemo(() => {
    if (!selectedAccommodation) return 0;
    return Number(selectedAccommodation.price || 0) * durationDays;
  }, [selectedAccommodation, durationDays]);

  const totalPrice = coursePrice + accommodationCost;

  const validateUserInfo = () => {
    const newErrors = {};
    if (!userInfo.fullName.trim()) newErrors.fullName = "Required";
    if (!userInfo.email.trim()) newErrors.email = "Required";
    if (!userInfo.phone.trim()) newErrors.phone = "Required";
    if (!userInfo.gender) newErrors.gender = "Required";
    if (!userInfo.country) newErrors.country = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEnrollment = async () => {
    const payload = {
      ...userInfo,
      courseId: Number(course.id),
      courseTitle: course.title,
      courseDuration: course.duration,
      coursePrice,
      accommodationId: selectedAccommodation?.id
        ? Number(selectedAccommodation.id)
        : null,
      accommodationType: selectedAccommodation?.type || null,
      accommodationPricePerDay: Number(selectedAccommodation?.price || 0),
      paymentMode,
      totalPrice,
    };

    try {
      setLoading(true);
      await enrollCourse(payload);
      toast.success("Enrollment successful!");
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        navigate("/");
      }, 3000);
    } catch (err) {
      console.error("Enrollment failed:", err.response?.data || err.message);
      toast.error("Enrollment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 font-sans transition-colors";

  return (
    <PayPalScriptProvider
      options={{
        "client-id": PAYPAL_CLIENT_ID,
        currency: "INR",
        intent: "capture",
      }}
    >
      <ToastContainer />
      <section
        className={`w-full overflow-x-hidden relative min-h-screen py-20 px-6 transition-colors duration-500 font-sans
          ${darkMode
            ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-gray-100"
            : "bg-gradient-to-r from-blue-50 via-white to-blue-100 text-gray-900"
          }`}
      >
        
        <div
          className={`absolute top-0 -left-20 w-72 h-72 rounded-full blur-3xl animate-pulse-slow
            ${darkMode ? "bg-purple-500/30" : "bg-purple-200/30"}`}
        />
        <div
          className={`absolute bottom-0 -right-24 w-96 h-96 rounded-full blur-3xl animate-pulse-slow
            ${darkMode ? "bg-pink-500/20" : "bg-pink-200/20"}`}
        />

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-3 gap-8 z-10">
          
          <div
            className={`p-6 rounded-xl shadow-xl h-fit
            ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}
            order-1 md:order-2`}
          >
            <h3 className="text-xl font-bold mb-4">Price Summary</h3>

            <div className="flex justify-between">
              <span>
                {course.title} ({course.duration})
              </span>
              <span>₹{coursePrice}</span>
            </div>

            {selectedAccommodation && (
              <div className="flex justify-between mt-2">
                <span>
                  {selectedAccommodation.type} ({durationDays} days)
                </span>
                <span>₹{accommodationCost}</span>
              </div>
            )}

            <hr
              className={`my-4 ${darkMode ? "border-gray-700" : "border-gray-300"}`}
            />

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>
          </div>

          
          <div
            className={`md:col-span-2 p-6 sm:p-8 md:p-10 rounded-xl shadow-xl
            ${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"} 
            order-2 md:order-1`}
          >
            {step === 1 && (
              <>
                <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
                  User Information
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {["fullName", "email", "phone", "country"].map((field) => (
                    <div key={field} className="flex flex-col">
                      <label
                        htmlFor={field}
                        className={`mb-1 font-medium ${
                          darkMode ? "text-gray-200" : "text-gray-800"
                        }`}
                      >
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      <input
                        id={field}
                        type={field === "email" ? "email" : "text"}
                        value={userInfo[field]}
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, [field]: e.target.value })
                        }
                        className={`${inputClass} ${
                          errors[field] ? "border-red-500" : ""
                        } ${
                          darkMode
                            ? "bg-gray-700 text-gray-100 border-gray-600 placeholder-gray-400"
                            : "bg-white text-gray-900 border-gray-300 placeholder-gray-500"
                        }`}
                        placeholder={`Enter ${field}`}
                      />
                      {errors[field] && (
                        <span className="text-red-500 text-sm mt-1">
                          {errors[field]}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                
                <div className="flex flex-col mb-6">
                  <label
                    htmlFor="gender"
                    className={`mb-1 font-medium ${
                      darkMode ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    value={userInfo.gender}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, gender: e.target.value })
                    }
                    className={`${inputClass} ${
                      errors.gender ? "border-red-500" : ""
                    } ${
                      darkMode
                        ? "bg-gray-700 text-gray-100 border-gray-600"
                        : "bg-white text-gray-900 border-gray-300"
                    }`}
                  >
                    <option value="">Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                  {errors.gender && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.gender}
                    </span>
                  )}
                </div>

               
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <button
                    onClick={() => validateUserInfo() && setStep(2)}
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg w-full sm:w-auto order-1 sm:order-2"
                  >
                    Next
                  </button>

                  <button
                    onClick={() => navigate(-1)}
                    className="px-6 py-3 bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-lg w-full sm:w-auto order-2 sm:order-1"
                  >
                    Back
                  </button>
                </div>
              </>
            )}

           
            {step === 2 && (
              <div
                className={`p-4 rounded-xl shadow-inner ${
                  darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
                }`}
              >
                <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
                  Payment
                </h2>

                <div className="flex flex-col gap-4 mb-6">
                  <label
                    className={`font-medium ${darkMode ? "text-gray-200" : "text-gray-800"}`}
                  >
                    Payment Mode
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      checked={paymentMode === "PAY_NOW"}
                      onChange={() => setPaymentMode("PAY_NOW")}
                      className="accent-blue-600"
                    />
                    Pay Now
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      checked={paymentMode === "PAY_LATER"}
                      onChange={() => setPaymentMode("PAY_LATER")}
                      className="accent-green-600"
                    />
                    Pay Later
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  {paymentMode === "PAY_LATER" && (
                    <button
                      onClick={handleEnrollment}
                      disabled={loading}
                      className="px-8 py-3 bg-green-600 text-white rounded-lg w-full sm:w-auto"
                    >
                      {loading ? "Processing..." : "Confirm Enrollment"}
                    </button>
                  )}

                  {paymentMode === "PAY_NOW" && (
                    <div
                      className={`w-full p-4 rounded-lg ${
                        darkMode ? "bg-gray-800" : "bg-gray-100"
                      }`}
                    >
                      <PayPalButtons
                        style={{ layout: "vertical" }}
                        createOrder={(data, actions) =>
                          actions.order.create({
                            purchase_units: [
                              { amount: { value: totalPrice.toString() } },
                            ],
                          })
                        }
                        onApprove={async (data, actions) => {
                          const details = await actions.order.capture();
                          toast.success("Payment successful!");
                          await handleEnrollment();
                        }}
                        onError={(err) => {
                          console.error("PayPal payment error:", err);
                          toast.error("Payment failed. Please try again.");
                        }}
                      />
                    </div>
                  )}

                  <button
                    onClick={() => setStep(1)}
                    className="px-6 py-3 bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-lg"
                  >
                    Back
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        
        {showSuccessModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div
              className={`p-10 rounded-xl shadow-lg text-center max-w-sm
                ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}
            >
              <h2 className={`text-2xl font-bold mb-4 ${darkMode ? "text-green-400" : "text-green-600"}`}>
                Enrollment Successful!
              </h2>
              <p className={`${darkMode ? "text-gray-200" : "text-gray-800"} mb-4`}>
                You will be redirected to the homepage shortly.
              </p>
              <button
                onClick={() => {
                  setShowSuccessModal(false);
                  navigate("/");
                }}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg"
              >
                Go Now
              </button>
            </div>
          </div>
        )}
      </section>
    </PayPalScriptProvider>
  );
};

export default EnrollPage;
