import React from "react";

const divisions = [
  {
    title: "The Elite Athlete",
    desc: "Compete for prize money and a spot on the podium in our most competitive division.",
    img: "https://images.unsplash.com/photo-1548690312-e3b511d48c07?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "The Fitness Enthusiast",
    desc: "Challenge yourself, beat your personal best, and earn that finisher medal.",
    img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "The Team",
    desc: "Share the load and the glory. Take on CWC with a partner and cross the line together.",
    img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "The First-Timer",
    desc: "New to fitness races? Our supportive community will cheer you on every step of the way.",
    img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=600&auto=format&fit=crop",
  },
];

export default function WhoIsItFor() {
  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-gray-900 border border-gray-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <span className="text-orange-400">“</span>
            <span className="text-gray-300 tracking-wider ml-2 uppercase">
              Find Your Division
            </span>
          </div>
          <h2 className="text-4xl font-black text-white section-title">
            Who is it for?
          </h2>
          <p className="text-gray-400 mt-2">
            CWC is for everyone who wants to test their limits.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {divisions.map((division) => (
            <div
              key={division.title}
              className="bg-gray-900 rounded-lg overflow-hidden flex flex-col sm:flex-row items-center transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={division.img}
                alt={division.title}
                className="w-full sm:w-48 h-48 sm:h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/192x256/000000/333333?text=Image";
                }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">
                  {division.title}
                </h3>
                <p className="text-gray-300 mt-2">{division.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
