import { ReactNode } from 'react';
import './globals.css'; // Import global styles

export const metadata = {
  title: 'fibertime™ - Connect Your TV',
  description: 'Easily connect your TV to fibertime™ using your mobile device.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main className="app-container">{children}</main>
      </body>
    </html>
  );
}