import React from "react";
import Layout from "../../layout/layout";

export default function Progress() {
  const progressData = [
    {
      title: "MERN Stack Roadmap",
      percent: 78,
      modulesCompleted: 14,
      totalModules: 18,
    },
    {
      title: "Frontend Development",
      percent: 90,
      modulesCompleted: 9,
      totalModules: 10,
    },
    {
      title: "DSA in C++",
      percent: 45,
      modulesCompleted: 5,
      totalModules: 11,
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-700 min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">📈 Your Progress</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {progressData.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {item.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                {item.modulesCompleted}/{item.totalModules} Modules Completed
              </p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden mb-2">
                <div
                  className="bg-blue-500 h-4 rounded-full"
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                {item.percent}% Complete
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
