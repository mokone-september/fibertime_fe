"use client";

import { useEffect, useState } from 'react';
import styles from './page.module.css'; // Import CSS module for animations

export default function HomePage() {
  const [pairingCode, setPairingCode] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  async function fetchPairingCode() {
    try {
      setError(null); // Reset error state
      setLoading(true); // Show loading state
      const response = await fetch('/api/device/create-device-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mac_address: '00:00:00:00:00:00' }), // Replace with actual MAC address
      });

      if (!response.ok) {
        throw new Error('Failed to fetch pairing code.');
      }

      const data = await response.json();
      setPairingCode(data.pairing_code);
    } catch (error) {
      console.error('Failed to fetch pairing code:', error);
      setError('Unable to generate pairing code. Please try again.');
    } finally {
      setLoading(false); // Hide loading state
    }
  }

  useEffect(() => {
    fetchPairingCode();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Connect Your TV</h1>
      {loading ? (
        <p className={styles.fadeIn}>Generating pairing code...</p>
      ) : pairingCode ? (
        <div className={styles.fadeIn}>
          <p>Your pairing code is:</p>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{pairingCode}</h2>
          <p>On your phone, go to <strong>fibertime.tv</strong> and enter this code.</p>
        </div>
      ) : error ? (
        <div className={styles.fadeIn}>
          <p style={{ color: 'red' }}>{error}</p>
          <button
            onClick={fetchPairingCode}
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
        </div>
      ) : null}
      <p>
        Need help? <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">Contact us on WhatsApp</a>.
      </p>
    </div>
  );
}
