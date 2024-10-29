"use client";

import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { FaGithub } from 'react-icons/fa';
import { signIn} from "next-auth/react";
import axios from 'axios';
import {  useRouter } from 'next/navigation';
import Cookie from "js-cookie"

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('email'); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter()

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.post("/api/user", {action :"sendOtp", email, name });
      console.log('OTP Response:', response.data);
      setStep('otp');
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to send OTP.');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try{
        const response = await axios.post("/api/user", {action :"verifyOtp", otp,email})
        console.log('OTP Response:', response.data);
        if(response.status === 200){
            Cookie.set("Roamio",response.data.Token)
            router.push('/');
        }
    }
    catch(e){
        setError(e.response?.data?.message || 'Failed to verify OTP.');
    }
    finally{
        setLoading(false);
        }
    
   
  };

  const handleGoogleSignIn = () => {
    const secretToken = process.env.NEXT_PUBLIC_SECRET_KEY
    console.log(secretToken)
    Cookie.set("Roamio",secretToken)
    signIn('github');
  };

  return (
    <div className="max-w-md mx-auto p-6 min-h-screen rounded-lg shadow-lg bg-white mt-10">
      <h1 className="text-4xl font-bold text-center text-purple-600 mb-4">Roamio</h1>
      <h2 className="text-2xl font-semibold text-center mb-2">Welcome Back!</h2>
      <p className="text-center text-gray-600 mb-6">
        Please log in to access your account and our amazing features!
      </p>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {step === 'email' && (
        <form onSubmit={handleSendOtp} className="flex flex-col">
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
          />
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
          />
          <Button
            type="submit"
            className="p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-200"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send OTP'}
          </Button>
        </form>
      )}
      {step === 'otp' && (
        <form onSubmit={handleOtpSubmit} className="flex flex-col">
          <input
            id="otp"
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
          />
          <Button
            type="submit"
            className="p-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-200"
            disabled={loading}
          >
            {loading ? 'Verifying...' : 'Verify OTP'}
          </Button>
        </form>
      )}
      <hr className='bg-purple-500 h-[3px] w-full mt-4 rounded-full'/>
      <Button onClick={handleGoogleSignIn} className="flex p-4 mt-4 items-center bg-black text-white rounded-lg w-full">
        <FaGithub className="mr-2 text-green-500" /> Sign in With Github
      </Button>
    </div>
  );
};

export default LoginForm;
