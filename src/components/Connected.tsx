import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ConnectedProps {
  deviceId: string;
}

const Connected: React.FC<ConnectedProps> = ({ deviceId }) => {
  const [bundleInfo, setBundleInfo] = useState<string>('');

  useEffect(() => {
    const fetchBundleInfo = async () => {
      try {
        const response = await axios.get('/api/device/connection-status', { params: { device_id: deviceId } });
        setBundleInfo(response.data.bundle_info);
      } catch (error) {
        console.error('Error fetching bundle info:', error);
      }
    };

    fetchBundleInfo();
  }, [deviceId]);

  return (
    <div className="connected">
      <h1>Connected Successfully!</h1>
      <p>{bundleInfo || 'Loading bundle information...'}</p>
      <a href="https://wa.me/1234567890">Purchase more bundles on WhatsApp</a>
    </div>
  );
};

export default Connected;
