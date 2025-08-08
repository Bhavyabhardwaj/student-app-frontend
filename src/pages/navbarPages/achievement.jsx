import React from "react";
import Layout from "../../layout/layout";

export default function Achievements() {
  const achievements = [
    {
      title: "Completed MERN Roadmap",
      date: "August 2025",
      description: "Successfully completed the MERN full-stack development roadmap with all modules.",
      badge: "🏆"
    },
    {
      title: "First Project Deployed",
      date: "July 2025",
      description: "Deployed your first full-stack project using MongoDB, Express, React, and Node.js.",
      badge: "🚀"
    },
    {
      title: "30 Days Streak",
      date: "June 2025",
      description: "You maintained a 30-day continuous learning streak!",
      badge: "🔥"
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-700 min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">🎖️ Achievements</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-2">{item.badge}</div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">{item.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.date}</p>
              <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
