import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaChevronDown, FaSearch } from 'react-icons/fa';

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
    <motion.header
      className="header justify-between items-center overflow-hidden text-black"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="flex-shrink-0 flex items-center justify-center ">
        <Image src="/fslogo.png" alt="Logo" width={150} height={150} />
      </Link>
      <nav className="header-links font-semibold text-base lg:text-lg">
        <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
          {menuItems.map((item) => (
            <motion.li
              key={item.name}
              className={`p-3 xl:p-6 transition duration-400 ease  ${activeMenu === item.name ? 'active' : ''}`}
              onClick={() => setActiveMenu(item.name)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={item.href}>
                <span className="nav-link">{item.name} </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
