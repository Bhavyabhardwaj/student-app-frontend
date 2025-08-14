import React, { useEffect, useState } from "react";
import Layout from "../../layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../../redux/slices/profileSlice";
import { fetchGoals, deleteGoal } from "../../redux/slices/roadmapSlice";

export default function Profile() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.profile);
  const goals = useSelector((state) => state.roadmap.goals);

  const [showGoals, setShowGoals] = useState(false);
  const [expandedGoalId, setExpandedGoalId] = useState(null);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  const handleViewGoals = () => {
    dispatch(fetchGoals());
    setShowGoals(true);
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex justify-center items-center text-gray-800 dark:text-white">
          Loading profile...
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="min-h-screen flex justify-center items-center text-red-500">
          Error: {error}
        </div>
      </Layout>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <Layout>
      <div className=" bg-gradient-to-br from-blue-50 to-indigo-700 min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          👤 Your Profile
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="flex items-center gap-6">
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                `${user.firstName || ""} ${user.lastName || ""}`
              )}&background=random`}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-blue-500 shadow"
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {user.firstName || ""} {user.lastName || ""}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                {user.profession || "No profession specified"}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Skills:{" "}
                {Array.isArray(user.skills)
                  ? user.skills.join(", ")
                  : user.skills || "Not specified"}
              </p>
            </div>
          </div>

          {/* Account Info */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Account Info
            </h3>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Email:</strong> {user.email || "N/A"}
              </p>
              <p>
                <strong>Contact:</strong> {user.contactNumber || "N/A"}
              </p>
            </div>
          </div>

          {/* My Goals */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              My Goals
            </h3>
            {!showGoals ? (
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                onClick={handleViewGoals}
              >
                View My Goals
              </button>
            ) : goals.length > 0 ? (
              <ul className="space-y-4 mt-4">
                {goals.map((goalItem) => (
                  <li
                    key={goalItem._id}
                    className="bg-gray-100 p-4 rounded-md shadow"
                  >
                    <div
                      className="cursor-pointer"
                      onClick={() =>
                        setExpandedGoalId(
                          expandedGoalId === goalItem._id
                            ? null
                            : goalItem._id
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
                        {goalItem.deadline
                          ? new Date(goalItem.deadline).toLocaleDateString()
                          : "N/A"}
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

                    {expandedGoalId === goalItem._id && (
                      <div className="mt-4">
                        <p className="text-sm text-gray-600">
                          (use goals tab in navbar for generating roadmap)
                        </p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No goals found.</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
