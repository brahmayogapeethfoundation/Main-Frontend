import { API_BASE_URL } from "../config/env"; // ✅ import env variable
import axios from "axios";

// Create Axios instance using API_BASE_URL from env
const api = axios.create({
  baseURL: `${API_BASE_URL}/api/user`, // ✅ now uses env variable
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export const getAllCourses = async () => { const res = await api.get("/courses"); return res.data; };

export const getGalleryImages = () => api.get("/gallery"); 

export const getTestimonials = () => api.get("/testimonials");  

export const sendEnquiry = (data) => api.post("/enquiries", data); 

export const enrollCourse = async (payload) => { const res = await api.post("/enrollments", payload);  return res.data; };

export default api;











