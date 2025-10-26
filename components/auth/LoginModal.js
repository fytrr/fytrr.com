'use client';
import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { X, Mail, Phone, Lock, Eye, EyeOff } from 'lucide-react';

export default function LoginModal({ isOpen, onClose }) {
  const { signUpWithEmail, loginWithEmail, loginWithPhone } = useAuth();

  const [isLoginView, setIsLoginView] = useState(true);
  const [authMethod, setAuthMethod] = useState('email'); // 'email' or 'phone'

  // Form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);

  if (!isOpen) return null;

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (isLoginView) {
        await loginWithEmail(email, password);
      } else {
        await signUpWithEmail(email, password);
      }
      onClose(); // Close modal on success
    } catch (err) {
      setError(err.message.replace('Firebase: ', ''));
    }
    setLoading(false);
  };

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!confirmationResult) {
      // --- Step 1: Send OTP ---
      try {
        // Remember to add +91 for Indian numbers, etc.
        const formattedPhone = phone.startsWith('+') ? phone : `+91${phone}`;
        const result = await loginWithPhone(formattedPhone);
        setConfirmationResult(result);
        setLoading(false);
      } catch (err) {
        setError(err.message.replace('Firebase: ', ''));
        setLoading(false);
      }
    } else {
      // --- Step 2: Verify OTP ---
      try {
        await confirmationResult.confirm(otp);
        onClose(); // Close modal on success
      } catch (err) {
        setError(err.message.replace('Firebase: ', ''));
      }
      setLoading(false);
    }
  };

  const currentViewText = isLoginView ? 'Log In' : 'Sign Up';

  return (
    <div className="modal" style={{ display: 'flex' }}>
      <div className="modal-content bg-black rounded-lg shadow-xl m-auto p-8 max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <X />
        </button>
        <h2 className="text-3xl font-bold text-white mb-6 text-center">{currentViewText}</h2>

        {/* Auth Method Toggle */}
        <div className="flex bg-gray-900 rounded-lg p-1 mb-6">
          <button
            onClick={() => setAuthMethod('email')}
            className={`w-1/2 py-2 rounded-lg font-semibold ${authMethod === 'email' ? 'bg-orange-500 text-white' : 'text-gray-400'}`}
          >
            Email
          </button>
          <button
            onClick={() => setAuthMethod('phone')}
            className={`w-1/2 py-2 rounded-lg font-semibold ${authMethod === 'phone' ? 'bg-orange-500 text-white' : 'text-gray-400'}`}
          >
            Phone
          </button>
        </div>

        {/* --- Email Form --- */}
        {authMethod === 'email' && (
          <form onSubmit={handleEmailSubmit}>
            <div className="mb-4 relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg pl-10 pr-4 py-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4 relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg pl-10 pr-10 py-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <button
              type="submit"
              className="w-full mt-2 bg-orange-500 text-white font-bold py-3 px-8 rounded-lg cta-button disabled:bg-gray-600"
              disabled={loading}
            >
              {loading ? 'Processing...' : currentViewText}
            </button>
          </form>
        )}

        {/* --- Phone Form --- */}
        {authMethod === 'phone' && (
          <form onSubmit={handlePhoneSubmit}>
            {!confirmationResult ? (
              // Step 1: Enter Phone
              <>
                <div className="mb-4 relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="tel"
                    placeholder="Phone Number (e.g., 98XXXXXX98)"
                    className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg pl-10 pr-4 py-3"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-2 bg-orange-500 text-white font-bold py-3 px-8 rounded-lg cta-button disabled:bg-gray-600"
                  disabled={loading}
                >
                  {loading ? 'Sending OTP...' : 'Send OTP'}
                </button>
              </>
            ) : (
              // Step 2: Enter OTP
              <>
                <p className="text-gray-300 text-center mb-4">Enter the 6-digit code sent to {phone}</p>
                <div className="mb-4 relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg pl-10 pr-4 py-3"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-2 bg-orange-500 text-white font-bold py-3 px-8 rounded-lg cta-button disabled:bg-gray-600"
                  disabled={loading}
                >
                  {loading ? 'Verifying...' : 'Verify and Log In'}
                </button>
              </>
            )}
          </form>
        )}

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm text-center mt-4">{error}</p>
        )}

        {/* Toggle View */}
        <p className="text-gray-400 text-center text-sm mt-6">
          {isLoginView ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLoginView(!isLoginView)}
            className="font-semibold text-orange-400 hover:text-orange-300 ml-1"
          >
            {isLoginView ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </div>
    </div>
  );
}
