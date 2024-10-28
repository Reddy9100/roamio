// src/app/layout.js
import './globals.css'; // Import global styles
import NavBar from "../app/components/NavBar"
import Footer from "../app/components/Footer"

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
        <meta name="description" content="My Next.js application description" />
      </head>
      <body>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
};

export default RootLayout;
