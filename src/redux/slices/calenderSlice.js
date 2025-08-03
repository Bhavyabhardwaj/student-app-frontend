import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasksByDate: {}, 
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { date, task } = action.payload;
      if (!state.tasksByDate[date]) {
        state.tasksByDate[date] = [];
      }
      state.tasksByDate[date].push({ ...task, done: false });
    },
    toggleTaskDone: (state, action) => {
      const { date, index } = action.payload;
      state.tasksByDate[date][index].done = !state.tasksByDate[date][index].done;
    },
  },
});

export const { addTask, toggleTaskDone } = calendarSlice.actions;
export default calendarSlice.reducer;
