import { Outlet, NavLink, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function RoadmapLayout() {
  const location = useLocation();
  const { id } = useParams();
  const [topics, setTopics] = useState([]);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    if (location.state?.roadmap) {
      setTopics(location.state.roadmap.topics);
    } else {
      // TODO: Backend se fetch karo agar direct URL open ho
      console.log("No state found — fetch from API");
    }
  }, [location.state]);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4 border-r">
        <h2 className="font-bold mb-4">📍 Roadmap Topics</h2>
        <div className="mb-4">
          <p>Progress: {progress}%</p>
          <div className="w-full bg-gray-300 h-2 rounded">
            <div
              className="bg-green-500 h-2 rounded"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <nav className="space-y-2">
          {topics.length > 0 ? (
            topics.map((topic) => (
              <NavLink
                key={topic.id}
                to={`/roadmap/${id}/${topic.id}`}
                className="block p-2 rounded hover:bg-gray-200"
              >
                {topic.name} {completed.includes(topic.id) && "✔"}
              </NavLink>
            ))
          ) : (
            <p className="text-gray-500">Loading topics...</p>
          )}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <Outlet context={{ completed, setCompleted, setProgress }} />
      </main>
    </div>
  );
}
