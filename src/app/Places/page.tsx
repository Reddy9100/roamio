"use client"

import React from 'react';
import { Search } from "lucide-react";
import { useRouter } from 'next/navigation';

const Page = () => {

    const router = useRouter()
    const handleOnClick = (city:any) =>{
        JSON.stringify(localStorage.setItem("cityName",city))
        router.push('/Booking')
    }
  return (
    <div className='min-h-screen flex flex-col justify-start mt-7 items-center px-4'>
      {/* Search Input */}
      <div className="relative mb-5 w-full max-w-md">
        <input
          type="text"
          placeholder="Search City"
          className="border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 p-2 pl-10"
        />
        <Search 
          size={20} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" 
        />
      </div>

      {/* City Images */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
        {[
          { src: "/pics/mumbai.png", alt: "Mumbai" },
          { src: "/pics/bangalore.png", alt: "Bangalore" },
          { src: "/pics/hyderabad.webp", alt: "Hyderabad" },
          { src: "/pics/vishakapatnam.png", alt: "Vishakapatnam" }
        ].map((city, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative group" onClick={() => handleOnClick(city.alt)}>
              <img 
                src={city.src} 
                alt={city.alt} 
                className="rounded-lg w-full h-auto transition-transform transform group-hover:scale-105 group-hover:shadow-lg shadow-2xl"
              />
              <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white p-4 font-semibold text-sm rounded px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {city.alt}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
