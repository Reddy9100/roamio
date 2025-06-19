// page.jsx
import { Suspense } from 'react';

import DashboardPage from './DashBoard/page';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading dashboard...</div>}>
      <DashboardPage />
    </Suspense>
  );
}
