'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function ConditionalFooter() {
  const pathname = usePathname();
  const hideFooter = ['/login', '/signup'].includes(pathname);

  if (hideFooter) {
    return null;
  }

  return <Footer />;
}