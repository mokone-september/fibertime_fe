"use client";

import { useEffect, useState } from 'react';

export default function ConnectedScreen() {
  const [bundleInfo, setBundleInfo] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBundleInfo() {
      try {
        const response = await fetch('/api/device/connection-status', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ device_id: 'your-device-id' }), // Replace with actual device ID
        });

        if (!response.ok) {
          throw new Error('Failed to fetch bundle information.');
        }

        const data = await response.json();
        setBundleInfo(data.bundle_info);
      } catch (error) {
        console.error('Error fetching bundle info:', error);
      }
    }

    fetchBundleInfo();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Connected!</h1>
      <p>Your TV is now connected to Fibertime.</p>
      {bundleInfo ? (
        <p>Current bundle: {bundleInfo}</p>
      ) : (
        <p>Loading bundle information...</p>
      )}
    </div>
  );
}
