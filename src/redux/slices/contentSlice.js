import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios";
import toast from "react-hot-toast";

const initialState = {
  loading: false,
  error: null,
  contents: [],   
  suggestedContent: "", 
};


export const generateContent = createAsyncThunk(
  "/content/suggest",
  async (payload, { rejectWithValue }) => {
    try {
      const responsePromise = axiosInstance.post("/content/suggest", payload);
      toast.promise(responsePromise, {
        loading: "Generating content...",
        success: "Content suggestion ready!",
        error: "Content generation failed!",
      });
      const response = await responsePromise;
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to generate content"
      );
    }
  }
);

export const saveContent = createAsyncThunk(
  "/content/save",
  async (payload, { rejectWithValue }) => {
    try {
      const responsePromise = axiosInstance.post("/content/suggest/save", payload);
      toast.promise(responsePromise, {
        loading: "Saving content...",
        success: "Content saved!",
        error: "Save failed!",
      });
      const response = await responsePromise;
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to save content"
      );
    }
  }
);

export const fetchAllContents = createAsyncThunk(
  "/content/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/content/showAll");
      return response.data.data || [];
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch contents");
      return rejectWithValue(error.response?.data?.message || "Failed to fetch contents");
    }
  }
);

export const fetchContentById = createAsyncThunk(
  "/content/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/content/see/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch content");
    }
  }
);


export const deleteContent = createAsyncThunk(
  "/content/delete",
  async (contentId, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.delete(`/content/delete/${contentId}`);
      toast.success("Content deleted successfully!");
      return contentId;
    } catch (error) {
      toast.error("Failed to delete content");
      return rejectWithValue(error.response?.data?.message || "Delete failed");
    }
  }
);


const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    clearSuggestedContent(state) {
      state.suggestedContent = "";
    },
  },
  extraReducers: (builder) => {
    builder
  
      .addCase(generateContent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generateContent.fulfilled, (state, action) => {
        state.loading = false;
        state.suggestedContent = action.payload?.suggestedContent || "";
      })
      .addCase(generateContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      
      .addCase(saveContent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveContent.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(saveContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // fetchAllContents
      .addCase(fetchAllContents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllContents.fulfilled, (state, action) => {
        state.loading = false;
        state.contents = action.payload;
      })
      .addCase(fetchAllContents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      
      .addCase(fetchContentById.fulfilled, (state, action) => {
        state.suggestedContent = action.payload?.content || "";
      })

     
      .addCase(deleteContent.fulfilled, (state, action) => {
        state.contents = state.contents.filter(
          (content) => content._id !== action.payload
        );
      });
  },
});

export const { clearSuggestedContent } = contentSlice.actions;
export default contentSlice.reducer;
