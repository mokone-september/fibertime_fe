"use client"; 

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TVScreen from './pages/TVScreen';
import Login from './pages/Login';
import PairingCode from './pages/PairingCode';
import Connecting from './pages/Connecting';
import Connected from './pages/Connected';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TVScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pairing-code" element={<PairingCode />} />
        <Route path="/connecting" element={<Connecting />} />
        <Route path="/connected" element={<Connected />} />
      </Routes>
    </Router>
  );
};

export default App;