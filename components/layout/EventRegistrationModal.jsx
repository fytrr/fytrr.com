"use client";
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { eventsData } from "@/lib/data";
import { useAuth } from "@/hooks/useAuth";

export default function EventRegistrationModal({ isOpen, onClose, eventId }) {
  const { user } = useAuth(); // Get the logged-in user

  // Form state
  const [selectedEventId, setSelectedEventId] = useState(
    eventId || eventsData[0]?.id
  );
  const [regType, setRegType] = useState("solo");
  const [teamName, setTeamName] = useState("");
  const [price, setPrice] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Update price and selected event when modal opens or eventId changes
  useEffect(() => {
    const event = eventsData.find((e) => e.id == eventId) || eventsData[0];
    if (event) {
      setSelectedEventId(event.id);
      updatePrice(event.id, regType);
    }
  }, [isOpen, eventId]);

  // Update price when registration type changes
  useEffect(() => {
    updatePrice(selectedEventId, regType);
  }, [regType, selectedEventId]);

  const updatePrice = (eventId, type) => {
    const event = eventsData.find((e) => e.id == eventId);
    if (!event) return;

    let newPrice = event.price;
    if (type === "team") {
      newPrice = event.category === "team" ? event.price : event.price * 2 - 20; // Example team pricing
    }
    setPrice(newPrice);
  };

  const handleEventChange = (e) => {
    setSelectedEventId(e.target.value);
  };

  const handleTypeChange = (e) => {
    setRegType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is where you would call your payment processor (Stripe)
    // and then, on success, write to your Firestore database:
    // e.g., await addDoc(collection(db, 'registrations'), {
    //   userId: user.uid,
    //   eventId: selectedEventId,
    //   type: regType,
    //   teamName: regType === 'team' ? teamName : null,
    //   price: price,
    //   status: 'paid'
    // });
    console.log({
      userId: user.uid,
      eventId: selectedEventId,
      type: regType,
      teamName: regType === "team" ? teamName : "",
      price: price,
    });
    // For now, just show confirmation
    setIsConfirmed(true);
  };

  const handleClose = () => {
    setIsConfirmed(false); // Reset confirmation on close
    setRegType("solo");
    setTeamName("");
    onClose();
  };

  if (!isOpen) return null;

  const selectedEvent = eventsData.find((e) => e.id == selectedEventId);

  return (
    <div className="modal" style={{ display: "flex" }}>
      <div className="modal-content bg-black rounded-lg shadow-xl m-auto p-8 max-w-lg w-full relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X />
        </button>

        {!isConfirmed ? (
          <>
            <h2 className="text-3xl font-bold text-white mb-6">
              Register for CWC
            </h2>
            <form id="registration-form" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Logged in as</label>
                <p className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-2">
                  {user?.email || user?.phoneNumber || "Warrior"}
                </p>
              </div>
              <div className="mb-4">
                <label htmlFor="reg-event" className="block text-gray-300 mb-2">
                  Select Event
                </label>
                <select
                  id="reg-event"
                  className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-2"
                  value={selectedEventId}
                  onChange={handleEventChange}
                  required
                >
                  {eventsData.map((event) => (
                    <option key={event.id} value={event.id}>
                      {event.name} - {new Date(event.date).toLocaleDateString()}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="reg-type" className="block text-gray-300 mb-2">
                  Registration Type
                </label>
                <select
                  id="reg-type"
                  className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-2"
                  value={regType}
                  onChange={handleTypeChange}
                >
                  <option value="solo">Solo</option>
                  <option value="team">Team (2 people)</option>
                </select>
              </div>

              {regType === "team" && (
                <div id="team-name-wrapper" className="mb-4">
                  <label
                    htmlFor="reg-team-name"
                    className="block text-gray-300 mb-2"
                  >
                    Team Name
                  </label>
                  <input
                    type="text"
                    id="reg-team-name"
                    className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-2"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    required
                  />
                </div>
              )}

              <div className="mt-6">
                <p className="text-lg text-white">
                  Total:{" "}
                  <span id="reg-price" className="font-bold text-orange-400">
                    ${price}
                  </span>
                </p>
              </div>
              <button
                type="submit"
                className="w-full mt-6 bg-orange-500 text-white font-bold py-3 px-8 rounded-lg cta-button"
              >
                Proceed to Payment
              </button>
            </form>
          </>
        ) : (
          <div id="reg-confirmation" className="text-center">
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              Registration Successful!
            </h3>
            <p className="text-gray-300">
              A confirmation has been sent to {user?.email || "your account"}.
            </p>
            <p className="text-gray-300 mt-2">
              See you at the starting line, warrior!
            </p>
            <button
              onClick={handleClose}
              className="w-full mt-6 bg-orange-500 text-white font-bold py-3 px-8 rounded-lg cta-button"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
