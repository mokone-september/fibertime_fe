import React, { useState } from 'react';
import axios from 'axios';

const PairingCode: React.FC = () => {
  const [pairingCode, setPairingCode] = useState<string>('');

  const connectDevice = async () => {
    try {
      const response = await axios.get('/api/device/device', { params: { device_code: pairingCode } });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const deviceId = response.data.device_id;
      // Navigate to the connecting screen with the deviceId
    } catch (error) {
      console.error('Error connecting device:', error);
    }
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
