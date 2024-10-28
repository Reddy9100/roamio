
import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
    type: { type: String, required: true },
    name: { type: String, required: true },
    mileage: { type: Number, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    price: { type: Number, required: true },
    fuelType: { type: String, required: true },
    transmissionType: { type: String, required: true },
});

const Vehicle = mongoose.models.Vehicle || mongoose.model('Vehicle', vehicleSchema);

export default Vehicle;
