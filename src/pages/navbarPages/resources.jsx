import React from "react";
import Layout from "../../layout/layout";
import { BookOpen, Video, ExternalLink } from "lucide-react";

const resources = [
  {
    id: 1,
    title: "JavaScript Roadmap",
    type: "Roadmap",
    link: "https://roadmap.sh/javascript",
    icon: <BookOpen />,
  },
  {
    id: 2,
    title: "React Basics – YouTube Playlist",
    type: "Video",
    link: "https://youtube.com/playlist?list=xyz",
    icon: <Video />,
  },
  {
    id: 3,
    title: "FreeCodeCamp API Course",
    type: "Course",
    link: "https://www.freecodecamp.org/learn",
    icon: <BookOpen />,
  },
  {
    id: 4,
    title: "MDN Docs for JavaScript",
    type: "Docs",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: <BookOpen />,
  },
];

export default function Resources() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-700  px-6 py-8">
        <h1 className="text-3xl font-semibold mb-6">📚 Recommended Resources</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((res) => (
            <div
              key={res.id}
              className="bg-white shadow-md p-5 rounded-xl hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center mb-3 space-x-3 text-indigo-600">
                {res.icon}
                <span className="text-sm font-medium">{res.type}</span>
              </div>
              <h2 className="text-lg font-semibold">{res.title}</h2>
              <a
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 inline-flex items-center mt-3 hover:underline"
              >
                Visit <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
