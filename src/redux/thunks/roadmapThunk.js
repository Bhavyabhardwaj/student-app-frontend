// src/redux/thunks/roadmapThunk.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios";
import toast from "react-hot-toast";

export const generateRoadmap = createAsyncThunk('/roadmap/generate', async (data) => {
  try {
    const response = axiosInstance.post('/roadmap/generate', data);
    toast.promise(response, {
      loading: 'Generating roadmap...',
      success: 'Roadmap ready!',
      error: 'Generation failed!',
    });
    return await response;
  } catch (err) {
    throw err;
  }
});

export const saveRoadmap = createAsyncThunk('/roadmap/save', async (data) => {
  try {
    const response = axiosInstance.post('/roadmap/save', data);
    toast.promise(response, {
      loading: 'Saving roadmap...',
      success: 'Roadmap saved!',
      error: 'Save failed!',
    });
    return await response;
  } catch (err) {
    throw err;
  }
});
