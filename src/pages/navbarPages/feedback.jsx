import React, { useState } from "react";
import Layout from "../../layout/layout";

export default function Feedback() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (feedback.trim() === "") return;

    // In real app, send to backend here
    console.log("Submitted Feedback:", feedback);

    setSubmitted(true);
    setFeedback("");

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Layout>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-700 min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          💬 Feedback
        </h1>

        <div className="bg-white  dark:bg-gray-800 p-6 rounded-xl shadow-lg max-w-2xl mx-auto border border-gray-200 dark:border-gray-700">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We’d love to hear your thoughts! Share your experience or suggestions to improve PathVibe.
          </p>

          <form onSubmit={handleSubmit}>
            <textarea
              className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-40"
              placeholder="Write your feedback here..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />

            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Feedback
            </button>
          </form>

          {submitted && (
            <div className="mt-4 text-green-600 dark:text-green-400 font-semibold">
              ✅ Thank you for your feedback!
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
