import React from "react";
import { Mail, Instagram, Youtube, Twitter } from "lucide-react"; // Import icons

export default function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="mailto:contact@cwcchallenge.com"
            className="hover:text-white"
            aria-label="Email"
          >
            <Mail />
          </a>
          <a href="#" className="hover:text-white" aria-label="Instagram">
            <Instagram />
          </a>
          <a href="#" className="hover:text-white" aria-label="YouTube">
            <Youtube />
          </a>
          <a href="#" className="hover:text-white" aria-label="Twitter">
            <Twitter />
          </a>
        </div>
        <p>&copy; 2025 Core Warrior Challenge. All Rights Reserved.</p>
        <p className="text-sm mt-2">
          Data Privacy | Terms of Service | Contact Us
        </p>
      </div>
    </footer>
  );
}
