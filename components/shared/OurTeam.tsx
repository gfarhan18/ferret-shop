import Image from 'next/image'
import React from 'react'

const OurTeam = () => {
  return (
    <section className="max-w-screen-xl mx-auto py-20 px-8 lg:px-10">
  <h2 className="text-4xl xl:text-5xl capitalize text-center text-indigo-900 font-bold">our team</h2>
  <hr className="mx-auto w-12 h-1 outline-0 border-0 bg-green-300 block mt-4 mb-6"/>
  <p className="text-center text-xl text-gray-800">Our team consists only of the best talents</p>

  <div className="flex flex-col gap-6 mt-16">
    <div className="flex flex-col md:flex-row gap-6">
      <div className="w-full lg:w-1/4 rounded-3xl overflow-hidden">
        <Image src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Hanna Lubin" className="w-full h-full object-cover aspect-video lg:aspect-square" width={200} height={200}/>
      </div>
      <div className="w-full lg:w-9/12 bg-red-100 rounded-3xl flex flex-col justify-center p-8 lg:p-14">
        <h3 className="text-2xl capitalize text-indigo-900 font-semibold">hanna lubin</h3>
        <span className="inline-block capitalize text-xl text-indigo-900 font-light mt-1.5 mb-5">Seller</span>
        <p className="text-indigo-900 opacity-75 leading-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam saepe sint expedita suscipit nemo nihil cupiditate culpa temporibus, facere nisi.</p>
      </div>
    </div>
    <div className="flex flex-col md:flex-row-reverse gap-6">
      <div className="w-full lg:w-1/4 rounded-3xl overflow-hidden">
        <Image src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Erin Calzoni" className="w-full h-full object-cover aspect-video lg:aspect-square" width={200} height={200}/>
      </div>
      <div className="w-full lg:w-9/12 bg-blue-100 rounded-3xl flex flex-col justify-center p-8 lg:p-14">
        <h3 className="text-2xl capitalize text-indigo-900 font-semibold">Erin Calzoni</h3>
        <span className="inline-block capitalize text-xl text-indigo-900 font-light mt-1.5 mb-5">Marketer</span>
        <p className="text-indigo-900 opacity-75 leading-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam saepe sint expedita suscipit nemo nihil cupiditate culpa temporibus, facere nisi.</p>
      </div>
    </div>
    <div className="flex flex-col md:flex-row gap-6">
      <div className="w-full lg:w-1/4 rounded-3xl overflow-hidden">
        <Image src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-full h-full object-cover aspect-video lg:aspect-square" width={200} height={200}/>
      </div>
      <div className="w-full lg:w-9/12 bg-yellow-100 rounded-3xl flex flex-col justify-center p-8 lg:p-14">
        <h3 className="text-2xl capitalize text-indigo-900 font-semibold">jenna smith</h3>
        <span className="inline-block capitalize text-xl text-indigo-900 font-light mt-1.5 mb-5">
          saleswoman</span>
        <p className="text-indigo-900 opacity-75 leading-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam saepe sint expedita suscipit nemo nihil cupiditate culpa temporibus, facere nisi.</p>
      </div>
    </div>
    <div className="flex flex-col md:flex-row-reverse gap-6">
      <div className="w-full lg:w-1/4 rounded-3xl overflow-hidden">
        <Image src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-full h-full object-cover aspect-video lg:aspect-square" width={200} height={200}/>
      </div>
      <div className="w-full lg:w-9/12 bg-green-100 rounded-3xl flex flex-col justify-center p-8 lg:p-14">
        <h3 className="text-2xl capitalize text-indigo-900 font-semibold">christina meyer</h3>
        <span className="inline-block capitalize text-xl text-indigo-900 font-light mt-1.5 mb-5">CEO</span>
        <p className="text-indigo-900 opacity-75 leading-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam saepe sint expedita suscipit nemo nihil cupiditate culpa temporibus, facere nisi.</p>
      </div>
    </div>
  </div>
</section>
  );
}

export default OurTeam