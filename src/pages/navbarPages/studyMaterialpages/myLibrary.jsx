import React, { useState } from "react";

export default function MyLibrary() {
  const [pdfs, setPdfs] = useState([]);
  const [links, setLinks] = useState([]);
  const [screenshots, setScreenshots] = useState([]);

  const handleFileUpload = (e, type) => {
    const files = Array.from(e.target.files);
    if (type === "pdf") setPdfs([...pdfs, ...files]);
    if (type === "screenshot") setScreenshots([...screenshots, ...files]);
  };

  const addLink = () => {
    const link = prompt("Enter the link:");
    if (link) setLinks([...links, link]);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">📁 My Library</h2>

      {/* Uploads */}
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Upload PDFs</label>
          <input type="file" accept=".pdf" onChange={(e) => handleFileUpload(e, "pdf")} multiple />
        </div>

        <div>
          <label className="block mb-1 font-medium">Upload Screenshots</label>
          <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, "screenshot")} multiple />
        </div>

        <div>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={addLink}
          >
            ➕ Add Link
          </button>
        </div>
      </div>

      {/* Display */}
      <div className="mt-6 space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Links</h3>
          <ul className="list-disc list-inside text-blue-600">
            {links.map((l, i) => (
              <li key={i}>
                <a href={l} target="_blank" rel="noreferrer" className="underline">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Uploaded PDFs</h3>
          <ul className="list-disc list-inside">
            {pdfs.map((pdf, i) => (
              <li key={i}>{pdf.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Uploaded Screenshots</h3>
          <div className="grid grid-cols-2 gap-3">
            {screenshots.map((img, i) => (
              <img key={i} src={URL.createObjectURL(img)} alt="screenshot" className="w-full h-32 object-cover rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
