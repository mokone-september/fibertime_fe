import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PairingCode: React.FC = () => {
  const [pairingCode, setPairingCode] = useState<string>('');
  const navigate = useNavigate();

  const connectDevice = () => {
    axios.get(`/api/device/device?device-code=${pairingCode}`)
      .then(() => navigate('/connecting'))
      .catch(error => console.error('Error connecting device:', error));
  };

  return (
    <div className="pairing-code">
      <h1>Enter Pairing Code</h1>
      <input
        type="text"
        placeholder="Enter the code from your TV"
        value={pairingCode}
        onChange={(e) => setPairingCode(e.target.value)}
      />
      <button onClick={connectDevice}>Connect</button>
    </div>
  );
};

export default PairingCode;
