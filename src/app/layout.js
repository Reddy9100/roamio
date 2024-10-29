// src/app/layout.js
"use client";

import './globals.css'; 
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { usePathname } from 'next/navigation';
import ProtectedRoute from './components/ProtectedRoute';

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
        {!isLoginPage && <NavBar />} 
        <ProtectedRoute>{children}</ProtectedRoute> 
        {!isLoginPage && <Footer />} 
      </body>
    </html>
  );
};

export default RootLayout;
