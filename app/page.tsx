// This is your Homepage
import React from "react";
import Link from "next/link";
import {
  Award,
  Users,
  Medal,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// In a real app, you'd break these sections into their own components
// e.g., import Hero from '@/components/home/Hero';
// e.g., import Testimonials from '@/components/home/Testimonials';

export default function HomePage() {
  return (
    <>
      {/* --- Hero Section --- */}
      <section className="hero-bg min-h-screen flex items-center">
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
            <Link
              href="/about"
              className="bg-gray-700/50 backdrop-blur-sm text-white font-bold py-3 px-8 rounded-lg text-lg cta-button"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* --- Why CWC Section --- */}
      <section className="py-20 bg-black">
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
              It's more than a race; it's a benchmark for your fitness journey
              and a day you'll never forget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-900 p-8 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Ultimate Challenge
              </h3>
              <p className="text-gray-400">
                Test your endurance, strength, and willpower with our unique
                hybrid race format.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Warrior Community
              </h3>
              <p className="text-gray-400">
                Join thousands of like-minded athletes who will support and push
                you to the finish line.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                <Medal className="w-12 h-12 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Unforgettable Experience
              </h3>
              <p className="text-gray-400">
                From the electric atmosphere to the glory of finishing, CWC is
                an epic day out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- The Format Section --- */}
      <section className="py-20">
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
      </section>

      {/* --- Who is it for Section (Excerpt) --- */}
      <section className="py-20 bg-black">
        {/* ... The "Who is it for" HTML would go here ... */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white section-title">
              Who is it for?
            </h2>
          </div>
          {/* ... The rest of the grid ... */}
        </div>
      </section>

      {/* --- Testimonials Section (Would be a Client Component) --- */}
      <section className="py-20 overflow-hidden">
        {/* ... The Testimonials HTML would go here ... */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white section-title">
              From Our Warriors
            </h2>
          </div>
          {/* ... The carousel HTML ... */}
          <p className="text-center text-gray-500 mt-8">
            (This would be an interactive Client Component)
          </p>
        </div>
      </section>

      {/* --- Future Ideas Section --- */}
      <section className="py-20 bg-black">
        {/* ... The "Future Ideas" HTML would go here ... */}
      </section>
    </>
  );
}
