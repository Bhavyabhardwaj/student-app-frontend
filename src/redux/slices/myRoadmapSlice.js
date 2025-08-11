
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios";
import toast from "react-hot-toast";

// Thunk to fetch all roadmaps
export const fetchAllRoadmaps = createAsyncThunk(
  "roadmaps/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/roadmap/showAll");
       console.log(response)
     
      return response.data.data || [];
     
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch roadmaps");
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const showAllRoadmapsSlice = createSlice({
  name: "showAllRoadmaps",
  initialState: {
    roadmaps: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllRoadmaps.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllRoadmaps.fulfilled, (state, action) => {
        state.loading = false;
        state.roadmaps = action.payload; // ab yaha sirf array hoga
      })
      .addCase(fetchAllRoadmaps.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default showAllRoadmapsSlice.reducer;
