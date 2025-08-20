import React, { useEffect, useState } from "react";
import Layout from "../layout/layout";
import { Moon, Sun, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
      const navigate = useNavigate();

  useEffect(() => {
    async function fetchQuote() {
      try {
        const res = await fetch("https://zenquotes.io/api/today");
        const data = await res.json();
        if (data && data[0]) {
          setQuote(data[0].q);
          setAuthor(data[0].a);
        }
      } catch (err) {
        console.error("Failed to fetch quote:", err);
        setQuote("Push through the pain. Greatness is on the other side.");
        setAuthor("Unknown");
      }
    }

    fetchQuote();
  }, []);

  return (
    <Layout>
      <div
        className={`${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
        } min-h-screen p-6 transition-all duration-500`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Welcome to PathVibe Dashboard</h1>

          <div className="flex items-center space-x-4">
            {/* Notification Bell */}
            <button className="relative">
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full px-1">3</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <Link></Link>
            <h2 className="hover:text-indigo-600 cursor-pointer text-2xl" onClick={() => navigate('/allroadmaps')}>Your Roadmap</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Continue or explore new roadmaps.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2 hover:text-indigo-500 cursor-pointer " onClick={() => navigate('/contentSuggest')}>✨ Suggest Content</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Based on your interests & goals.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="hover:text-indigo-600 cursor-pointer text-2xl" onClick={() => navigate('/profile')}>👤 Profile</h2>
            <p className="text-gray-600 dark:text-gray-300">
              View and update your information.
            </p>
          </div>
        </div>

        {/* Recent Activity + Calendar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Recent Activities */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">🕓 Recent Activities</h2>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Completed "React Roadmap" module</li>
              <li>Watched "Intro to APIs"</li>
              <li>Set new goal: "Learn MongoDB"</li>
            </ul>
          </div>

          {/* Upcoming Goals/Calendar */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">📅 Upcoming Goals</h2>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Finish "Node.js Basics" by Aug 10</li>
              <li>Submit Hackathon idea</li>
              <li>Start new coding challenge</li>
            </ul>
          </div>
        </div>

        {/* Quick Links + Quote */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Quick Links */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">⚡ Quick Links</h2>
            <div className="flex flex-wrap gap-3">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700" onClick={()=>navigate('/goal')}>
                Add New Goal
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700" onClick={()=>navigate('/calendar')}>
                View Calendar
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-xl hover:bg-yellow-600" onClick={()=>navigate('/premium')}>
                Upgrade to Premium
              </button>
            </div>
          </div>

          {/* Quote of the Day */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">💡 Quote of the Day</h2>
            <p className="italic text-gray-700 dark:text-gray-300">
              "{quote}"
            </p>
            <p className="text-right mt-2 text-sm text-gray-600 dark:text-gray-400">
              — {author || "Unknown"}
            </p>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              Source: <a href="https://zenquotes.io/" className="underline" target="_blank" rel="noopener noreferrer">zenquotes.io</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
