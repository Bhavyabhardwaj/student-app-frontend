import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios";
import toast from "react-hot-toast";

// Safely parse localStorage data
let parsedData = {};
try {
  const storedData = localStorage.getItem("data");
  parsedData = storedData ? JSON.parse(storedData) : {};
} catch (error) {
  console.warn("Invalid JSON in localStorage for 'data'", error);
}

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
  role: localStorage.getItem("role") || "",
  data: parsedData,
};

// Helper to show toast.promise
const showToastPromise = (promise, loadingMsg) => {
  toast.promise(promise, {
    success: (res) => res?.data?.message || "Success",
    loading: loadingMsg,
    error: (err) =>
      err?.response?.data?.message || "Ohh No!, Something went wrong.",
  });
};

// Create Account
export const createAccount = createAsyncThunk("/auth/createAccount", async (data, { rejectWithValue }) => {
  try {
    const responsePromise = axiosInstance.post("/users", data);
    showToastPromise(responsePromise, "Hold back tight, we are registering your id...");
    const response = await responsePromise;
    return response;
  } catch (error) {
    console.error(error);
    return rejectWithValue(error?.response?.data);
  }
});

// Login
export const login = createAsyncThunk("/auth/login", async (data, { rejectWithValue }) => {
  try {
    const responsePromise = axiosInstance.post("/auth/login", data);
    showToastPromise(responsePromise, "Logging you in...");
    const response = await responsePromise;
    return response;
  } catch (error) {
    console.error(error);
    return rejectWithValue(error?.response?.data);
  }
});

// Logout
export const logout = createAsyncThunk("/auth/logout", async (_, { rejectWithValue }) => {
  try {
    const responsePromise = axiosInstance.post("/auth/logout");
    showToastPromise(responsePromise, "Logging out...");
    const response = await responsePromise;
    return response;
  } catch (error) {
    console.error(error);
    return rejectWithValue(error?.response?.data);
  }
});

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.role = action?.payload?.data?.data?.userRole || "";
        state.data = action?.payload?.data?.data?.userData || {};

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("role", state.role);
        localStorage.setItem("data", JSON.stringify(state.data));
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.role = "";
        state.data = {};

        localStorage.setItem("isLoggedIn", "false");
        localStorage.setItem("role", "");
        localStorage.setItem("data", JSON.stringify({}));
      });
  },
});

export default AuthSlice.reducer;
