import React, { useEffect } from "react";
import Layout from "../layout/layout";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllRoadmaps } from "../redux/slices/myRoadmapSlice"; // apna slice import

export default function UserRoadmaps() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { roadmaps, loading, error } = useSelector(
    (state) => state.showAllRoadmaps
  );
  const user = useSelector((state) => state.auth.userData); // auth slice se user data

  useEffect(() => {
    dispatch(fetchAllRoadmaps());
  }, [dispatch]);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          📚 Your Roadmaps
        </h1>

        {user && (
          <div className="flex items-center gap-4 mb-6">
            <img
              src={
                user.avatar ||
                `https://ui-avatars.com/api/?name=${user.fullName}&background=random`
              }
              alt="User"
              className="w-16 h-16 rounded-full border-4 border-blue-500 shadow"
            />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {user.fullName}
            </h2>
          </div>
        )}

        {loading && <p className="text-gray-600 dark:text-gray-300">Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmaps?.length > 0 ? (
            roadmaps.map((roadmap) => (
              <div
                key={roadmap._id}
                className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {roadmap.roadmapName || "Untitled Roadmap"}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                  🎯 Goal: {roadmap.goalName || "No goal specified"}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                  🗓️ deadline:{roadmap.deadline}
             
                </p>
              

                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{
                      width: `${
                        roadmap.modules
                          ? ((roadmap.completedModules || 0) / roadmap.modules) *
                            100
                          : 0
                      }%`,
                    }}
                  ></div>
                </div>

                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
                  onClick={() => navigate(`/roadmap/${roadmap._id}`)}
                >
                  View Roadmap
                </button>
              </div>
            ))
          ) : (
            !loading && (
              <p className="text-gray-600 dark:text-gray-300">
                No roadmaps found.
              </p>
            )
          )}
        </div>
      </div>
    </Layout>
  );
}
