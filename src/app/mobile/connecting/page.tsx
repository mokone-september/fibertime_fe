"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ConnectingScreen() {
  const router = useRouter();

  useEffect(() => {
    async function checkConnection() {
      try {
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
        }
      } catch (error) {
        console.error('Connection error:', error);
      }
    }

    checkConnection();
  }, [router]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Connecting...</h1>
      <p>Busy connecting your TV. Please wait.</p>
    </div>
  );
}
