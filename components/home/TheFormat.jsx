import React from "react";
import { ShieldCheck } from "lucide-react";

export default function TheFormat() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-gray-900 border border-gray-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <span className="text-orange-400">“</span>
            <span className="text-gray-300 tracking-wider ml-2 uppercase">
              The Format
            </span>
          </div>
          <h2 className="text-4xl font-black text-white section-title">
            The Ultimate Fitness Test
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
          <div className="flex-1">
            <h3 className="text-5xl font-black text-orange-400">8KM</h3>
            <p className="text-xl text-gray-300">Total Running</p>
          </div>
          <div className="text-5xl font-black text-gray-500">+</div>
          <div className="flex-1">
            <h3 className="text-5xl font-black text-orange-400">8</h3>
            <p className="text-xl text-gray-300">Functional Workouts</p>
          </div>
          <div className="text-5xl font-black text-gray-500">=</div>
          <div className="flex-1">
            <ShieldCheck className="w-20 h-20 text-green-400 mx-auto" />
            <p className="text-xl text-gray-300 mt-2">Your Finisher Medal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
