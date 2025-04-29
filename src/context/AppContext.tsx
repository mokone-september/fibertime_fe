"use client"; 

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppState {
  pairingCode: string;
  setPairingCode: (code: string) => void;
  deviceId: string;
  setDeviceId: (id: string) => void;
  connectionStatus: string;
  setConnectionStatus: (status: string) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pairingCode, setPairingCode] = useState<string>('');
  const [deviceId, setDeviceId] = useState<string>('');
  const [connectionStatus, setConnectionStatus] = useState<string>('');

  return (
    <AppContext.Provider
      value={{
        pairingCode,
        setPairingCode,
        deviceId,
        setDeviceId,
        connectionStatus,
        setConnectionStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppState => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
