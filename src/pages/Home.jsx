// src/pages/Home.jsx
import React from 'react';
import ConverterCard from '../components/ConverterCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl p-4">
        <ConverterCard />
      </div>
    </div>
  );
}
