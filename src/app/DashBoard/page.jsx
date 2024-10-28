"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import Lottie from 'lottie-react';

const CarAnimation = require("../../../public/animation/cars.json"); 

const Page = () => {

    const router = useRouter()

    const handleClick =()=>{
        router.push("/Places")
    }
  return (
    <div className='bg-white flex flex-col md:flex-row  justify-around items-center md:min-h-screen h-[90vh]'>
      <div className='flex flex-col max-w-[600px] p-6 '>
        <h1 className='text-3xl lg:text-5xl text-purple-500 font-serif font-semibold'>
          Connect, Rent & Ride
        </h1>
        <p className='mt-4 text-sm  md:text-xl text-gray-500 md:font-bold lg:leading-snug'>
          Simply choose your vehicle, select the rental duration, and hit the road! 
          Our easy booking process ensures a hassle-free experience.
        </p>
        <button onClick={handleClick} className='md:block hidden bg-black font-semibold w-[200px] rounded-lg text-white p-4 hover:bg-purple-600 hover:transition-all duration-300 ease-in-out mt-4'>
          Book Now
        </button>
        <button onClick={handleClick} className='md:hidden bg-black flex items-center justify-center w-full  text-white p-2 mt-12'>
          <span className='mr-2 font-semibold'>Book Now</span>
          <Lottie animationData={CarAnimation} loop={true} className="w-[40px]" />
        </button>

        
      </div>
      <Lottie animationData={CarAnimation} loop={true} className="hidden md:block md:w-96 mt-6" /> 
    </div>
  );
}

export default Page;
