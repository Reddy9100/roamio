
import  {connectDB}  from '../../config/dbConfig';
import Vehicle from '../../models/vehicle';

export default async function handler(req, res) {
    await connectDB(); 

    if (req.method === 'GET') {
        try {
            const vehicles = await Vehicle.find(); 
            res.status(200).json(vehicles);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching vehicles' });
        }
    } else if (req.method === 'POST') {
        try {
            const newVehicle = new Vehicle(req.body);
            await newVehicle.save(); 
            res.status(201).json(newVehicle);
        } catch (error) {
            res.status(400).json({ message: 'Error saving vehicle', error });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
