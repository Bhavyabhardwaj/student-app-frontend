import React from "react";
import Layout from "../../layout/layout";

export default function Profile() {
  const user = {
    name: "Ashish Kaushik",
    email: "ashish@example.com",
    username: "ashish.codes",
    bio: "CSE(AIML) Student | MERN Developer | Lifelong Learner",
    avatar: "https://ui-avatars.com/api/?name=Ashish+Kaushik&background=random",
    goalsCompleted: 6,
    modulesCompleted: 42,
    joined: "July 2024",
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">👤 Your Profile</h1>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-6">
            <img
              src={user.avatar}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-blue-500 shadow"
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{user.name}</h2>
              <p className="text-gray-500 dark:text-gray-400">@{user.username}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{user.bio}</p>
              <p className="text-xs text-gray-400 mt-1">Joined {user.joined}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-blue-700 dark:text-blue-300">{user.goalsCompleted}</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Goals Completed</p>
            </div>
            <div className="bg-green-100 dark:bg-green-900 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-green-700 dark:text-green-300">{user.modulesCompleted}</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Modules Done</p>
            </div>
            <div className="bg-purple-100 dark:bg-purple-900 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-purple-700 dark:text-purple-300">⚡</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Streak Active</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Account Info</h3>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Username:</strong> {user.username}</p>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
