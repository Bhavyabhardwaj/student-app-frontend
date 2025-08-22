import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../layout/layout";
import axiosInstance from "../api/axios";
import ReactMarkdown from "react-markdown";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

export default function RoadmapContent() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [roadmap, setRoadmap] = useState(null);
  const [modules, setModules] = useState([]);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState("");
  const [expanded, setExpanded] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false); 

  const toggleExpand = (title) => {
    setExpanded((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  useEffect(() => {
    const fetchRoadmap = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await axiosInstance.get(`/roadmap/see/${encodeURIComponent(id)}`);
        let data = res?.data?.data;

        if (Array.isArray(data)) {
          data = data.find((r) => r._id === id) || data[0];
        }

        setRoadmap(data);
        const parsed = parseModulesFromContent(data?.content || "");
        setModules(parsed);
        setSelected(parsed[0] || null);
      } catch (e) {
        console.error("Error fetching roadmap:", e);
        setError("Unable to load roadmap. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (!id) {
      setError("Invalid roadmap id.");
      setLoading(false);
      return;
    }

    fetchRoadmap();
  }, [id]);

  function parseModulesFromContent(content) {
    if (!content?.trim()) return [];
    const parts = content.split(/\*\*(Module\s*\d+:[^*]+)\*\*/);
    const modulesList = [];

    const intro = parts[0]?.trim();
    if (intro) modulesList.push({ title: "Overview", content: intro });

    for (let i = 1; i < parts.length; i += 2) {
      const title = parts[i]?.trim();
      const body = (parts[i + 1] || "").trim();
      if (title) modulesList.push({ title, content: body });
    }

    const last = modulesList[modulesList.length - 1];
    if (last) {
      const split = last.content.split(/\n\*\*Additional Tips\*\*\n/);
      if (split.length > 1) {
        last.content = split[0].trim();
        modulesList.push({ title: "Additional Tips", content: split[1].trim() });
      }
    }
    return modulesList;
  }

  if (loading) {
    return (
      <Layout>
        <p className="text-center mt-8">Loading roadmap...</p>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <p className="text-center mt-8 text-red-600">{error}</p>
      </Layout>
    );
  }

  if (!roadmap) {
    return (
      <Layout>
        <p className="text-center mt-8">Roadmap not found.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-[70vh]">
        {/* Mobile Topbar */}
        <div className="md:hidden flex items-center justify-between bg-gray-100 dark:bg-gray-900 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {roadmap.roadmapName || "Modules"}
          </h2>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "block" : "hidden"
          } md:block w-full md:w-72 bg-gray-100 dark:bg-gray-900 p-4 md:p-5 border-r border-gray-200 dark:border-gray-700 overflow-y-auto`}
        >
          <h2 className="hidden md:block text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
            {roadmap.roadmapName || "Modules"}
          </h2>
          <ul className="space-y-3">
            {modules.map((m, idx) => {
              const days = m.content
                ?.split("\n")
                .filter((line) => line.trim().toLowerCase().startsWith("day"))
                .map((line) => line.trim());

              return (
                <li
                  key={idx}
                  className="bg-gray-200 dark:bg-gray-700 rounded-lg p-2"
                >
                  <button
                    onClick={() => {
                      setSelected(m);
                      setSidebarOpen(false); // mobile me sidebar band ho jaye
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg flex justify-between items-center ${
                      selected?.title === m.title
                        ? "bg-blue-600 text-white"
                        : "text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                    }`}
                  >
                    <span className="truncate">{m.title}</span>
                  </button>

                  {/* Progress bar */}
                  <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2 mt-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "30%" }}
                    ></div>
                  </div>

                  {/* Expand/Collapse Toggle */}
                  {days && days.length > 0 && (
                    <div className="mt-2">
                      <button
                        onClick={() => toggleExpand(m.title)}
                        className="text-xs text-blue-600 flex items-center space-x-1"
                      >
                        {expanded[m.title] ? (
                          <>
                            <ChevronDown size={14} /> <span>Hide Days</span>
                          </>
                        ) : (
                          <>
                            <ChevronRight size={14} /> <span>Show Days</span>
                          </>
                        )}
                      </button>

                      {/* Day-wise list */}
                      {expanded[m.title] && (
                        <ul className="mt-2 pl-4 space-y-1 text-xs text-gray-700 dark:text-gray-300">
                          {days.map((d, i) => (
                            <li
                              key={i}
                              className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
                            >
                              {d}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Content */}
        <main className="flex-1 p-4 md:p-5 overflow-y-auto bg-white dark:bg-gray-800">
          {selected ? (
            <>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {selected.title}
              </h1>
              <div className="prose max-w-none dark:prose-invert text-sm md:text-base">
                <ReactMarkdown>{selected.content}</ReactMarkdown>
              </div>
            </>
          ) : (
            <p className="text-gray-600 dark:text-gray-300">Select a module.</p>
          )}
        </main>
      </div>
    </Layout>
  );
}
