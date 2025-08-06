import React from "react";

export default function GetPremium() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-700 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-6">Unlock Premium Features</h1>
        <p className="text-gray-600 text-lg mb-8">
          Supercharge your learning with advanced tools, personalized roadmaps, and early access to new features!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-indigo-50 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">🔓 Full Roadmap Access</h2>
            <p className="text-gray-700">Explore in-depth learning paths tailored to your goals.</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">🚀 Faster Suggestion Engine</h2>
            <p className="text-gray-700">Generate smarter content suggestions in real-time.</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">🎯 Goal Tracking Tools</h2>
            <p className="text-gray-700">Stay motivated with weekly reports and progress tracking.</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">🎁 Early Feature Access</h2>
            <p className="text-gray-700">Be the first to try new updates and improvements.</p>
          </div>
        </div>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
          Upgrade to Premium - ₹199/month
        </button>

        <p className="text-sm text-gray-500 mt-4">Cancel anytime. 7-day money-back guarantee.</p>
      </div>
    </div>
  );
}
