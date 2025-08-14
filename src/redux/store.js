import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./slices/authSlice";
import roadmapSliceReducer from "./slices/roadmapSlice"
import calendarReducer from "./slices/calenderSlice";
import showAllRoadmapsReducer from "./slices/myRoadmapSlice";
import profileReducer from "./slices/profileSlice";
export const store = configureStore({
    reducer: {
        auth: AuthSliceReducer,
        roadmap: roadmapSliceReducer,
           calendar: calendarReducer,
            showAllRoadmaps: showAllRoadmapsReducer,
             profile: profileReducer
    },
    devTools: true,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
});