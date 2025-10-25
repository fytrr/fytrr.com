"use client"; // This must be a client component because it uses state (for the mobile menu)

import React, { useState, useEffect } from "react";
import Link from "next/link"; // Import the Next.js Link component for navigation
import { Menu, X } from "lucide-react"; // Import icons
// import RegistrationModal from '@/components/shared/RegistrationModal'; // You would import your modal here

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // State for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on navigation
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const openRegistrationModal = () => {
    closeMobileMenu();
    setIsModalOpen(true);
    // This is a placeholder. You'd build the full modal component.
    alert("Registration Modal Would Open!");
  };

  return (
    <>
      <header
        className={`bg-black/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <Link
              href="/"
              className="text-3xl font-black tracking-tighter text-white"
              onClick={closeMobileMenu}
            >
              CWC<span className="text-orange-400">.</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {/* Replace <a> tags with <Link> components */}
              <Link
                href="/events"
                className="nav-link font-semibold text-gray-300 hover:text-white"
              >
                Events
              </Link>
              <Link
                href="/schedule"
                className="nav-link font-semibold text-gray-300 hover:text-white"
              >
                Schedule
              </Link>
              <Link
                href="/results"
                className="nav-link font-semibold text-gray-300 hover:text-white"
              >
                Past Events
              </Link>
              <Link
                href="/about"
                className="nav-link font-semibold text-gray-300 hover:text-white"
              >
                About
              </Link>
              <Link
                href="/sponsors"
                className="nav-link font-semibold text-gray-300 hover:text-white"
              >
                Sponsors
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={openRegistrationModal}
                className="hidden md:inline-block bg-orange-500 text-white font-bold py-2 px-6 rounded-lg cta-button"
              >
                Register Now
              </button>
              <button
                id="mobile-menu-button"
                className="md:hidden text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden bg-black/90">
            <Link
              href="/events"
              className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-800"
              onClick={closeMobileMenu}
            >
              Events
            </Link>
            <Link
              href="/schedule"
              className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-800"
              onClick={closeMobileMenu}
            >
              Schedule
            </Link>
            <Link
              href="/results"
              className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-800"
              onClick={closeMobileMenu}
            >
              Past Events
            </Link>
            <Link
              href="/about"
              className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-800"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link
              href="/sponsors"
              className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-800"
              onClick={closeMobileMenu}
            >
              Sponsors
            </Link>
            <div className="p-4">
              <button
                onClick={openRegistrationModal}
                className="w-full text-center bg-orange-500 text-white font-bold py-2 px-6 rounded-lg cta-button"
              >
                Register Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* This is where your modal component would live.
        You would pass `isModalOpen` and `setIsModalOpen` as props.
      */}
      {/* <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
    </>
  );
}
