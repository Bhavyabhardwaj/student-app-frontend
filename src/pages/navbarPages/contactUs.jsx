import React from 'react';

export default function ContactUs() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-700 min-h-screen flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-indigo-700 mb-8 text-center">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side: Contact form */}
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Message</label>
              <textarea
                placeholder="Type your message..."
                rows="5"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-xl transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Right side: Info / Image */}
          <div className="text-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Get in Touch</h2>
            <p className="mb-4">
              Have questions or feedback? Fill out the form or contact us using the information below.
            </p>

            <div className="mb-4">
              <p className="font-semibold">Email:</p>
              <p>support@pathvibe.com</p>
            </div>

            <div className="mb-4">
              <p className="font-semibold">Phone:</p>
              <p>+91 98765 43210</p>
            </div>

            <div>
              <p className="font-semibold">Address:</p>
              <p>Kurukshetra University, Haryana, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
