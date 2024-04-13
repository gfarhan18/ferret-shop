import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-200 text-white dark:bg-neutral-600">
      <div className="container px-4 py-9 mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-wrap justify-center space-x-9 mb-6 md:mb-0">
          <a href="#" className="text-neutral-800 dark:text-neutral-200">
            {/* Social Icon Placeholder */}
          </a>
          <a href="#" className="text-neutral-800 dark:text-neutral-200">
            {/* Social Icon Placeholder */}
          </a>
          <a href="#" className="text-neutral-800 dark:text-neutral-200">
            {/* Social Icon Placeholder */}
          </a>
          <a href="#" className="text-neutral-800 dark:text-neutral-200">
            {/* Social Icon Placeholder */}
          </a>
          <a href="#" className="text-neutral-800 dark:text-neutral-200">
            {/* Social Icon Placeholder */}
          </a>
        </div>
        <div className="text-center md:text-left md:flex-grow">
          <p className="text-neutral-700 dark:text-neutral-200 text-sm">
            © 2023 Copyright:
            <a href="https://google.com" className="text-neutral-800 dark:text-neutral-400">
              Ferret
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
