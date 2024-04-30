// pages/files.tsx

import Button from '@/components/shared/Button';
import React from 'react';

const files = [
  { name: 'AI White Paper', path: '/M.farhan_Resume.pdf' },
  { name: 'Our Resume', path: '/M.farhan_Resume.pdf' },
  { name: 'Nono Technology White Paper', path: '/M.farhan_Resume.pdf' },

  // Add more files as needed
];

const whitePapers: React.FC = () => {
  const openFileInNewTab = (filePath: string) => {
    window.open(filePath, '_blank');
  };

  return (
    <div className="py-8 text-black">
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Section */}
        <div className=" p-4 justify-center">
          <h2 className="text-2xl font-bold mb-4">White Papers</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ligula ut justo
            tincidunt aliquam.
          </p>
          <Button variant="primary" className=" rounded-md mb-4" onClick={() => openFileInNewTab('/M.farhan_Resume.pdf')}>
            Open White Paper
          </Button>
          <ul className="text-left">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
          </ul>
        </div>
        {/* Right Section */}
        <div className=" p-4 flex justify-center items-center">
          <img src="/clock.jpeg" alt="Image" className="max-w-full" />
        </div>
      </div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Our White Papers</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {files.map((file, index) => (
            <li
              key={index}
              className="bg-yellow-500 rounded-md shadow-md p-4 flex items-center justify-between hover:bg-yellow-600 transition duration-300 ease-in-out hover:cursor-pointer"
              onClick={() => openFileInNewTab(file.path)}
              style={{ cursor: 'pointer' }}
            >
              <span>{file.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default whitePapers;
