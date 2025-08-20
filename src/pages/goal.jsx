import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addGoal,
  generateRoadmap,
  saveRoadmap,
  fetchGoals,
  deleteGoal,
} from "../redux/slices/roadmapSlice";
import Layout from "../layout/layout";

export default function SetGoal() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.roadmap.loading);
  const goals = useSelector((state) => state.roadmap.goals);

  const [goal, setGoal] = useState("");
  const [deadline, setDeadline] = useState("");
  const [roadmap, setRoadmap] = useState("");
  const [roadmapLoading, setRoadmapLoading] = useState(false);

  const [selectedGoal, setSelectedGoal] = useState(null);
  const [topic, setTopic] = useState("");
  const [roadmapName, setRoadmapName] = useState("");

  const handleSave = async () => {
    if (!goal || !deadline) return;
    const payload = {
      goal,
      category: "Other",
      deadline,
    };
    await dispatch(addGoal(payload));
    setGoal("");
    setDeadline("");
  };

  const handleGenerateRoadmap = async () => {
    if (!selectedGoal) return;
    setRoadmapLoading(true);
    const payload = {
      topic: topic || selectedGoal.goal,
      deadline: deadline || selectedGoal.deadline,
    };
    const result = await dispatch(generateRoadmap(payload));
    setRoadmap(result?.payload?.roadmap || "No roadmap returned.");
    setRoadmapLoading(false);
  };

  const handleSaveRoadmap = async () => {
  if (!roadmap) return;

  const payload = {
    roadmapName: roadmapName || selectedGoal.goal, 
    goalName: selectedGoal.goal,                   
    deadline: deadline || selectedGoal.deadline,   
    content: roadmap,                              
  };

  await dispatch(saveRoadmap(payload));
};


  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-700 flex justify-center px-4 py-10">
        <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-indigo-700 text-center mb-6">
            🎯 Set Your Goal
          </h2>

          <div className="space-y-6">
            {/* Goal input */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                What's your goal?
              </label>
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
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Deadline
              </label>
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

            {/* Show Goals */}
            <div>
              <button
                onClick={() => dispatch(fetchGoals())}
                className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
              >
                Show My Goals
              </button>
            </div>

            {goals.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  🎯 My Goals:
                </h3>
                <ul className="space-y-4">
                  {goals.map((goalItem) => (
                    <li
                      key={goalItem._id}
                      className="bg-gray-100 hover:bg-gray-300 p-4 rounded-md shadow"
                    >
                      <div
                        className="cursor-pointer"
                        onClick={() =>
                          setSelectedGoal(
                            selectedGoal?._id === goalItem._id ? null : goalItem
                          )
                        }
                      >
                        <p>
                          <span className="font-semibold">Goal:</span>{" "}
                          {goalItem.goal}
                        </p>
                        <p>
                          <span className="font-semibold">Category:</span>{" "}
                          {goalItem.category}
                        </p>
                        <p>
                          <span className="font-semibold">Deadline:</span>{" "}
                          {new Date(goalItem.deadline).toLocaleDateString()}
                        </p>
                        <p>
                          <span className="font-semibold">Status:</span>{" "}
                          {goalItem.status}
                        </p>
                        <p>
                          <span className="font-semibold">Progress:</span>{" "}
                          {goalItem.progress}%
                        </p>
                      </div>

                      <div className="mt-2 flex justify-between">
                        <button
                          onClick={() => dispatch(deleteGoal(goalItem._id))}
                          className="text-red-600 hover:text-red-800 font-semibold"
                        >
                          ❌ Delete
                        </button>
                      </div>

                      {selectedGoal?._id === goalItem._id && (
                        <div className="mt-4 space-y-3">
                          <button
                            onClick={() => {}}
                            className="w-full py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition"
                          >
                            Generate Roadmap
                          </button>

                          {/* Input fields */}
                          <input
                            type="text"
                            placeholder="Enter Topic"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md"
                          />
                          <input
                            type="date"
                            value={deadline}
                            onChange={(e) => setDeadline(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md"
                          />
                          <input
                            type="text"
                            placeholder="Roadmap Name"
                            value={roadmapName}
                            onChange={(e) => setRoadmapName(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md"
                          />
                          <input
                            type="text"
                            placeholder="Goal Name"
                            value={selectedGoal.goal}
                            readOnly
                            className="w-full px-4 py-2 border rounded-md bg-gray-200"
                          />

                          <button
                            onClick={handleGenerateRoadmap}
                            disabled={roadmapLoading}
                            className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                          >
                            {roadmapLoading
                              ? "Generating..."
                              : "Generate Smart Roadmap"}
                          </button>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

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
