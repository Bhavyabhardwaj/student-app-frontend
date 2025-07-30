import { Link } from 'react-router-dom';
import SVG from '../assets/presentation-svgrepo-com.svg';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-700 flex flex-col">
      
      
      {/* 🔷 Main Hero */}
      <div className="flex-grow flex items-center justify-center px-6">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

          {/* Left - SVG */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={SVG} alt="Student Assistant Illustration" className="w-full h-auto" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Animated Heading */}
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-4">
              Student Assistant
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-4">
              Set your goals, follow a smart roadmap, track your learning, and achieve more — all in one place.
            </p>

            {/* ✅ Highlights */}
            <ul className="text-gray-600 mb-6 space-y-2 text-left md:text-base text-sm">
              <li>✅ Personalized Learning Goals</li>
              <li>✅ Track Daily Progress</li>
              <li>✅ Curated Roadmaps & Resources</li>
            </ul>

            {/* CTA Button */}
            <Link to="/login">
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                Get Started
              </button>
            </Link>

            {/* 🧠 Motivational Quote */}
            <blockquote className="text-sm italic text-gray-600 mt-6">
              "Success doesn’t come from what you do occasionally, it comes from what you do consistently."
            </blockquote>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
