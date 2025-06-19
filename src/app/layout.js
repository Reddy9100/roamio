// app/layout.js
import './globals.css';
import { Inter, Roboto_Mono } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { CarsProvider } from '../context/cars';
import { Suspense } from 'react';
import LayoutClient from '../components/ui/LayoutClient';


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const roboto = Roboto_Mono({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  title: 'Money Mate',
  description: 'Track your monthly expenses easily with Money Mate',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body className="bg-gray-50">
        <CarsProvider>
          <Toaster />
          <Suspense fallback={<div>Loading layout...</div>}>
            <LayoutClient>{children}</LayoutClient>
          </Suspense>
        </CarsProvider>
      </body>
    </html>
  );
}
