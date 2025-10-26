"use client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Pass the onRegisterClick function as a prop
export default function Hero({ onRegisterClick }) {
  return (
    <div className="hero-bg min-h-screen flex items-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-tight mb-4">
          Forge Your
          <br />
          <span className="text-orange-400">Inner Warrior</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
          The Core Warrior Challenge is the ultimate hybrid fitness race. 8 KM
          of running combined with 8 functional workout stations. Push your
          limits. Exceed your expectations.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <Link
            href="/events"
            className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg text-lg cta-button"
          >
            Find an Event
          </Link>
          {/* This button now calls the function from the useAuth hook,
            which will check if the user is logged in before opening the correct modal.
          */}
          <button
            onClick={() => onRegisterClick()}
            className="bg-gray-700/50 backdrop-blur-sm text-white font-bold py-3 px-8 rounded-lg text-lg cta-button"
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}
