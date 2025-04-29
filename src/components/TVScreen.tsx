"use client";

import React, { useEffect } from 'react';
import axios from 'axios';
import { useAppContext } from '../context/AppContext';

const TVScreen: React.FC = () => {
  const { pairingCode, setPairingCode } = useAppContext();

  useEffect(() => {
    const fetchPairingCode = async () => {
      try {
        const response = await axios.post('/api/device/create-device-code', {
          mac_address: '00:1A:2B:3C:4D:5E', // Replace with actual MAC address
        });
        setPairingCode(response.data.pairing_code);
      } catch (error) {
        console.error('Error fetching pairing code:', error);
      }
    };

    fetchPairingCode();
  }, [setPairingCode]);

  return (
    <div className="tv-screen">
      <h1>Connect Your TV</h1>
      <p>On your phone, go to <strong>fibertime.tv</strong> and enter this code:</p>
      <div className="pairing-code">{pairingCode || 'Loading...'}</div>
      <p>Need help? <a href="https://wa.me/1234567890">Contact us on WhatsApp</a></p>
    </div>
  );
};

export default TVScreen;