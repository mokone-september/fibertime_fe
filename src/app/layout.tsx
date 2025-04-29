import React from 'react';

export const metadata = {
  title: 'Fibertime TV Connection',
  description: 'Connect your TV to Fibertime using the pairing code.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}