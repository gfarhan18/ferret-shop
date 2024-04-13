// pages/about.tsx

import React from 'react';
import Head from 'next/head';

const About: React.FC = () => {
    return (
        <div>
            <Head>
                <title>About Us</title>
                <meta name="description" content="Learn more about us and what we do." />
            </Head>
            <main className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-4xl font-bold">About Us</h1>
                <p className="mt-4 text-xl">
                    Welcome to our website! We are passionate about providing the best services
                    and solutions to our customers. Learn more about our mission and vision
                    as we continue to innovate and lead in our industry.
                </p>
            </main>
        </div>
    );
};

export default About;
