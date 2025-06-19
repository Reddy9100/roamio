'use client';

import React, { useState } from 'react';
import Lottie from 'lottie-react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Cookie from 'js-cookie';
import Image from 'next/image';


import { Toaster }  from '../../../components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import { Toast } from '@/components/ui/toast';


 

const moneyAnimation = require("../../../public/animation/login.json");

export default function LoginForm() {
  const [step, setStep] = useState('email');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { toast } = useToast();

  const handleSendOtp = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await axios.post('/api/user', { action: 'sendOtp', name, email });
      toast({
        title: 'OTP Sent',
       variant:"default"
      });
      Cookie.set('userName', name,   { expires: 2 })
Cookie.set('userEmail', email, { expires: 2 })



      setStep('otp');
    } catch (err) {
      toast({
        title: 'Failed to Send OTP',
        variant:"error"
       
      });
           
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await axios.post('/api/user', { action: 'verifyOtp', otp, email });
      Cookie.set('Roamio', res.data.Token, { expires: 2 });

    
      toast({
        title: 'Logged In',
      
         variant:"default"
      });
      const query = new URLSearchParams({ name, email }).toString()
router.push(`/?${query}`)
      
    } catch (err) {
      toast({
        title: 'OTP Verification Failed',
       
        variant: 'error',
      });
      
     
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
   
    <div className="flex flex-col md:hidden min-h-screen bg-white p-6 space-y-6">
      
        {/* Logo */}
        <div className="flex ">
          <Image
            src="/pics/logomaker.png"
            alt="Money Mate Logo"
            width={100}
            height={100}
            priority
          />
        </div>

        

        

        {/* Lottie */}
       

        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl flex gap-3 justify-center items-center font-extrabold text-[#B87333]">
            👋 Welcome Mate!  <div className=" ">
          <Lottie
            animationData={moneyAnimation}
            loop
            className="w-[80px] h-[80px]"
          />
        </div>
          </h1>
         
        
        </div>

        {/* Error */}
        {error && (
          <div className="text-red-600 text-center font-medium">{error}</div>
        )}

        {/* Form */}
        <div className="w-full max-w-md mx-auto border  border-green-900 p-6 rounded-[16px] shadow-lg">
        <p className="text-gray-600 my-2 font-semibold  text-sm">
            {step === 'email'
              ? "Let's get you signed in to Money Mate"
              : `We've sent a 6-digit code to ${email}`}
          </p>
          {step === 'email' ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#B87333]"
                />
              </div>
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#B87333]"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-green-900 text-white rounded-lg font-semibold hover:bg-[#196c19] disabled:opacity-50 transition"
              >
                {loading ? 'Sending OTP…' : 'Send OTP 🔐'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  OTP Code
                </label>
                <input
                  type="text"
                  placeholder="123456"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#B87333]"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#228B22] text-white rounded-lg font-semibold hover:bg-[#196c19] disabled:opacity-50 transition"
              >
                {loading ? 'Verifying…' : 'Verify & Login ✅'}
              </button>
            </form>
          )}

          <div className="text-center text-sm text-gray-600 mt-4">
            Having trouble?{' '}
            <a
              href="mailto:kanthurireddysai@gmail.com"
              className="text-[#B87333] underline"
            >
              Contact support
            </a>
          </div>
        </div>
       
      </div>
      </>
  );
}
