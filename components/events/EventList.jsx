"use client"; // This component needs to be a client component for state

import React, { useState } from "react";
import { eventsData } from "@/lib/data"; // Import the event data

// This is a reusable card component just for this page
function EventCard({ event }) {
  const showRegistrationModal = (eventId) => {
    // In a real app, this would open a global modal context
    // For now, it's a placeholder.
    alert(
      `Opening registration for event ID: ${eventId}. (This will open the real modal)`
    );
  };

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
      <img
        src={event.image}
        alt={event.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <p className="text-sm text-orange-400 font-semibold">
          {new Date(event.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h3 className="text-2xl font-bold text-white mt-1">{event.name}</h3>
        <p className="text-gray-400 mt-1">{event.venue}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-white">${event.price}</span>
          <button
            onClick={() => showRegistrationModal(event.id)}
            className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg text-sm cta-button"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

// This is the main list component with filtering logic
export default function EventList() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredEvents = eventsData.filter(
    (event) =>
      event.city.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "all" || event.category === filter)
  );

  return (
    <>
      {/* Filter UI */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          id="event-search"
          placeholder="Search by city (e.g., Mumbai)"
          className="w-full md:w-1/2 bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          id="event-filter"
          className="w-full md:w-1/4 bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="solo">Solo</option>
          <option value="team">Team</option>
          <option value="elite">Elite</option>
        </select>
      </div>

      {/* Event Grid */}
      <div
        id="event-list"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <p className="text-gray-400 col-span-full text-center">
            No events match your criteria. Please try again.
          </p>
        )}
      </div>
    </>
  );
}
