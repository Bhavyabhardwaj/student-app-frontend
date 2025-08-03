import { startOfMonth, endOfMonth, eachDayOfInterval, format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { addTask, toggleTaskDone } from "../../redux/slices/calenderSlice";
import { useState } from "react";

export default function CalendarGrid() {
  const today = new Date();
  const start = startOfMonth(today);
  const end = endOfMonth(today);
  const days = eachDayOfInterval({ start, end });

  const dispatch = useDispatch();
  const tasksByDate = useSelector((state) => state.calendar.tasksByDate);
  const [selectedDate, setSelectedDate] = useState(null);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (!newTask) return;
    dispatch(addTask({ date: selectedDate, task: { title: newTask } }));
    setNewTask("");
  };

  return (
    <div>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => {
          const dateStr = format(day, "yyyy-MM-dd");
          const isToday = format(day, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd");
          const tasks = tasksByDate[dateStr] || [];

          return (
            <div
              key={dateStr}
              className={`p-2 border rounded cursor-pointer ${
                isToday ? "bg-blue-100 border-blue-400" : "bg-gray-100"
              }`}
              onClick={() => setSelectedDate(dateStr)}
            >
              <div className="font-semibold">{format(day, "d MMM")}</div>
              <ul className="text-sm mt-1">
                {tasks.map((task, i) => (
                  <li
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(toggleTaskDone({ date: dateStr, index: i }));
                    }}
                    className={`truncate ${task.done ? "line-through text-green-600" : ""}`}
                  >
                    • {task.title}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      
      {selectedDate && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-96 shadow-xl">
            <h2 className="text-xl font-bold mb-2">Tasks on {selectedDate}</h2>
            <ul className="mb-2">
              {(tasksByDate[selectedDate] || []).map((task, i) => (
                <li key={i} className={`${task.done ? "line-through text-green-500" : ""}`}>
                  • {task.title}
                </li>
              ))}
            </ul>
            <input
              type="text"
              placeholder="New task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="w-full p-2 border rounded mb-2"
            />
            <div className="flex justify-between">
              <button
                onClick={handleAddTask}
                className="bg-blue-500 text-white px-4 py-1 rounded"
              >
                Add
              </button>
              <button
                onClick={() => {
                  setSelectedDate(null);
                  setNewTask("");
                }}
                className="bg-gray-400 text-white px-4 py-1 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
