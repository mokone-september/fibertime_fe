"use client"; 

import { useEffect, useState } from "react";

export default function HomePage() {
  const [pairingCode, setPairingCode] = useState("");

  useEffect(() => {
    // Simulate API call to generate pairing code
    const generatePairingCode = () => {
      const code = Math.random().toString(36).substring(2, 6).toUpperCase();
      setPairingCode(code);
    };
    generatePairingCode();
  }, []);

  return (
    <main className="flex flex-col min-h-screen items-center justify-center text-center p-4">
      <h1 className="text-4xl font-bold mb-4">Connect Your TV</h1>
      <p className="text-lg mb-2">On your phone, go to <strong>fibertime.tv</strong> and enter this code:</p>
      <div className="text-6xl font-mono bg-gray-200 p-4 rounded-lg mb-4">{pairingCode}</div>
      <p className="text-sm text-gray-500 mb-4">Need help? <a href="https://wa.me/1234567890" className="text-blue-500 underline">Contact us on WhatsApp</a>.</p>
    </main>
  );
}
