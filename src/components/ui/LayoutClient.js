'use client';

import BottomNavBar from '@/src/app/components/Footer';
import NavBar from '@/src/app/components/NavBar';
import { usePathname } from 'next/navigation';


export default function LayoutClient({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/Login';

  return (
    <>
      {!isLoginPage && <NavBar />}
      <div className='pt-[100px]'>{children}</div>
      {!isLoginPage && <BottomNavBar />}
    </>
  );
}
