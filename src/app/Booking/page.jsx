"use client";

import React from 'react';
import { DatePicker } from '../components/DatePicker'; // Adjust the path as needed
import { SelectOption } from '../components/select';
import { useRouter } from 'next/navigation';

const BookingPage = () => {

    const router  = useRouter()

    const handleOnClick = () =>{
        router.push('/Results')
    }
  return (
    <div className='bg-white min-h-screen flex justify-center items-center'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl'>
        <h1 className='text-3xl font-bold text-purple-600 mb-6 text-center'>
          Book Your Ride
        </h1>
        
        <div className='flex flex-col md:flex-row md:space-x-4 mb-4'>
          <div className='w-full mb-4'>
            <label className='block text-sm font-semibold mb-1'>Destination</label>
            <input
              type='text'
              placeholder='Enter your destination'
              className='border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 p-2'
            />
          </div>
          
          <div className='w-full mb-4'>
            <label className='block text-sm font-semibold mb-1'>Start Date</label>
            <div className='md:mt-0'>
              <DatePicker />
            </div>
          </div>
          
          <div className='w-full mb-4'>
            <label className='block text-sm font-semibold mb-1'>End Date</label>
            <div className='md:mt-0'>
              <DatePicker />
            </div>
          </div>
        </div>

        <div className='w-full mb-4'>
          <label className='block text-sm font-semibold mb-1'>Vehicle Type</label>
          <SelectOption />
        </div>

        <button onClick={handleOnClick} className='bg-purple-600 text-white rounded-lg px-4 py-2 hover:bg-purple-700 transition duration-300 w-full'>
          Search Vehicles
        </button>

                {/* Additional Informational Text */}
        <div className='mt-6 text-center'>
          <p className='text-lg text-gray-700 mb-2'>
            Your journey starts here!
          </p>
          <p className='text-gray-500'>
            Whether you&apos;re heading to a business meeting or planning a weekend getaway, 
            we have the perfect vehicle for you. Book your ride today and enjoy a smooth experience!
          </p>
          <p className='text-gray-500 mt-2'>
            Don&apos;t forget to check our special offers and discounts available for early bookings!
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;