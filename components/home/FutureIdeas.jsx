"use client";
import React from "react";

export default function FutureIdeas() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you for your interest! We'll notify you when the app is ready."
    );
  };

  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-4 text-center">
        <div className="bg-gray-900/70 backdrop-blur-md p-10 rounded-lg max-w-3xl mx-auto">
          <div className="inline-block bg-gray-900 border border-gray-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <span className="text-orange-400">“</span>
            <span className="text-gray-300 tracking-wider ml-2 uppercase">
              What's Next
            </span>
          </div>
          <h2 className="text-4xl font-black text-white section-title">
            The Future of Fitness
          </h2>
          <p className="text-gray-300 my-4">
            Coming soon: The CWC Tracker App. Monitor your training, connect
            with the community, and get race-ready with personalized plans.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row justify-center gap-4 mt-8"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-auto flex-grow bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg cta-button"
            >
              Get Early Access
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
