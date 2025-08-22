
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../layout/layout";
import axiosInstance from "../api/axios";

export default function RoadmapDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoadmap = async () => {
      try {

        const res = await axiosInstance.get(`/roadmap/see/${id}`);
        setRoadmap(res.data.data); // response me 'data' ke andar roadmap ka object h
      } catch (err) {
        console.error("Error fetching roadmap:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRoadmap();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <p className="text-center mt-8">Loading roadmap...</p>
      </Layout>
    );
  }

  if (!roadmap) {
    return (
      <Layout>
        <p className="text-center mt-8">Roadmap not found</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-700 max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Roadmap Details
        </h1>

        {/* Deadline agar backend se aaye toh */}
        {roadmap.deadline && (
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            🗓 Deadline: {roadmap.deadline}
          </p>
        )}

        {/* Roadmap Content */}
        <div className="space-y-6">
          {roadmap.content &&
            roadmap.content.split("\n").map((section, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
              >
                <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line">
                  {section}
                </p>
              </div>
            ))}
        </div>

        {/* Start Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => navigate(`/start/${id}`)}   
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Start
          </button>
        </div>
      </div>
    </Layout>
  );
}
