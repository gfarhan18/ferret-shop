import Image from 'next/image';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-blue-500 text-white py-10 px-5 md:px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">Welcome to Our Website</h1>
          <p className="mb-5">Explore our world of infinite possibilities. Your journey begins here.</p>
          <Link href="/about" passHref className="inline-block px-6 py-2.5 bg-cadet-gray text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-chinese-violet focus:bg-dark-green focus:shadow-lg focus:outline-none focus:ring-0 active:bg-misty-rose active:shadow-lg transition duration-150 ease-in-out">
              Learn More
          </Link>
        </div>
        <div className="flex-1">
          <Image src="/clock.jpeg" alt="Hero Image" width={500} height={300} objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
