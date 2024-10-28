"use client";

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Rate } from 'antd';
import { Car, Fuel, IndianRupee } from 'lucide-react';
import { FaGasPump, FaSuperpowers } from 'react-icons/fa';
import { Button } from '../../components/ui/button';

const SearchResults = () => {
  const [city, setCity] = useState("No city selected");
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedCity = localStorage.getItem("cityName");
    if (storedCity) {
      setCity(storedCity);
    }
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get("/api/vehicle");
      setCars(response.data);
    } catch (error) {
      setError('Error fetching car data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
      <h2 className="text-3xl font-bold text-purple-600 mb-6">Search Results for: {city}</h2>
      {loading && <p className="text-gray-500">Loading cars...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap gap-6 w-full max-w-5xl">
        {cars.map((car) => (
          <div
            key={car._id}
            className="bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg p-4 transition-transform transform hover:shadow-2xl md:flex md:justify-around md:items-center w-full"
          >
            <img src={car.image} alt={car.name} className="w-48 h-32 self-center object-cover rounded-md mr-4 transition-transform duration-300 hover:scale-105" />
            <div className="flex flex-col justify-around">
              <h3 className="text-lg font-semibold text-purple-500 mb-2">{car.name}</h3>
              <div className="flex items-center mb-2">
                <Car className="mr-2  text-purple-500" />
                <p className="text-gray-700">Type: {car.type}</p>
              </div>
              <div className="flex items-center mb-2">
                <FaGasPump className="mr-2 text-purple-500" />
                <p className="text-gray-700">Mileage: {car.mileage} km</p>
              </div>
              <div className="flex items-center mb-2">
                <IndianRupee className="mr-2 text-purple-500" />
                <p className="text-gray-700 ">Price: {car.price} / hr</p>
              </div>
              <div className="flex items-center mb-2">
                <Fuel className="mr-2 text-purple-500" />
                <p className="text-gray-700">Fuel: {car.fuelType}</p>
              </div>
              <div className="flex items-center mb-2">
                <FaSuperpowers className="mr-2 text-purple-500" />
                <p className="text-gray-700">Transmission: {car.transmissionType}</p>
              </div>
              <div className="flex items-center mb-2">
                <Rate disabled defaultValue={car.rating} className="mr-2 text-purple-500" />
              </div>
              <Button className="bg-purple-500 text-white mt-4 font-semibold">Rent</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
