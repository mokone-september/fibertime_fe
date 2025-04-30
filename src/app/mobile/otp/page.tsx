"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function OTPVerification() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleVerify() {
    if (!otp) {
      setError('Please enter the OTP.');
      return;
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otp }),
      });

      if (!response.ok) {
        throw new Error('Invalid OTP.');
      }

      router.push('/mobile/pair'); // Navigate to pairing code input screen
    } catch (err) {
      setError(err.message || 'Something went wrong.');
    }
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Verify OTP</h1>
      <p>Enter the OTP sent to your phone.</p>
      <input
        type="text"
        placeholder="OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        style={{ padding: '10px', fontSize: '1rem', width: '80%' }}
      />
      <button
        onClick={handleVerify}
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
        Verify
      </button>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div>
  );
}
