"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  // Add these for phone auth
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "@/lib/firebase/config";
import LoginModal from "@/components/auth/LoginModal";
import EventRegistrationModal from "@/components/layout/EventRegistrationModal";

// 1. Create the Context
const AuthContext = createContext();

// 2. Create the Provider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // State for Modals
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);

  // 3. Listen for auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // --- Modal Functions ---
  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const openRegisterModal = (eventId = null) => {
    if (user) {
      // If user is logged in, open the event registration modal
      setSelectedEventId(eventId);
      setIsRegisterModalOpen(true);
    } else {
      // If user is not logged in, force them to log in first
      openLoginModal();
    }
  };
  const closeRegisterModal = () => setIsRegisterModalOpen(false);

  // --- Auth API Functions ---
  const signUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Phone Auth Setup (requires a <div id="recaptcha-container"></div>)
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
          },
        }
      );
    }
    return window.recaptchaVerifier;
  };

  const loginWithPhone = (phoneNumber) => {
    const appVerifier = setupRecaptcha();
    return signInWithPhoneNumber(auth, phoneNumber, appVerifier);
  };

  const logOut = () => {
    return signOut(auth);
  };

  // 4. Value provided to children
  const value = {
    user,
    loading,
    signUpWithEmail,
    loginWithEmail,
    loginWithPhone,
    logOut,
    openLoginModal,
    openRegisterModal,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
      {/* Render the modals here so they are available globally */}
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
      <EventRegistrationModal
        isOpen={isRegisterModalOpen}
        onClose={closeRegisterModal}
        eventId={selectedEventId}
      />
      {/* This div is required for phone auth reCAPTCHA */}
      <div id="recaptcha-container"></div>
    </AuthContext.Provider>
  );
}

// 5. Create the custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};
