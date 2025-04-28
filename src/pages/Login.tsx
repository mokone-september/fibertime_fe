import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [step, setStep] = useState<number>(1);
  const navigate = useNavigate();

  const requestOtp = () => {
    axios.post('/api/auth/request-otp', { cell_number: phoneNumber })
      .then(() => setStep(2))
      .catch(error => console.error('Error requesting OTP:', error));
  };

  const verifyOtp = () => {
    axios.post('/api/auth/login', { cell_number: phoneNumber, otp })
      .then(() => navigate('/pairing-code'))
      .catch(error => console.error('Error verifying OTP:', error));
  };

  return (
    <div className="login">
      {step === 1 ? (
        <>
          <h1>Log In</h1>
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
