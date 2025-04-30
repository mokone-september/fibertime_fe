"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PairingCodeInput() {
  const [pairingCode, setPairingCode] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleConnect() {
    if (!pairingCode) {
      setError('Please enter the pairing code.');
      return;
    }

    try {
      const response = await fetch('/api/device/device', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ device_code: pairingCode }),
      });

      if (!response.ok) {
        throw new Error('Invalid pairing code.');
      }

      router.push('/mobile/connecting'); // Navigate to connecting screen
    } catch (err) {
      setError(err.message || 'Something went wrong.');
    }
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Enter Pairing Code</h1>
      <p>Enter the code displayed on your TV screen.</p>
      <input
        type="text"
        placeholder="Pairing Code"
        value={pairingCode}
        onChange={(e) => setPairingCode(e.target.value)}
        style={{ padding: '10px', fontSize: '1rem', width: '80%' }}
      />
      <button
        onClick={handleConnect}
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
        Connect
      </button>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div>
  );
}
