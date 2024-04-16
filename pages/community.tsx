import Button from '@/components/shared/Button'
import OurTeam from '@/components/shared/OurTeam'
import OurVision from '@/components/shared/OurVision'
import Image from 'next/image'
import React from 'react'

const community = () => {
  return (
    <div>
        <div className="relative h-[70vh] bg-gray-800 text-white flex items-center justify-center">
            <Image
                src="/community.jpeg"
                layout="fill"
                objectFit="cover"
                alt="Community"
                className="absolute z-0 opacity-50"
            />
            <div className="z-10 text-center p-5">
                <h1 className="text-5xl font-bold mb-4 text-white">
                    Join Our Community
                </h1>
                <p className="text-xl mb-6">
                    Connect, learn, and grow with industry leaders and enthusiasts.
                </p>
                <Button variant='primary'>
                    Get Involved
                </Button>
            </div>
        </div>
        <OurVision />
        <OurTeam />
    </div>
  )
}

export default community