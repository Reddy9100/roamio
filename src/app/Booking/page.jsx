"use client";

import React from 'react';
import { DatePickerDemo } from '@/app/components/DatePicker'; // Adjust the path as needed
import SelectOption from '../components/select';

const BookingPage = () => {
  return (
    <div className='bg-gray-100 min-h-screen flex justify-center items-center'>
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
            <div className=' md:mt-0'>
              <DatePickerDemo />
            </div>
          </div>
          
          <div className='w-full mb-4'>
            <label className='block text-sm font-semibold mb-1'>End Date</label>
            <div className=' md:mt-0'>
              <DatePickerDemo />
            </div>
          </div>
        </div>

        <div className='w-full mb-4'>
          <label className='block text-sm font-semibold mb-1'>Vehicle Type</label>
          <SelectOption />
        </div>

        <button className=' bg-purple-600 text-white rounded-lg px-4 py-2 hover:bg-purple-700 transition duration-300 w-full'>
          Search Vehicles
        </button>
      </div>
    </div>
  );
}

export default BookingPage;
