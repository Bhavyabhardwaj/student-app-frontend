import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const topics = [
  {
    id: 1,
    title: "HTML Basics",
    content: `### HTML Basics\nLearn the structure of web pages using HTML.`,
    videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE",
    resources: [
      { name: "MDN HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "W3Schools HTML", link: "https://www.w3schools.com/html/" },
    ],
  },
  {
    id: 2,
    title: "CSS Flexbox",
    content: `### CSS Flexbox\nLearn layout techniques using Flexbox.`,
    videoUrl: "https://www.youtube.com/embed/JJSoEo8JSnc",
    resources: [
      { name: "MDN Flexbox", link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout" },
      { name: "CSS Tricks", link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
    ],
  },
  {
    id: 3,
    title: "JavaScript Basics",
    content: `### JavaScript\nLearn variables, loops, functions, and more.`,
    videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk",
    resources: [
      { name: "JavaScript Info", link: "https://javascript.info/" },
      { name: "MDN JS", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    ],
  },
];

const RoadmapPage = () => {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [completedTopics, setCompletedTopics] = useState(new Set());
  const [bookmarks, setBookmarks] = useState(new Set());
  const [darkMode, setDarkMode] = useState(false);
  const [notes, setNotes] = useState({});
  const [search, setSearch] = useState("");

  // Load saved state from localStorage
  useEffect(() => {
    const savedCompleted = JSON.parse(localStorage.getItem("completedTopics"));
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    const savedNotes = JSON.parse(localStorage.getItem("notes"));

    if (savedCompleted) setCompletedTopics(new Set(savedCompleted));
    if (savedBookmarks) setBookmarks(new Set(savedBookmarks));
    if (savedNotes) setNotes(savedNotes);
  }, []);

  // Save state to localStorage
  useEffect(() => {
    localStorage.setItem("completedTopics", JSON.stringify([...completedTopics]));
  }, [completedTopics]);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify([...bookmarks]));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleComplete = (id) => {
    const updated = new Set(completedTopics);
    updated.has(id) ? updated.delete(id) : updated.add(id);
    setCompletedTopics(updated);
  };

  const handleBookmark = (id) => {
    const updated = new Set(bookmarks);
    updated.has(id) ? updated.delete(id) : updated.add(id);
    setBookmarks(updated);
  };

  const handleNotesChange = (e) => {
    setNotes({ ...notes, [selectedTopic.id]: e.target.value });
  };

  const filteredTopics = topics.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  const completionPercent = Math.round((completedTopics.size / topics.length) * 100);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "bg-white text-gray-900 min-h-screen"}>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 p-4 border-r h-screen overflow-y-auto bg-gray-100 dark:bg-gray-800">
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold">📚 Roadmap</h2>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-2 py-1 rounded text-sm bg-blue-500 text-white"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>

          <input
            type="text"
            placeholder="🔍 Search topic..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-2 py-1 mb-4 border rounded dark:text-black"
          />

          <div className="text-sm text-gray-700 dark:text-gray-200 mb-2">
            ✅ Progress: {completionPercent}%
            <div className="w-full h-2 bg-gray-300 rounded mt-1">
              <div
                className="h-2 bg-green-500 rounded"
                style={{ width: `${completionPercent}%` }}
              ></div>
            </div>
          </div>

          {filteredTopics.map((topic) => (
            <div
              key={topic.id}
              className={`mb-2 p-2 rounded cursor-pointer ${
                selectedTopic.id === topic.id ? "bg-blue-200 dark:bg-blue-600" : ""
              }`}
              onClick={() => setSelectedTopic(topic)}
            >
              <div className="flex justify-between items-center">
                <span>
                  {topic.title}{" "}
                  {completedTopics.has(topic.id) && <span className="text-green-500">✔️</span>}
                </span>
                <button onClick={(e) => { e.stopPropagation(); handleBookmark(topic.id); }}>
                  {bookmarks.has(topic.id) ? "🔖" : "📄"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-8 dark:bg-gray-900">
          <h1 className="text-3xl font-bold mb-4">{selectedTopic.title}</h1>

          {/* YouTube Video */}
          <div className="mb-6">
            <iframe
              width="100%"
              height="400"
              src={selectedTopic.videoUrl}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded"
            ></iframe>
          </div>

          {/* Topic Content */}
          <div className="prose dark:prose-invert max-w-none mb-6">
            <ReactMarkdown>{selectedTopic.content}</ReactMarkdown>
          </div>

          {/* Resources */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">📂 Resources</h2>
            <ul className="list-disc ml-6">
              {selectedTopic.resources.map((r, i) => (
                <li key={i}>
                  <a href={r.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400">
                    {r.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Notes */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">📝 Your Notes</h2>
            <textarea
              value={notes[selectedTopic.id] || ""}
              onChange={handleNotesChange}
              className="w-full p-2 border rounded h-32 dark:text-black"
              placeholder="Write your notes here..."
            />
          </div>

          <button
            onClick={() => handleComplete(selectedTopic.id)}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            {completedTopics.has(selectedTopic.id) ? "Mark Incomplete" : "Mark as Complete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
