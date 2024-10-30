// src/app/layout.js
"use client";

import './globals.css'; 
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { usePathname } from 'next/navigation';
import ProtectedRoute from './components/ProtectedRoute';
import { CarsProvider } from '../context/cars'; // Adjust the import path as necessary

const RootLayout = ({ children }) => {
  const router = usePathname();
  const isLoginPage = router === "/Login";

  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
        <meta name="description" content="My Next.js application description" />
      </head>
      <body>
        <CarsProvider>
          {!isLoginPage && <NavBar />} 
          <ProtectedRoute>{children}</ProtectedRoute> 
          {!isLoginPage && <Footer />} 
        </CarsProvider>
      </body>
    </html>
  );
};

export default RootLayout;
