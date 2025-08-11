import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios";
import toast from "react-hot-toast";

const initialState = {
  loading: false,
  error: null,
  roadmap: "",
   goals: [], 
};



export const addGoal = createAsyncThunk('/goal/add', async (payload, { rejectWithValue }) => {
  try {
    const responsePromise = axiosInstance.post('/goal/addGoal', payload);
    toast.promise(responsePromise, {
      success: (res) => res?.data?.message || "Goal added!",
      loading: "Adding goal...",
      error: "Oh no! Something went wrong.",
    });
    const response = await responsePromise;
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Failed to add goal");
  }
});

export const generateRoadmap = createAsyncThunk('/roadmap/generate', async (payload, { rejectWithValue }) => {
  try {
    const responsePromise = axiosInstance.post('/roadmap/generate', payload);
    toast.promise(responsePromise, {
      loading: 'Generating roadmap...',
      success: 'Roadmap ready!',
      error: 'Generation failed!',
    });
    const response = await responsePromise;
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Failed to generate roadmap");
  }
});

export const saveRoadmap = createAsyncThunk('/roadmap/save', async (payload, { rejectWithValue }) => {
  try {
    const responsePromise = axiosInstance.post('/roadmap/generate/save', payload);
    toast.promise(responsePromise, {
      loading: 'Saving roadmap...',
      success: 'Roadmap saved!',
      error: 'Save failed!',
    });
    const response = await responsePromise;
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Failed to save roadmap");
  }
});

export const fetchGoals = createAsyncThunk('/goal/fetch', async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get('/goal/showAll');
    return response.data.data;  
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Failed to fetch goals");
  }
});

export const deleteGoal = createAsyncThunk('/goal/delete', async (goalId, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.delete(`/goal/deleteGoal/${goalId}`);
    toast.success("Goal deleted successfully!");
    return goalId; // return only the deleted goal ID
  } catch (error) {
    toast.error("Failed to delete goal");
    return rejectWithValue(error.response?.data?.message || "Delete failed");
  }
});




const goalSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {
    setRoadmap(state, action) {
      state.roadmap = action.payload;
    },
    clearRoadmap(state) {
      state.roadmap = "";
    }
  },
  extraReducers: (builder) => {
    builder
      // Add Goal
      .addCase(addGoal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addGoal.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addGoal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })

      // Generate Roadmap
      .addCase(generateRoadmap.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generateRoadmap.fulfilled, (state, action) => {
        state.loading = false;
        state.roadmap = action.payload?.suggestedRoadmap || "";
      })
      .addCase(generateRoadmap.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })

      // Save Roadmap
      .addCase(saveRoadmap.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveRoadmap.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(saveRoadmap.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })

      // Fetch Goals
.addCase(fetchGoals.pending, (state) => {
  state.loading = true;
  state.error = null;
})
.addCase(fetchGoals.fulfilled, (state, action) => {
  state.loading = false;
  state.goals = action.payload; // array of goals
})
.addCase(fetchGoals.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload || action.error.message;
})

.addCase(deleteGoal.fulfilled, (state, action) => {
  state.goals = state.goals.filter((goal) => goal._id !== action.payload);
})
;

  }
});



export const { setRoadmap, clearRoadmap } = goalSlice.actions;
export default goalSlice.reducer;
