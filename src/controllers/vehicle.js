
import Vehicle from '../models/vehicle';


export const getVehicles = async () => {
    return await Vehicle.find();
};


export const addVehicle = async (vehicleData) => {
    const vehicle = new Vehicle(vehicleData);
    return await vehicle.save();
};
