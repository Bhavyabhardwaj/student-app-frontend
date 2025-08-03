import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./slices/authSlice";
import roadmapSliceReducer from "./slices/roadmapSlice"
import calendarReducer from "./slices/calenderSlice";
export const store = configureStore({
    reducer: {
        auth: AuthSliceReducer,
        roadmap: roadmapSliceReducer,
           calendar: calendarReducer
    },
    devTools: true,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
});