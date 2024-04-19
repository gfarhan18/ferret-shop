import Image from "next/image";
import React from "react";

const mission = () => {
  return (
    <div>
      <div className=" text-black">
        {/* Hero section */}
        <div className="relative bg-white">
          <Image
            width="2000"
            height="500"
            className="w-full object-cover h-96"
            src="https://cdn.shopify.com/s/files/1/1404/8810/files/shutterstock_162976271-min.jpg?15124296873298194252"
            alt="Courier Service"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-4xl font-semibold">
            Fast, Reliable Courier Services
          </div>
        </div>

        {/* Services offered */}
        <div className="text-center py-8">
          <h1 className="text-3xl font-semibold text-gray-800">Our Services</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
            Providing timely and reliable courier services to meet your personal
            and business needs.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 px-5 md:px-20">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold">Same-Day Delivery</h2>
              <p className="mt-2">
                Ensure your packages arrive on the same day with our efficient
                local delivery solutions.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold">Overnight Delivery</h2>
              <p className="mt-2">
                Critical deliveries can be handled overnight, arriving by the
                next morning.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold">International Shipping</h2>
              <p className="mt-2">
                We ship internationally with global tracking, covering over 200
                countries.
              </p>
            </div>
          </div>
        </div>

        {/* Tracking feature callout */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-semibold">Track Your Package</h2>
          <p className="mt-4 text-lg">
            Use our state-of-the-art tracking system to keep tabs on your
            shipment every step of the way.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-800 rounded-md hover:bg-gray-200 transition-colors">
            Track Now
          </button>
        </div>

        {/* Testimonials */}
        <div className="py-12 bg-white">
          <h2 className="text-center text-3xl font-semibold">
            What Our Customers Say
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 px-5 md:px-20">
            <div className="text-gray-800 shadow-lg rounded p-3">
              <p className="text-lg">
                The fastest service I&apos;ve ever used. Got my package the same
                day!
              </p>
              <strong className="block mt-4">- Jane Doe</strong>
            </div>
            <div className="text-gray-800 shadow-lg rounded p-3">
              <p className="text-lg">
                Excellent international shipping options. It&apos;s never been
                easier.
              </p>
              <strong className="block mt-4">- John Smith</strong>
            </div>
            <div className="text-gray-800 shadow-lg rounded p-3">
              <p className="text-lg">
                Their tracking system is a game-changer. Total peace of mind.
              </p>
              <strong className="block mt-4">- Emily Johnson</strong>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="flex flex-wrap justify-center py-12 bg-gray-100">
          <button className="bg-blue-800 text-white py-4 px-8 rounded-md hover:bg-blue-700 transition duration-300">
            Get Started with Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default mission;
