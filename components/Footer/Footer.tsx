import Link from 'next/link';
import React, { ReactNode } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-white dark:bg-black">
      <div className="container px-4 py-9 mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Small text on the left */}
        <div className="text-neutral-800 dark:text-neutral-200 text-sm underline">
          An Apoksy Production
        </div>
        
        {/* Centered Copyright */}
        <div className="text-center text-neutral-700 dark:text-neutral-200">
          Copyright © 2024
        </div>
        
        {/* Social Icons on the Right */}
        <ul className="flex items-center mr-4 lg:mr-6 xl:mr-8">
          <SocialIcon href="https://twitter.com" icon={<FaTwitter />} />
          <SocialIcon href="https://facebook.com" icon={<FaFacebookF />} />
          <SocialIcon href="https://linkedin.com" icon={<FaLinkedinIn />} />
          <SocialIcon href="https://instagram.com" icon={<FaInstagram />} />
        </ul>
      </div>
    </footer>
  );
};
interface SocialIconProps {
  href: string;
  icon: ReactNode;  // ReactNode covers any valid React child (string, number, JSX, null, etc.)
}

export const SocialIcon: React.FC<SocialIconProps> = ({ href, icon }) => (
<li className="p-1">
  <Link href={href} className="social-icon">
      {icon}
  </Link>
</li>
);

export default Footer;
