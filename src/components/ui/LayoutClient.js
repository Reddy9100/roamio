'use client';

import BottomNavBar from '@/src/app/components/Footer';
import NavBar from '@/src/app/components/NavBar';
import ProtectedRoute from '@/src/app/components/ProtectedRoute';
import { usePathname } from 'next/navigation';


export default function LayoutClient({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/Login';

  return (
    <>
      {!isLoginPage && <NavBar />}
      <ProtectedRoute><div className=''>{children}</div></ProtectedRoute>
      {!isLoginPage && <BottomNavBar />}
    </>
  );
}
