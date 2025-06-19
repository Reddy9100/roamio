// src/app/layout.js
"use client";

import './globals.css'; 
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { usePathname } from 'next/navigation';
import ProtectedRoute from './components/ProtectedRoute';
import { CarsProvider } from '../context/cars'; // Adjust the import path as necessary
import { Inter, Inter_Tight, Roboto_Mono, } from 'next/font/google';
import BottomNavBar from './components/Footer';


const inter = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400'],

});



const RootLayout = ({ children }) => {
  const router = usePathname();
  const isLoginPage = router === "/Login";

  

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <title>My Next.js App</title>
        <meta name="description" content="My Next.js application description" />
      </head>
      <body>
        <CarsProvider>
          
          {/* {!isLoginPage && <NavBar />}  */}
          <ProtectedRoute>{children}</ProtectedRoute> 
          {!isLoginPage && <BottomNavBar />} 
        </CarsProvider>
      </body>
    </html>
  );
};

export default RootLayout;
