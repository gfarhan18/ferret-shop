import Image from 'next/image';
import React from 'react';
import Button from '../shared/Button';

interface OurCommunityProps {
    title: string;
    description: string;
    buttonText: string;
    imageUrl: string;
}

const OurCommunity: React.FC<OurCommunityProps> = ({ title, description, buttonText, imageUrl }) => {
    return (
        <div className="container mx-auto px-4 py-12  flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 mb-6 md:mb-0 md:mr-6">
                <Image src="/community.jpeg" alt="Our Community Image" width={500} height={300} objectFit="cover" />
            </div>
            <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
                <p className="text-gray-600 mb-6">{description}</p>
                <Button variant='secondary' href='/community'>
                    {buttonText}
                </Button>
            </div>
        </div>
    );
};

export default OurCommunity;
