import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGoal, generateRoadmap, saveRoadmap } from "../redux/slices/roadmapSlice";
import Layout from "../layout/layout";

export default function SetGoal() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.roadmap.loading);

  const [goal, setGoal] = useState("");
  const [deadline, setDeadline] = useState("");
  const [roadmap, setRoadmap] = useState("");
  const [roadmapLoading, setRoadmapLoading] = useState(false);

  // Save goal to backend
  const handleSave = async () => {
    if (!goal || !deadline) return;

    const payload = {
      goal: goal,
      category: "Other",
      deadline: deadline,
    };

    await dispatch(addGoal(payload));
    setGoal("");
    setDeadline("");
  };

  // Generate roadmap
  const handleGenerateRoadmap = async () => {
    if (!goal) return;
    setRoadmapLoading(true);
    const payload = {
      topic: goal,
      deadline: deadline,
    };
    const result = await dispatch(generateRoadmap(payload));
    setRoadmap(result?.payload?.roadmap || "No roadmap returned.");
    console.log("Roadmap response:", result);

 
    setRoadmapLoading(false);
  };

  // Save roadmap to backend
  const handleSaveRoadmap = async () => {
    if (!roadmap || !goal) return;
    const payload = {
      roadmapName: goal,
      content: roadmap,
    };
    await dispatch(saveRoadmap(payload));
  };

  return (
    <Layout>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-700 flex justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-indigo-700 text-center mb-6">🎯 Set Your Goal</h2>

        <div className="space-y-6">
          {/* Goal input */}
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

          {/* Deadline input */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Deadline</label>
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Add Goal Button */}
          <div>
            <button
              onClick={handleSave}
              disabled={loading}
              className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              {loading ? "Adding..." : "Add Goal"}
            </button>
          </div>

          {/* Generate Roadmap Button */}
          <div>
            <button
              onClick={handleGenerateRoadmap}
              disabled={roadmapLoading || !goal}
              className="w-full py-2 mt-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition"
            >
              {roadmapLoading ? "Generating..." : "Generate Smart Roadmap"}
            </button>
          </div>

          {/* Display roadmap */}
          {roadmap && (
            <div className="mt-6 bg-gray-100 p-4 rounded-md">
              <div className="whitespace-pre-wrap text-left">{roadmap}</div>
              <div className="mt-4 flex gap-4">
                <button
                  onClick={handleSaveRoadmap}
                  className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                >
                  Save Roadmap
                </button>
                <button
                  onClick={handleGenerateRoadmap}
                  className="w-full py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
                >
                  Generate Again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </Layout>
  );
}
