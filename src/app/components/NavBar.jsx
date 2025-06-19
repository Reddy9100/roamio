"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '../../components/ui/button'
import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react';
import Cookie from 'js-cookie';
import Image from 'next/image';

const NavBar = () => {
  const router = useRouter()


 

  const params = useSearchParams()
  const name  = params.get('name')  || ''
  const email = params.get('email') || ''

  const moneyAnimation = require("../../../public/animation/hello.json");


  const handleClick = () => {
    router.push('/Login');
  };

  return (
    <div>
      <nav className="navbar fixed w-full h-[10vh] bg-green-900 flex justify-between items-center px-6 z-50 shadow-md">
        {/* Logo */}
        <div className="flex items-center rounded-[16px]  bg-white gap-2">
          <Image
            src="/pics/logomaker.png"
            alt="Money Mate Logo"
            width={60}
            height={60}
            className="rounded-full"
            priority
          />
          <span className="text-white text-lg font-bold tracking-wider hidden sm:inline">Money Mate</span>
        </div>

        {/* User Name */}
        <div>
          
        <div className='flex h-[60px] items-center  justify-center'>
     
     <Lottie
                animationData={moneyAnimation}
                loop
                className="h-[90px] w-[100px]"
              />
              <p
          className="text-white text-3xl sm:text-3xl font-semibold tracking-wide pr-4 py-1 "
          style={{
            fontFamily: `'Comic Neue', cursive`,
           
          }}
        >
              {name }
        </p>

        

  </div>
        
        </div>
       
      </nav>
    </div>
  );
}

export default NavBar;
