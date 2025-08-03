import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  generateRoadmap,
  saveRoadmap,
  setRoadmapContent,
  addGoal,
} from "../redux/slices/roadmapSlice";

export default function SetGoal() {
  const dispatch = useDispatch();
  const roadmapContent = useSelector((state) => state.roadmap.roadmapContent);
  const loading = useSelector((state) => state.roadmap.loading);

  const [goal, setGoal] = useState("");
  const [timeline, setTimeline] = useState("1_month");

  const convertToDeadlineDate = (value) => {
    const now = new Date();
    if (value === "1_month") return new Date(now.setMonth(now.getMonth() + 1));
    if (value === "2_month") return new Date(now.setMonth(now.getMonth() + 2));
    if (value === "3_month") return new Date(now.setMonth(now.getMonth() + 3));
    return new Date(); // default for "custom"
  };

  const handleGenerate = async () => {
    if (!goal || !timeline) return;

    const payload = {
      topic: goal,
      deadline: timeline,
    };

    const result = await dispatch(generateRoadmap(payload));

    const roadmapText =
      result?.payload?.suggestedRoadmap || "No roadmap returned.";
    dispatch(setRoadmapContent(roadmapText));
  };

  const handleSave = async () => {
    if (!goal || !timeline) return;

    const payload = {
      goal: goal,
      category: "Other",
      deadline: convertToDeadlineDate(timeline),
    };

    await dispatch(createGoal(payload));
  };

  const handleSaveRoadmap = () => {
    if (!roadmapContent || !goal) return;

    const payload = {
      roadmapName: goal,
      content: roadmapContent,
    };

    dispatch(saveRoadmap(payload));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-700 flex justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-indigo-700 text-center mb-6">🎯 Set Your Goal</h2>

        <div className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">What's your goal?</label>
            <input
              type="text"
              placeholder="e.g., Learn React, Master DSA"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Select Timeline</label>
            <select
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="1_month">1 Month</option>
              <option value="2_month">2 Months</option>
              <option value="3_month">3 Months</option>
              <option value="custom">Custom</option>
            </select>
          </div>

          <div>
            <button
              onClick={handleSave}
              disabled={loading}
              className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              {loading ? "Adding..." : "Add Goal"}
            </button>
          </div>

          <div>
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              {loading ? "Generating..." : "Generate Smart Roadmap"}
            </button>
          </div>

          {roadmapContent && (
            <div className="mt-6 bg-gray-100 p-4 rounded-md">
              <div className="mt-4 whitespace-pre-wrap text-left">
                {roadmapContent}
              </div>

              <div className="mt-4 flex gap-4">
                <button
                  onClick={handleSaveRoadmap}
                  className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                >
                  Save Roadmap
                </button>

                <button
                  onClick={handleGenerate}
                  className="w-full py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
                >
                  Generate More
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
