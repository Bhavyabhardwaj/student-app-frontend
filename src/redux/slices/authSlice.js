import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios";
import toast from "react-hot-toast";

let parsedData = {};
try {
  const storedData = localStorage.getItem('data');
  if (storedData && storedData !== "undefined") {
    parsedData = JSON.parse(storedData);
  } else {
    parsedData = {};
  }
} catch (error) {
  console.warn("Invalid JSON in localStorage for 'data'", error);
  parsedData = {};
}


const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false,
  role: localStorage.getItem('role') || '',
  data: parsedData,
};


export const createAccount = createAsyncThunk('/auth/createAccount', async (data) => {
    console.log("incoming data to the thunk", data);
    try {
        const response = axiosInstance.post('/users', data);    
        toast.promise(response, {
            success: (resolvedPromise) => {
                return resolvedPromise?.data?.message;
            },
            loading: 'Hold back tight, we are registering your id...',
            error: 'Ohh No!, Something went wrong. Please try again.',
        });
        const apiResponse = await response;
        return apiResponse;
    } catch(error) {
        console.log(error);
    }
});

export const login = createAsyncThunk('/auth/login', async (data) => {
    console.log("incoming data to the thunk", data);
    try {
        const response = axiosInstance.post('/auth/login', data);
        const token = response?.data?.token;
        if (token) {
            localStorage.setItem("authToken", token);
        }
        toast.promise(response, {
            success: (resolvedPromise) => {
                return resolvedPromise?.data?.message;
            },
            loading: 'Hold back tight, we are registering your id...',
            error: 'Ohh No!, Something went wrong. Please try again.',
        });
        const apiResponse = await response;
        return apiResponse;
    } catch(error) {
        console.log(error);
    }
});

export const logout = createAsyncThunk('/auth/logout', async () => {
    console.log("incoming data to the thunk");
    try {
        const response = axiosInstance.post('/auth/logout');    
        toast.promise(response, {
            success: (resolvedPromise) => {
                return resolvedPromise?.data?.message;
            },
            loading: 'Logging out...',
            error: 'Ohh No!, Something went wrong. Please try again.',
        });
        const apiResponse = await response;
        return apiResponse;
    } catch(error) {
        console.log(error);
    }
});

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(login.fulfilled, (state, action) => {
            // reducer which will execute when the login thunk is fulfilled
            state.isLoggedIn = true;
            state.role = action?.payload?.data?.data?.userRole,
            state.data = action?.payload?.data?.data?.userData

            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('role', action?.payload?.data?.data?.userRole);
            localStorage.setItem('data', JSON.stringify(action?.payload?.data?.data?.userData));
        })
        .addCase(logout.fulfilled, (state) => {
            // reducer which will execute when the logout thunk is fulfilled
            localStorage.setItem('isLoggedIn', false);
            localStorage.setItem('role', '');
            localStorage.setItem('data', JSON.stringify({}));
            state.isLoggedIn = false;
            state.role = '';
            state.data = {};
        })
    }
});

export default AuthSlice.reducer;
