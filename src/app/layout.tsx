import React from 'react';
import { AppProvider } from '../context/AppContext';

export const metadata = {
  title: 'Fibertime TV Connection',
  description: 'Connect your TV to Fibertime using the pairing code.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}