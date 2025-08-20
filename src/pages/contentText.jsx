import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../layout/layout";
import axiosInstance from "../api/axios";
import ReactMarkdown from "react-markdown";
export default function ContentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await axiosInstance.get(`/content/see/${id}`); 
        setContent(res.data.data);
      } catch (err) {
        console.error("Error fetching content:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <p className="text-center mt-8">Loading content...</p>
      </Layout>
    );
  }

  if (!content) {
    return (
      <Layout>
        <p className="text-center mt-8">Content not found</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-700 max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {content.contentName || "Saved Content"}
        </h1>

        {/* Deadline */}
        {content.deadline && (
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            🗓 Deadline: {new Date(content.deadline).toLocaleDateString()}
          </p>
        )}

        {/* Goal Name */}
        {content.goalName && (
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            🎯 Goal: {content.goalName}
          </p>
        )}

        {/* Content Text */}
        <div className="space-y-6">
          {content.suggestionText &&
            content.suggestionText.split("\n").map((section, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
              >
                <ReactMarkdown
                  components={{
                    p: ({ node, ...props }) => (
                      <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line" {...props} />
                    ),
                    a: ({ node, ...props }) => (
                      <a className="text-blue-500 underline" target="_blank" rel="noopener noreferrer" {...props} />
                    )
                  }}
                >
                  {section}
                </ReactMarkdown>
              </div>
            ))}
        </div>
        {/* Back Button */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => navigate("/myContents")}
            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition"
          >
            ⬅ Back
          </button>
          <button
            onClick={() => navigate("/start")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Start
          </button>
        </div>
      </div>
    </Layout>
  );
}
