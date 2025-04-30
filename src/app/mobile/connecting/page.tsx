"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ConnectingScreen() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  async function checkConnection() {
    try {
      setError(null); // Reset error state
      const response = await fetch('/api/device/connect-device', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ device_id: 'your-device-id' }), // Replace with actual device ID
      });

      if (!response.ok) {
        throw new Error('Failed to connect.');
      }

      const data = await response.json();
      if (data.connected) {
        router.push('/mobile/connected'); // Navigate to the connected screen
      } else {
        throw new Error('Connection not established yet.');
      }
    } catch (error) {
      console.error('Connection error:', error);
      setError('Unable to connect. Please try again.');
    }
  }

  useEffect(() => {
    checkConnection();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Connecting...</h1>
      {error ? (
        <>
          <p style={{ color: 'red' }}>{error}</p>
          <button
            onClick={checkConnection}
            style={{
              marginTop: '10px',
              padding: '10px 20px',
              fontSize: '1rem',
              backgroundColor: '#007BFF',
              color: '#FFF',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Retry
          </button>
        </>
      ) : (
        <p>Busy connecting your TV. Please wait.</p>
      )}
    </div>
  );
}
