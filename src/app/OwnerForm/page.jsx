"use client";
import { useState } from 'react';
import axios from "axios"
const VehicleForm = () => {
  const [vehicle, setVehicle] = useState({
    type: '',
    city : '',
    name: '',
    mileage: '',
    image: '',
    rating: '',
    price: '',
    fuelType: '',
    transmissionType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle({ ...vehicle, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(vehicle);
    const response = await axios.post("/api/vehicle" , vehicle)
    console.log(response.data);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-purple-500 mb-6">Register Your Vehicle</h2>

      {/* Vehicle Type Select */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Vehicle Type:</label>
        <select
          name="type"
          value={vehicle.type}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-purple-300"
          required
        >
          <option value="">Select a vehicle type</option>
          <option value="car">Car</option>
          <option value="Bike">Bike</option>
          
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Select City:</label>
        <select
          name="city"
          value={vehicle.city}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-purple-300"
          required
        >
          <option value="">Select City</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Hyd">Hyderabad</option>
          <option value="vishka">VishakaPatnam</option>
          <option value="chennai">Chennai</option>
        </select>
      </div>

      {/* Name */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Name:</label>
        <input
          type="text"
          name="name"
          value={vehicle.name}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-purple-300"
          required
        />
      </div>

      {/* Mileage */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Mileage:</label>
        <input
          type="number"
          name="mileage"
          value={vehicle.mileage}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-purple-300"
          required
        />
      </div>

      {/* Image URL */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Image URL:</label>
        <input
          type="url"
          name="image"
          value={vehicle.image}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-purple-300"
          required
        />
      </div>

      {/* Rating */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Rating:</label>
        <input
          type="number"
          name="rating"
          value={vehicle.rating}
          onChange={handleChange}
          min="1"
          max="5"
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-purple-300"
          required
        />
      </div>

      {/* Price */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Price:</label>
        <input
          type="number"
          name="price"
          value={vehicle.price}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-purple-300"
          required
        />
      </div>

      {/* Fuel Type */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Fuel Type:</label>
        <input
          type="text"
          name="fuelType"
          value={vehicle.fuelType}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-purple-300"
          required
        />
      </div>

      {/* Transmission Type */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Transmission Type:</label>
        <input
          type="text"
          name="transmissionType"
          value={vehicle.transmissionType}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-purple-300"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-purple-500 text-white p-2 rounded-md hover:bg-purple-600 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default VehicleForm;
