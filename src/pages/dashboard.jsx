import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to PathVibe Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">📚 Your Roadmaps</h2>
          <p className="text-gray-600">Continue or explore new roadmaps.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">✨ Suggested Content</h2>
          <p className="text-gray-600">Based on your interests & goals.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">👤 Profile</h2>
          <p className="text-gray-600">View and update your information.</p>
        </div>
      </div>
    </div>
  );
}
