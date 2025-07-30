import { useState } from 'react';

export default function SetGoal() {
  const [goal, setGoal] = useState('');
  const [timeline, setTimeline] = useState('1_month');
  const [suggestion, setSuggestion] = useState('');

  const handleGenerate = () => {
    if (!goal.trim()) return;
    // ✨ Mock AI Response
    setSuggestion(`To achieve "${goal}", here’s a suggested roadmap:
    
- Week 1: Basics of ${goal}
- Week 2: Intermediate concepts
- Week 3: Real-world projects
- Week 4: Mock tests & revision`);
  };

  const handleSubmit = () => {
    alert('Goal saved (mock)');
    setGoal('');
    setSuggestion('');
    setTimeline('1_month');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-700 flex justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-indigo-700 text-center mb-6">🎯 Set Your Goal</h2>

        <div className="space-y-6">
          {/* 📝 Goal Input */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">What's your goal?</label>
            <input
              type="text"
              placeholder="e.g., Learn React, Master DSA"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
          </div>

          {/* 📅 Timeline Select */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Select Timeline</label>
            <select
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
            >
              <option value="1_month">1 Month</option>
              <option value="2_month">2 Months</option>
              <option value="3_month">3 Months</option>
              <option value="custom">Custom</option>
            </select>
          </div>

          {/* 🔘 Generate Button */}
          <div>
            <button
              onClick={handleGenerate}
              className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              Generate Smart Roadmap
            </button>
          </div>

          {/* 📋 Suggestion Box */}
          {suggestion && (
            <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-md whitespace-pre-line">
              <p className="text-gray-800">{suggestion}</p>
            </div>
          )}

          {/* ✅ Save Goal */}
          {suggestion && (
            <button
              onClick={handleSubmit}
              className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition mt-4"
            >
              Save Goal
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
