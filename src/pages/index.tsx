import type { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-[90vh]">
      <h1 className="inline-block text-6xl text-blue-400">
        Hello world by <span className="font-bold">NextJS</span> with{' '}
        <span className="font-bold text-indigo-600">TailwindCSS</span>
      </h1>
    </div>
  );
};

export default Home;
