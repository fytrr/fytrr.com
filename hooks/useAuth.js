'use client';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';

// This is a simple wrapper hook to make it easier to access the auth context.
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
