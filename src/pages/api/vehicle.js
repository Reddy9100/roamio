// pages/api/vehicles.js
import { connectDB } from '../../config/dbConfig';
import { getVehicles, addVehicle } from '../../controllers/vehicleController';

export default async function handler(req, res) {
    await connectDB(); 

    if (req.method === 'GET') {
        try {
            const vehicles = await getVehicles(); 
            res.status(200).json(vehicles);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching vehicles' });
        }
    } else if (req.method === 'POST') {
        try {
            const newVehicle = await addVehicle(req.body); 
            res.status(201).json(newVehicle);
        } catch (error) {
            res.status(400).json({ message: 'Error saving vehicle', error });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
