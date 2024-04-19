import Image from 'next/image';
import Link from 'next/link';
import Button from '../shared/Button';

const HeroSection: React.FC = () => {
  return (
    <div className=" text-black py-10 px-5 md:px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">Welcome to Our Website</h1>
          <p className="mb-5">Explore our world of infinite possibilities. Your journey begins here.</p>
          <Button variant='primary' href="/about"  >
              Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
