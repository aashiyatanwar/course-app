import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch courses from the API
export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const response = await axios.get('http://localhost:5000/api/courses');
  console.log("response" , response)
  return response.data;
});

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    enrolledCourses: [],
    loading: false,
    error: null,
  },
  reducers: {
    removeFirstTwoCourses: (state) => {
      state.enrolledCourses = state.enrolledCourses.slice(2);
    },
    enrollCourse: (state, action) => {
        // Convert Proxy to Plain Object for logging
        console.log("before", JSON.parse(JSON.stringify(state.enrolledCourses)));
        const courseId = action.payload;
        console.log("courseID", courseId);
        
        // Find the course based on ID
        const course = state.courses.find(course => course.id === courseId);
        
        
        // If the course exists and is not already enrolled
        if (course && !state.enrolledCourses.find(c => c.id === course.id)) {
            // Add the course to the enrolled courses list with a completed flag
            console.log("course", JSON.parse(JSON.stringify(course)));
            state.enrolledCourses.push({ ...course, completed: false });
            
        }
        console.log("after" ,JSON.parse(JSON.stringify(state.enrolledCourses)))
        
    },
    markCourseCompleted: (state, action) => {
      const course = state.enrolledCourses.find(course => course.id === action.payload);
      if (course) {
        course.completed = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { enrollCourse, markCourseCompleted , removeFirstTwoCourses} = coursesSlice.actions;
export default coursesSlice.reducer;
