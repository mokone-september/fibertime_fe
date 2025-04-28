import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TVScreen: React.FC = () => {
  const [pairingCode, setPairingCode] = useState<string>('');

  useEffect(() => {
    // Fetch the pairing code from the API
    axios.post<{ code: string }>('/api/device/create-device-code', { mac_address: '00:1A:2B:3C:4D:5E' })
      .then(response => {
        setPairingCode(response.data.code);
      })
      .catch(error => {
        console.error('Error fetching pairing code:', error);
      });
  }, []);

  return (
    <div className="tv-screen">
      <h1>Connect Your TV</h1>
      <p>On your phone, go to <strong>fibertime.tv</strong> and enter this code:</p>
      <div className="pairing-code">{pairingCode || '----'}</div>
      <p>Need help? <a href="https://wa.me/1234567890">Contact us on WhatsApp</a></p>
    </div>
  );
};

export default TVScreen;
