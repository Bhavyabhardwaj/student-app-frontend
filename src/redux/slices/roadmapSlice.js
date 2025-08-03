// src/redux/slices/roadmapSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios";
import toast from "react-hot-toast";

const initialState = {
  roadmapContent: null,
  loading: false,
  error: null,
};

export const addGoal = createAsyncThunk('/goal/add', async () => {
    console.log("incoming data to the thunk");
    try {
        const response = axiosInstance.post('/goal/addGoal');    
        toast.promise(response, {
            success: (resolvedPromise) => {
                return resolvedPromise?.data?.message;
            },
            loading: 'adding goal...',
            error: 'Ohh No!, Something went wrong. Please try again.',
        });
        const apiResponse = await response;
        return apiResponse;
    } catch(error) {
        console.log(error);
    }
});

export const generateRoadmap = createAsyncThunk('/roadmap/generateThunk', async (data) => {
  try {
    const response = axiosInstance.post('/roadmap/generate', data);
    toast.promise(response, {
      success: (res) => res?.data?.message || 'Roadmap generated!',
      loading: 'Generating roadmap...',
      error: 'Ohh No!, Something went wrong.',
    });
    return (await response).data;
  } catch (error) {
    throw error;
  }
});

export const saveRoadmap = createAsyncThunk('/roadmap/saveThunk', async (payload) => {
  try {
    const response = axiosInstance.post('/roadmap/generate/save', payload);
    toast.promise(response, {
      success: (res) => res?.data?.message || 'Roadmap saved!',
      loading: 'Saving roadmap...',
      error: 'Something went wrong!',
    });
    return (await response).data;
  } catch (error) {
    throw error;
  }
});

const roadmapSlice = createSlice({
  name: 'roadmap',
  initialState,
  reducers: {
    setRoadmapContent(state, action) {
      state.roadmapContent = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(generateRoadmap.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generateRoadmap.fulfilled, (state, action) => {
        state.loading = false;
         state.roadmapContent = action.payload.suggestedRoadmap; // ✅ fix here
      })
      .addCase(generateRoadmap.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addGoal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addGoal.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addGoal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(saveRoadmap.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveRoadmap.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(saveRoadmap.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { setRoadmapContent } = roadmapSlice.actions; // ✅ fix here
export default roadmapSlice.reducer;
