// components/OurMission.tsx
import Image from 'next/image';
import React from 'react';
import Button from '../shared/Button';

interface OurMissionProps {
    title: string;
    description: string;
    buttonText: string;
    imageUrl: string;
}

const OurMission: React.FC<OurMissionProps> = ({ title, description, buttonText, imageUrl }) => {
    return (
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 mb-6 md:mb-0 md:mr-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
                <p className="text-gray-600 mb-6">{description}</p>
                <Button variant='primary' href='/mission' >
                    {buttonText}
                </Button>
            </div>
            <div className="flex-1">
                <Image src="/mission.jpeg" alt="Our Mission Image" width={500} height={300} objectFit="cover" />
            </div>
        </div>
    );
};

export default OurMission;
