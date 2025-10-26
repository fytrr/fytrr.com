import React from "react";
import PageHeader from "@/components/shared/PageHeader";
import EventList from "@/components/events/EventList"; // Import the new client component

// This is the default export - a React Component for the page
export default function EventsPage() {
  // Data for the header
  const headerSlides = [
    {
      img: "https://images.unsplash.com/photo-1566552881560-0d85210c06ac?q=80&w=1200&auto-format&fit=crop",
      title: "Find Your Race in Mumbai",
    },
    {
      img: "https://images.unsplash.com/photo-1588796118237-649a4e335f6f?q=80&w=1200&auto-format&fit=crop",
      title: "Conquer The Capital: Delhi",
    },
    {
      img: "https://images.unsplash.com/photo-1593693397643-8969a5549721?q=80&w=1200&auto-format&fit=crop",
      title: "Bangalore's Tech Warrior Arena",
    },
  ];

  return (
    <section>
      {/* Use the PageHeader component */}
      <PageHeader slides={headerSlides} />

      {/* Page Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-white section-title">
            Upcoming Events
          </h2>
          <p className="text-gray-400 mt-2">
            Find a Core Warrior Challenge near you.
          </p>
        </div>

        {/* Render the interactive event list */}
        <EventList />
      </div>
    </section>
  );
}
