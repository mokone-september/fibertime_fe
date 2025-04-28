import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Connected: React.FC = () => {
  const [bundleInfo, setBundleInfo] = useState<string>('');

  useEffect(() => {
    axios.get('/api/device/connection-status', { params: { device_id: 'example-device-id' } })
      .then(response => setBundleInfo(response.data.bundle))
      .catch(error => console.error('Error fetching bundle info:', error));
  }, []);

  return (
    <div className="connected">
      <h1>Connection Successful!</h1>
      <p>Your current bundle: {bundleInfo || 'Loading...'}</p>
      <a href="https://wa.me/1234567890">Purchase more bundles on WhatsApp</a>
    </div>
  );
};

export default Connected;
