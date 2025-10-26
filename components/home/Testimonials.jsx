"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "The hardest thing I've ever done, but the most rewarding. The atmosphere was insane! I've already signed up for next year.",
    author: "- Rohan D., Mumbai Finisher",
  },
  {
    text: "Doing this with my partner was an incredible bonding experience. We pushed each other through every station. We felt like champions.",
    author: "- Anjali P., Delhi Team Finisher",
  },
  {
    text: "I never thought I could do something like this. The CWC community is so supportive. Crossing that finish line was a life-changing moment.",
    author: "- Sameer K., First-Timer",
  },
  {
    text: "As a competitive athlete, CWC is the true test. It exposes every weakness. The perfect benchmark for serious functional fitness.",
    author: "- Aisha T., Elite Athlete",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateSlides = () => {
    const slides = document.querySelectorAll(
      "#testimonial-carousel .carousel-slide"
    );
    slides.forEach((slide, i) => {
      slide.classList.remove("active", "prev", "next");
      if (i === currentIndex) {
        slide.classList.add("active");
      } else if (i === (currentIndex - 1 + slides.length) % slides.length) {
        slide.classList.add("prev");
      } else if (i === (currentIndex + 1) % slides.length) {
        slide.classList.add("next");
      }
    });

    const dots = document.querySelectorAll(
      "#testimonial-carousel .carousel-dot"
    );
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  };

  const moveToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const moveToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const moveToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    updateSlides();
    const slideInterval = setInterval(moveToNext, 5000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <div className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-gray-900 border border-gray-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <span className="text-orange-400">“</span>
            <span className="text-gray-300 tracking-wider ml-2 uppercase">
              Warrior Stories
            </span>
          </div>
          <h2 className="text-4xl font-black text-white section-title">
            From Our Warriors
          </h2>
        </div>
        <div
          id="testimonial-carousel"
          className="testimonial-carousel relative w-full max-w-4xl mx-auto"
        >
          <div className="carousel-track">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="carousel-slide">
                <div className="testimonial-card p-8 rounded-lg border border-gray-700 h-full flex flex-col justify-center min-h-[180px] bg-gray-900/70 backdrop-blur-sm">
                  <p className="text-gray-300 italic text-center">
                    "{testimonial.text}"
                  </p>
                  <p className="mt-4 font-bold text-white text-center">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={moveToPrev}
            className="carousel-button prev -left-4 md:-left-8 absolute top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full z-10"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={moveToNext}
            className="carousel-button next -right-4 md:-right-8 absolute top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full z-10"
          >
            <ChevronRight />
          </button>
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className="carousel-dot"
                onClick={() => moveToSlide(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
