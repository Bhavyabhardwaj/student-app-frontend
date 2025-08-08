import React from "react";
import Layout from "../../layout/layout";

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      message: "🎯 Your new roadmap 'Web Development' is ready!",
      time: "2 hours ago",
    },
    {
      id: 2,
      message: "📌 You completed Module 3: HTML Forms.",
      time: "1 day ago",
    },
    {
      id: 3,
      message: "🔥 Keep it up! You’ve studied 3 days in a row!",
      time: "2 days ago",
    },
    {
      id: 4,
      message: "📅 Your goal 'Complete CSS by Sunday' is due soon.",
      time: "3 days ago",
    },
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-700 min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          🔔 Notifications
        </h1>

        <div className="space-y-4">
          {notifications.length > 0 ? (
            notifications.map((notif) => (
              <div
                key={notif.id}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition"
              >
                <p className="text-gray-700 dark:text-gray-100">{notif.message}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{notif.time}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-300">No new notifications.</p>
          )}
        </div>
      </div>
    </Layout>
  );
}
