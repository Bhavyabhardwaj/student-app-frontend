import React from "react";

const resources = [
  {
    title: "MDN Web Docs - JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "Article"
  },
  {
    title: "FreeCodeCamp - Full Stack Course",
    url: "https://www.youtube.com/watch?v=SzAuB2FG79A",
    type: "Video"
  },
  {
    title: "Eloquent JavaScript (Book)",
    url: "https://eloquentjavascript.net/",
    type: "Ebook"
  }
];

export default function CuratedContent() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">🌐 Curated Resources</h2>
      <ul className="space-y-3">
        {resources.map((res, i) => (
          <li key={i}>
            <a href={res.url} target="_blank" rel="noreferrer" className="text-indigo-600 underline">
              {res.title} <span className="text-sm text-gray-500 ml-2">({res.type})</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
