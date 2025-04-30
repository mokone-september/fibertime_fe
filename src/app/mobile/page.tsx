"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MobileLogin() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleNext() {
    if (!phoneNumber) {
      setError('Please enter your phone number.');
      return;
    }

    try {
      const response = await fetch('/api/auth/request-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cell_number: phoneNumber }),
      });

      if (!response.ok) {
        throw new Error('Failed to request OTP.');
      }

      router.push('/mobile/otp'); // Navigate to OTP verification screen
    } catch (err) {
      setError(err.message || 'Something went wrong.');
    }
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Log in to Connect</h1>
      <p>Enter your phone number to receive an OTP.</p>
      <input
        type="tel"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        style={{ padding: '10px', fontSize: '1rem', width: '80%' }}
      />
      <button
        onClick={handleNext}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '1rem',
          backgroundColor: '#007BFF',
          color: '#FFF',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Next
      </button>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div>
  );
}
