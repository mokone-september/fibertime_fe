import React, { useState } from 'react';
import axios from 'axios';

const Login: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [step, setStep] = useState<'phone' | 'otp'>('phone');

  const requestOtp = async () => {
    try {
      await axios.post('/api/auth/request-otp', { cell_number: phoneNumber });
      setStep('otp');
    } catch (error) {
      console.error('Error requesting OTP:', error);
    }
  };

  const verifyOtp = async () => {
    try {
      await axios.post('/api/auth/login', { cell_number: phoneNumber, otp });
      // Navigate to the next step (e.g., pairing code entry)
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  return (
    <div className="login">
      {step === 'phone' ? (
        <>
          <h1>Log in to Connect</h1>
          <input
            type="text"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button onClick={requestOtp}>Next</button>
        </>
      ) : (
        <>
          <h1>Enter OTP</h1>
          <input
            type="text"
            placeholder="Enter the OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOtp}>Verify</button>
        </>
      )}
    </div>
  );
};

export default Login;
