// Header.js
import { ReactNode, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaChevronDown, FaSearch } from 'react-icons/fa';
import './styles.css'; // Import your styles here

const Header = () => {
  const [activeMenu, setActiveMenu] = useState('Home');

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Contact', href: '/contact' },
    { name: 'Community', href: '/community' },
    { name: 'Shop', href: '/shop' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Mission', href: '/mission' },
  ];
  

  return (
    <header className="header justify-between items-center">
      <Link href="/" className="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
      </Link>
      <nav className="header-links font-semibold text-base lg:text-lg">
        <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
          {menuItems.map((item) => (
            <li key={item.name} className={`p-3 xl:p-6 ${activeMenu === item.name ? 'active' : ''}`}
                onClick={() => setActiveMenu(item.name)}>
              <Link href={item.href}>
                  <span className="nav-link">{item.name} </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav>
        <ul className="flex items-center mr-4 lg:mr-6 xl:mr-8">
          <SocialIcon href="https://twitter.com" icon={<FaTwitter />} />
          <SocialIcon href="https://facebook.com" icon={<FaFacebookF />} />
          <SocialIcon href="https://linkedin.com" icon={<FaLinkedinIn />} />
          <SocialIcon href="https://instagram.com" icon={<FaInstagram />} />
        </ul>
      </nav>
    </header>
  );
};
interface SocialIconProps {
    href: string;
    icon: ReactNode;  // ReactNode covers any valid React child (string, number, JSX, null, etc.)
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon }) => (
  <li className="p-1">
    <Link href={href} className="social-icon">
        {icon}
    </Link>
  </li>
);

export default Header;
