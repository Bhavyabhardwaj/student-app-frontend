import { Link } from 'react-router-dom';
import SVG from '../assets/presentation-svgrepo-com.svg';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaSearch, FaChartLine } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";
import Layout from '../layout/layout';

export default function Home() {
  return (
    <Layout>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-700 flex flex-col">
      
      
      {/*  Main section */}
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

            {/* Motivational Quote */}
            <blockquote className="text-sm italic text-gray-600 mt-6">
              "Success doesn’t come from what you do occasionally, it comes from what you do consistently."
            </blockquote>
          </motion.div>

        </div>
      </div>

      {/*how it work section*/}
       <section className="py-16 bg-gray-50" id="how-it-works">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">How It Works</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Our app is designed to simplify your learning journey in 4 easy steps.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <FaUserGraduate className="text-indigo-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2 text-gray-800">1. Sign Up</h3>
            <p className="text-gray-600 text-sm">Create your account to access personalized features and track your progress.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <FaSearch className="text-indigo-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2 text-gray-800">2. Set Your Goals</h3>
            <p className="text-gray-600 text-sm">Choose what you want to achieve and let us recommend the best roadmap.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <MdOutlineRocketLaunch className="text-indigo-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2 text-gray-800">3. Start Learning</h3>
            <p className="text-gray-600 text-sm">Follow the steps, track your journey, and get curated resources at every step.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <FaChartLine className="text-indigo-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2 text-gray-800">4. Track & Grow</h3>
            <p className="text-gray-600 text-sm">Monitor your progress with visual analytics and earn achievements as you grow.</p>
          </div>
        </div>
      </div>
    </section>

    {/*feature section */}
    <section className="bg-gradient-to-br from-blue-50 to-indigo-70 py-16 px-4 sm:px-10" id="features">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
      Powerful Features to Help You Stay on Track
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Feature 1 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-indigo-600 mb-2">🎯 Goal-Oriented Learning</h3>
        <p className="text-gray-600">
          Set your learning goals and follow a custom roadmap tailored to your career path.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-indigo-600 mb-2">📊 Progress Tracking</h3>
        <p className="text-gray-600">
          Track your growth across different platforms like YouTube, Coursera, or coding websites.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-indigo-600 mb-2">📁 Organized Study Space</h3>
        <p className="text-gray-600">
          Collect and organize your resources, notes, and study material in smart folders.
        </p>
      </div>

      {/* Feature 4 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-indigo-600 mb-2">🎖️ Achievement Badges</h3>
        <p className="text-gray-600">
          Earn progress badges as you complete your tasks and stay motivated throughout.
        </p>
      </div>

      {/* Feature 5 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-indigo-600 mb-2">🗓️ Calendar Integration</h3>
        <p className="text-gray-600">
          Sync with Google Calendar to manage your schedule and deadlines easily.
        </p>
      </div>

      {/* Feature 6 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-indigo-600 mb-2">🎙️ Voice Commands</h3>
        <p className="text-gray-600">
          Navigate and control your learning journey with smart voice controls.
        </p>
      </div>
    </div>
  </div>
</section>

     {/*testimonials */}
      <section className="bg-gray-50 py-16" id="testimonials">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-4">What Students Say</h2>
    <p className="text-gray-600 mb-10">Real experiences. Real impact.</p>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <img
          src="https://www.chitkara.edu.in/blogs/wp-content/uploads/2023/04/CSE_Skills_Students.jpg"  // Add image URL here
          alt="Riya Sharma"
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <p className="text-gray-700 mb-4">“PathVibe helped me stay consistent with my learning goals. The roadmaps are clear and motivating.”</p>
        <div className="text-left mt-4">
          <p className="font-semibold text-gray-800">Riya Sharma</p>
          <p className="text-sm text-gray-500">B.Tech Student, Delhi</p>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWafQdI6fYH5iZ4apNMm-AA2-65tUpoDx3lg&s"  // Add image URL here
          alt="Aditya Mehra"
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <p className="text-gray-700 mb-4">“Finally an app that understands student needs. The progress tracking and reminders are a lifesaver!”</p>
        <div className="text-left mt-4">
          <p className="font-semibold text-gray-800">Aditya Mehra</p>
          <p className="text-sm text-gray-500">Engineering Student, Mumbai</p>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUkr7shu8AuIo6Qqj0Q0SJxq-Yf5RTuGnZOw&s"  // Add image URL here
          alt="Sneha Verma"
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <p className="text-gray-700 mb-4">“I love the curated content feature. It saved me hours of searching. Everything is in one place.”</p>
        <div className="text-left mt-4">
          <p className="font-semibold text-gray-800">Sneha Verma</p>
          <p className="text-sm text-gray-500">CS Student, Bangalore</p>
        </div>
      </div>
    </div>
  </div>
</section>
{/*about section */}
<section className="bg-gradient-to-br from-blue-50 to-indigo-70 py-16 px-6 lg:px-20" id="about">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">About PathVibe</h2>
    <p className="text-lg text-gray-600 mb-8">
      At <span className="text-blue-600 font-semibold">PathVibe</span>, our mission is to guide every student on the right path to success. Whether it's choosing a career, setting academic goals, or accessing quality resources, we’re building a platform that simplifies everything. No more confusion, no more information overload — just clear, personalized guidance.
    </p>
    <p className="text-md text-gray-500 max-w-3xl mx-auto">
      Built with love for students, by students — PathVibe is your all-in-one learning partner. From setting learning targets to tracking your progress, from curated roadmaps to smart content control — we're here to make education personal, focused, and motivating.
    </p>
  </div>
</section>

{/*last section */}
            
<section className="bg-gray-100 text-gray-800 py-8 px-4 md:px-16">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">PathVibe</h2>
        <p className="text-gray-600">
          Empowering students with personalized learning paths, curated resources, and real progress.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-indigo-600 mb-3">Quick Links</h3>
        <ul className="text-gray-600 space-y-2">
          <li><a href="#how-it-works" className="hover:text-indigo-600">How it Works</a></li>
          <li><a href="#features" className="hover:text-indigo-600">Features</a></li>
          <li><a href="#testimonials" className="hover:text-indigo-600">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-indigo-600 mb-3">Get in Touch</h3>
        <p className="text-gray-600">Email: support@pathvibe.com</p>
        <p className="text-gray-600">Phone: +91 8708770479</p>
      </div>
    </div>

    
  </div>
</section>



    </div>
    </Layout>

  );
}
