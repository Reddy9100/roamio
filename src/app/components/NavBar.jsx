"use client"

import { useRouter } from 'next/navigation'
import { Button } from '../../components/ui/button'
import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react';
import Cookie from 'js-cookie';
import Image from 'next/image';

const NavBar = () => {
  const router = useRouter()
  const [name, setName] = useState('');

  useEffect(() => {
    const userName = Cookie.get('userName');
    if (userName) {
      setName(userName);
    }
  }, []);

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
        <p
          className="text-white text-2xl sm:text-lg font-semibold tracking-wide px-4 py-1 "
          style={{
            fontFamily: `'Comic Neue', cursive`,
           
          }}
        >
          👋 {name }
        </p>
      </nav>
    </div>
  );
}

export default NavBar;
