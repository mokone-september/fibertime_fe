import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Connecting: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      axios.post('/api/device/connect-device', { device_id: 'example-device-id' })
        .then(() => {
          clearInterval(interval);
          navigate('/connected');
        })
        .catch(error => console.error('Error connecting device:', error));
    }, 2000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="connecting">
      <h1>Busy connecting your TV...</h1>
      <div className="loading-animation">Loading...</div>
    </div>
  );
};

export default Connecting;
