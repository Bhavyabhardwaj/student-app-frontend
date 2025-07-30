import { Link } from 'react-router-dom';

export default function Dashboard() {
  // Mock Data
  const goals = [
    {
      title: "Learn React",
      progress: 60,
      due: "30 Aug 2025"
    },
    {
      title: "Master DSA",
      progress: 35,
      due: "15 Sep 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-700 p-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">👋 Welcome Back, Ashish</h1>

        {/* Add Goal Button */}
        <div className="flex justify-end mb-4">
          <Link to="goal">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
              + Add New Goal
            </button>
          </Link>
        </div>

        {/* Goal List */}
        <div className="space-y-4">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-5 border-l-4 border-indigo-500"
            >
              <h3 className="text-xl font-semibold text-gray-800">{goal.title}</h3>
              <p className="text-sm text-gray-500 mb-2">Due by: {goal.due}</p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-indigo-600 h-3 rounded-full"
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-right text-indigo-600 mt-1">{goal.progress}% Complete</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
