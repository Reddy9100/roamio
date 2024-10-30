import User from '../models/user';
import nodemailer from 'nodemailer';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import ejs from 'ejs';
import jwt from "jsonwebtoken"

const __filename = fileURLToPath(import.meta.url);
console.log(__filename)
const __dirname = dirname(__filename);
console.log(__dirname)


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

export const addUser = async (userData) => {
    try {
        const existingUser = await User.findOne({ email: userData.email });
        if (existingUser) {
            existingUser.otp = userData.otp
            return await existingUser.save();
        }
        const user = new User(userData);
        console.log('User to save:', user);
        return await user.save();
    } catch (error) {
        throw new Error(error.message || 'Failed to save user');
    }
};

// Function to send OTP email
export const sendOtpEmail = async (name, email, otp) => {
    try {
      const emailTemplatePath = path.resolve(process.cwd(), 'src/views/otpEmail.ejs');
      const htmlContent = await ejs.renderFile(emailTemplatePath, { name, otp });
  
      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: email,
        subject: 'Your OTP Code',
        html: htmlContent,
      };
  
      await transporter.sendMail(mailOptions);
      console.log('OTP email sent successfully');
    } catch (error) {
      console.error('Error sending OTP email:', error); // More detailed error logging
      throw new Error('Failed to send OTP email');
    }
  };
  
export const sendOtp = async (req, res) => {
    const { name, email } = req.body;

    const otp = Math.floor(100000 + Math.random() * 900000);
    console.log(`Generated OTP: ${otp}`);

    try {
        await sendOtpEmail(name, email, otp);
        await addUser({ name, email, otp });
        res.status(200).json({ message: 'OTP sent to email and user saved', otp });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};



export const verifyOtp = async(req,res) =>{
    const{otp,email} = req.body
    try{
        const user = await User.findOne({email})
        console.log(user)
        if(!user) return res.status(404).json({error: 'User not found'})
        if(user.otp != otp) return res.status(401).json({error: 'Invalid Credentials'})
        const Token = jwt.sign({email :user.email},process.env.JWT_SECRET,{expiresIn : "3h"})
        res.status(200).json({message: 'OTP verified successfully', user,Token})

}
catch(error){
    res.status(500).json({message : "Internal server Error"})
    console.log(error.message)
}
}
