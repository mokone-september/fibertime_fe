import React, { useEffect } from 'react';
import axios from 'axios';

interface ConnectingProps {
  deviceId: string;
}

const Connecting: React.FC<ConnectingProps> = ({ deviceId }) => {
  useEffect(() => {
    const pollConnectionStatus = async () => {
      try {
        const response = await axios.post('/api/device/connect-device', { device_id: deviceId });
        if (response.data.connected) {
          // Navigate to the connected screen
        }
      } catch (error) {
        console.error('Error connecting device:', error);
      }
    };

    const interval = setInterval(pollConnectionStatus, 2000);
    return () => clearInterval(interval);
  }, [deviceId]);

  return (
    <div className="connecting">
      <h1>Busy connecting your TV...</h1>
      <div className="loading-animation">Loading...</div>
    </div>
  );
};

export default Connecting;
