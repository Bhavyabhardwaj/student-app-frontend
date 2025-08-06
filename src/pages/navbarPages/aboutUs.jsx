import React from "react";
import ashish from '../../assets/ashish.jpeg'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-700 text-gray-900 px-6 py-12">
      <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-6 text-center">
          About PathVibe
        </h1>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
          PathVibe is your personalized learning and career companion. Whether you’re a student, fresher, or a career switcher, PathVibe helps you find and follow the right roadmap tailored to your goals. 
        </p>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
          🚀 With features like smart goal setting, AI-generated learning paths, curated content recommendations, and progress tracking — PathVibe ensures you're never lost on your journey.
        </p>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
          👥 Built by students for students, PathVibe understands the real challenges of self-learning and offers tools to stay motivated, organized, and ahead of the curve.
        </p>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
          Join us in shaping a smarter way to learn and grow. Together, let’s vibe on the path to success.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="max-w-5xl mx-auto mt-16 bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-4 text-center">
          Our Mission
        </h2>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed text-center">
          At PathVibe, our mission is simple yet powerful — to make self-learning structured, focused, and impactful. We believe every learner deserves a clear path, guidance from the best resources, and motivation to stay consistent.
        </p>
      </div>

      {/* Creators Section */}
      <section className="max-w-5xl mx-auto mt-16 bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-10">
  <h2 className="text-3xl font-bold text-center text-indigo-900 mb-8">Meet the Creators</h2>

  <div className="flex flex-wrap justify-center gap-12">
    {/* Creator 1 */}
    <div className="flex flex-col items-center text-center">
      <img
        src={ashish} // 
        alt="Ashish Kaushik"
        className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover mb-4"
      />
      <h3 className="text-xl font-semibold text-indigo-900">Ashish Kaushik</h3>
      <p className="text-gray-800">Full Stack Developer | MERN | AIML Enthusiast</p>
    </div>

    {/* Creator 2 */}
    <div className="flex flex-col items-center text-center">
      <img
        src=""
        
        className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover mb-4"
      />
      <h3 className="text-xl font-semibold text-indigo-900">Ankit Kaushik</h3>
      <p className="text-gray-800">Java Backend | Spring Boot Pro | Logic Lover</p>
    </div>
  </div>
</section>

    </div>
  );
}
