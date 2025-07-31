import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r px-6 py-8">
        <h2 className="text-xl font-bold text-indigo-700 mb-10">PathVibe</h2>
        <nav className="space-y-4 text-gray-700 font-medium">
          <a href="#" className="block hover:text-indigo-600">Overview</a>
          <a href="#" className="block hover:text-indigo-600">My Courses</a>
          <a href="#" className="block hover:text-indigo-600">Support</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4 items-center">
            <button className="bg-white px-3 py-1 rounded border text-sm">Category</button>
            <div className="flex items-center gap-2 text-sm text-orange-500">
              🔥 <span>4 Days Streak</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-red-500">
              ❗<span>Please complete profile (80%)</span>
            </div>
          </div>
          <div className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center font-semibold">AK</div>
        </div>

        {/* Current Learning */}
        <div className="bg-white p-4 rounded-xl shadow-md mb-6 flex justify-between items-center">
          <div>
            <p className="text-gray-600 text-sm">Decode Full Stack Web Dev 1.0</p>
            <p className="font-semibold">Lecture: react-redux</p>
            <p className="text-sm text-gray-500 mt-1">19/39 Modules Completed</p>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md">Continue Learning →</button>
        </div>

        {/* Progress Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Today's Progress */}
          <div className="bg-white p-4 rounded-xl shadow-md text-center">
            <p className="text-gray-700 font-semibold mb-4">Today's Progress</p>
            <div className="flex justify-center gap-10">
              <div>
                <div className="w-24 h-24 rounded-full border-8 border-blue-200 flex items-center justify-center text-lg font-bold">0</div>
                <p className="text-sm mt-2 text-gray-500">Mins Watched</p>
              </div>
              <div>
                <div className="w-24 h-24 rounded-full border-8 border-green-200 flex items-center justify-center text-lg font-bold">0</div>
                <p className="text-sm mt-2 text-gray-500">Questions</p>
              </div>
            </div>
          </div>

          {/* Monthly Progress */}
          <div className="bg-white p-4 rounded-xl shadow-md">
            <p className="text-gray-700 font-semibold mb-4">Monthly Progress</p>
            <p className="text-sm text-gray-500 mb-2">July 2025</p>
            {/* You can replace this grid with a real calendar */}
            <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-600">
              {Array.from({ length: 31 }, (_, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-full ${
                    [21, 24, 28].includes(i + 1) ? 'bg-green-200 text-green-800 font-bold' : 'bg-gray-100'
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
