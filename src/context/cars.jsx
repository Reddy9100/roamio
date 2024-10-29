"use client"; // This should be at the top of the file

import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const CarsContext = createContext();

export const CarsProvider = ({ children }) => {
    const [cars, setCars] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchCars = async () => {
        try {
            const response = await axios.get('/api/vehicle');
            setCars(response.data);
        } catch (error) {
            console.error("Error fetching cars:", error);
            setError("Failed to fetch cars.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCars();
    }, []);

    return (
        <CarsContext.Provider value={{ cars, error, loading }}>
            {children}
        </CarsContext.Provider>
    );
};

export const useCarContext = () => {
    const context = useContext(CarsContext);
    if (!context) {
        throw new Error("useCarContext must be used within a CarsProvider");
    }
    return context;
};
