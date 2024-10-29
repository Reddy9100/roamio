// src/app/_app.js
import React from 'react';
import { CarsProvider } from '../context/cars';
import RootLayout from './layout';

const MyApp = ({ Component, pageProps }) => {
  return (
    <CarsProvider>
      <RootLayout>
        
        <Component {...pageProps} />
      </RootLayout>
    </CarsProvider>
  );
};

export default MyApp;
