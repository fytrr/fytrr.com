import React from "react";
import { Award, Users, Medal } from "lucide-react";

const features = [
  {
    title: "Ultimate Challenge",
    desc: "Test your endurance, strength, and willpower with our unique hybrid race format.",
    icon: <Award className="w-12 h-12 text-orange-400" />,
  },
  {
    title: "Warrior Community",
    desc: "Join thousands of like-minded athletes who will support and push you to the finish line.",
    icon: <Users className="w-12 h-12 text-orange-400" />,
  },
  {
    title: "Unforgettable Experience",
    desc: "From the electric atmosphere to the glory of finishing, CWC is an epic day out.",
    icon: <Medal className="w-12 h-12 text-orange-400" />,
  },
];

export default function WhyCwc() {
  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-gray-900 border border-gray-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <span className="text-orange-400">“</span>
            <span className="text-gray-300 tracking-wider ml-2 uppercase">
              The Challenge
            </span>
          </div>
          <h2 className="text-4xl font-black text-white section-title">
            Why CWC?
          </h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            It's more than a race; it's a benchmark for your fitness journey and
            a day you'll never forget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-900 p-8 rounded-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
