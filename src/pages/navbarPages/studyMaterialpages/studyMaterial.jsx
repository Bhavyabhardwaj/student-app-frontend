import React from "react";
import Layout from "../../../layout/layout";
import CuratedContent from "./curatedContent";
import MyLibrary from "./myLibrary";

export default function StudyMaterial() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-700 min-h-screen p-6 bg-gray-100 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">📚 Study Material</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CuratedContent />
          <MyLibrary />
        </div>
      </div>
    </Layout>
  );
}
