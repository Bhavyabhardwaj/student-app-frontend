import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoals } from "../redux/slices/roadmapSlice"; 
import { useNavigate } from "react-router-dom";
import {
  generateContent,
  saveContent,
  fetchAllContents,
  deleteContent,
} from "../redux/slices/contentSlice"; 
import Layout from "../layout/layout";

export default function ContentSuggestion() {
  const dispatch = useDispatch();
   const navigate = useNavigate();
  const goals = useSelector((state) => state.roadmap.goals);
  const contentLoading = useSelector((state) => state.content.loading);
  const contents = useSelector((state) => state.content.contents);

  const [selectedGoal, setSelectedGoal] = useState(null);
  const [suggestion, setSuggestion] = useState("");
  const [contentName, setContentName] = useState("");
  const [deadline, setDeadline] = useState("");


  useEffect(() => {
    dispatch(fetchGoals());
    dispatch(fetchAllContents()); 
  }, [dispatch]);

  const handleGenerateContent = async (goalItem) => {
    setSelectedGoal(goalItem);
    const payload = { goal: goalItem.goal, contentName };
    const result = await dispatch(generateContent(payload));
    setSuggestion(result?.payload?.suggestionText || "No suggestion found.");
  };

  const handleSaveContent = async () => {
    if (!suggestion) return;

    const payload = {
      suggestionText: suggestion,
      goalName: selectedGoal.goal,
      contentName,
      deadline,
    };
    await dispatch(saveContent(payload));
    setSuggestion("");
    setContentName("");
    setDeadline("");
    dispatch(fetchAllContents()); 
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-700 flex justify-center px-4 py-10">
        <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-indigo-600 text-center mb-6">
            📚 Content Suggestions
          </h2>

          {/* Show My Goals */}
          <div>
            <button
              onClick={() => dispatch(fetchGoals())}
              className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              My Goals
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
                        <span className="font-semibold">Deadline:</span>{" "}
                        {new Date(goalItem.deadline).toLocaleDateString()}
                      </p>
                    </div>

                    {selectedGoal?._id === goalItem._id && (
                      <div className="mt-4 space-y-3">
                        <input
                          type="text"
                          placeholder="Content Name"
                          value={contentName}
                          onChange={(e) => setContentName(e.target.value)}
                          className="w-full px-4 py-2 border rounded-md"
                        />
                        <input
                          type="date"
                          value={deadline}
                          onChange={(e) => setDeadline(e.target.value)}
                          className="w-full px-4 py-2 border rounded-md"
                        />

                        <button
                          onClick={() => handleGenerateContent(goalItem)}
                          disabled={contentLoading}
                          className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
                        >
                          {contentLoading
                            ? "Generating..."
                            : "Suggest Content"}
                        </button>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Display Suggested Content */}
          {suggestion && (
            <div className="mt-6 bg-gray-100 p-4 rounded-md">
              <div className="whitespace-pre-wrap text-left">{suggestion}</div>
              <div className="mt-4 flex gap-4">
                <button
                  onClick={handleSaveContent}
                  className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                >
                  Save Content
                </button>
              </div>
            </div>
          )}

        
          <div className="mt-8">
            <button
              onClick={() => navigate("/myContents")}
              className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              📂 My Saved Content
            </button>
          </div>

          
        </div>
      </div>
    </Layout>
  );
}
