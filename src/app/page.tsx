"use client";

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [pairingCode, setPairingCode] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPairingCode() {
      try {
        const response = await fetch('/api/device/create-device-code', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ mac_address: '00:00:00:00:00:00' }), // Replace with actual MAC address
        });
        const data = await response.json();
        setPairingCode(data.pairing_code);
      } catch (error) {
        console.error('Failed to fetch pairing code:', error);
      }
    }

    fetchPairingCode();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Connect Your TV</h1>
      {pairingCode ? (
        <>
          <p>Your pairing code is:</p>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{pairingCode}</h2>
          <p>On your phone, go to <strong>fibertime.tv</strong> and enter this code.</p>
        </>
      ) : (
        <p>Generating pairing code...</p>
      )}
    </div>
  );
}
