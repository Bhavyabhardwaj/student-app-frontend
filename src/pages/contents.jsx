import React, { useEffect } from "react";
import Layout from "../layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllContents, deleteContent } from "../redux/slices/contentSlice"; 
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function UserContents() {
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const { contents, loading, error } = useSelector((state) => state.content);
  const user = useSelector((state) => state.auth.userData);

  useEffect(() => {
    dispatch(fetchAllContents());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this content?")) {
      dispatch(deleteContent(id));
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-700 p-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          📂 Your Saved Contents
        </h1>

        {/* User Info */}
        {user && (
          <div className="flex items-center gap-4 mb-6">
            <img
              src={
                user.avatar ||
                `https://ui-avatars.com/api/?name=${user.fullName}&background=random`
              }
              alt="User"
              className="w-16 h-16 rounded-full border-4 border-purple-500 shadow"
            />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {user.fullName}
            </h2>
          </div>
        )}

        {/* Loader / Error */}
        {loading && <p className="text-gray-600 dark:text-gray-300">Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        {/* Saved Contents List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contents?.length > 0 ? (
            contents.map((c) => (
              <div
                key={c._id}
                className="relative bg-white dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition"
              >
                {/* Delete icon */}
                <button
                  className="absolute top-3 right-3 text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(c._id)}
                >
                  <MdDelete size={20} />
                </button>

                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {c.contentName || "Untitled Content"}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                  🎯 Goal: {c.goalName || "No goal specified"}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                  🗓️ Deadline:{" "}
                  {c.deadline ? new Date(c.deadline).toLocaleDateString() : "N/A"}
                </p>

                <div className="text-gray-700 dark:text-gray-300 text-sm whitespace-pre-wrap mb-4">
                  {c.content}
                </div>

                <button
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded transition"
                  onClick={() => navigate(`/contentText/${c._id}`)}
                >
                  View Content
                </button>
              </div>
            ))
          ) : (
            !loading && (
              <p className="text-gray-600 dark:text-gray-300">
                No contents found.
              </p>
            )
          )}
        </div>
      </div>
    </Layout>
  );
}
