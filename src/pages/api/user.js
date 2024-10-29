import { connectDB } from '../../config/dbConfig';
import { sendOtp,verifyOtp} from '../../controllers/user';

export default async function handler(req, res) {
    await connectDB();

    if (req.method === 'POST') {
        if (req.body.action === 'sendOtp') {
            try {
                await sendOtp(req, res);
            } catch (error) {
                console.error('Error in sending OTP:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        } else if (req.body.action === 'verifyOtp') {
            try {
                await verifyOtp(req, res);
            } catch (error) {
                console.error('Error in verifying OTP:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        } else {
            res.status(400).json({ error: 'Invalid action specified' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
