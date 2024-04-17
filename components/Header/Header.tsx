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
    <header className="header justify-between items-center overflow-hidden text-black">
      <Link href="/" className="border flex-shrink-0 flex items-center justify-center ">
          <Image src="/fslogo.png" alt="Logo" width={100} height={100} />
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
    </header>
  );
};


export default Header;
