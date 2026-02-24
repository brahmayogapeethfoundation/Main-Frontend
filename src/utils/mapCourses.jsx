import { getAllCourses } from "../api/api";


export const fetchAndMapCourses = async () => {
  try {
    const data = await getAllCourses();
    return mapBackendCourses(data);
  } catch (error) {
    console.error("Failed to fetch courses:", error);
    return [];
  }
};


export const mapBackendCourses = (data) => {
  if (!data) return [];

  if (Array.isArray(data)) {
    return data.map(mapSingleCourse);
  }

  return mapSingleCourse(data);
};

const mapSingleCourse = (course) => ({
  id: course.id,
  title: course.title,
  shortDescription: course.shortDescription,
  longDescription: course.longDescription,
  category: course.category,
  schedule: course.schedule,
  duration: course.duration,
  price: course.price,
  rating: course.rating,
  mode: course.mode,
  imageUrl: course.imageUrl,
  isVisible: course.isVisible,

  optionImage1: course.optionImage1,
  optionImage2: course.optionImage2,
  optionImage3: course.optionImage3,

  accommodations: (course.accommodations || []).map((acc) => ({
    id: acc.id,
    type: acc.type,
    price: acc.price,
    imageUrl: acc.imageUrl,
    courseId: acc.courseId,
  })),

  instructor: course.instructor
    ? {
        id: course.instructor.id,
        name: course.instructor.name,
        role: course.instructor.role,
        description: course.instructor.description,
        imageUrl: course.instructor.imageUrl,
      }
    : null,

  createdAt: course.createdAt,
});
