"use client"; // This must be a Client Component because it uses state and effects

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PageHeader({ slides }) {
  if (!slides || slides.length === 0) {
    return null; // Don't render anything if no slides are provided
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  // We add + slides.length to the calculation to ensure the result is never negative
  const moveToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const moveToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Autoplay functionality
  useEffect(() => {
    if (slides.length <= 1) return; // No autoplay if only one slide

    const intervalId = setInterval(moveToNext, 5000);
    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [slides.length]); // Re-run effect only if the number of slides changes

  return (
    <div className="carousel-container relative w-full h-72 overflow-hidden">
      {/* This track uses a CSS transition and transform to move.
        We use flex and min-w-full on children to line them up horizontally.
      */}
      <div
        className="carousel-track h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-slide h-full flex-shrink-0" key={index}>
            <img
              src={slide.img}
              className="w-full h-full object-cover"
              alt={slide.title}
              // Add an error fallback for broken images
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/1200x288/000000/333333?text=Image+Not+Found";
              }}
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4">
              <h3 className="text-3xl md:text-5xl font-black text-white text-center">
                {slide.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Show buttons only if there is more than one slide */}
      {slides.length > 1 && (
        <>
          <button onClick={moveToPrev} className="carousel-button prev">
            <ChevronLeft size={24} />
          </button>
          <button onClick={moveToNext} className="carousel-button next">
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
}
